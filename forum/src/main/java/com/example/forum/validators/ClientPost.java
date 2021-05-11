package com.example.forum.validators;

public class ClientPost {
	
	private String title;
	private String description;
	private String author;
	private long topicId;
	
	public ClientPost(String title, String description, String author, long topicId) {
		this.title = title;
		this.description = description;
		this.author = author;
		this.topicId = topicId;
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

	public long getTopicId() {
		return topicId;
	}

	public void setTopicId(long topicId) {
		this.topicId = topicId;
	}
	
	

}
