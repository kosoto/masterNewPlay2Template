package com.play.web.img;

import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Data
public class Image {
	private String imgSeq;
	private String imgName;
	private String extension;
	private String userid;
	private String formData;
}