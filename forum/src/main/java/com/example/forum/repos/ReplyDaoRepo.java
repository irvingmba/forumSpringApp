package com.example.forum.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.forum.models.ReplyDao;

public interface ReplyDaoRepo extends JpaRepository<ReplyDao, Long> {

	
}
