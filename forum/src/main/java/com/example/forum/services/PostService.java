package com.example.forum.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.forum.models.PostDao;
import com.example.forum.models.TopicDao;
import com.example.forum.repos.PostDaoRepo;

@Service
public class PostService {

	@Autowired
	private PostDaoRepo postDaoRepo;

	public PostService() {

	}

	public List<PostDao> getTopicPosts(long topicId) {
		List<PostDao> list = postDaoRepo.findByTopicId(topicId);
		return list;
	}
	
	public PostDao createPost(String title, String description, String author, long topicId) {
		return new PostDao(title, description, author, topicId);
	}
	
	public PostDao savePost(PostDao post) {
		return postDaoRepo.save(post);
	}

//	public PostDao getPost(long id) {
//		Optional<PostDao> post = postDaoRepo.findById(id);
//		return post.isPresent() ? post.get() : null;
//	}

//	public PostDao createPost(String title, String description, String author, TopicDao topic) {
//		PostDao post = new PostDao(title, description, author);
//		post.setTopic(topic);
//		return post;
//	}

}
