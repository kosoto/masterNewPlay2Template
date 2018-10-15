package com.play.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;
@Data @Lazy
@Component
public class Pagination implements Proxy {
	int countRow, pageNumber,beginRow, endRow, pageSize, blockSize, pageCount, blockCount, beginPage, endPage, prevBlock, nextBlock, lastBlockPage;
	boolean existPrev, existNext;

	@Override
	public void carryOut(Map<?,?> param) {
		this.pageNumber = (int) param.get("pageNumber");
		this.countRow =(int) param.get("countRow");
		this.pageSize=8;
		this.blockSize=1;
		this.beginRow = pageNumber*pageSize-(pageSize-1);
		this.endRow = pageNumber*pageSize;
		this.pageCount = countRow%pageSize==0?countRow/pageSize:countRow/pageSize+1;
		this.blockCount = pageCount%blockSize==0?pageCount/blockSize:pageCount/blockSize+1;
		this.beginPage= pageNumber-((pageNumber-1)%blockSize);
		this.lastBlockPage=pageCount-((pageCount-1)%blockSize);
		this.endPage=((lastBlockPage+pageSize)>pageNumber&&pageNumber>=lastBlockPage)?pageCount:beginPage+(blockSize-1);
		this.prevBlock = beginPage - blockSize;
		this.nextBlock = beginPage + blockSize;
		this.existPrev=(prevBlock>=0);
		this.existNext=(nextBlock<=pageCount);
	}
}