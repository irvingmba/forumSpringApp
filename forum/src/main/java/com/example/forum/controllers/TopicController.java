package com.example.forum.controllers;

import java.util.HashMap;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {
	
	private final String topicPrefix = "/topic";
	private final String postLtnr = "/posts";
	private final String postDest = topicPrefix+postLtnr;
	
	@MessageMapping(postLtnr)
	@SendTo(postDest)
	public HashMap<String, String> getTopicPosts() {
		System.out.println("Here");
		HashMap<String, String> resp = new HashMap<String, String>();
		resp.put("hello", "world");
		return resp;
	}

}
