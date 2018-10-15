package com.play.web.algo;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.play.web.cmm.Util;


@RestController
@RequestMapping("/algo")
public class AlgoCtrl {
	static final Logger logger = LoggerFactory.getLogger(AlgoCtrl.class);
	@GetMapping("/money/{money}")  //get방식
	public void money(@PathVariable String money) {
		Util.log.accept("넘어온 화폐 값 : "+money);
	}
	@PostMapping("/money/")  //post방식
	public @ResponseBody Map<String,Object> money2(@RequestBody Map<String,Object> map) {
		Map<String,Object>rmap = new HashMap<>();
		Util.log.accept("넘어온 화폐 값 : "+map.get("money"));
		rmap.put("test", "추카추카!");
		return rmap;
	}
}
