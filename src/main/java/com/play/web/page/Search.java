package com.play.web.page;

import java.util.HashMap;
import java.util.Map;

public class Search {
	public void test() {
		String pageNum = "pageNumber";
		Map<String,Object> param=new HashMap<>();
		PageProxy pxy = new PageProxy();
		param.put("pageNumber",(pageNum==null)?1:Integer.parseInt(pageNum));
		pxy.carryOut(param);
		Pagination page = pxy.getPagination();
		String[] arr1 = {"domain", "beginRow", "endRow"};
		/*String[] arr2 = {request.getServletPath()
				.split("/")[1]
				.split("\\.")[0],
			String.valueOf(page.getBeginRow()),
			String.valueOf(page.getEndRow()),
		};
		for(int i = 0; i < arr1.length; i++){
			param.put(arr1[i],arr2[i]);
		};*/
	}
}
