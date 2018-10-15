package com.play.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Member {
	private String member_id, name, password, birthdate, joindate, gender, age, phone, customer_grade, point, nickname, address, zipcode;
}
