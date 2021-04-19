package com.example.forum.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.forum.services.UserService;

public class EmailAvailableValidator implements ConstraintValidator<EmailAvailableConstraint, String> {

	@Autowired
	private UserService userService;
	
	@Override
	public boolean isValid(String email, ConstraintValidatorContext ctx) {
		return !userService.isEmailAvailable(email);
	}

}
