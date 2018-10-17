"user strict"
var sein = sein || {};

sein.board ={
	cast : x=>{
		$('#header').empty();
		$('#content').empty();
		$('<div/>').attr({id:'sein_content',style:'background-color: #BDBDBD'}).appendTo($('#content'));
		
		/*배너 슬라이드*/
		sein.service.banner($('#sein_content'));
		
		/*컨텐츠 리스트 전체*/
		$('<div/>').attr({id:'cardlist_rap'}).appendTo($('#sein_content'));
		
		/*글쓰기 버튼*/
		$('<div/>').addClass('bt_rap').append(
				$('<span/>').addClass('bt_write').append(
						$('<button>').addClass('b_all').html('글쓰기'))
		).appendTo($('#cardlist_rap')).click(e=>{
			sein.service.write();
		});
		
		$('<div>').addClass('grid card_type').appendTo($('#cardlist_rap'));
		
		var page=1;
		$('<div/>').attr({id:'isotopeGallery'}).addClass('card_type clear isotope').appendTo($('#cardlist_rap'));
		$.ajax({
			url:$.ctx()+'/cast/',
			method:'post',
			contentType:'application/json',
			data:JSON.stringify({board_id:'cast',pageNumber:page+""}),
			success:d=>{
				$.each(d.list,(i,j)=>{
					sein.service.list(j);
				})
			},
			error:(m1,m2,m3)=>{
				alert(m3);
			}
		})
		
		$('<div/>').attr({id:'bt_more'}).addClass('bt_rap').append(
			$('<span/>').addClass('bt_more').append(
					$('<button>').addClass('b_all').html('더보기')
			)
		).appendTo($('#cardlist_rap')).click(e=>{
			$('#bt_more').remove();
			/*무한스크롤*/
			$(window).scroll(()=>{
				if($(document).height() <= $(window).scrollTop()+$(window).height()){
					$.ajax({
						url:$.ctx()+'/cast/',
						method:'post',
						contentType:'application/json',
						data:JSON.stringify({board_id:'cast',pageNumber:String(++page)}),
						success:d=>{
							setTimeout(()=>{
								$.each(d.list,(i,j)=>{
									sein.service.list(j);
								})
							},100)
							if(d.page.pageSize===page){
								$(window).off("scroll");
							}
						},
						error:(m1,m2,m3)=>{
							alert(m3);
						}
					});
				}
			})
		})
		
	}
}
sein.service ={
		banner : x=>{
			$('<div/>').addClass('banner_rap').attr({id:'div_banner'}).appendTo($('#sein_content'));
			$('<div/>').attr({id:'carousel','data-ride':'carousel'}).addClass('carousel slide').appendTo($('#div_banner'));
			$('<ol/>').addClass('carousel-indicators').appendTo($('#carousel'));
			$('<div/>').addClass('carousel-inner').appendTo($('#carousel'));
			let k;
			let clazz=['active'];
			for(k=1;k<=3;k++){
				$('<li/>').attr({'data-target':'#carousel', 'data-slide-to':k}).appendTo($('.carousel-indicators'));	
				$('<div/>').addClass('carousel-item '+clazz[k-1]).attr({id:'item'+k}).append($("<img/>").attr({src:$.img()+'/banner/banner_img'+k+'.jpg'}),
				$('<h3/>').addClass('carousel-caption center').text('테스트'+k).append($('<p>테스트 캡션 글자입니다.'+k+'</p>'))).appendTo($('.carousel-inner'));
			}
			
			$('<a/>').addClass('carousel-control-prev').attr({href:'#carousel',role:'button','data-slide':'prev'}).appendTo($('#carousel'));
			$('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'}).appendTo($('.carousel-control-prev'));
			$('<span/>').addClass('sr-only').html('이전').appendTo($('.carousel-control-prev')).appendTo($('.carousel-control-prev'));

			$('<a/>').addClass('carousel-control-next').attr({href:'#carousel',role:'button','data-slide':'next'}).appendTo($('#carousel'));
			$('<span/>').addClass('carousel-control-next-icon').attr({'aria-hidden':'true'}).appendTo($('.carousel-control-next'));
			$('<span/>').addClass('sr-only').html('다음').appendTo($('.carousel-control-next')).appendTo($('.carousel-control-next'));
			$('.carousel').carousel();
		},
		list : x=>{
			$('<div/>').addClass('grid-item card_inner').append(
				$('<div/>').addClass('card_top').append(
					$('<a/>').attr({href:'#'}).append(
						$('<img/>').attr({src:$.img()+'/cast/'+x.msg_photo})
						.click(e=>{
							$.getJSON($.ctx()+'/cast/read/'+x.msg_seq,d=>{
								sein.service.detail(j);	
							})
						})
					)
				),
				$('<div/>').addClass('card_bottom').append(
					$('<div/>').addClass('user_pic').append(
						$('<img/>').attr({src:$.img()+'/profile/'+x.member_id+'.jpg'})				
					),
					$('<div/>').addClass('user_info').append(
						$('<a/>').attr({href:'#'}).append($('<strong>'+x.msg_title+'</strong>'))
						.click(e=>{
							$.getJSON($.ctx()+'/cast/read/'+x.msg_seq,d=>{
								sein.service.detail(x);	
							})
						}),
						$('<a/>').attr({href:'#'}).append($('<span>'+x.member_id+'</span>'))
					),
					$('<div/>').addClass('user_cont').append(
						$('<a/>').attr({href:'#'}).append($('<span>'+x.tag+'</span>'))			
					),
					$('<div/>').addClass('count').append(
						$('<span/>').addClass('ico_like'),
						$('<b/>').html(x.like_count),
						$('<span/>').addClass('ico_read'),
						$('<b/>').html(x.msg_count)
					)
				)
			).appendTo($('.grid'));
			$('.grid').isotope('destroy');
			var $grid = $('.grid').isotope({itemSelector:'.grid-item'})
			$grid.imagesLoaded().progress(()=>{$grid.isotope('layout');});
		},
		side_menu : x=>{
			$('<div/>').attr({id:'side_menu'}).addClass('side_menu').appendTo($('.con_detail'));
			$('<ul/>').addClass('sein_ul').append(
					$('<li/>').append(
							$('<a/>').attr({href:"#none"}).append(
									$('<span/>').addClass('bl_like'))).click(e=>{
										alert('좋아요 클릭');
									}),
					$('<li/>').append(
							$('<a/>').attr({href:"#none"}).append(
									$('<span/>').addClass('bl_bookmark'))).click(e=>{
										alert('북마크 클릭');
									}),
					$('<li/>').append(
							$('<a/>').attr({href:"#none"}).append(
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
			$(window).off("scroll"); /*무한스크롤 비활성화*/
			$('#wrapper').scroll(()=>{e.preventDefault()});
			$('#sein_content').empty();
			$('<div/>').addClass('contents').attr({id:'topContent'}).appendTo($('#sein_content'));
			$('<div/>').addClass('con_inner').attr({style:'padding-top:30px'}).appendTo($('#topContent'));
			$('<div/>').addClass('con_detail bord_b').appendTo($('.con_inner'));
			
			/*----사이드메뉴----*/
			sein.service.side_menu(x);
		
			$('<div/>').addClass('inner_bg').appendTo($('.con_detail'));
			$('<div/>').addClass('detail_user').appendTo($('.inner_bg'));
			$('<div/>').addClass('user_pic').appendTo($('.inner_bg'));
			$('<a/>').attr({href:'#'})
			.append($('<img src="'+$.img()+'/profile/'+x.member_id+'.jpg"'+' alt="" style="position: static; width: 100%; height: 100%;">'))
			.appendTo($('.user_pic')).click(e=>{
				alert('프로필이미지 클릭');
			});
			$('<a/>').attr({href:'#'}).addClass('user_name').append($('<span/>').html(x.member_id))
			.appendTo($('.detail_user')).click(e=>{
				alert('닉네임 클릭');
			});
			$('<div/>').attr({style:'float:right'}).append(
				$('<a/>').addClass('btn btn-danger').attr({style:'margin-right:10px'}).html('수정')
				.click(e=>{
					
					
				}),
				$('<a/>').addClass('btn btn-danger').html('삭제').click(e=>{
					if(confirm('삭제하시겠습니까?')==true){
						$.getJSON($.ctx()+'/cast/delete/'+x.board_id+'/'+x.msg_seq);
						sein.board.cast();
					}
				})
			).appendTo($('.detail_user'))
			
			
			$('<div/>').addClass('detail_title').appendTo($('.inner_bg'));
			$('<h3/>').addClass('sc_out').appendTo($('.detail_title'));
			$('<p/>').attr({id:'jsonTitle'}).html(x.msg_title).appendTo($('.detail_title'));
			$('<div/>').addClass('count').appendTo($('.detail_title'));
			$('<span/>').addClass('day').attr({id:'jsonRegisterDate'}).html(x.msg_date).appendTo($('.count'));
			$('<span/>').addClass('ico_like').appendTo($('.count'));
			$('<b/>').html(x.like_count).appendTo($('.count'));
			$('<span/>').addClass('ico_read').appendTo($('.count'));
			$('<b/>').html(x.msg_count).appendTo($('.count'));
			$('<a/>').attr({href:'#'}).addClass('reply').append(
					$('<span/>').html('댓글'),$('<b/>'))
					.appendTo($('.detail_title')).click(e=>{
						var offset = $('.bt_rap').offset();
						$('html').animate({scrollTop : offset.top},400)							
					});
			
			
			$('<div/>').addClass('detail_area').appendTo($('.inner_bg'));
			$('<p/>').html('&nbsp').appendTo($('.detail_area'));
			/*--------content시작-------*/
			
			$('<h3>'+x.msg_content+'</h3>').appendTo($('.detail_area'));
			$('<div/>').attr({style:'text-align:center',align:'center'}).append(
					$('<img/>').attr({src:$.img()+'/cast/'+x.msg_photo}))
			.appendTo($('.detail_area'));
			
			/*----- bottom 시작 -----*/
			$('<div/>').addClass('bt_rap').appendTo($('.inner_bg'));
			$('<div/>').addClass('bt_detail').appendTo($('.bt_rap'));
			$('<ul/>').append(
				$('<li/>').append(
					$('<button/>').attr({type:'button'}).append(
						$('<span/>').addClass('ico_detaillike')),
					$('<span>').addClass('bt_txt').html('좋아요'),
					$('<b/>').html(x.like_count)
				).click(e=>{
					alert('좋아요 클릭');
				}),
				$('<li/>').append(
					$('<button/>').attr({type:'button'}).append(
							$('<span/>').addClass('ico_detailbook')),
							$('<span>').addClass('bt_txt').html('북마크')
				).click(e=>{
					alert('북마크 클릭');
				}),
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
			$('<a/>').attr({href:'#'}).append(
					$('<img/>').attr({src:$.img()+'/profile/'+x.member_id+'.jpg',style:'position:static;width:100%;height:100%'})
			).appendTo($('.user_pic'));
			$('<div/>').addClass('user_txt').appendTo($('.user_cast'));
			$('<a/>').attr({href:'#'}).addClass('user_name')
			.append(
					$('<strong/>').html(x.member_id)
			).appendTo($('.user_txt'));
			$('<p/>').html('캐스터 소개글').appendTo($('.user_txt'));
			$('<div/>').addClass('count').append(
					$('<span/>').html('구독'),
					$('<b/>').html(x.subscription_count)
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
			.append($('<span/>').html('댓글'),$('<b>').html(x.reply_count))
			.appendTo($('.reply_area'));
			
			$('<div/>').addClass('re_inner').appendTo($('#inner_bg_reply'));
			$('<div/>').addClass('edit_rap').appendTo($('.re_inner'));
			
			$('<div/>').addClass('re_write').attr({style:'height:98px'}).appendTo($('.edit_rap'));
			$('<textarea/>').attr({id:'commentText',rows:'4',cols:'50',placeholder:'댓글을 입력해주세요.'}).appendTo($('.re_write'));
			$('<div/>').addClass('bt_rap')
			.append($('<button/>').attr({type:'submit'}).addClass('btn_saveComment').append($('<b/>').attr({title:'commentWrite'}).html('댓글쓰기')))
			.appendTo($('.re_write'))
			.click(e=>{
				$.ajax({
					url:$.ctx()+'/cast/reWrite/',
					method:'post',
					contentType:'application/json',
					data:JSON.stringify({msg_content:$('#commentText').val(),board_id:x.board_id,msg_seq:x.msg_seq,member_id:x.member_id}),   /*member_id:x.member_id 로그인 아이디로 수정요*/
					success:d=>{
						$('#inner_bg_reply').remove();						
						sein.service.reply(x);
					},
					error:(m1,m2,m3)=>{alert(m3)}
				})
			});
			/*댓글 리스트*/
			$('<div/>').addClass('re_box').appendTo($('.re_inner'));
			sein.service.re_list(x);
			
		},
		re_list : x=>{
			$.getJSON($.ctx()+'/cast/reply/'+x.board_id+'/'+x.msg_seq,d=>{
				$.each(d.list,(i,j)=>{
					sein.service.re_read(j);	
				})
			})
		},
		re_write : x=>{
			$('#reply_empty').empty();
			$('<div/>').addClass('re_write add').attr({id:'re_write_add',style:'height:98px'}).append(
				$('<textarea/>').attr({id:'msg_title',placeholder:'대댓글을 입력해주세요.'}),
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
				$('<textarea/>').attr({id:'mod_con',placeholder:x.msg_content}),
				$('<div/>').addClass('bt_rap')
				.append($('<button/>').attr({type:'submit'}).addClass('btn_saveComment').append($('<b/>').html('수정하기')))
				.click(e=>{
					$.ajax({
						url:$.ctx()+'/cast/reModify/',
						method:'post',
						contentType:'application/jason',
						data:JSON.stringify({msg_content:$('#mod_con').val()}),
						success:d=>{
							sein.service.re_read(x);
						},
						error:(m1,m2,m3)=>{alert(m3);}
					})
				})
			).appendTo($('#reply_empty'));
		},
		re_read : x=>{
			$('<div/>').attr({id:'re_comment'+x.msg_seq}).addClass('re_comment').appendTo($('.re_box'));
			$('<div/>').addClass('inner').append(
				$('<div/>').addClass('user_pic').append(
					$('<a/>').append(
						$('<img/>').attr({src:$.img()+'/profile/'+x.member_id+'.jpg',style:'position: static; width: 100%; height: 100%;'})
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
								if(confirm('삭제하시겠습니까?')==true){
								$.getJSON($.ctx()+'/cast/reDelete/'+x.board_id+'/'+x.board_depth+'/'+x.msg_seq);
								var offset = $('#re_comment'+x.msg_seq).offset();
								$('html').animate({scrollTop : offset.top},400)				
								$('#re_comment'+x.msg_seq).remove();
								}
							})
						)
					)
				),
				$('<div/>').attr({id:'reply_empty'}).appendTo($('#re_comment'+x.msg_seq))
			)
			.appendTo($('#re_comment'+x.msg_seq));
		},
		sendFacebook : x=>{
			alert('sendFacebook 액션');
		},
		copyURL : x=>{
			alert('copyURL 액션');
		},
		write : x=>{
			$('#sein_content').empty();
			$('<div/>').addClass('contents').attr({id:'topContent'}).appendTo($('#sein_content'));
			$('<div/>').addClass('con_inner').attr({style:'padding-top:30px'}).appendTo($('#topContent'));
			$('<div/>').addClass('con_detail bord_b').appendTo($('.con_inner'));
			$('<div/>').addClass('inner_bg').appendTo($('.con_detail'));
			$('<h1/>').html('CAST').appendTo('.inner_bg');
			$('<textarea/>').attr({id:'msg_title',rows:'1',cols:'107',placeholder:'제목을 입력해주세요.'})
			.appendTo($('.inner_bg'));
			$('<textarea/>').attr({id:'msg_content',rows:'15',cols:'107',placeholder:'내용을 입력해주세요.'})
			.appendTo($('.inner_bg'));
			$('<textarea/>').attr({id:'tag',rows:'1',cols:'107',placeholder:'태그를 입력해주세요.'})
			.appendTo($('.inner_bg'));
			$('<div/>').attr({style:'text-align:right'})
			.append($('<button/>').addClass('btn btn-danger').attr({style:'margin-right:5px'}).html('글쓰기')
					.click(e=>{
						$.ajax({
							url:$.ctx()+'/cast/write/',
							method:'post',
							contentType:'application/json',
							data:JSON.stringify({board_id:'cast',msg_title:$('#msg_title').val(),msg_content:$('#msg_content').val(),tag:$('#tag').val()}),
							success:d=>{
								sein.board.cast();
							},
							error:(m1,m2,m3)=>{alert(m3)}
						})
					}),
					$('<button/>').addClass('btn btn-danger').html('취소'))
					.click(e=>{
						sein.board.cast();
					})
			.appendTo($('.inner_bg'));
			
		}
}