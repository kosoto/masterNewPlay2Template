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
					$('<div/>').attr({id:'loginAlert'}).addClass('validAlert').appendTo('.inputBox');
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
								$('#loginAlert').empty();
								validate ="아이디가 없습니다.";
								$('<div/>').text(validate).appendTo('#loginAlert');
							}else if(d.pw_valid==='WRONG'){
								$('#loginAlert').empty();
								validate ="비밀번호가 틀렸습니다.";	
								$('<div/>').text(validate).appendTo('#loginAlert');
							}else{
								$.cookie("loginID", d.mbr.member_id);
									e.preventDefault();
									app.service.header();
									$('.nav_right').empty();
									$('#content').empty();
									$('<a/>').attr({href:'#', id:'reservationList'}).html('예약내역').addClass('ya_cusor').appendTo('.nav_right');
									$('<a/>').attr({href:'#', id:'mypage'}).html(d.mbr.nickname + '님의 마이페이지').addClass('ya_cusor').appendTo('.nav_right').click(e=>{
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
		$('#content').attr({style:'background: #f5f5f5'});
		$('<div/>').addClass('mypageTableDiv').appendTo('#content');
		$('<div/>').addClass('mypageBottomNav').appendTo('#content');
			app.service.myBenefit(d);
					$('<a/>').addClass('nav-link active').attr({href:'#',id:'myBenefit'}).html('나의혜택').appendTo('#nav-item1').click(e=>{
						app.service.myBenefit(d);
					});
				$('<li/>').addClass('nav-item').attr({id:'nav-item2'}).appendTo('#nav-tabs');
					$('<a/>').addClass('nav-link active').attr({href:'#',id:'modifyDelete'}).html('개인정보수정/탈퇴').appendTo('#nav-item2').click(e=>{
						$('.nav-tabsHeadMain').remove();
						$('.nav-tabsHead').remove();
					$('<div/>').addClass('nav-tabsHeadMain').attr({id:'nav-tabsHeadMain1'}).appendTo('#content');
							$('<div/>').addClass('nav-tabsHead').html('개인정보 수정').attr({id:'nav-tabsHead1'}).appendTo('#nav-tabsHeadMain1');
								$('<ul/>').addClass('info_lists').attr({style:'padding-left:130px'}).appendTo('#nav-tabsHead1');
									$('<li/>').appendTo('.info_lists').attr({id:'modifyNickname'}).html('<b>닉네임</b>');
										$('<span/>').html(d.mbr.nickname).attr({style:"margin-left: 200px; font-weight normal;"}).appendTo('#modifyNickname')
										$('<button/>').addClass('btn btn-light').attr({'data-target':"#layerpop",'data-toggle':"modal"}).text('변경').appendTo('#modifyNickname').click(e=>{
											app.service.myModal();
											$('<h4/>').html('닉네임 변경하기').appendTo('#modalTitle');
											$('<div/>').html('현재 닉네임').attr({style:'padding-bottom:15px; font-weight: bold'}).appendTo('.modal-body');
											$('<div/>').html(d.mbr.nickname).attr({style:'padding-bottom:15px'}).appendTo('.modal-body');
											$('<div/>').html('변경 닉네임').attr({style:'padding-bottom:15px;font-weight: bold'}).appendTo('.modal-body');
											$('<input/>').attr({type:'text', id:'changeNickname', placeholder:'변경하려는 닉네임을 입력해주세요'}).addClass('inputData').appendTo('.modal-body');
											$('<button/>').addClass('radi_button btn_save').attr({id:'update_password'}).text('수정완료').appendTo('.modal-body').click(e=>{
												alert('수정완료 클릭');
											});
										});
									
								$('<li/>').appendTo('.info_lists').attr({id:'modifyPhone'}).html('<b>휴대폰번호</b>');
									$('<span/>').html(d.mbr.phone).attr({style:"margin-left: 170px; font-weight normal;"}).appendTo('#modifyPhone')
									$('<button/>').addClass('btn btn-light').attr({'data-target':"#layerpop",'data-toggle':"modal"}).text('변경').appendTo('#modifyPhone').click(e=>{
										app.service.myModal();
										$('<h4/>').html('휴대폰 번호 변경하기').appendTo('#modalTitle');
										$('<div/>').html('현재 휴대폰번호').attr({style:'padding-bottom:15px; font-weight: bold'}).appendTo('.modal-body');
										$('<div/>').html(d.mbr.phone).attr({style:'padding-bottom:15px'}).appendTo('.modal-body');
										$('<div/>').html('변경 휴대폰번호').attr({style:'padding-bottom:15px;font-weight: bold'}).appendTo('.modal-body');
										$('<input/>').attr({type:'text', id:'changePhone', placeholder:'변경하려는 핸드폰 번호를 입력해주세요.'}).addClass('inputData').appendTo('.modal-body');
										$('<button/>').addClass('radi_button btn_save').attr({id:'update_phone'}).text('수정완료').appendTo('.modal-body').click(e=>{
											alert('수정완료 클릭');
										});
									});
									
								$('<li/>').appendTo('.info_lists').attr({id:'modifyPassword'}).html('<b>비밀번호</b>');
									$('<button/>').addClass('btn btn-light').attr({'data-target':"#layerpop",'data-toggle':"modal"}).text('변경').appendTo('#modifyPassword').click(e=>{
										app.service.myModal();
										$('<h4/>').html('비밀번호 변경하기').appendTo('#modalTitle');
										$('<input/>').attr({type:'text', id:'currentPassword', placeholder:'현재 비밀번호를 입력하세요.'}).addClass('inputData').appendTo('.modal-body');
										$('<input/>').attr({type:'text', id:'changePassword', placeholder:'변경하려는 비밀번호를 입력하세요.'}).addClass('inputData').appendTo('.modal-body');
										$('<input/>').attr({type:'text', id:'changePassword', placeholder:'변경하려는 비밀번호를 한번 더 입력하세요.'}).addClass('inputData').appendTo('.modal-body');
										$('<button/>').addClass('radi_button btn_save').attr({id:'update_password'}).text('수정완료').appendTo('.modal-body').click(e=>{
											alert('수정완료 클릭');
										});
									});	
									
					$('<div/>').addClass('nav-tabsHeadMain').attr({id:'nav-tabsHeadMain2'}).appendTo('#content');		
						$('<div/>').addClass('nav-tabsHead').html('간편로그인 연결 계정').attr({id:'nav-tabsHead2'}).appendTo('#nav-tabsHeadMain2');
							$('<li/>').addClass('info_lists').attr({style:'padding-left:130px',id:'modifyExternalService'}).appendTo('#nav-tabsHead2');
					
					$('<div/>').addClass('nav-tabsHeadMain').attr({id:'nav-tabsHeadMain3'}).appendTo('#content');							
						$('<div/>').addClass('nav-tabsHead').html('회원탈퇴').attr({id:'nav-tabsHead3', style:'padding-bottom:50px'}).appendTo('#nav-tabsHeadMain3');	
							$('<li/>').addClass('info_lists').attr({style:'padding-left:130px',id:'memberWithdrawal'}).appendTo('#nav-tabsHead3');
								$('<div/>').html('탈퇴를 하시려면 안내 및 동의를 받아야합니다. 정말 탈퇴하시겠습니까?').appendTo('#memberWithdrawal');
								$('<button/>').addClass('btn btn-light').attr({'data-target':"#layerpop",'data-toggle':"modal"}).text('탈퇴하기').appendTo('#memberWithdrawal').click(e=>{
									app.service.myModal();
									$('<h4/>').html('회원 탈퇴하기').appendTo('#modalTitle');
									$('<div/>').html('탈퇴진행을 위해 비밀번호를 한 번 더 입력해주세요.').attr({style:'padding-bottom:15px;font-weight: bold'}).appendTo('.modal-body');
									$('<input/>').attr({type:'text', id:'withdrawlPassword', placeholder:'비밀번호를 입력하세요.'}).addClass('inputData').appendTo('.modal-body');
									$('<button/>').addClass('radi_button btn_save').attr({id:'withdrawal_password'}).text('확인').appendTo('.modal-body').click(e=>{
										if($('#withdrawlPassword').val()==d.mbr.password){
											$.ajax({
												url:$.ctx()+'/member/delete',
												method:'post',
												contentType:'application/json',
												data:JSON.stringify({
													member_id:$.cookie("loginID"),
													password:$('#withdrawlPassword').val()
												}),
												success:d=>{
													$('#deleteAlert').remove();
													$('<div/>').html('탈퇴가 처리되었습니다. 이용해주셔서 감사드립니다.').addClass('validAlert').attr({id:'deleteAlert',style:'padding-bottom:15px;'}).appendTo('.modal-body');
												},
												error:(m1,m2,m3)=>{alert(m3);}
											});
										}else{
											$('#deleteAlert').remove();
											$('<div/>').html('비밀번호가 틀렸습니다. 다시 확인해주세요.').addClass('validAlert').attr({id:'deleteAlert',style:'padding-bottom:15px;font-weight: bold'}).appendTo('.modal-body');
										}
									});
								});
					});
				
			$('<table width="1000px" height="450px"/>').addClass('mypageTable').appendTo('.mypageTableDiv');
				$('<tr/>').attr({id:'tr1'}).appendTo('.mypageTable');
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
					$('<td/>').attr({id:'photoChangeBtn'}).appendTo('#tr4');
					$('<td/>').html('○ 주소').appendTo('#tr4');
					$('<td/>').html(d.mbr.address).appendTo('#tr4');
					
				$('<tr/>').attr({id:'tr5'}).appendTo('.mypageTable');
					$('<td text-align: center;/>').html('한줄평').appendTo('#tr5');
					$('<td/>').html('○ 우편번호').appendTo('#tr5');
					$('<td/>').html(d.mbr.zipcode).appendTo('#tr5');
					$('<button/>').addClass('btn btn-primary').attr({'data-target':"#layerpop",'data-toggle':"modal", id:'modal1'}).appendTo('#photoChangeBtn').html('사진변경').click(e=>{
							app.service.myModal();
							$('<h4/>').html('사진 변경하기').appendTo('#modalTitle');
								$('<form/>').attr({name:"uploadForm", id:"uploadForm", enctype:"multipart/form-data", method:"post"}).appendTo('.modal-body');
									$('<table width="100%" height="150px" border="1px"/>').addClass('table').appendTo('#uploadForm');
										$('<tbody>').attr({id:'fileTableTbody'}).appendTo('.table');
											$('<tr/>').attr({id:'fileTableTbodyTr'}).appendTo('#fileTableTbody');
												$('<td/>').attr({id:'dropZone'}).appendTo('#fileTableTbodyTr');
			
										
					    // 파일 등록
						/*+'    <a href="#" onclick="uploadFile(); return false;" class="btn bg_01">파일 업로드</a>'*/
								$('<a/>').attr({href:'#'}).addClass('btn bg_01').text('파일 업로드').appendTo('#uploadForm').click(e=>{
							        // 등록할 파일 리스트
							        var uploadFileList = Object.keys(fileList);
							        // 파일이 있는지 체크
							        if(uploadFileList.length == 0){
							            alert("파일이 없습니다.");
							            return;
							        }
							        // 용량을 500MB를 넘을 경우 업로드 불가
							        if(totalFileSize > maxUploadSize){
							            alert("총 용량 초과\n총 업로드 가능 용량 : " + maxUploadSize + " MB");
							            return;
							        }
							        if(confirm("등록 하시겠습니까?")){
							            // 등록할 파일 리스트를 formData로 데이터 입력
							            var form = $('#uploadForm');
							            var formData = new FormData(form);
							            for(var i = 0; i < uploadFileList.length; i++){
							                formData.append('files', fileList[uploadFileList[i]]);
							            }
							            alert('formData'+ formData);
							            $.ajax({
							            	url:$.ctx()+'/member/fileUpload',
							                method:'POST',
							                contentType:'application/json',
							                enctype:'multipart/form-data',
							                processData:false,
							                contentType:false,
							                cache:false,
							                data:formData,
							                success:d=>{
							                    if(result.data.length > 0){
							                        alert("성공");
							                        location.reload();
							                    }else{
							                        alert("실패");
							                        location.reload();
							                    }
							                }
							            });
							        }
								});
						
				/* file upload 시작*/
					    // 파일 리스트 번호
					    var fileIndex = 0;
					    // 등록할 전체 파일 사이즈
					    var totalFileSize = 0;
					    // 파일 리스트
					    var fileList = new Array();
					    // 파일 사이즈 리스트
					    var fileSizeList = new Array();
					    // 등록 가능한 파일 사이즈 MB
					    var uploadSize = 50;
					    // 등록 가능한 총 파일 사이즈 MB
					    var maxUploadSize = 500;
					 
					    $(function (){
					        fileDropDown();
					    });
					 
					    // 파일 드롭 다운
					    function fileDropDown(){
					        var dropZone = $("#dropZone");
					        //Drag기능 
					        dropZone.on('dragenter',function(e){
					            e.stopPropagation();
					            e.preventDefault();
					            // 드롭다운 영역 css
					            dropZone.css('background-color','#E3F2FC');
					        });
					        dropZone.on('dragleave',function(e){
					            e.stopPropagation();
					            e.preventDefault();
					            // 드롭다운 영역 css
					            dropZone.css('background-color','#FFFFFF');
					        });
					        dropZone.on('dragover',function(e){
					            e.stopPropagation();
					            e.preventDefault();
					            // 드롭다운 영역 css
					            dropZone.css('background-color','#E3F2FC');
					        });
					        dropZone.on('drop',function(e){
					            e.preventDefault();
					            // 드롭다운 영역 css
					            dropZone.css('background-color','#FFFFFF');
					            
					            var files = e.originalEvent.dataTransfer.files;
					            if(files != null){
					                if(files.length < 1){
					                    alert("폴더 업로드 불가");
					                    return;
					                }
					                selectFile(files)
					            }else{
					                alert("ERROR");
					            }
					        });
					    }
					 
					    // 파일 선택시
					    function selectFile(fileObject){
					        var files = null;
					 
					        if(fileObject != null){
					            // 파일 Drag 이용하여 등록시
					            files = fileObject;
					        }else{
					            // 직접 파일 등록시
					            files = $('#multipaartFileList_' + fileIndex)[0].files;
					        }
					        
					        // 다중파일 등록
					        if(files != null){
					            for(var i = 0; i < files.length; i++){
					                // 파일 이름
					                var fileName = files[i].name;
					                var fileNameArr = fileName.split("\.");
					                // 확장자
					                var ext = fileNameArr[fileNameArr.length - 1];
					                // 파일 사이즈(단위 :MB)
					                var fileSize = files[i].size / 1024 / 1024;
					                
					                if($.inArray(ext, ['exe', 'bat', 'sh', 'java', 'jsp', 'html', 'js', 'css', 'xml']) >= 0){
					                    // 확장자 체크
					                    alert("등록 불가 확장자");
					                    break;
					                }else if(fileSize > uploadSize){
					                    // 파일 사이즈 체크
					                    alert("용량 초과\n업로드 가능 용량 : " + uploadSize + " MB");
					                    break;
					                }else{
					                    // 전체 파일 사이즈
					                    totalFileSize += fileSize;
					                    
					                    // 파일 배열에 넣기
					                    fileList[fileIndex] = files[i];
					                    
					                    // 파일 사이즈 배열에 넣기
					                    fileSizeList[fileIndex] = fileSize;
					 
					                    // 업로드 파일 목록 생성
					                    addFileList(fileIndex, fileName, fileSize);
					 
					                    // 파일 번호 증가
					                    fileIndex++;
					                }
					            }
					        }else{
					            alert("ERROR");
					        }
					    }
					 
					    // 업로드 파일 목록 생성
					    function addFileList(fIndex, fileName, fileSize){
					        var html = "";
					        html += "<tr id='fileTr_" + fIndex + "'>";
					        html += "    <td class='left' >";
					        html +=         fileName + " / " + fileSize + "MB "  + "<a href='#' onclick='deleteFile(" + fIndex + "); return false;' class='btn small bg_02'>삭제</a>"
					        html += "    </td>"
					        html += "</tr>"
					 
					        $('#fileTableTbody').append(html);
					    }
					 
					    // 업로드 파일 삭제
					    function deleteFile(fIndex){
					        // 전체 파일 사이즈 수정
					        totalFileSize -= fileSizeList[fIndex];
					        
					        // 파일 배열에서 삭제
					        delete fileList[fIndex];
					        
					        // 파일 사이즈 배열 삭제
					        delete fileSizeList[fIndex];
					        
					        // 업로드 파일 테이블 목록에서 삭제
					        $("#fileTr_" + fIndex).remove();
					    }
						
				/* file upload 끝*/
					    
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
		},
		myBenefit : d=>{
			$('<ul/>').addClass('nav nav-tabs').attr({id:'nav-tabs'}).appendTo('.mypageBottomNav');
			$('<li/>').addClass('nav-item').attr({id:'nav-item1'}).appendTo('#nav-tabs');
				$('.nav-tabsHeadMain').remove();
				$('.nav-tabsHead').remove();
				$('<div/>').addClass('nav-tabsHeadMain').attr({id:'nav-tabsHeadMain2'}).appendTo('#content');
				$('<div/>').addClass('nav-tabsHead').html('<b>포인트</b>').attr({id:'nav-tabsHead2',style:'padding-bottom:50px;'}).appendTo('#nav-tabsHeadMain2');
					$('<ul/>').addClass('info_lists1').attr({id:'info_lists1',style:'padding-left:130px'}).appendTo('#nav-tabsHead2');
						$('<li/>').appendTo('#info_lists1').attr({id:'pointHead'}).html('<b>예약포인트</b>');
					$('<ul/>').addClass('info_lists').attr({id:'info_lists2',style:'padding-left:130px;margin-bottom: unset;padding-top: 15px;padding-bottom: 15px;'}).appendTo('#nav-tabsHead2');	
						$('<li/>').appendTo('#info_lists2').html(d.mbr.point);
		},
		myModal : d=>{
			$('#modalTitle').empty();
			$('.modal-body').empty();
			$('<div class="modal fade" id="layerpop">'
					+'  <div class="modal-dialog">'
					+'    <div class="modal-content">'
					+'      <div class="modal-header">'
					+'        <h4 class="modal-title" id="modalTitle"></h4>'
					+'        <button type="button" class="close" data-dismiss="modal">×</button>'
					+'      </div>'
					+'      <div class="modal-body">'
					+'      </div>'
					+'      <div class="modal-footer">'
					+'        	<button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>'
					+'      </div>'
					+'    </div>'
					+'  </div>'
					+'</div>').appendTo('#content');
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
