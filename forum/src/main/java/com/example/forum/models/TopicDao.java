package com.example.forum.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TOPIC", schema = "SYSTEM", catalog = "SYSTEM")
public class TopicDao {

	@Id
	@Column(name = "topic_id", length = 10, nullable = false)
	@GeneratedValue(generator = "topic_generator")
	@GenericGenerator(name = "topic_generator", strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator", parameters = {
			@Parameter(name = "sequence_name", value = "SYSTEM.topic_seq") })
	private long topicId;

	@Column(name = "title", length = 60, nullable = false)
	private String title;

	@Column(name = "description", length = 1000, nullable = false)
	private String description;

	public TopicDao(String title, String description) {
		this.title = title;
		this.description = description;
	}

}
