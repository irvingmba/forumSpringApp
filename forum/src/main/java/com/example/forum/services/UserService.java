package com.example.forum.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.forum.exception.CustomException;
import com.example.forum.models.Role;
import com.example.forum.models.UserDao;
import com.example.forum.repos.UserDaoRepo;
import com.example.forum.security.JwtTokenProvider;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserDaoRepo userDbRepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	JwtTokenProvider jwtTokenProvider;

	public UserService() {

	};

	public boolean isUsernameInRepo(String username) {
		return userDbRepo.findOneByUsername(username) != null;
	}

	public boolean isEmailAvailable(String email) {
		return userDbRepo.findOneByEmail(email) != null;
	}

	public UserDao createUserDao(String username, String email, String password) {
		return new UserDao(username, email, encrypt(password));
	}

	public boolean save(String username, String email, String password) { 
		return userDbRepo.save(createUserDao(username, email, password)) != null;
	}
	public boolean save(UserDao user) {
		return userDbRepo.save(user) != null;
	}
	
	public UserDao getUserByUsername(String username) {
		return userDbRepo.findOneByUsername(username);
	}
	
	public UserDao getUserByEmail(String email) {
		return userDbRepo.findOneByEmail(email);
	}
	
	public String encrypt(String plainText) {
		return encoder.encode(plainText);
	}
	
	public String signin(String username, String password) {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			List<Role> roleList = new ArrayList();
			roleList.add(Role.ROLE_CLIENT);
			return jwtTokenProvider.createToken(username, roleList);
		} catch (AuthenticationException e) {
			throw new CustomException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
}
