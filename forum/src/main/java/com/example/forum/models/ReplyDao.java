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
	private Long replyId;

	@Column(name = "description", length = 1000, nullable = false)
	private String description;

	@Column(name = "r_date", columnDefinition = "TIMESTAMP WITH TIME ZONE")
	private OffsetDateTime r_date;

	@Column(name = "author", length = 50, nullable = false)
	private String author;

	@Column(name = "post_id", length = 10, nullable = false)
	private long postId;
	
	@Column(name = "reply_to", length = 10)
	private Long replyTo;
	
	public ReplyDao(String description, String author, long postId) {
		this.description = description;
		this.author = author;
		this.r_date = OffsetDateTime.now();
		this.postId = postId;
	}
	public ReplyDao() {
		
	}
	public Long getReplyId() {
		return replyId;
	}
	public void setReplyId(Long replyId) {
		this.replyId = replyId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public OffsetDateTime getR_date() {
		return r_date;
	}
	public void setR_date(OffsetDateTime r_date) {
		this.r_date = r_date;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public long getPostId() {
		return postId;
	}
	public void setPostId(long postId) {
		this.postId = postId;
	}
	public Long getReplyTo() {
		return replyTo;
	}
	public void setReplyTo(long replyTo) {
		this.replyTo = replyTo;
	}
	
	
}
