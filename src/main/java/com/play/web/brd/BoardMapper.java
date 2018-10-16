package com.play.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.play.web.cmm.Criteria;
import com.play.web.cmm.SearchCriteria;
import com.play.web.page.Pagination;

@Repository
public interface BoardMapper {
  public void create(Board vo);
  public void write(Board vo);
  public Board read(Board vo);
  public List<Board> reply(Board vo);
  public void reWrite(Board vo);
  public void reDelete(Board vo);
  public void readInc(Board vo);
  public void update(Board vo);
  public void delete(Board vo);
  public List<Board> list(Map<String,Object>map);
  public List<Board> listRetrieve(Map<String,Object>map);
  public List<Board> listPage(int page);
  public List<Board> listCriteria(Criteria cri);
  public int countPaging(Criteria cri);
  public int count();
  public int countRetrieve(Board vo);
  
  //use for dynamic sql
  public List<Board> listSearch(SearchCriteria cri);
  public int listSearchCount(SearchCriteria cri);
  public void updateReplyCnt(Integer bno, int amount);
  public void updateViewCnt(Integer bno);
  public void addAttach(String fullName);
  public List<String> getAttach(Integer bno);  
  public void deleteAttach(Integer bno);
  public void replaceAttach(String fullName, Integer bno);
  
}
