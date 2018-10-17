"use strict"
var heetae = heetae || {}

heetae=(()=>{
	var init =x=>{
		heetae.router.init(x)
	}
	return {init : init}
})()

heetae.main =(()=>{
	let img, w ,nav ,header ,content , footer, accom,accom2
	var init =()=>{
		img = $.img()
		w = $('#wrapper');
		nav = $('#nav')
		header = $('#header');
		content = $('#content');
		footer = $('#footer');
		accom = {'accom_name':'야놀자'
			,'room_price':'50,000'
			,'room_image1':img+'/bg-showcase-1.jpg'
			,'room_image2':img+'/bg-showcase-2.jpg'
			,'room_image3':img+'/bg-showcase-3.jpg'}
		accom2 = {'accom_name':'안놀자'
			,'room_price':'35,000'
			,'room_image1':img+'/bg-showcase-1.jpg'
			,'room_image2':img+'/bg-showcase-2.jpg'
			,'room_image3':img+'/bg-showcase-3.jpg'}
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
		
		$('<div/>')
		.addClass('heetae_section_form')
		.appendTo('.heetae_content_form')
		
		$('<section/>')
		.addClass('heetae_section1')
		.appendTo('.heetae_section_form')
		
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
		
		
		var sp={'score':3.5
				,'id':'heetae_score'
				,'append':'.heetae_score_detail'}
		var score_em = 1272
		$('<em/>')
		.addClass('heetae_score_em')
		.text('후기'+score_em+'개') //후기 갯수
		.appendTo('.heetae_info_score')
		
		heetae.detail.rating(sp)
		
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
		.addClass('heetae_section3')
		.appendTo('.heetae_content_form')
		
		$('<div/>')
		.addClass('heetae_tab_head')
		.appendTo('.heetae_section3')
		
		$('<div/>')
		.addClass('heetae_tab_content')
		.appendTo('.heetae_section3')
		
		heetae.detail.accom(accom)
		heetae.detail.accom(accom2)
		
		
		//객실정보 리스트
		
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
			
			heetae.detail.accom(accom)
			heetae.detail.accom(accom2)
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
			
			$('.heetae_tab_content')
			.empty()
			
			$('<div/>')
			.addClass('heetae_tab_review')
			.appendTo('.heetae_tab_content')
			
			$('<div/>')
			.addClass('heetae_review_message')
			.appendTo('.heetae_tab_review')
			
			$('<i/>')
			.text('바른후기')
			.appendTo('.heetae_review_message')
			$('<p/>')
			.text('는 숙소에 직접 방문한 회원만 작성할 수 있습니다.')
			.appendTo('.heetae_review_message')
			
			var count=0;
			
			for(var i = 0; i<5; i++){
				var review_temp = {'id':'review_'+i
					,'score':4.5
					,'append':'.heetae_tab_review'
					,'msg_content':'여긴정말 깨끗한 데스웅'
					,'member_id':'프니프니'
					,'msg_photo':'bg-showcase-1.jpg'
					,'msg_date':'2018-10-11'
					,'room_name':'객실1'}
				
				heetae.detail.review(review_temp)
			}
			
			//채움
			
		})
		.appendTo('.heetae_tab_head')
		
		
		
		
		
		
		
		
		
		$('<section/>')
		.addClass('heetae_section2')
		.appendTo('.heetae_section_form')
		
		$('<div/>') //체크박스
		.addClass('heetae_check_box')
		.appendTo('.heetae_section2')
		
		
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
		
		$('<div/>') //지도
		.addClass('heetae_check_map')
		.appendTo('.heetae_section2')
		
		$('<div/>')
		.addClass('heetae_cupon_list')
		.appendTo('.heetae_section2')
		
		$('<div/>')
		.addClass('heetae_cupon_title')
		.appendTo('.heetae_cupon_list')
		
		$('<em/>')
		.text('할인 쿠폰 정보')
		.appendTo('.heetae_cupon_title')
		
		$('<i/>')
		.attr({'id':'example'
			,'data-toggle':"tooltip" 
			,'data-placement':"bottom" 
		    ,'title':"이번 프로젝트에서 쿠폰은 구현되지 않았습니다."})
		.appendTo('.heetae_cupon_title')
		$('#example').tooltip()
		
		$('<div/>')
		.addClass('heetae_cupon_content')
		.appendTo('.heetae_cupon_list')
		
		$('<li/>')
		.addClass('heetae_cupon_content_item')
		.appendTo('.heetae_cupon_content')
		
		$('<div/>')
		.addClass('heetae_cupon_content_item_info')
		.appendTo('.heetae_cupon_content_item')
		
		$('<span/>')
		.addClass('heetae_cupon_item_title')
		.appendTo('.heetae_cupon_content_item_info')
		
		$('<em/>')
		.text('1,000 원')
		.appendTo('.heetae_cupon_item_title')
		
		$('<p/>')
		.text('할인')
		.appendTo('.heetae_cupon_item_title')
		
		$('<span/>')
		.addClass('heetae_cupon_item_name')
		.text('[요일 항목]')
		.appendTo('.heetae_cupon_content_item_info')
		$('<span/>')
		.addClass('heetae_cupon_item_subtitle')
		.text('숙실, 대실, 연박등..')
		.appendTo('.heetae_cupon_content_item_info')
		
		$('<button/>')
		.addClass('heetae_cupon_item_button')
		.appendTo('.heetae_cupon_content_item')
		
		$('<i/>')
		.appendTo('.heetae_cupon_item_button')
		
		$('<span/>')
		.text('미구현')
		.appendTo('.heetae_cupon_item_button')
		
		
		
		footer
		.addClass('heetae_footer')
		.html('<p>footer</p>')
		
		
		
		
		
	}
	return{init : init}
})()

heetae.detail = {
	rating : x=>{
		$('<span/>')
		.attr('id',x.id)
		.addClass('heetae_score_info')
		.appendTo(x.append)
		
		for(var i = 0; i<5; i++){
			if(x.score==0){
				$('<i/>')
				.addClass('heetae_score_0')
				.appendTo('#'+x.id)
			}else if(x.score==0.5){
				$('<i/>')
				.addClass('heetae_score_5')
				.appendTo('#'+x.id)
				x.score-=0.5;
			}else{
				$('<i/>')
				.addClass('heetae_score_10')
				.appendTo('#'+x.id)
				x.score-=1;
			}
		}
	},
	accom : x=>{
		var accom_image = [x.room_image1,x.room_image2,x.room_image3]
		$('<div/>')
		.attr('id',x.accom_name+'_content_room')
		.addClass('heetae_tab_content_room')
		.appendTo('.heetae_tab_content')
		
		
	    $('<div/>') //이미지 슬라이더 시작
	    .attr({'id':x.accom_name+'_carousel'
	      ,'data-ride':'carousel'})
	    .addClass(['carousel slide','heetae_tab_slider'])
	    .carousel('pause')
	    .appendTo('#'+x.accom_name+'_content_room')
	    
	    
	    $('<div/>')
	    .attr('id',x.accom_name+'_item')
	    .addClass('heetae_tab_room_item')
	    .appendTo('#'+x.accom_name+'_carousel')
	    $('<div/>')
	    .attr('id',x.accom_name+'_inner')
	    .addClass(['carousel-inner','heetae_tab_inner'])
	    .appendTo('#'+x.accom_name+'_item')
	    
	    
	    $.each(accom_image,(i,j)=>{
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
	          .appendTo('#'+x.accom_name+'_inner'))
	    })
	    $('<a>')
	    .attr({
	    	'id':x.accom_name+'_prev'
	      ,'href':'#'+x.accom_name+'_carousel'
	      ,'role':'button'
	      ,'data-slide':'prev'})
	    .addClass('carousel-control-prev')
	    .appendTo('#'+x.accom_name+'_inner')
	    
	    $('<span>')
	    .attr({'href':'#'+x.accom_name+'_carousel'
	      ,'aria-hidden':'true'})
	    .addClass('heetae_previco')
	    .appendTo('#'+x.accom_name+'_prev')
	    $('<span>')
	    .addClass('sr-only')
	    .text('Next')
	    .appendTo('#'+x.accom_name+'_prev')
	    
	    
	    $('<a>')
	    .attr({
	    	'id':x.accom_name+'_next'
	      ,'href':'#'+x.accom_name+'_carousel'
	      ,'role':'button'
	      ,'data-slide':'next'})
	    .addClass('carousel-control-next')
	    .appendTo('#'+x.accom_name+'_inner')
	    
	    $('<span>')
	    .attr({'href':'#'+x.accom_name+'_carousel'
	      ,'aria-hidden':'true'})
	    .addClass('heetae_nextico')
	    .appendTo('#'+x.accom_name+'_next')
	    $('<span>')
	    .addClass('sr-only')
	    .text('Next')
	    .appendTo('#'+x.accom_name+'_next')
		//이미지 슬라이드
	    
	    $('<div/>')
	    .attr('id',x.accom_name+'_room_info')
	    .addClass('heetae_tab_room_info')
	    .appendTo('#'+x.accom_name+'_content_room')
	    
	    $('<div/>')
	    .attr('id',x.accom_name+'_info_title')
	    .addClass('heetae_tab_info_title')
	    .appendTo('#'+x.accom_name+'_room_info')
	    
	    $('<em/>')
	    .text(x.accom_name)
	    .appendTo('#'+x.accom_name+'_info_title')
	    
	    $('<div/>')
	    .attr('id',x.accom_name+'_info_tip')
	    .addClass('heetae_tab_info_tip')
	    .appendTo('#'+x.accom_name+'_room_info')
	    
	    $('<span/>')
	    .text('기준 2명 (최대 2명)')
	    .appendTo('#'+x.accom_name+'_info_tip')
	    
	    
	    $('<div/>')
	    .attr('id',x.accom_name+'_info_price')
	    .addClass('heetae_tab_info_price')
	    .appendTo('#'+x.accom_name+'_room_info')
	    
	    $('<span/>')
	    .attr('id',x.accom_name+'price_right')
	    .addClass('heetae_info_price_right')
	    .appendTo('#'+x.accom_name+'_info_price')
	    
	    $('<em/>')
	    .text(x.room_price)
	    .appendTo('#'+x.accom_name+'price_right')
	    $('<i/>')
	    .text('원')
	    .appendTo('#'+x.accom_name+'price_right')
	    
	    $('<span/>')
	    .attr('id',x.accom_name+'_price_left')
	    .addClass('heetae_info_price_left')
	    .appendTo('#'+x.accom_name+'_info_price')
	    
	    $('<i/>')
	    .text('숙박')
	    .appendTo('#'+x.accom_name+'_price_left')
	    $('<small/>')
	    .text('18:00입실')
	    .appendTo('#'+x.accom_name+'_price_left')
	    
	    $('<a/>')
	    .attr('href','#')
	    .text('예약 하기')
	    .addClass('heetae_tab_info_reserve_btn')
	    .appendTo('#'+x.accom_name+'_room_info')
	    .click(e=>{
	    	e.preventDefault()
	    })
	},
	review : x=>{
		/*var review_temp = {'id':'review_1'
			,'score':4.5
			,'append':'.heetae_tab_review'
			,'msg_content':'여긴정말 깨끗한 데스웅'
			,'member_id':'프니프니'
			,'msg_photo':'bg-showcase-1.jpg'
			,'msg_date':'2018-10-11'
			,'room_name':'객실1'}*/
		$('<li/>')
		.attr('id',x.id+'_review_item')
		.addClass('heetae_review_item')
		.appendTo(x.append)
		
		$('<div/>')
		.attr('id',x.id+'_review_info')
		.addClass('heetae_review_info')
		.appendTo('#'+x.id+'_review_item')
		
		$('<div/>')
		.attr('id',x.id+'_review_info_title')
		.addClass('heetae_review_info_title')
		.appendTo('#'+x.id+'_review_info')
		
		$('<p/>')
		.text(x.msg_content)
		.addClass('review_info_title_content')
		.appendTo('#'+x.id+'_review_info')
		
		$('<div/>')
		.attr('id',x.id+'_review_info_user')
		.addClass('heetae_review_info_user')
		.appendTo('#'+x.id+'_review_info')
		
		$('<span/>')
		.text(x.member_id)
		.appendTo('#'+x.id+'_review_info_user')
		$('<i/>')
		.appendTo('#'+x.id+'_review_info_user')
		$('<span/>')
		.text(x.room_name)
		.appendTo('#'+x.id+'_review_info_user')
		$('<i/>')
		.appendTo('#'+x.id+'_review_info_user')
		$('<span/>')
		.text(x.msg_date)
		.appendTo('#'+x.id+'_review_info_user')
		
		$('<div/>')
		.attr('id',x.id+'_review_info_score')
		.addClass('review_info_score')
		.appendTo('#'+x.id+'_review_info')
		
		heetae.detail.rating({'id':x.id+'_review_info_score_em'
			,'score':x.score
			,'append':'#'+x.id+'_review_info_score'})
	},
	
}

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