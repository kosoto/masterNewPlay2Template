package com.play.web.brd;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.play.web.cmm.Util;
import com.play.web.cmm.Util2;
import com.play.web.page.Pagination;
import com.play.web.tx.TxService;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Util2 util2;
	@Autowired Board brd;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@Autowired TxService tx;
	@Autowired Map<String,Object> map;
	@Resource(name="uploadPath")
	private String uploadPath;
	@PostMapping("/cast/")
	public @ResponseBody Map<String,Object> list(@RequestBody Map<String,Object>cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","list");
		map.clear();
		Util.log.accept(cast.get("pageNumber")+"");
		map.put("pageNumber",Integer.parseInt((String) cast.get("pageNumber")));
		map.put("countRow",brdMap.count());
		page.carryOut(map);
		Util.log.accept(page+"");
		map.clear();
		map.put("beginRow", page.getBeginRow());
		map.put("endRow", page.getEndRow());
		map.put("board_id", cast.get("board_id"));
		List<Board> ls = brdMap.list(map);
		map.put("list", ls);
		map.put("page", page);
		return map;
	}
	@GetMapping("/cast/read/{seq}")
	public Board read(@PathVariable int seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","read()");
		brd.setMsg_seq(seq);
		brdMap.readInc(brd);
		return brdMap.read(brd);
	}
	
	@GetMapping("/cast/reply/{board_id}/{seq}")
	public Map<String,Object> replyRead(@PathVariable String board_id, @PathVariable int seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyRead()");
		brd = new Board();
		brd.setBoard_depth(seq);
		brd.setBoard_id(board_id);
		List<Board> ls = brdMap.reply(brd);
		map.clear();
		map.put("list", ls);
		return map;
	}
	
	@PostMapping("/cast/reWrite/")
	public @ResponseBody void reWrite(@RequestBody Board cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyWrite()");
		cast.setMsg_date(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
		brdMap.reWrite(cast);;
	}
	
	@GetMapping("/cast/reDelete/{board_id}/{board_depth}/{msg_seq}")
	public void reDelete(@PathVariable int board_depth, @PathVariable String board_id, @PathVariable int msg_seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyDelete()");
		brd.setBoard_depth(board_depth);
		brd.setBoard_id(board_id);
		brd.setMsg_seq(msg_seq);
		brdMap.reDelete(brd);;
	}
	
	@PostMapping("/cast/write/")
	public @ResponseBody void write(@RequestBody Board cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","write()");
		cast.setMsg_date(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
		cast.setMember_id("A1");
		cast.setMsg_photo("cast_1.jpg");
		brdMap.write(cast);;
	}
	
	@GetMapping("/cast/delete/{board_id}/{msg_seq}")
	public void delete(@PathVariable String board_id, @PathVariable int msg_seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyDelete()");
		brd.setBoard_id(board_id);
		brd.setMsg_seq(msg_seq);
		brdMap.delete(brd);;
	}
}
