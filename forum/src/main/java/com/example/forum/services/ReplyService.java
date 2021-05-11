package com.example.forum.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.forum.models.ReplyDao;
import com.example.forum.repos.ReplyDaoRepo;

@Service
public class ReplyService {

	@Autowired
	private ReplyDaoRepo replyDaoRepo;

	public ReplyService() {

	}

	public List<ReplyDao> getRepliesByPost(long postId) {
		return replyDaoRepo.findByPostId(postId);
	}

	public ReplyDao createReply(String description, String author, long postId) {
		return new ReplyDao(description, author, postId);
	}
	
	public ReplyDao saveReply(ReplyDao reply) {
		return replyDaoRepo.save(reply);
	}
}
