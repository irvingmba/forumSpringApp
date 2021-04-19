package com.example.forum.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.forum.models.UserDao;
import com.example.forum.repos.UserDaoRepo;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserDaoRepo userDbRepo;
	
//	@Autowired
//	private PasswordEncoder encoder;

	public UserService() {

	};

	public boolean isUsernameInRepo(String username) {
		return userDbRepo.findOneByUsername(username) != null;
	}

	public boolean isEmailAvailable(String email) {
		return userDbRepo.findOneByEmail(email) != null;
	}

	public UserDao createUserDao(String username, String email, String password) {
//		String encoded = encoder.encode(password);
		return new UserDao(username, email, password);
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
}
