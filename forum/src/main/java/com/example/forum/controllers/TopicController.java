package com.example.forum.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.forum.models.PostDao;
import com.example.forum.models.ReplyDao;
import com.example.forum.models.TopicDao;
import com.example.forum.services.PostService;
import com.example.forum.services.ReplyService;
import com.example.forum.services.TopicService;
import com.example.forum.validators.ClientComment;
import com.example.forum.validators.ClientPost;
import com.example.forum.validators.CommonReq;

@RestController
public class TopicController {

	private final String topicPrefix = "/topic";
	private final String postLtnr = "/posts";
	private final String commentLtnr = "/comment";
	private final String postDest = topicPrefix + postLtnr;
	private final String createPost = topicPrefix + "new";
	private final String createComment = topicPrefix + "new";

	@Autowired
	private TopicService topicService;
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private ReplyService replyService;
	
	@MessageMapping(postLtnr)
	@SendTo(createPost)
	public PostDao createPost(@RequestBody ClientPost clientPost) {
		PostDao post = postService.createPost(clientPost.getTitle(), clientPost.getDescription(), clientPost.getAuthor(), clientPost.getTopicId());
		return postService.savePost(post);
	}
	
	@MessageMapping(commentLtnr)
	@SendTo(createComment)
	public ReplyDao createComment(@RequestBody ClientComment clientComment) {
		ReplyDao reply = replyService.createReply(clientComment.getDescription(), clientComment.getAuthor(), clientComment.getPostId());
		return replyService.saveReply(reply);
	}

	@PostMapping(topicPrefix)
	public List<TopicDao> getTopics(@RequestBody CommonReq clientReq) {
		switch (clientReq.getMsg()) {
		case "topics": {
			return topicService.getAllTopics();
		}
		default: {
			return null;
		}
		}
	}

}
