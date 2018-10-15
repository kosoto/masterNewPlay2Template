package com.play.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy
@Component
public class PageProxy implements Proxy{
	private Pagination pagination;

	@Override
	public void carryOut(Map<?, ?> param) {
		this.pagination=new Pagination();
		pagination.carryOut(param);
	}
}