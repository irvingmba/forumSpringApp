package com.example.forum.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.forum.models.TopicDao;
import com.example.forum.repos.TopicDaoRepo;

@Service
public class TopicService {
	
	@Autowired
	private TopicDaoRepo topicDaoRepo;

	public TopicService() {
		
	}
	
	public List<TopicDao> getAllTopics(){
		return topicDaoRepo.findAll();
	}
	
}
