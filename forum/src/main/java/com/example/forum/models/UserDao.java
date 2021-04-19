package com.example.forum.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "USERS", schema = "SYSTEM", catalog = "SYSTEM")
public class UserDao {

	@Id
	@Column(name = "user_id", length = 10, nullable = false)
	@GeneratedValue(generator = "user_generator")
	@GenericGenerator(name = "user_generator", strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator", parameters = {
			@Parameter(name = "sequence_name", value = "SYSTEM.user_seq") })
	private Long user_id;

	@Column(name = "username", length = 50, nullable = false, unique = true)
	private String username;

	@Column(name = "email", length = 254, nullable = false, unique = true)
	private String email;

	@Column(name = "password", length = 300)
	private String password;

	public UserDao(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public UserDao() {

	};

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
