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
@Table(name = "REPLIES", schema = "SYSTEM", catalog = "SYSTEM")
public class ReplyDao {

	@Id
	@Column(name = "reply_id", length = 10, nullable = false)
	@GeneratedValue(generator = "reply_generator")
	@GenericGenerator(name = "reply_generator", strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator", parameters = {
			@Parameter(name = "sequence_name", value = "SYSTEM.reply_seq") })
	private Long reply_id;

	@Column(name = "description", length = 1000, nullable = false)
	private String description;

	@Column(name = "r_date", columnDefinition = "TIMESTAMP WITH TIME ZONE")
	private OffsetDateTime r_date;

	@Column(name = "author", length = 50, nullable = false)
	private String author;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="post_id", nullable = false)
	private PostDao post;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="reply_to")
	private ReplyDao reply;
	
	public ReplyDao(String description, String author) {
		this.description = description;
		this.author = author;
		this.r_date = OffsetDateTime.now();
		this.post = null;
		this.reply = null;
	}
}
