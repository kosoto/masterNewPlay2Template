package com.play.web.point;


import java.util.Map;

import org.springframework.stereotype.Repository;


@Repository
public interface PointMapper {
  public void update(Map<?,?>m);
  public void delete(Map<?,?>m);
}
