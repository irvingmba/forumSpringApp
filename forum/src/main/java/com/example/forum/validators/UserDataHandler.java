package com.example.forum.validators;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.forum.services.UserService;

public class UserDataHandler {

	@Autowired
	private UserService userService;

	@Size(max = 50, message = "Username too large")
	@NotBlank(message = "Username is blank")
	@UsernameAvailableConstraint
	private String username;

	@Email(message = "Email is not valid")
	@EmailAvailableConstraint
	private String email;

	@Size(min = 6, max = 100, message = "Password with unappropiate size")
	private String password;

	public UserDataHandler(String username, String email, String password) {

		this.username = username;
		this.email = email;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public boolean isUsernameUsed() {
		System.out.println(userService.toString());
		System.out.println(getUsername());
		return userService.isUsernameInRepo(getUsername());
	}

}
