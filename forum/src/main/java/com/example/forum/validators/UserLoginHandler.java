package com.example.forum.validators;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserLoginHandler {

	@Size(max = 50, message = "Username too large")
	@NotBlank(message = "Username is blank")
	private String username;

	@Size(min = 6, max = 100, message = "Password with unappropiate size")
	private String password;

	public UserLoginHandler(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
}
