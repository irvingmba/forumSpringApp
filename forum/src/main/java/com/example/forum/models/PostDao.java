package com.example.forum.models;

import java.time.OffsetDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "POST", schema = "SYSTEM", catalog = "SYSTEM")
public class PostDao {

	@Id
	@Column(name = "post_id", length = 10, nullable = false)
	@GeneratedValue(generator = "post_generator")
	@GenericGenerator(name = "post_generator", strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator", parameters = {
			@Parameter(name = "sequence_name", value = "SYSTEM.post_seq") })
	private long post_id;

	@Column(name = "title", length = 60, nullable = false)
	private String title;

	@Column(name = "description", length = 1000, nullable = false)
	private String description;

	@Column(name = "p_date", columnDefinition = "TIMESTAMP WITH TIME ZONE")
	private OffsetDateTime p_date;

	@Column(name = "author", length = 50, nullable = false)
	private String author;

	@Column(name = "topic_id", length = 10)
	private long topicId;

	public PostDao(String title, String description, String author, long topicId) {
		this.title = title;
		this.description = description;
		this.author = author;
		this.p_date = OffsetDateTime.now();
		this.topicId = topicId;
	}

	public PostDao() {
		this.p_date = OffsetDateTime.now();
	}

	public void setP_date(OffsetDateTime p_date) {
		this.p_date = p_date;
	}

	public long getPost_id() {
		return post_id;
	}

	public void setPost_id(long post_id) {
		this.post_id = post_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public long getTopic() {
		return topicId;
	}

	public void setTopic(long topic) {
		this.topicId = topic;
	}

	public OffsetDateTime getP_date() {
		return p_date;
	}

}
