package com.play.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Member {
	private String member_id, name, password, birthdate, joindate, gender, age, phone, customer_grade, point, nickname, address, zipcode, profileimg;
	
	public String tostar() {
		return String.format("('%s','%s','%s','%s','%s','181010','%s','%s','%s','%s'),", 
				member_id, name, password, birthdate, gender, age, phone, nickname, address);
	}
}

