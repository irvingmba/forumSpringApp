package com.example.forum.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.forum.models.UserDao;

@Repository
@Transactional(readOnly = true)
public interface UserDaoRepo extends JpaRepository<UserDao, Long> {

	UserDao findOneByUsername(String username);

	UserDao findOneByEmail(String email);
}
