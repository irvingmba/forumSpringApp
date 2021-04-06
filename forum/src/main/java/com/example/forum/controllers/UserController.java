package com.example.forum.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	private final String SIGNUP_CREATE = "/signup/create";
	
	@PostMapping(SIGNUP_CREATE)
	public String createUser(@RequestBody String name) {
		return "create user service";
	}

}
