package com.play.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.play.web.cmm.Util2;
import com.play.web.img.Image;

@RestController
@RequestMapping("/member")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member mbr;
	@Autowired MemberMapper mbrMap;
	@Autowired Util2 util2;
	@Autowired HashMap<String,Object>map;
	
	@PostMapping("/join")
	public @ResponseBody void join(@RequestBody Member param) {
		logger.info("\n--------- MemberController {} !!-----","join()");
		param.setAge(util2.ageAndGender(param).getAge());
		param.setGender(util2.ageAndGender(param).getGender());
		param.setJoindate(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
		mbrMap.post(param);
	}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") Member user) {
		logger.info("\n--------- MemberController {} !!-----","modify()");
		mbrMap.put(user);
		return "retrieve";
	}
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute Member param,
			@ModelAttribute("user") Member user){
		logger.info("\n--------- MemberController {} !!-----","remove()");
		param.setMember_id((user.getMember_id()));
		mbrMap.delete(param);
		return "redirect:/";
	}
	
	@PostMapping("/auth")
	public @ResponseBody Map<String,Object> auth(
			@RequestBody Member pm){
		logger.info("\n--------- MemberController {} !!-----","auth()");
		map.clear();
		map.put("mbr", mbrMap.get(pm));
		logger.info("mbrMap.get(pm)" + mbrMap.get(pm));
		return map;
	}
	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(
			@RequestBody Member pm) {
		logger.info("\n--------- MemberController {} !!-----","login()");
		Map<String,Object> rm =  new HashMap<>();
		String pwValid = "WRONG";
		String idValid ="WRONG";
		if(mbrMap.count(pm)!=0) {
			idValid ="CORRECT";
			Function<Member,Member> f = (t)->{
				return mbrMap.get(t);
			};
			mbr = f.apply(pm);
			System.out.println(mbr);
			pwValid = (mbr != null) ?"CORRECT":"WRONG";
			mbr = (mbr != null)?mbr:new Member();
		}
		rm.put("id_valid",idValid);
		rm.put("pw_valid", pwValid);
		rm.put("mbr", mbr);
		return rm;
	}
	
	@PostMapping("/fileUpload")
	public @ResponseBody Map<String,Object> login(
			@RequestBody Image img) {
		logger.info("\n--------- MemberController {} !!-----","fileUpload()");
		logger.info("img " + img);
		Map<String,Object> rm =  new HashMap<>();
		rm.put("img", img);
		return rm;
	 }
}
