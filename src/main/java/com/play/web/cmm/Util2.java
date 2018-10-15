package com.play.web.cmm;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;
import org.springframework.stereotype.Component;

import com.play.web.mbr.Member;
@Component
public class Util2 {
	public Member ageAndGender(Member mbr) {
		Function<Member,Member> f = m->{
		String age =String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date()))-(Integer.parseInt(mbr.getBirthdate().substring(0, 2))+1900-1));
		String gender ="";
		switch (m.getBirthdate().split("-")[1]) {
			case "1":case "3":
				gender = "남";
				break;
			case "2":case "4":
				gender = "여";
				break;
			case "5":case "6":
				gender = "외국인";
				break;
			default:
				break;
		}
			m.setAge(age);
			m.setGender(gender);
			return m;
		};
		return f.apply(mbr);
	}
}
