package com.play.web.brd;

import java.util.List;

import org.springframework.stereotype.Service;

import com.play.web.cmm.Criteria;
import com.play.web.cmm.SearchCriteria;

@Service
public interface BoardService {

  public void regist(Board board) throws Exception;

  public Board read(Integer bno) throws Exception;

  public void modify(Board board) throws Exception;

  public void remove(Integer bno) throws Exception;

  public List<Board> listAll() throws Exception;

  public List<Board> listCriteria(Criteria cri) throws Exception;

  public int listCountCriteria(Criteria cri) throws Exception;

  public List<Board> listSearchCriteria(SearchCriteria cri) 
      throws Exception;

  public int listSearchCount(SearchCriteria cri) throws Exception;
  
  
  public List<String> getAttach(Integer bno)throws Exception;
  

}
