package com.example.forum.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.forum.models.ReplyDao;

public interface ReplyDaoRepo extends JpaRepository<ReplyDao, Long> {

	List<ReplyDao> findByPostId(long postId);
}
