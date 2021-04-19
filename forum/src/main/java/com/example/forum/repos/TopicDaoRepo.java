package com.example.forum.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.forum.models.TopicDao;

public interface TopicDaoRepo extends JpaRepository<TopicDao, Long> {

}
