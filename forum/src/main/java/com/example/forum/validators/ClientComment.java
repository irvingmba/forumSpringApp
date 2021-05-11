package com.example.forum.validators;

public class ClientComment {
	
	private String description;
	private String author;
	private long postId;
	private long replyTo;
	
	public ClientComment(String description, String author, long postId, long replyTo) {
		this.description = description;
		this.author = author;
		this.postId = postId;
		this.replyTo = replyTo;
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

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public long getReplyTo() {
		return replyTo;
	}

	public void setReplyTo(long replyTo) {
		this.replyTo = replyTo;
	}
	
	

}
