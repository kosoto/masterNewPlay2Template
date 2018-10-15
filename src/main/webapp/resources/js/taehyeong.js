/*"use strict"; 
var taehyeong = taehyeong ||{};
taehyeong = {
	init : x =>{
		taehyeong.content1.surroundings();
	}
}*/

"user strict"
var taehyeong = taehyeong || {};
taehyeong.main=(()=>{
	var init=()=>{
		onCreate();
	}
	var onCreate =()=>{
		setContentView();
	}
	var setContentView =()=>{
		taehyeong.content1.surroundings();
	}
	return {init:init};
})();

taehyeong.content1 = {
	surroundings:x =>{
		let date = new Date();
		$('#header').empty();
		$('#content').empty();
		$('<div/>').addClass('date_selecter').attr({id:'date_selecter'}).appendTo($('#content'));
		$('<i/>').addClass('icono-calendar').attr({id:'calendar'}).appendTo($('#date_selecter'));
		$('<input/>').appendTo($('#date_selecter'));
		taehyeong.category.category();
		}
}
taehyeong.category={
	category : x=>{
		$('<div/>').addClass('category').attr({id:'category'}).appendTo($('#content'));
		let category = ["모텔","#마이룸","#야놀자호텔","#신축/리모델링","#인기숙소","#파티룸","#무료영화"]; 
		$.each(category,(i,j)=>{
			$('<p/>').addClass('category_font').html(j).appendTo($('#category'));
		})
		taehyeong.list_map.list_map();
	}
}

taehyeong.list_map={
	list_map : x=>{
		$('<div/>').addClass('list_map').attr({id:'list_map'}).appendTo($('#content'));
		$('<div/>').addClass('list').attr({id:'list'}).appendTo($('#list_map'));
		$('<ul/>').addClass('list_ul').attr({id:'list_ul'}).appendTo($('#list'))
		let list_menu = ["기본순","테마","숙소 특징","가격대선택"];
		$.each(list_menu,(i,j)=>{
			$('<li/>').addClass('list_li').attr({id:'list_li'+i}).appendTo($('#list_ul'))
			$('<p/>').addClass('list_font').html(j).appendTo($('#list_li'+i));
			$('<i/>').addClass('icono-caretDown').appendTo($('#list_li'+i));
		})
		$('<input/>').addClass('checkbox').attr({type:'checkbox'}).appendTo($('#list_ul'));
		$('<p/>').addClass('list_font').html('예약가능').appendTo($('#list_ul'));
		$('<p/>').addClass('list_font').attr({id:'font_'}).html('필터 초기화').appendTo($('#list_ul'));
		$('<div/>').addClass('font_1').html('이 지역 추천').appendTo($('#list'));
		$('<div/>').addClass('map').attr({id:'map'}).appendTo($('#list_map'));
	}
}