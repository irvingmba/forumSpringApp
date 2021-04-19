package com.example.forum.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.forum.services.UserService;

public class UsernameAvailableValidator implements ConstraintValidator<UsernameAvailableConstraint, String> {
	
	@Autowired
	private UserService userService;

	@Override
	public boolean isValid(String username, ConstraintValidatorContext ctx) {
		return !userService.isUsernameInRepo(username);
	}

}
