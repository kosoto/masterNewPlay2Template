package com.play.web.brd;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
	

	@PostMapping("/cast/write/")
	public @ResponseBody void write(@RequestBody Board cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","write()");
		cast.setMember_id("A3");
		cast.setMsg_photo("cast_3.jpg");
		brdMap.write(cast);;
	}
	
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
	
	@PostMapping("/cast/modify/")
	public @ResponseBody void modify(@RequestBody Board cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","modify()");
		Util.log.accept(cast+"");
		brdMap.modify(cast);;
	}
	
	@GetMapping("/cast/delete/{board_id}/{msg_seq}")
	public void delete(@PathVariable String board_id, @PathVariable int msg_seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyDelete()");
		brd.setBoard_id(board_id);
		brd.setMsg_seq(msg_seq);
		brdMap.delete(brd);;
	}

	@PostMapping("/cast/reWrite/")
	public @ResponseBody void reWrite(@RequestBody Board cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyWrite()");
		brdMap.reWrite(cast);;
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
	
	@PostMapping("/cast/reModify/")
	public @ResponseBody void reModify(@RequestBody Board cast){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyModify()");
		brdMap.reModify(cast);;
	}
	
	
	@GetMapping("/cast/reDelete/{board_id}/{board_depth}/{msg_seq}")
	public void reDelete(@PathVariable int board_depth, @PathVariable String board_id, @PathVariable int msg_seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","replyDelete()");
		brd.setBoard_depth(board_depth);
		brd.setBoard_id(board_id);
		brd.setMsg_seq(msg_seq);
		brdMap.reDelete(brd);;
	}
	
	@GetMapping("/cast/likeInc/{msg_seq}")
	public void likeInc(@PathVariable int msg_seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","likeInc()");
		brdMap.likeInc(msg_seq);
	}
	
	@GetMapping("/cast/likeDes/{msg_seq}")
	public void likeDes(@PathVariable int msg_seq){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","likeDes()");
		brdMap.likeDes(msg_seq);
	}
	
	
	@GetMapping("/room/")
	public void room(){
		logger.info("\n BoardCtrl :::::::::: {} !!-----","room()");
		String[] room_no = {"101","102","103","104","105"
								,"201","202","203","204","205"
								,"301","302","303","304","305"};
		String[] room_name =  {"스탠다드 트윈","스탠다드 더블","트리플","패밀리","패밀리 트윈"
				,"디럭스A","디럭스B","프리미엄A","프리미엄B","로열프리미엄"
				,"슈페리어","슈페리어 트윈","슈페리어 트리플","VIP","VVIP"};
		for(int i=1;i<=519;i++) {
			for(int j=0;j<15;j++) {
				brd.setAccom_seq(i);
				brd.setRoom_name(room_name[j]);
				brd.setRoom_no(room_no[j]);
				brd.setRoom_price((int)Math.round(Math.random()*150+30)*1000);
				brdMap.room(brd);
			}
		}
	}
	
}
