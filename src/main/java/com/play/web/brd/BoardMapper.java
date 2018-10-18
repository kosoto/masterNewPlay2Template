package com.play.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.play.web.cmm.Criteria;
import com.play.web.cmm.SearchCriteria;
import com.play.web.page.Pagination;

@Repository
public interface BoardMapper {
	public void write(Board vo);
	public List<Board> list(Map<String,Object>map);
	public Board read(Board vo);
	public void modify(Board vo);
	public void delete(Board vo);
	
	public List<Board> reply(Board vo);
	public void reWrite(Board vo);
	public void reModify(Board vo);
	public void reDelete(Board vo);
	public int count();
	
	public void readInc(Board vo);
	public void likeInc(int seq);
	public void likeDes(int seq);
  
	public void room(Board vo);
}
