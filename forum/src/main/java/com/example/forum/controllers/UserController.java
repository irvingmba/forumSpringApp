package com.example.forum.controllers;

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
	public ResponseEntity<String> createUser(@Valid @RequestBody UserDataHandler user) {
		userService.save(user.getUsername(), user.getEmail(), user.getPassword());
		return ResponseEntity.ok("User created");
	}
	
	@PostMapping(signInRoute)
	public ResponseEntity<String> signin(@Valid @RequestBody UserLoginHandler user) {
		if(userService.getUserByUsername(user.getUsername()) == null) return ResponseEntity.badRequest().body("Not exist");
		return ResponseEntity.ok("User logged in");
	}

	public String getSignUpRoute() {
		return signUpRoute;
	}

	public String getSignInRoute() {
		return signInRoute;
	}


}
