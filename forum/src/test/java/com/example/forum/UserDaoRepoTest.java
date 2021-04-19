package com.example.forum;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.forum.models.UserDao;
import com.example.forum.repos.UserDaoRepo;

@SpringBootTest
public class UserDaoRepoTest {

	@Autowired
	private UserDaoRepo userDaoRepo;

	@Test
	@Transactional
	public void testFindByUsername() {
		UserDao user = userDaoRepo.findOneByUsername("user1");
	}

	@Test
	@Transactional
	public void testFindByEmail() {
		UserDao user = userDaoRepo.findOneByUsername("example@example.com");
	}
}
