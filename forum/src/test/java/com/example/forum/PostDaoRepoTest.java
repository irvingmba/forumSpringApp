package com.example.forum;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.forum.models.PostDao;
import com.example.forum.repos.PostDaoRepo;

@SpringBootTest
public class PostDaoRepoTest {
	
	@Autowired
	private PostDaoRepo postDaoRepo;
	
	@Test
	@Transactional
	public void testFindAllByTopicId() {
		List<PostDao> list = postDaoRepo.findByTopicId(1);
	}

}
