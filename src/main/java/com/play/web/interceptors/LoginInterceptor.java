/*package com.play.web.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.play.web.mbr.Member;
import com.play.web.mbr.MemberMapper;

@Aspect
public class LoginInterceptor extends HandlerInterceptorAdapter {
  private static final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
  @Autowired Member mbr;
  @Autowired MemberMapper mbrmap;
  
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    logger.info("인터셉터 성공!!");
    boolean result = false;
    String webRoot = request.getContextPath();
    try {
    	String id = (String) request.getSession().getAttribute("userid");
    	if (id == null) {
    	    if(isAjaxRequest(request)) {
    	    	logger.info("인터셉터1 !!");
    	    	response.sendError(400);
    	    	return false;
	    	    }  else {
	    	    	logger.info("인터셉터2 !!");
	    	    	HttpSession session = request.getSession();
	    	    	session.setAttribute("userid","A1");
	    	    	response.sendRedirect(webRoot+"/member/auth");
	    	    	result = false;
	    	    }
    	    }else {
    	    	result = true;
    	    }
    }catch(Exception e) {
    	e.printStackTrace();
    	System.out.println(e.getMessage());
    	return false;
    }
    return result;
  }
}*/