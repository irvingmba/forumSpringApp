package com.example.forum.security;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.forum.models.Role;
import com.example.forum.models.UserDao;
import com.example.forum.services.UserService;

@Service
public class JwtUserDetails implements UserDetailsService {
	
	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDao dbUser = userService.getUserByUsername(username);
		if(dbUser == null) throw new UsernameNotFoundException("User not found");
		GrantedAuthority role = Role.ROLE_CLIENT;
		Collection<GrantedAuthority> roleList = new ArrayList<GrantedAuthority>();
		roleList.add(role);
		final User user = new User(dbUser.getUsername(), dbUser.getPassword(), true, true, true, true, roleList);
		return user;
	}

}
