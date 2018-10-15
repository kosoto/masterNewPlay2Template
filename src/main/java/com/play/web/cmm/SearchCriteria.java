package com.play.web.cmm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.play.web.mbr.Member;

import lombok.Data;

@Component
@Data @Lazy
public class SearchCriteria extends Criteria{

	private String searchType;
	private String keyword;
	
}


