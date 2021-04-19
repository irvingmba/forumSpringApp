package com.example.forum.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.forum.models.PostDao;
import com.example.forum.repos.PostDaoRepo;

@Service
public class PostService {
	
	@Autowired
	private PostDaoRepo postDaoRepo;
	
	public PostService() {
		
	}
	
	public List<PostDao> getTopicPosts(Long topicId){
		return postDaoRepo.findByTopicTopicId(topicId);
	}

}
