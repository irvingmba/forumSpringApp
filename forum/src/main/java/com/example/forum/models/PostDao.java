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
	
	@Column(name="author", length = 50, nullable = false)
	private String author;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="topic_id")
	private TopicDao topic;

	public PostDao(String title, String description, String author) {
		this.title = title;
		this.description = description;
		this.author = author;
		this.p_date = OffsetDateTime.now();
		this.topic = null;
	}

	public void setP_date(OffsetDateTime p_date) {
		this.p_date = p_date;
	}

	public void setTopic(TopicDao topic) {
		this.topic = topic;
	}
	
	
}
