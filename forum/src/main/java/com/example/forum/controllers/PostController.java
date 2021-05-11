package com.example.forum.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.forum.models.PostDao;
import com.example.forum.models.ReplyDao;
import com.example.forum.models.TopicDao;
import com.example.forum.services.PostService;
import com.example.forum.services.ReplyService;
import com.example.forum.services.TopicService;
import com.example.forum.validators.CommonReq;

@RestController
public class PostController {

	private final String postPre = "/post";
	private final String getPostsRoute = postPre + "/get";
	private final String getCommentsRoute = postPre + "/comments";

	@Autowired
	private PostService postService;

	@Autowired
	private TopicService topicService;
	
	@Autowired
	private ReplyService replyService;

	@PostMapping(getPostsRoute)
	public List<PostDao> getPostsByTopic(@RequestBody CommonReq reqClient) {
		switch (reqClient.getType()) {
		case "getPosts": {
			long id = Long.parseLong(reqClient.getMsg());
			List<PostDao> posts = postService.getTopicPosts(id);
			return posts;
		}
		default:
			return null;
		}
	}
	
	@PostMapping(getCommentsRoute)
	public List<ReplyDao> getCommentsByPost(@RequestBody CommonReq reqClient){
		switch(reqClient.getType()) {
		case "getComments":{
			long id = Long.parseLong(reqClient.getMsg());
			return replyService.getRepliesByPost(id);
		}
		default: return null;	
		}
	}

}
