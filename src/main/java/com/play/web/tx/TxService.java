package com.play.web.tx;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.play.web.brd.Board;
import com.play.web.brd.BoardMapper;
import com.play.web.cmm.Util;
import com.play.web.point.PointMapper;

@Service
public class TxService {
	@Autowired BoardMapper brdMapper;
	@Autowired Board brd;
	@Autowired PointMapper poMapper;
	@Autowired HashMap<String,Object> map;
	@Transactional
	public Map<?,?> write(Map<?,?> p){
		map.clear();
		brdMapper.create((Board) p.get("brd"));
		poMapper.update(p);
		map.clear();
		map.put("brd", brdMapper);
		return map;
	}
	@Transactional
	public Map<?,?> delete(Map<?,?> p){
		map.clear();
		Util.log.accept(p.get("bno")+"/"+p.get("userid"));
		brdMapper.delete(Integer.parseInt(p.get("bno").toString()));
		poMapper.delete(p);
		map.clear();
		return map;
	}
}
