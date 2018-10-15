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
		$('<div/>').attr({id:'input_date'}).appendTo($('#content'));
		$('<div/>').attr({id:'input_date_div'}).appendTo($('#input_date'));
		$('<i/>').attr({id:'icono-calendar'}).addClass('icono-calendar').appendTo($('#input_date_div'));
		$('<input/>').attr({type:'text',value:'2018-10-12'}).appendTo($('#input_date_div'));
		taehyeong.category.category();
		}
}
taehyeong.category={
	category : x=>{
		$('<div/>').addClass('category_area').attr({id:'category_area'}).appendTo($('#content'));
		$('<ul/>').addClass('category_ul').attr({id:'category_ul'}).appendTo($('#category_area'))
		let category_list = ["모텔","#마이룸","#야놀자호텔","#신축/리모델링","#인기숙소","#파티룸","#무료영화"]
		$.each(category_list,(i,j)=>{
		$('<li>').addClass('category_li').attr({id:'category_li'+i}).appendTo($('#category_ul'))
		$('<p/>').addClass('a_tag_font').html(j).appendTo($('#category_li'+i))
		})
		taehyeong.list.list();
	}
}
taehyeong.list={
	list : x=>{
		
	}
}