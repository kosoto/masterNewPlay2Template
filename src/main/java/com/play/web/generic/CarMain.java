package com.play.web.generic;
import java.util.Collections;

public class CarMain {
	public static void main(String[] args) {
		CarBox<BMW> bbox= new CarBox<BMW>();
		CarBox<Avante> abox = new CarBox<>();
		CarBox<Sonata> sbox = new CarBox<>();
		CarBox<Genesis> gbox = new CarBox<>();
		CarBox<Car> cbox = new CarBox<>();
		abox.add(new Avante("아반떼a", 1500));
		abox.add(new Avante("아반떼b", 1800));
		abox.add(new Avante("아반떼c", 2000));
		bbox.add(new BMW("bmwa", 1900));
		bbox.add(new BMW("bmwb", 2500));
		bbox.add(new BMW("bmwc", 4000));
		sbox.add(new Sonata("소나타a", 1800));
		sbox.add(new Sonata("소나타b", 2100));
		sbox.add(new Sonata("소나타c", 3200));
		gbox.add(new Genesis("제네시스a", 3100));
		gbox.add(new Genesis("제네시스b", 2600));
		gbox.add(new Genesis("제네시스c", 3300));
		cbox.add(new Avante("아반떼a", 1500));
		cbox.add(new Avante("아반떼b", 1800));
		cbox.add(new Avante("아반떼c", 2000));
		cbox.add(new BMW("bmwa", 1900));
		cbox.add(new BMW("bmwb", 2500));
		cbox.add(new BMW("bmwc", 4000));
		cbox.add(new Sonata("소나타a", 1800));
		cbox.add(new Sonata("소나타b", 2100));
		cbox.add(new Sonata("소나타c", 3200));
		cbox.add(new Genesis("제네시스a", 3100));
		cbox.add(new Genesis("제네시스b", 2600));
		cbox.add(new Genesis("제네시스c", 3300));
		Collections.sort(abox.getList(),new CarOrder());
		Collections.sort(bbox.getList(),new CarOrder());
		Collections.sort(sbox.getList(),new CarOrder());
		Collections.sort(gbox.getList(),new CarOrder());
		Collections.sort(cbox.getList(),new CarOrder());
		System.out.println(abox);
		System.out.println(bbox);
		System.out.println(sbox);
		System.out.println(gbox);
		System.out.println(cbox);
	}
}
