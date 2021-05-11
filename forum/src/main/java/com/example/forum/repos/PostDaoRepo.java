package com.example.forum.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.forum.models.PostDao;

public interface PostDaoRepo extends JpaRepository<PostDao, Long> {

	List<PostDao> findByTopicId(long topicId);
	
//	List<PostDao> findAllByTopicTopicId(long topic_id);
}
