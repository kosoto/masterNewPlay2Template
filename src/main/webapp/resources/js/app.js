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
						data:JSON.stringify({member_id:$('#member_id').val(),password:$('#password').val()}),
						success:d=>{
							let validate ="";
							if(d.id_valid==='WRONG'){
								validate ="아이디가 없습니다.";
							}else if(d.pw_valid==='WRONG'){
								validate ="비밀번호가 틀렸습니다.";	
							}else{
								$.cookie("loginID", d.mbr.member_id);
									e.preventDefault();
									app.service.header();
									$('.nav_right').empty();
									$('#content').empty();
									$('<a/>').attr({href:'#', id:'reservationList'}).html('예약내역').addClass('ya_cusor').appendTo('.nav_right');
									$('<a/>').attr({href:'#', id:'mypage'}).html(d.mbr.member_id + '님의 마이페이지').addClass('ya_cusor').appendTo('.nav_right').click(e=>{
										/*e.preventDefault();*/
										$.ajax({
											url:$.ctx()+'/member/auth',
											method:'post',
											contentType:'application/json',
											data:JSON.stringify({
												member_id:$.cookie("loginID"),
												}),
											success:d=>{
												mypage(d);
											},
											error:(m1,m2,m3)=>{alert(m3);}
										});
										
									});
									$('#reservationList').click(e=>{
											e.preventDefault();
									});
							}
							$('#validate').html(validate);
						},
						error:(m1,m2,m3)=>{
							alert('에러발생'+m3);
						}
				});
		});
	}
	var join =()=>{
		$('#header').empty();
		$('#content').empty();
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
	}
	var mypage =d=>{
		$('#header').empty();
		$('#content').empty();
			$('<div/>').addClass('mypageTableDiv').appendTo('#content');
			$('<table width="840px" height="400px"/>').addClass('mypageTable').appendTo('.mypageTableDiv');
				$('<tr/>').attr({id:'tr1'}).appendTo('.mypageTable');
		/*		$('<img/>').attr({src:$.img()+"/profile/", id:'#logoImage'});
				$("<img/>").attr({src:$.img()+'/banner/mainBanner'+k+'.JPG'});*/
					$('<td  width="40%"/>').attr({rowspan:"3"}).html('사진 대신 일단 쿠키 : ' + $.cookie("loginID")).appendTo('#tr1');
					$('<td  width="30%"/>').html('○ 성별').appendTo('#tr1');
					$('<td  width="30%"/>').html(d.mbr.gender).appendTo('#tr1');
				$('<tr/>').attr({id:'tr2'}).appendTo('.mypageTable');
					$('<td/>').html('○ 나이').appendTo('#tr2');
					$('<td/>').html(d.mbr.age).appendTo('#tr2');
				$('<tr/>').attr({id:'tr3'}).appendTo('.mypageTable');
					$('<td/>').html('○ 휴대폰번호').appendTo('#tr3');
					$('<td/>').html(d.mbr.phone).appendTo('#tr3');
				$('<tr/>').attr({id:'tr4'}).appendTo('.mypageTable');
						/*모달  끝*/
					$('<td/>').html(d.mbr.nickname).appendTo('#tr4');
					$('<td/>').html('○ 주소').appendTo('#tr4');
					$('<td/>').html(d.mbr.address).appendTo('#tr4');
					
				$('<tr/>').attr({id:'tr5'}).appendTo('.mypageTable');
					$('<td text-align: center;/>').html('한줄평').appendTo('#tr5');
					$('<td/>').html('○ 우편번호').appendTo('#tr5');
					$('<td/>').html(d.mbr.zipcode).appendTo('#tr5');
					$('<button/>').addClass('btn btn-primary').attr({'data-target':"#layerpop",'data-toggle':"modal", id:'modal1'}).appendTo('#content').html('클릭').click(e=>{
						/*$('<div/>').addClass('modal fade').attr({id:'layerpop'});
								$('<div/>').addClass('modal-dialog').appendTo('.modal fade')
								$('<div/>').addClass('modal-content').appendTo('.modal-dialog');
									$('<div/>').addClass('modal-header').text('header').appendTo('.modal-content');
										$('<button/>').addClass('close').attr({type:"button", 'data-dismiss':"modal"}).html('x').appendTo('.modal-header');
									$('<div/>').addClass('modal-body').text('body').appendTo('.modal-content');
									$('<div/>').addClass('modal-footer').text('footer').appendTo('.modal-content');
										$('<button/>').addClass('btn btn-default').attr({type:"button",'data-dismiss':"modal"}).html('닫기').appendTo('.modal-footer')*/
						$('<div class="modal fade" id="layerpop" >'
								+'  <div class="modal-dialog">'
								+'    <div class="modal-content">'
								+'      <div class="modal-header">'
								+'        <button type="button" class="close" data-dismiss="modal">×</button>'
								+'        <!-- header title -->'
								+'        <h4 class="modal-title">프로필 수정하기</h4>'
								+'      </div>'
								+'      <div class="modal-body">'
								+'            Body'
								+'      </div>'
								+'      <div class="modal-footer">'
								+'        Footer'
								+'        <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>'
								+'      </div>'
								+'    </div>'
								+'  </div>'
								+'</div>')
								.appendTo('#content');
						});
					
					
	}
	return {login : login, join : join, mypage:mypage}
})();


app.service = {
		header :x=>{
			/*header 시작*/
			$('<header/>').attr({id:'header'}).appendTo('#wrapper');
			$('<div/>').attr({id:'mainheader'}).appendTo('#header');		
			/*banner 시작*/
			$('<div/>').attr({id:'div_banner0',style:'margin-bottom:5%'}).appendTo($('#mainheader'));
			$('<div/>').attr({id:'carousel0','data-ride':'carousel'}).addClass('carousel slide').appendTo($('#div_banner0'));
			$('<ol/>').addClass('carousel-indicators').attr({id:'carousel-indicators0'}).appendTo($('#carousel0'));
			$('<div/>').addClass('carousel-inner').attr({id:'carousel-inner0'}).appendTo($('#carousel0'));
			let k;
			let clazz=['active'];
			for(k=1;k<=3;k++){
				$('<li/>').attr({'data-target':'#carousel', 'data-slide-to':k}).appendTo($('#carousel-indicators0'));	
				$('<div/>').addClass('carousel-item '+clazz[k-1]).attr({id:'item'+k}).append($("<img/>").attr({src:$.img()+'/banner/banner_main'+k+'.jpg'}),
				$('<h3/>').addClass('carousel-caption center').append($('<p></p>'))).appendTo($('#carousel-inner0'));
			}
			
			$('<a/>').addClass('carousel-control-prev').attr({href:'#carousel0',role:'button','data-slide':'prev', id:'carousel-control-prev0'}).appendTo($('#carousel0'));
			$('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'}).appendTo($('#carousel-control-prev0'));
			$('<span/>').addClass('sr-only').html('이전').appendTo($('#carousel-control-prev0')).appendTo($('#carousel-control-prev0'));

			$('<a/>').addClass('carousel-control-next').attr({href:'#carousel0',role:'button','data-slide':'next', id:'carousel-control-next0'}).appendTo($('#carousel0'));
			$('<span/>').addClass('carousel-control-next-icon').attr({'aria-hidden':'true'}).appendTo($('#carousel-control-next0'));
			$('<span/>').addClass('sr-only').html('다음').appendTo($('#carousel-control-next0')).appendTo($('#carousel-control-next0'));
			$('.carousel').carousel();
			/*banner 시작*/	
			
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
					$('<button/>').attr({type:'button'}).addClass('btn-search-stay color-gradation').html('숙소검색').appendTo('#mainButton')
					.click(e=>{
						alert($('#checkin_date').val());
						alert($('#checkout_date').val());
					});
			/*header 끝*/
		},
		content :x=>{
			/*content 시작*/
			$('<div/>').attr({id:'content'}).appendTo('#wrapper');
				$('<div/>').attr({id:'mainContent'}).appendTo('#content');
				/*banner 시작*/
				$('<div/>').attr({id:'div_banner1',style:'margin-top:5%;margin-bottom:5%'}).appendTo($('#mainContent'));
				$('<div/>').attr({id:'carousel1','data-ride':'carousel'}).addClass('carousel slide').appendTo($('#div_banner1'));
				$('<ol/>').addClass('carousel-indicators').attr({id:'carousel-indicators1'}).appendTo($('#carousel1'));
				$('<div/>').addClass('carousel-inner').attr({id:'carousel-inner1'}).appendTo($('#carousel1'));
				let k;
				let clazz=['active'];
				for(k=1;k<=2;k++){
					$('<li/>').attr({'data-target':'#carousel', 'data-slide-to':k}).appendTo($('#carousel-indicators1'));	
					$('<div/>').addClass('carousel-item '+clazz[k-1]).attr({id:'item'+k}).append($("<img/>").attr({src:$.img()+'/banner/mainBanner'+k+'.JPG'}),
					$('<h3/>').addClass('carousel-caption center').append($('<p></p>'))).appendTo($('#carousel-inner1'));
				}
				
				$('<a/>').addClass('carousel-control-prev').attr({href:'#carousel1',role:'button','data-slide':'prev', id:'carousel-control-prev1'}).appendTo($('#carousel1'));
				$('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'}).appendTo($('#carousel-control-prev1'));
				$('<span/>').addClass('sr-only').html('이전').appendTo($('#carousel-control-prev1')).appendTo($('#carousel-control-prev1'));

				$('<a/>').addClass('carousel-control-next').attr({href:'#carousel1',role:'button','data-slide':'next', id:'carousel-control-next1'}).appendTo($('#carousel1'));
				$('<span/>').addClass('carousel-control-next-icon').attr({'aria-hidden':'true'}).appendTo($('#carousel-control-next1'));
				$('<span/>').addClass('sr-only').html('다음').appendTo($('#carousel-control-next1')).appendTo($('#carousel-control-next1'));
				$('.carousel').carousel();
				/*banner 시작*/		
			/*content 끝*/	
		}
}


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
		$('#wrapper').empty();
		$('#nav').empty();
		$('#header').empty();
		$('#content').empty();
		$('#footer').empty();
		$.getScript($.script()+'/footer.js',()=>{
		/*nav 시작*/
		$('<div/>').attr({id:'mainNav'}).appendTo($('#wrapper'));
			$('<nav/>').attr({id:'nav'}).appendTo($('#mainNav'));
				$('<a/>').addClass('yanoljaMainLogo').attr({id:'logo_btn'}).appendTo('#nav');
					$('<img/>').attr({src:$.img()+"/icon/yanoljaMainLogo.JPG", id:'#logoImage'}).appendTo('#logo_btn')
				$('<div/>').addClass('nav_left').appendTo('#nav');
					$('<a/>').attr({href:'#', id:'mylocation'}).html('내주변(김태형)').appendTo('.nav_left');
					$('<a/>').attr({href:'#', id:'hotelSearch'}).html('숙소검색(한희태)').appendTo('.nav_left');
					$('<a/>').attr({href:'#', id:'board'}).html('캐스트(최세인)').appendTo('.nav_left');
				$('<div/>').addClass('nav_right').appendTo('#nav');
					$('<a/>').attr({href:'#', id:'amdin'}).html('관리자(김상훈)').appendTo('.nav_right');
					$('<a/>').attr({href:'#', id:'add_btn'}).html('회원가입').appendTo('.nav_right');
					$('<a/>').attr({href:'#', id:'login_btn'}).html('로그인').appendTo('.nav_right');
		/*nav 끝*/
		
		/*header 시작*/
		app.service.header();			
		/*header 끝*/
		
		/*content 시작*/
		app.service.content();
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
