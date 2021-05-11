package com.example.forum.services;

import java.util.List;
import java.util.Optional;

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
	
	public TopicDao getTopic(Long id) {
		Optional<TopicDao> topic = topicDaoRepo.findById(id);
		return topic.isPresent() ? topic.get() : null;
	}
	
}
