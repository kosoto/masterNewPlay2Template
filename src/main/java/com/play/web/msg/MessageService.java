package com.play.web.msg;

import org.springframework.stereotype.Service;

@Service
public interface MessageService {

  public void addMessage(Message vo) throws Exception;

  public Message readMessage(String uid, Integer mno) throws Exception;
}
