"user strict"
var sein = sein || {};
sein.main=(()=>{
	var init=()=>{
		onCreate();
	}
	var onCreate =()=>{
		setContentView();
	}
	var setContentView =()=>{
		sein.board.boards();
	}
	return {init:init};
})();
sein.board ={
	boards : x=>{
		$('#header').empty();
		$('#content').empty();
		/*배너 슬라이드*/
		sein.service.banner();
		
		/*컨텐츠 리스트 전체*/
		sein.service.list({board_id:'cast',pageNo:'1'});
	}
}
sein.service ={
		banner : x=>{
			$('<div/>').attr({id:'div_banner',style:'margin-top:30px'}).appendTo($('#header'));
			$('<div/>').attr({id:'carouseltest','data-ride':'carousel'}).addClass('carousel slide').appendTo($('#div_banner'));
			$('<ol/>').addClass('carousel-indicators').appendTo($('#carouseltest'));
			$('<div/>').addClass('carousel-inner').appendTo($('#carouseltest'));
			let k;
			let clazz=['active'];
			for(k=1;k<=3;k++){
				$('<li/>').attr({'data-target':'#carouseltest', 'data-slide-to':k}).appendTo($('.carousel-indicators'));	
				$('<div/>').addClass('carousel-item '+clazz[k-1]).attr({id:'item'+k}).append($("<img/>").attr({src:$.img()+'/banner/banner_img'+k+'.jpg'}),
				$('<h3/>').addClass('carousel-caption center').text('테스트'+k).append($('<p>테스트 캡션 글자입니다.'+k+'</p>'))).appendTo($('.carousel-inner'));
			}
			
			$('<a/>').addClass('carousel-control-prev').attr({href:'#carouseltest',role:'button','data-slide':'prev'}).appendTo($('#carouseltest'));
			$('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'}).appendTo($('.carousel-control-prev'));
			$('<span/>').addClass('sr-only').html('이전').appendTo($('.carousel-control-prev')).appendTo($('.carousel-control-prev'));

			$('<a/>').addClass('carousel-control-next').attr({href:'#carouseltest',role:'button','data-slide':'next'}).appendTo($('#carouseltest'));
			$('<span/>').addClass('carousel-control-next-icon').attr({'aria-hidden':'true'}).appendTo($('.carousel-control-next'));
			$('<span/>').addClass('sr-only').html('다음').appendTo($('.carousel-control-next')).appendTo($('.carousel-control-next'));
			$('.carousel').carousel();
		},
		list : x=>{
			$('<div/>').attr({id:'cardlist_rap'}).appendTo($('#content'));
			$('<div/>').attr({id:'isotopeGallery',style:'position: relative; overflow: hidden; height: 1404px;'}).addClass('card_type clear isotope').appendTo($('#cardlist_rap'));
			$.ajax({
				url:$.ctx()+'/boards/',
				method:'post',
				contentType:'application/json',
				data:JSON.stringify({board_id:x.board_id,pageNo:x.pageNo}),
				success:d=>{
					$.each(d.list,(i,j)=>{
						$('<div/>').attr({id:'card_inner'+j.msg_seq}).addClass('card_inner isotope-item bord_all').appendTo($('#isotopeGallery'));
						$('<div/>').attr({id:'card_top'+j.msg_seq}).addClass('card_top').appendTo($('#card_inner'+j.msg_seq));
						$('<a/>').attr({href:'#'}).append($('<img/>').attr({src:$.img()+'/cast/cast_'+j.msg_seq+'.jpg',style:'position: static; width: 100%; height: 100%;'})).appendTo($('#card_top'+j.msg_seq))
						.click(e=>{
							sein.service.detail(j);
						});
						$('<div/>').addClass('card_bottom').attr({id:'card_bottom'+j.msg_seq}).appendTo($('#card_inner'+j.msg_seq));
						$('<div/>').addClass('user_pic').attr({id:'user_pic'+j.msg_seq}).appendTo($('#card_bottom'+j.msg_seq));
						$('<img/>').attr({src:$.img()+'/profile/profile.png'}).appendTo($('#user_pic'+j.msg_seq));
						$('<div/>').addClass('user_info').attr({id:'user_info'+j.msg_seq}).appendTo('#card_bottom'+j.msg_seq);
						$('<a/>').attr({href:'#'}).append($('<strong>'+j.msg_title+'</strong>')).appendTo($('#user_info'+j.msg_seq));
						$('<a/>').attr({href:'#'}).append($('<span>'+j.member_id+'</span>')).appendTo($('#user_info'+j.msg_seq));
						$('<div/>').addClass('user_cont').attr({id:'user_cont'+j.msg_seq}).appendTo($('#card_bottom'+j.msg_seq));
						$('<a/>').attr({href:'#'}).append($('<span>'+j.tag+'</span>')).appendTo($('#user_cont'+j.msg_seq));
						$('<div/>').addClass('count').append(
								$('<span/>').addClass('ico_like'),
								$('<b/>').html(j.like_count),
								$('<span/>').addClass('ico_read'),
								$('<b/>').html(j.msg_count)
								).appendTo($('#card_bottom'+j.msg_seq));
					
						$('.isotope_item').scroll();
						
					})
					
					$('<div>').addClass('bt_rap').appendTo($('#content'));
					$('<span/>').addClass('bt_more').append($('<button/>').attr({type:'submit'}).addClass('b_all').html('더보기')).appendTo($('.bt_rap'));


					$(".b_all").click(e=>{
						sein.service.list({board_id:'cast',pageNo:'2'});
					});

				},
				error:(m1,m2,m3)=>{
					alert(m3);
				}
				
			})
		},
		side_menu : x=>{
			$('<div/>').attr({id:'side_menu'}).addClass('side_menu').appendTo($('.con_detail'));
			$('<ul/>').append(
					$('<li/>').attr({name:'btnlike'}).append(
							$('<a/>').attr({href:"#none"}).append(
									$('<span/>').addClass('bl_like'))),
					$('<li/>').attr({name:'btnCommnet',style:'display: none'}).append(
							$('<a/>').attr({href:'#none',style:'display: none'}).addClass('reply').append(
									$('<span/>').attr({style:'display: none'}).addClass('bl_reply reply'))),
					$('<li/>').attr({name:'btnBookmark'}).append(
							$('<a/>').attr({href:"#none"}).append(
									$('<span/>').addClass('bl_bookmark'))),
					$('<li/>').append(
							$('<a/>').append(
								$('<span/>').addClass('bl_facebook'))).click(e=>{
									sein.service.sendFacebook();}),
					$('<li/>').append(
							$('<a/>').attr({href:'#none'}).append(
									$('<span/>').addClass('bl_share'))).click(e=>{
										sein.service.copyURL();}),
					$('<li/>').addClass('mg_top').append($('<a/>').attr({href:'#'}).append($('<span/>').addClass('bl_top')))
			).appendTo($('#side_menu'));
		},
		detail : x=>{
			$('#header').empty();
			$('#content').empty();
			$('<div/>').addClass('contents').attr({id:'topContent'}).appendTo($('#content'));
			$('<div/>').addClass('con_inner').appendTo($('#topContent'));
			$('<div/>').addClass('con_detail bord_b').appendTo($('.con_inner'));
			
			/*----사이드메뉴----*/
			sein.service.side_menu(x);
		
			$('<div/>').addClass('inner_bg').appendTo($('.con_detail'));
			$('<div/>').addClass('detail_user').appendTo($('.inner_bg'));
			$('<div/>').addClass('user_pic').appendTo($('.inner_bg'));
			$('<a/>').attr({href:'#',name:'jsonProfileImg'})
			.append($('<img src="'+$.img()+'/profile/profile.png" alt="" style="position: static; width: 100%; height: 100%;">'))
			.appendTo($('.user_pic'));
			$('<a href="/caster/30008731" class="user_name" name="jsonCasterLink"><span name="jsonNickName">펜셔니스타</span></a>')
			.appendTo($('.detail_user'));
			
			$('<div/>').addClass('detail_title').appendTo($('.inner_bg'));
			$('<h3/>').addClass('sc_out').appendTo($('.detail_title'));
			$('<p id="jsonTitle">'+x.msg_title+'</p>').appendTo($('.detail_title'));
			$('<div/>').addClass('count').appendTo($('.detail_title'));
			$('<span/>').addClass('day').attr({id:'jsonRegisterDate'}).html(x.msg_date).appendTo($('.count'));
			$('<span/>').addClass('ico_like').appendTo($('.count'));
			$('<b/>').attr({name:'jsonLikeCount'}).html(x.like_count).appendTo($('.count'));
			$('<span/>').addClass('ico_read').appendTo($('.count'));
			$('<b/>').attr({name:'readCount'}).html(x.msg_count).appendTo($('.count'));
			$('<a/>').attr({href:'#'}).addClass('reply').append(
					$('<span/>').html('댓글'),$('<b/>').attr({name:'jsonCommnetCount'}))
					.appendTo($('.detail_title'));
			
			
			$('<div/>').addClass('detail_area').appendTo($('.inner_bg'));
			$('<p/>').html('&nbsp').appendTo($('.detail_area'));
			/*--------content시작-------*/
			
			$('<h3>'+x.msg_content+'</h3>').appendTo($('.detail_area'));
			$('<div/>').attr({style:'text-align:center',align:'center'}).append(
					$('<img/>').attr({name:'target_contents_images',src:'http://yaimg.yanolja.com/v5/2018/10/04/13/1280/5bb59e3f8f9110.72529942.png'}))
			.appendTo($('.detail_area'));
			
			/*----- bottom 시작 -----*/
			
			$('<div/>').addClass('bt_rap').appendTo($('.inner_bg'));
			$('<div/>').addClass('bt_detail').appendTo($('.bt_rap'));
			$('<ul/>').append(
				$('<li/>').append(
					$('<button/>').attr({type:'button', name:'btnlike'}).append(
						$('<span/>').addClass('ico_detaillike')),
					$('<span>').addClass('bt_txt').html('좋아요'),
					$('<b/>').attr({name:'jsonLikeCount'}).html(x.like_count)
				),
				$('<li/>').append(
					$('<button/>').attr({type:'button', name:'btnBookmark'}).append(
							$('<span/>').addClass('ico_detailbook')),
							$('<span>').addClass('bt_txt').html('북마크'),
							$('<b/>').attr({name:'jsonBookCount'})
				),
				$('<li/>').append(
						$('<button/>').attr({type:'button'}).append(
								$('<span/>').addClass('ico_detailface')),
								$('<span>').addClass('bt_txt').html('페이스북공유')
				).click(e=>{
					sein.service.sendFacebook();
				}),
				$('<li/>').append(
						$('<button/>').attr({type:'button'}).append(
								$('<span/>').addClass('ico_detaillink link_url')),
								$('<span>').addClass('bt_txt').html('링크공유')
				).click(e=>{
					sein.service.copyURL();
				})
			).appendTo($('.bt_detail'));
			
			$('<div/>').attr({id:'inner_bg_caster',style:'height:140px'}).addClass('inner_bg type').appendTo($('.con_detail'));
			$('<div/>').addClass('inner_box').appendTo($('#inner_bg_caster'));
			$('<div/>').addClass('user_cast').appendTo($('.inner_box'));
			$('<div/>').addClass('user_pic').appendTo($('.user_cast'));
			$('<a/>').attr({href:'#',name:'jsonProfileImg'}).append(
					$('<img/>').attr({src:'https://img100.yanolja.com//20160318/20160318155331f6608c70-b980-4fc5-85d1-46431089e798.png',style:'position:static;width:100%;height:100%'})
			).appendTo($('.user_pic'));
			$('<div/>').addClass('user_txt').appendTo($('.user_cast'));
			$('<a/>').attr({href:'#',name:'jsonCasterLink'}).addClass('user_name')
			.append(
					$('<strong/>').attr({name:'jsonNickName'}).html(x.member_id)
			).appendTo($('.user_txt'));
			$('<p/>').attr({name:'oneLineIntro'}).html('캐스터 소개글').appendTo($('.user_txt'));
			$('<div/>').addClass('count').append(
					$('<span/>').html('구독'),
					$('<b/>').attr({name:'jsonSubscriberCounter'}).html(x.subscription_count)
			).appendTo($('.user_txt'));
			
			/*bt_read on, bt_read off 로 구독중 조절해야하니 변수 처리 요망*/
			$('<div/>').addClass('bt_read').append(
					$('<button/>').addClass('jsonSubscribedStatus').append($('<span/>').addClass('bt_reading')))
			.appendTo($('.user_cast'));
			sein.service.reply(x);
			
		},
		reply : x=>{
			$('<div/>').attr({id:'inner_bg_reply'}).addClass('inner_bg').appendTo($('.con_detail'));
			$('<div/>').addClass('reply_area').appendTo($('#inner_bg_reply'));
			$('<div/>').addClass('re_txt')
			.append($('<span/>').html('댓글'),$('<b>').attr({name:'jsonCommentCount'}).html(x.reply_count))
			.appendTo($('.reply_area'));
			
			$('<div/>').addClass('re_inner').appendTo($('#inner_bg_reply'));
			$('<div/>').addClass('edit_rap').appendTo($('.re_inner'));
			
			$('<div/>').addClass('re_write').attr({style:'height:98px'}).appendTo($('.edit_rap'));
			$('<textarea/>').attr({name:'commentText',rows:'4',cols:'50',placeholder:'댓글을 입력해주세요.'}).appendTo($('.re_write'));
			$('<div/>').addClass('bt_rap')
			.append($('<button/>').attr({type:'submit'}).addClass('btn_saveComment').append($('<b/>').attr({title:'commentWrite'}).html('댓글쓰기')))
			.appendTo($('.re_write'));
			$('<div/>').addClass('bt_box').appendTo($('.re_write'));
			
			$('<p/>').attr({id:'jsonPaging'}).appendTo($('.re_inner'));
			
			$('<div/>').addClass('re_box').appendTo($('.re_inner'));
			
			$('<div/>').attr({id:'re_comment'}).addClass('re_comment').appendTo($('.re_box'));
			$('<div/>').addClass('inner').append(
				$('<div/>').addClass('user_pic').append(
					$('<a/>').append(
						$('<img/>').attr({src:$.img()+'/profile/profile.png',style:'position: static; width: 100%; height: 100%;'})
					)
				),
				$('<div/>').addClass('user_text').append(
					$('<strong/>').html(x.member_id), /*추후 멤버테이블 조인걸어 이름으로 수정*/
					$('<span/>').addClass('date').html('   '+x.msg_date)
				),
				$('<div/>').addClass('re_cont').append(
					$('<p/>').html(x.msg_content)
				),
				$('<div/>').addClass('re_links').append(
					$('<div/>').append(
						$('<div/>').attr({id:'re_inner_write'}).addClass('inner').append(	
							$('<a/>').addClass('link2').attr({style:'color:red;'}).html('대댓글')
							.click(e=>{
								sein.service.re_write(x);
							}),
							$('<span/>').addClass('bar').html('|'),
							$('<a/>').addClass('link2 modify').attr({style:'color:red;'}).html('수정')
							.click(e=>{
								sein.service.re_modify(x);
							}),
							$('<span/>').addClass('bar').html('|'),
							$('<a/>').attr({href:'#'}).addClass('link2').html('삭제')	
							.click(e=>{
								alert('댓글삭제 액션');
							})
						)
					)
				),
				$('<div/>').attr({id:'reply_empty'}).appendTo($('#re_comment'))
			)
			.appendTo($('.re_comment'));
			
		},
		re_write : x=>{
			$('#reply_empty').empty();
			$('<div/>').addClass('re_write add').attr({id:'re_write_add',style:'height:98px'}).append(
				$('<textarea/>').attr({name:'recommentText',placeholder:'대댓글을 입력해주세요.'}),
				$('<div/>').addClass('bt_rap')
				.append($('<button/>').attr({type:'submit'}).addClass('btn_saveComment').append($('<b/>').html('대댓글쓰기')))
				.click(e=>{
					sein.service.re_read(x);
				})
			).appendTo($('#reply_empty'));
		},
		re_modify : x=>{
			$('#reply_empty').empty();
			$('<div/>').addClass('re_write modify').attr({id:'re_write_add',style:'height:98px'}).append(
				$('<textarea/>').attr({name:'recommentText',placeholder:'수정할 기존 댓글보여주기'}),
				$('<div/>').addClass('bt_rap')
				.append($('<button/>').attr({type:'submit'}).addClass('btn_saveComment').append($('<b/>').html('수정하기')))
				.click(e=>{
					alert('댓글 수정하기 액션');
				})
			).appendTo($('#reply_empty'));
		},
		re_read : x=>{
			alert('대댓글 쓰기 액션');
			$('#reply_empty').empty();
			$('<div/>').attr({id:'rere_comment',style:'margin-left:50px'}).addClass('re_comment').appendTo($('#reply_empty'));
			$('<div/>').addClass('inner').append(
				$('<div/>').addClass('user_pic').append(
					$('<a/>').append(
						$('<img/>').attr({src:$.img()+'/profile/profile.png',style:'position: static; width: 100%; height: 100%;'})
					)
				),
				$('<div/>').addClass('user_text').append(
					$('<strong/>').html(x.member_id), /*추후 멤버테이블 조인걸어 이름으로 수정*/
					$('<span/>').addClass('date').html('   '+x.msg_date)
				),
				$('<div/>').addClass('re_cont').append(
					$('<p/>').html(x.msg_content)
				),
				$('<div/>').addClass('re_links').append(
					$('<div/>').append(
						$('<div/>').attr({id:'re_inner_write'}).addClass('inner').append(	
							$('<span/>').addClass('bar').html('|'),
							$('<a/>').addClass('link2 modify').attr({style:'color:red;'}).html('수정')
							.click(e=>{
								sein.service.re_modify(x);
							}),
							$('<span/>').addClass('bar').html('|'),
							$('<a/>').attr({href:'#'}).addClass('link2').html('삭제')	
							.click(e=>{
								alert('댓글삭제 액션');
							})
						)
					)
				),
				$('<div/>').attr({id:'reply_empty1'}).appendTo($('#re_comment1'))
			)
			.appendTo($('#reply_empty'));
		},
		sendFacebook : x=>{
			alert('sendFacebook 액션');
		},
		copyURL : x=>{
			alert('copyURL 액션');
		}
}