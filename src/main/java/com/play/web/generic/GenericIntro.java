package com.play.web.generic;

import java.util.Arrays;
import java.util.List;

/**
 Generic 타입을 생성하는데
 class Member{} -> static 상태로 Member 라는 타입을 생성
 List<Member>
 <-> Dynamic한 타입생성
  왜쓸까?
 장점 - 타입의 안정성 제공, 형변환 생략...
 * */
public class GenericIntro {
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		System.out.println("======[1]======");
		Item<String> itName = new Item<>();
		itName.setOne("갤노트");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(9);
		System.out.println("삼성 신상온 이름은 :: \n"+itName.getOne()+itVers.getOne());
		System.out.println("======[2]======");
		Item<List<String>> it = new Item<>();
		it.setSome(Arrays.asList(new String[] {"Hello ","World ","Generic "}));
		System.out.println(it.getSome());
		System.out.println("=================3=================");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Apple> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));		
	}
}
