"use strict"
var heetae = heetae || {}

heetae=(()=>{
	var init =x=>{
		heetae.router.init(x)
	}
	return {init : init}
})()

heetae.main =(()=>{
	let img, w ,nav ,header ,content , footer
	var init =()=>{
		img = $.img()
		w = $('#wrapper');
		nav = $('#nav')
		header = $('#header');
		content = $('#content');
		footer = $('#footer');
		onCreate()
	}
	var onCreate =()=>{
		setContentView()
	}
	var setContentView =()=>{
		header.empty()
		footer.empty()
		content.empty()
		
		
		
		$('<div/>')
		.attr({'id':'carouselExampleControls'
			,'data-ride':'carousel'})
		.addClass('carousel slide')
		.carousel('pause')
		.appendTo(header)
		
		
		$('<div/>')
		.addClass('heetae_header_controller')
		.appendTo('#carouselExampleControls')
		$('<div/>')
		.addClass('carousel-inner')
		.appendTo('.heetae_header_controller')
		
		$('<div/>')
		.addClass('heetae_current')
		.appendTo('.heetae_header_controller')
		$('<p/>')
		.attr('id','em') // 사진 갯수
		.text('1/3') //사진갯수 값번경
		.appendTo('.heetae_current')
		
		
		let arr = [img+'/bg-showcase-1.jpg'
			,img+'/bg-showcase-2.jpg'
			,img+'/bg-showcase-3.jpg']
		
		$.each(arr,(i,j)=>{
			let clazz = 'carousel-item'
			if(i===0){
				clazz = 'carousel-item active'
			}
			$('<img>')
			.attr('src',j)
			.addClass('heetae_header')
			.appendTo($('<div/>')
					.attr('id','select_'+(i+1))
					.addClass(clazz)
					.appendTo('.carousel-inner'))
		})
		$('<a>')
		.attr({'href':'#carouselExampleControls'
			,'role':'button'
			,'data-slide':'prev'})
		.addClass('carousel-control-prev')
		.appendTo('.carousel-inner')
		.click(e=>{
			setTimeout(() => {
				$('#em')
				.text($('.active').attr('id').split('_')[1]+'/3')	//사진갯수 값번경
			}, 700);
		})
		
		$('<span>')
		.attr({'href':'#carouselExampleControls'
			,'aria-hidden':'true'})
		.addClass('heetae_previco')
		.appendTo('.carousel-control-prev')
		$('<span>')
		.addClass('sr-only')
		.text('Next')
		.appendTo('.carousel-control-prev')
		
		
		$('<a>')
		.attr({'href':'#carouselExampleControls'
			,'role':'button'
			,'data-slide':'next'})
		.addClass('carousel-control-next')
		.appendTo('.carousel-inner')
		.click(e=>{
			setTimeout(() => {
				$('#em')
				.text($('.active').attr('id').split('_')[1]+'/3') //사진갯수 값번경	
			}, 700);
		})
		
		$('<span>')
		.attr({'href':'#carouselExampleControls'
			,'aria-hidden':'true'})
		.addClass('heetae_nextico')
		.appendTo('.carousel-control-next')
		$('<span>')
		.addClass('sr-only')
		.text('Next')
		.appendTo('.carousel-control-next')
		
		
		
		
		$('<div>')
		.addClass('heetae_content_controller')
		.appendTo(content)
		
		$('<div/>')
		.addClass('heetae_content_form')
		.appendTo('.heetae_content_controller')
		
		
		$('<section/>')
		.addClass('heetae_section1')
		.appendTo('.heetae_content_form')
		
		$('<div/>')
		.addClass('heetae_content_info')
		.appendTo('.heetae_section1')
		
		
		$('<p/>')
		.addClass('heetae_info_title')
		.text('선릉 꾸띠') // 숙소명 번경
		.appendTo('.heetae_content_info')
		$('<p/>')
		.addClass('heetae_info_address')
		.text('서울특별시 강남구 대치동 890-27') // 주소 번경
		.appendTo('.heetae_content_info')
		$('<p/>')
		.addClass('heetae_info_phone')
		.text('050350500187') // 폰번호 번경
		.appendTo('.heetae_content_info')
		
		$('<div/>')
		.addClass('heetae_info_score')
		.appendTo('.heetae_content_info')
		$('<span/>')
		.addClass('heetae_score_detail')
		.appendTo('.heetae_info_score')
		
		var score = 3.5; // 평점 입력값
		for(var i = 0; i<5; i++){
			if(score==0){
				$('<i/>')
				.addClass('heetae_score_0')
				.appendTo('.heetae_score_detail')
			}else if(score==0.5){
				$('<i/>')
				.addClass('heetae_score_5')
				.appendTo('.heetae_score_detail')
				score-=0.5;
			}else{
				$('<i/>')
				.addClass('heetae_score_10')
				.appendTo('.heetae_score_detail')
				score-=1;
			}
		}
		
		var score_em = 1272
		$('<em/>')
		.addClass('heetae_score_em')
		.text('후기'+score_em+'개') //후기 갯수
		.appendTo('.heetae_info_score')
		
		
		$('<div>')
		.addClass('heetae_info_tag')
		.appendTo('.heetae_content_info')
		$('<i/>')
		.addClass('heetae_tag_primary') //쿠폰혜택
		.text('쿠폰혜택(구현X)')
		.appendTo('.heetae_info_tag')
		
		$('<ul/>')
		.addClass('heetae_info_tip') //할인 팁
		.appendTo('.heetae_content_info')
		$('<li/>')
		.text('팁표시(구현x)')
		.appendTo('.heetae_info_tip')
		
		$('<div>')
		.addClass('heetae_content_theme_controller')
		.appendTo('.heetae_section1')
		
		$('<ul/>')
		.addClass('heetae_content_theme')
		.appendTo('.heetae_content_theme_controller')
		
		var theme = ['주차가능','VOD','커플PC']
		$.each(theme,(i,j)=>{
			$('<li/>')
			.addClass('heetae_theme_item'+i)
			.appendTo('.heetae_content_theme')
			
			
			let img = '';
			
			if(j==='주차가능'){
				img='//yaimg.yanolja.com/files/2016/0531/2016053116003268e408ba-4e47-47b8-abc0-d193316c483b.png'
			}else if(j==='VOD'){
				img='//yaimg.yanolja.com/files/2016/0531/20160531160644a30c0aa6-1d57-48e2-ad85-c97600e109ff.png'
			}else if(j==='커플PC'){
				img='//yaimg.yanolja.com/files/2016/0531/20160531160802f4fe6a0d-1bfe-49b1-a547-c5a6bfa214f2.png'
			}
			
			$('<img/>')
			.attr('src',img)
			.appendTo('.heetae_theme_item'+i)
			
			$('<span/>')
			.text(j)
			.appendTo('.heetae_theme_item'+i)
		})
		
		
		$('<section/>')
		.addClass('heetae_section2')
		.appendTo('.heetae_content_form')
		
		$('<div/>')
		.addClass('heetae_tab_head')
		.appendTo('.heetae_section2')
		
		$('<div/>')
		.addClass('heetae_tab_content')
		.appendTo('.heetae_section2')
		
		
		$('<button/>')
		.attr({'type':'button',
			'id' : 'tab_button1'})
		.text('객실정보')
		.addClass('heetae_tab_button_active')
		.click(e=>{
			e.preventDefault()
			$('#tab_button1')
			.removeClass()
			.addClass('heetae_tab_button_active')
			$('#tab_button2')
			.removeClass()
			.addClass('heetae_tab_button')
			
			$('.heetae_tab_content')
			.empty()
			
			var acom = {'room_name':'야놀자'
				,'room_price':'50,000'
				,'room_image1':img+'/bg-showcase-1.jpg'
				,'room_image2':img+'/bg-showcase-2.jpg'
				,'room_image3':img+'/bg-showcase-3.jpg'}
			
			var acom_image = [acom.room_image1,acom.room_image2,acom.room_image3]
			
			$('<div/>')
			.addClass('heetae_tab_content_room')
			.appendTo('.heetae_tab_content')
			
			$('<div/>')
	    .attr({'id':'heetae_tab_carousel'
	      ,'data-ride':'carousel'})
	    .addClass('carousel slide')
	    .carousel('pause')
	    .appendTo('.heetae_tab_content_room')
	    
	    
	    $('<div/>')
	    .addClass('heetae_tab_room_item')
	    .appendTo('#heetae_tab_carousel')
	    $('<div/>')
	    .attr('id','heetae_tab_inner')
	    .addClass('carousel-inner')
	    .appendTo('.heetae_tab_room_item')
	    
	    
	    $.each(acom_image,(i,j)=>{
	      let clazz = 'carousel-item'
	      if(i===0){
	        clazz = 'carousel-item active'
	      }
	      $('<img>')
	      .attr('src',j)
	      .addClass('heetae_header')
	      .appendTo($('<div/>')
	          .attr('id','tab_select_'+(i+1))
	          .addClass(clazz)
	          .appendTo('#heetae_tab_inner'))
	    })
	    $('<a>')
	    .attr({
	    	'id':'heetae_tab_prev'
	      ,'href':'#heetae_tab_carousel'
	      ,'role':'button'
	      ,'data-slide':'prev'})
	    .addClass('carousel-control-prev')
	    .appendTo('#heetae_tab_inner')
	    
	    $('<span>')
	    .attr({'href':'#heetae_tab_carousel'
	      ,'aria-hidden':'true'})
	    .addClass('heetae_previco')
	    .appendTo('#heetae_tab_prev')
	    $('<span>')
	    .addClass('sr-only')
	    .text('Next')
	    .appendTo('#heetae_tab_prev')
	    
	    
	    $('<a>')
	    .attr({
	    	'id':'heetae_tab_next'
	      ,'href':'#heetae_tab_carousel'
	      ,'role':'button'
	      ,'data-slide':'next'})
	    .addClass('carousel-control-next')
	    .appendTo('#heetae_tab_inner')
	    
	    $('<span>')
	    .attr({'href':'#heetae_tab_carousel'
	      ,'aria-hidden':'true'})
	    .addClass('heetae_nextico')
	    .appendTo('#heetae_tab_next')
	    $('<span>')
	    .addClass('sr-only')
	    .text('Next')
	    .appendTo('#heetae_tab_next')
		//이미지 슬라이드
	    
	    
		})
		.appendTo('.heetae_tab_head')
			
		
		
			
		$('<button/>')
		.attr({'type':'button',
				'id' : 'tab_button2'})
		.text('후기')
		.addClass('heetae_tab_button')
		.click(e=>{
			e.preventDefault()
			$('#tab_button1')
			.removeClass()
			.addClass('heetae_tab_button')
			$('#tab_button2')
			.removeClass()
			.addClass('heetae_tab_button_active')
		})
		.appendTo('.heetae_tab_head')
		
		
		
		
		
		
		
		
		
		$('<section/>')
		.addClass('heetae_section3')
		.appendTo('.heetae_content_form')
		
		$('<div/>') //체크박스
		.addClass('heetae_check_box')
		.appendTo('.heetae_section3')
		
		
		$('<div/>')
		.addClass('heetae_check_top')
		.appendTo('.heetae_check_box')
		$('<p/>')
		.text('체크인')
		.addClass('heetae_check_top_con1')
		.appendTo('.heetae_check_top')
		$('<p/>')
		.text('체크아웃')
		.addClass('heetae_check_top_con2')
		.appendTo('.heetae_check_top')
		
		$('<div/>')
		.addClass('heetae_check_middle')
		.appendTo('.heetae_check_box')
		$('<input/>')
		.attr({'type':'text','value':'2018-10-11'}) //체크인 날짜 번경
		.appendTo($('<div>')
				.addClass('heetae_check_middle_con1')
				.appendTo('.heetae_check_middle'))
		$('<div>')
		.addClass('heetae_check_middle_con2')
		.appendTo('.heetae_check_middle')
		$('<input/>')
		.attr({'type':'text','value':'2018-10-12'}) //체크아웃 날짜 번경
		.appendTo($('<div>')
				.addClass('heetae_check_middle_con3')
				.appendTo('.heetae_check_middle'))
		
		$('<div/>')
		.addClass('heetae_check_bottom')
		.appendTo('.heetae_check_box')
		$('<span/>')
		.text('연박(2박 이상)을 제공하지 않는 숙소 입니다.')
		.addClass('heetae_check_bottom_con1')
		.appendTo('.heetae_check_bottom')
		$('<span/>')
		.text('1박')
		.addClass('heetae_check_bottom_con2')
		.appendTo('.heetae_check_bottom')
		
		$('<div/>')
		.addClass('heetae_check_map')
		.appendTo('.heetae_check_bottom')
		
		
		
		
		
		
		
		footer
		.addClass('heetae_footer')
		.html('<p>footer</p>')
		
		
		
		
		
	}
	return{init : init}
})()

heetae.router = {
	init : x=>{
		$.getScript(x+'/resources/js/router.js',
				()=>{
					$.extend(new Session(x))
					$.getScript($.ctx()+'/resources/js/util.js')
					heetae.main.init()
				}
		)
	}
	
}