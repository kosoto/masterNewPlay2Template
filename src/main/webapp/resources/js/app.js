"use strict";
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})();
app.main =(()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		app.router.home();
	};
	return {init:init};
})();

app.permision = (()=>{
	var login = ()=>{
		$('#header').empty();
		$('#content').empty();
		$.getScript($.script()+'/compo.js',()=>{
				$('<div/>').addClass('loginBox').appendTo('#content');
					$('<div/>').addClass('loginHead').html('로그인하고, 혜택받으세요!').appendTo('.loginBox');
					$('<div/>').addClass('inputBox').appendTo('.loginBox');
						$('<input/>').attr({type:'text', id:'member_id', placeholder:'아이디'}).addClass('inputData').appendTo('.inputBox');
						$('<input/>').attr({type:'text', id:'password', placeholder:'비밀번호'}).addClass('inputData').appendTo('.inputBox');
						$('<div/>').addClass('hjButton').text('로그인').attr({id:'loginButton'}).appendTo('.inputBox')
						.click(e=>{
							$.ajax({
							url:$.ctx()+'/member/login',
							method:'post',
							contentType:'application/json',
							data:JSON.stringify({userid:$('#userid').val(),password:$('#password').val()}),
							success:d=>{
								let validate ="";
								if(d.ID==='WRONG'){
									validate ="아이디가 없습니다.";
								}else if(d.PW==='WRONG'){
									validate ="비밀번호가 틀렸습니다.";	
								}else{
									$.cookie("loginID",d.MBR.userid);
									$.getScript($.script()+'/header.js',()=>{
									});
									$.getScript($.script()+'/content.js',()=>{
									});
									$('#logo_btn').click(e=>{
										e.preventDefault();
										app.router.home();
									})
									$('#board').remove();
									$('<a/>')
									.text('게시판')
									.addClass('ya_cus')
									.appendTo($('#nav_right'))
									.click(e=>{
										app.service.my_board({id:d.MBR.userid,pageNo:1});
									});
									$('#board').addClass('btn btn-info');
									$('#login_btn').remove();
									ui.anchor({id:'logout_btn',txt:'로그아웃'})
									.addClass('btn btn-danger btn-lg')
									.appendTo($('#nav_right')).click(e=>{
										$.removeCookie('loginID');
										app.router.home();
									});
									$('#add_btn').remove();
									ui.anchor({id:'retireve_btn',txt:'마이페이지'})
									.addClass('btn btn-danger btn-lg')
									.appendTo($('#nav_right')).click(e=>{
										$.getScript($.script()+'/retrieve.js',()=>{
											/*$('#content').html(retrieveUI(d));*/
										});
									});
								}
								$('#validate').html(validate);
							},
							error:(m1,m2,m3)=>{
								alert('에러발생'+m3);
							}
					});
			});
		})
	}
	var join =()=>{
		$('#header').empty();
		$('#content').empty();
		$.getScript($.script()+'/compo.js',()=>{
			$('<div/>').addClass('joinBox').appendTo('#content');
				$('<div/>').addClass('loginHead').html('회원가입').appendTo('.joinBox');
				$('<div/>').addClass('inputBox').appendTo('.joinBox');
				$('<input/>').attr({type:'text', id:'member_id', placeholder:'아이디'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'name', placeholder:'성명(이름)'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'nickname', placeholder:'닉네임'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'password', placeholder:'비밀번호'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'birthdate', placeholder:'생년원일(ex 890505-1)'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'phone', placeholder:'휴대폰 번호(ex 010-9000-5000)'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'address', placeholder:'주소'}).addClass('inputData').appendTo('.inputBox');
				$('<input/>').attr({type:'text', id:'zipcode', placeholder:'우편번호'}).addClass('inputData').appendTo('.inputBox');
				$('<div/>').addClass('hjButton').text('가입하기').attr({id:'joinButton'}).appendTo('.inputBox')
					.click(e=>{
						e.preventDefault();
						$.ajax({
							url:$.ctx()+'/member/join',
							method:'post',
							contentType:'application/json',
							data:JSON.stringify({
								member_id:$('#member_id').val(),
								name:$('#name').val(),
								nickname:$('#nickname').val(),
								password:$('#password').val(),
								birthdate:$('#birthdate').val(),
								phone:$('#phone').val(),
								address:$('#address').val(),
								zipcode:$('#zipcode').val(),
								}),
							success:d=>{
								login();
							},
							error:(m1,m2,m3)=>{alert(m3);}
						});
				})
			});			
	}
	return {login : login, join : join}
})();

app.router = {
	init :x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패')});
				app.main.init();
			}
		);
	},
	home :()=>{
		$.getScript($.script()+'/footer.js',()=>{
		/*nav 시작*/
		$('<div/>').attr({id:'mainNav'}).appendTo($('#wrapper'));
		$('<nav/>').attr({id:'nav'}).appendTo($('#mainNav'));
		$('<a/>').addClass('yanoljaMainLogo').attr({id:'logo_btn'}).appendTo('#nav');
		$('<img/>').attr({src:$.img()+"/icon/yanoljaMainLogo.JPG", id:'#logoImage'}).appendTo('#logo_btn')
		$('<div/>').attr({id:'nav_left'}).appendTo('#nav');
		$('<a/>').attr({href:'#', id:'mylocation'}).html('내주변(김태형)').appendTo('#nav_left');
		$('<a/>').attr({href:'#', id:'hotelSearch'}).html('숙소검색(한희태)').appendTo('#nav_left');
		$('<a/>').attr({href:'#', id:'board'}).html('캐스트(최세인)').appendTo('#nav_left');
		$('<div/>').attr({id:'nav_right'}).appendTo('#nav');
		$('<a/>').attr({href:'#', id:'amdin'}).html('관리자(김상훈)').appendTo('#nav_right');
		$('<a/>').attr({href:'#', id:'add_btn'}).html('회원가입').appendTo('#nav_right');
		$('<a/>').attr({href:'#', id:'login_btn'}).html('로그인').appendTo('#nav_right');
		/*nav 끝*/
		
		/*header 시작*/
		$('<header/>').attr({id:'header'}).appendTo('#wrapper');
		$('<div/>').attr({id:'mainheader'}).appendTo('#header');		
		$('<img/>').attr({src:$.img()+"/banner/banner_main2.jpg", id:'mainBanner'}).appendTo('#mainheader');
		$('<div/>').addClass('centered-left1').html('야놀자와 함께').appendTo('#mainheader');
		$('<div/>').addClass('centered-left2').html('여행을 떠나볼까요?').appendTo('#mainheader');
		$('<div/>').addClass('centered-left3').attr({id:'mainInput'}).appendTo('#mainheader');
			$('<div/>').attr({id:'accom_type'}).html('숙박유형').appendTo('#mainInput');
				$('<div/>').attr({id:'mainInput1'}).appendTo('#accom_type');
					$('<select/>').attr({id:'accomSelect'}).appendTo('#mainInput1');
					$.each(["모텔","호텔"],(i,j)=>{
						$('<option/>').attr({value:j}).html(j).appendTo('#accomSelect');
					});
			$('<div/>').attr({id:'accom_addr'}).html('지역').appendTo('#mainInput');
				$('<div/>').attr({id:'mainInput2'}).appendTo('#accom_addr');
					$('<select/>').attr({id:'accomAddr'}).appendTo('#mainInput2');
					$.each(["서울","경기","인천","강원","제주","대전","충북","충남","세종","부산","울산","경남","대구","경북","광주","전남","전주","전북"],(i,j)=>{
						$('<option/>').attr({value:j}).html(j).appendTo('#accomAddr');
					})
			$('<div/>').attr({id:'checkinDate'}).html('체크인').appendTo('#mainInput');
				$('<div/>').attr({id:'mainInput3'}).appendTo('#checkinDate');	
				$('<input/>').attr({type:'date', name:'checkin_date', id:'checkin_date'}).appendTo('#mainInput3')
			$('<div/>').attr({id:'checkoutDate'}).html('체크아웃').appendTo('#mainInput');
				$('<div/>').attr({id:'mainInput4'}).appendTo('#checkoutDate');
				$('<input/>').attr({type:'date', name:'checkout_date', id:'checkout_date'}).appendTo('#mainInput4')
			$('<div/>').attr({id:'mainButton'}).appendTo('#mainInput');
				$('<button/>').attr({type:'button'}).addClass('btn-search-stay color-gradation').html('숙소검색').appendTo('#mainButton');
		/*header 끝*/
		
		/*content 시작*/
		$('<content/>').attr({id:'content'}).appendTo('#wrapper');
			$('<div/>').attr({id:'mainContent'}).appendTo('#content');
				$('<div/>').attr({id:'myLocationAddressImage'}).appendTo('#mainContent');
				$('<img/>').attr({src:$.img()+"/icon/myLocationIcon.JPG"}).appendTo('#myLocationAddressImage');
				$('<div/>').html('서울시 마포구 대흥동 63-13').attr({id:'myLocationAddress'}).appendTo('#mainContent');
				$('<div/>').attr({id:'mainContentBanner'}).appendTo('#mainContent')
					$('<img/>').attr({src:$.img()+"/banner/mainContentBanner1.png", id:'mainContentBanner1'}).appendTo('#mainContentBanner');
					$('<img/>').attr({src:$.img()+"/banner/mainContentBanner2.png", id:'mainContentBanner2'}).appendTo('#mainContentBanner');
		/*content 끝*/
					
		/*footer 시작*/
		$('<footer/>').attr({id:'footer'}).appendTo('#wrapper');
		$('<div/>').attr({id:'mainFooter'}).appendTo('#footer');
		$('#mainFooter').append(footerUI());
		/*footer 끝*/
					
		/*클릭 이벤트 시작*/
		$('#mylocation').addClass('ya_cusor').click(e=>{
			e.preventDefault();
			$.getScript($.ctx()+'/resources/js/taehyeong.js',()=>{
				taehyeong.main.init();
			});
		});
		$('#hotelSearch').addClass('ya_cusor').click(e=>{
			e.preventDefault();
			$.getScript($.ctx()+'/resources/js/heetae.js',()=>{
				heetae.main.init();
			});
		});
		$('#amdin').addClass('ya_cusor').click(e=>{
			e.preventDefault();
			$.getScript($.ctx()+'/resources/js/sanghoon.js',()=>{
				sanghoon.main.init();
			});
		});
		$('#logo_btn').click(e=>{ 
				e.preventDefault();
				$('#wrapper').empty();
				$('#nav').empty();
				$('#header').empty();
				$('#content').empty();
				$('#footer').empty();
				app.router.home();
			})
		$('#login_btn').addClass('ya_cusor').click(e=>{
				e.preventDefault();
				app.permision.login();
			});
		$('#board').addClass('ya_cusor').click(e=>{
				e.preventDefault();
				$.getScript($.ctx()+'/resources/js/sein.js',()=>{
				sein.board.cast();
				});
			});
		$('#add_btn').addClass('ya_cusor').click(e=>{
				e.preventDefault();
				app.permision.join();
			});
		/*클릭 이벤트 끝*/
		}
	)}
};
