package com.example.forum.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.forum.services.UserService;

import com.example.forum.validators.UserDataHandler;
import com.example.forum.validators.UserLoginHandler;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	private final String signUpRoute = "/signup/create";
	private final String signInRoute = "/signin/login";

	@PostMapping(signUpRoute)
	public ResponseEntity<Map<String, String>> createUser(@Valid @RequestBody UserDataHandler user) {
		userService.save(user.getUsername(), user.getEmail(), user.getPassword());
		Map<String, String> resp = new HashMap<String, String>();
		resp.put("signup", "ok");
		return ResponseEntity.ok(resp);
	}
	
	@PostMapping(signInRoute)
	public ResponseEntity<Map<String, String>> signin(@Valid @RequestBody UserLoginHandler user) {
		Map<String, String> resp = new HashMap<String, String>();
		
		if(userService.getUserByUsername(user.getUsername()) == null) {
			resp.put("error", "User not found");
			return ResponseEntity.badRequest().body(resp);
		}
		String token = userService.signin(user.getUsername(), user.getPassword());
		resp.put("signin", "ok");
		resp.put("token", token);
		return ResponseEntity.ok(resp);	}

	public String getSignUpRoute() {
		return signUpRoute;
	}

	public String getSignInRoute() {
		return signInRoute;
	}


}
