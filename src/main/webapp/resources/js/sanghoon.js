"use strict";
var sanghoon = sanghoon || {};

sanghoon.main =(()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		$('#header').empty();
		$('#mylocation').remove();
		$('#hotelSearch').remove();
		$('#amdin').remove();
		
		$('#board').remove();
		$('<a/>').attr({id:'basic_btn', href:'#'}).html('기본정보')
		.addClass('ya_cusor')
		.appendTo($('.nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.basic();
		});
		
		
		$('#amdin').remove();
		$('<a/>').attr({id:'sales_btn', href:'#'}).html('매출정보')
		.addClass('ya_cusor')
		.appendTo($('.nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.sales();
		});
		
		$('#add_btn').remove();
		$('<a/>').attr({id:'accom_btn', href:'#'}).html('숙소정보')
		.addClass('ya_cusor')
		.appendTo($('.nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.accom();
		});
		
		$('#login_btn').remove();
		$('<a/>').attr({id:'custo', href:'#'}).html('고객정보')
		.addClass('ya_cusor')
		.appendTo($('.nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.custo();
		});
		
		$('<a/>').attr({id:'top_accom_btn', href:'#'}).html('top 숙소')
		.addClass('ya_cusor')
		.appendTo($('.nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.top_accom();
		});
		sanghoon.service.basic();
	};
	return {init:init};
		
})();
/*sanghoon.admin =(()=>{
	var basic = ()=>{
		
	}
})();*/
sanghoon.service = {
		basic : x=>{
			console.log('basic 버튼 클릭');
			console.log($.img());
			console.log($.img()+'/pie_graph_1.PNG');
			$('#content').empty();
			$('#footer').empty();
			$('<div/>').attr({id:'page-wrapper'}).appendTo($('#content'));
			$('<div/>').addClass('basic_first').appendTo('#page-wrapper');
			
			$('<div/>').attr({id:'available'}).appendTo('.basic_first');
			$('<img/>').attr({src:$.img()+'/admin_test/pie_graph_1.PNG'}).appendTo('#available');
			$('<div/>').attr({id:'booked'}).appendTo('.basic_first');
			$('<img/>').attr({src:$.img()+'/admin_test/pie_graph_2.PNG'}).appendTo('#booked');
			$('<div/>').attr({id:'have_accom_type'}).appendTo('.basic_first');
			$('<img/>').attr({src:$.img()+'/admin_test/accom_type_graph.PNG'}).appendTo('#have_accom_type');
			
			$('<div/>').addClass('basic_middle').appendTo('#page-wrapper');
			$('<div/>').attr({id:'age_member'}).appendTo('.basic_middle');
			$('<img/>').attr({src:$.img()+'/admin_test/customer_graph.PNG', style:'width:600px; height:210px'}).appendTo('#age_member');
			$('<div/>').attr({id:'member_gender'}).appendTo('.basic_middle');
			$('<img/>').attr({src:$.img()+'/admin_test/customer_gen_graph.PNG', style:'width:300px; height:210px'}).appendTo('#member_gender');
			
			$('<div/>').addClass('basic_last').appendTo('#page-wrapper');
			
			
			$('<div/>').attr({id:'top_local'}).appendTo('.basic_last');
			$('<img/>').attr({src:$.img()+'/admin_test/TOP_local.PNG'}).appendTo('#top_local');
			$('<div/>').attr({id:'top_views'}).appendTo('.basic_last');
			$('<img/>').attr({src:$.img()+'/admin_test/TOP_views.PNG'}).appendTo('#top_views');
			$('<div/>').attr({id:'top_average'}).appendTo('.basic_last');
			$('<img/>').attr({src:$.img()+'/admin_test/TOP_average.PNG'}).appendTo('#top_average');
			
			
			
			/*$('<div/>').attr({id:'page-wrapper', style:"padding:30px" }).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
					
				$('<div/>').addClass('col-lg-3').attr({id:'graph_1', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/pie_graph_1.PNG', style:'width:100%'}).appendTo('#graph_1');
					
					
				$('<div/>').addClass('col-lg-3').attr({id:'graph_2', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/pie_graph_2.PNG', style:'width:100%'}).appendTo('#graph_2');
					
					
				$('<div/>').addClass('col-lg-6').attr({id:'graph_3', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/accom_type_graph.PNG', style:'width:80%; height:100%'}).appendTo('#graph_3');
				
				
				$('<div/>').addClass('col-lg-7').attr({style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/customer_graph.PNG', style:'width:100%; height:100%'}).appendTo('.col-lg-7');
				$('<div/>').addClass('col-lg-5').attr({style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/customer_gen_graph.PNG', style:'width:75%'}).appendTo('.col-lg-5');
				
				
				$('<div/>').addClass('col-lg-4').attr({id:'col_3', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/TOP_local.PNG', style:'width:70%'}).appendTo('#col_3');
				$('<div/>').addClass('col-lg-4').attr({id:'col_4', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/TOP_views.PNG', style:'width:70%'}).appendTo('#col_4');
				$('<div/>').addClass('col-lg-4').attr({id:'col_5', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/TOP_average.PNG', style:'width:70%'}).appendTo('#col_5');*/
				
		},
		sales : x=>{
			console.log('sales 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper'}).appendTo('#content');
			$('<div/>').addClass('sales_graph').appendTo('#page-wrapper');
			$('<img/>').attr({src:$.img()+'/admin_test/sales_graph.PNG', style:'display:block; margin-left: auto; margin-right: auto'}).appendTo('.sales_graph');
			$('<div/>').addClass('sales_table').appendTo('#page-wrapper');
			let revenue = ['수익','1100','2200','3300','4400','5500','6600','7700','8800','9900','11000','12100','13200'];
			let hotel = ['호텔','1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','11000','12000'];
			let motel = ['모텔','100','200','300','400','500','600','700','800','900','1000','1100','1200'];
			let thead = ['','1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
			$('<table/>').addClass('table').appendTo('.sales_table');
			$('<thead/>').addClass('thead').appendTo('.table');
			$('<tr/>').attr({id:'thead_tr'}).appendTo('.thead');
			$.each(thead,(i,j)=>{
				$('<th/>').addClass('sales_th').html(j).appendTo('#thead_tr');
			});
			$('<tbody/>').addClass('tbody').appendTo('.table');
			$('<tr/>').attr({id:'tbody_tr_1'}).appendTo('.tbody');
			$.each(hotel,(i,j)=>{
				$('<td/>').html(j).appendTo('#tbody_tr_1');
			});
			$('<tr/>').attr({id:'tbody_tr_2'}).appendTo('.tbody');
			$.each(motel,(i,j)=>{
				$('<td/>').html(j).appendTo('#tbody_tr_2');
			});
			$('<tr/>').attr({id:'tbody_tr_3'}).appendTo('.tbody');
			$.each(revenue,(i,j)=>{
				$('<td/>').html(j).appendTo('#tbody_tr_3');
			});
			
			
			
		},
		accom : x=>{
			console.log('accom 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper'}).appendTo('#content');
				$('<div/>').addClass('left_wrapper').appendTo('#page-wrapper');
							
					$('<div/>').attr({id:'local_box'}).appendTo('.left_wrapper')
					$('<select/>').attr({id:'local_sel'}).appendTo('#local_box');
					$.each(['서울','경기','인천','강원','제주','대전','충북','충남','세종','부산','울산','경남','대구','경북','광주','전남','전주','전북'],(i,j)=>{
						$('<option/>').attr({value:j}).html(j).appendTo('#local_sel');
					});
					
					$('<div/>').attr({id:'price_reservation'}).appendTo('.left_wrapper');
						$('<img/>').attr({src:$.img()+'/admin_test/price_reservation.PNG', style:'width:500px; display:block; margin-left:auto; margin-right:auto'}).appendTo('#price_reservation');
					$('<div/>').attr({id:'accom_reservation'}).appendTo('.left_wrapper');
							$('<img/>').attr({src:$.img()+'/admin_test/accom_reservation.PNG', style:'width:500px; display:block; margin-left:auto; margin-right:auto'}).appendTo('#accom_reservation');
				$('<div/>').addClass('right_wrapper').appendTo('#page-wrapper');
					$('<div/>').attr({id:'location'}).appendTo('.right_wrapper');
					var mapContainer = document.getElementById('location'), // 지도를 표시할 div를 만들어놓음 
				    mapOption = {
				        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
				        level: 3 // 지도의 확대 레벨
				    };  

					// 지도를 생성합니다    
					var map = new daum.maps.Map(mapContainer, mapOption); 

					// 주소-좌표 변환 객체를 생성합니다
					var geocoder = new daum.maps.services.Geocoder();

					// 주소로 좌표를 검색합니다
					geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {

						// 정상적으로 검색이 완료됐으면 
						if (status === daum.maps.services.Status.OK) {

							var coords = new daum.maps.LatLng(result[0].y, result[0].x);

							// 결과값으로 받은 위치를 마커로 표시합니다
							var marker = new daum.maps.Marker({
								map: map,
								position: coords
							});

							// 인포윈도우로 장소에 대한 설명을 표시합니다
							var infowindow = new daum.maps.InfoWindow({
								content: '<div style="width:150px;text-align:center;padding:6px 0;">제주호텔</div>'
							});
							infowindow.open(map, marker);

							// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
							map.setCenter(coords);
						} 
					});
							//$('<img/>').attr({src:$.img()+'/admin_test/location.PNG', style:'width:500px; display:block; margin-left: auto; margin-right: auto'}).appendTo('#location');
			
		},
		custo : x=>{
			console.log('custo 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper'}).appendTo($('#content'));
			$('<div/>').addClass('custo_div_1').appendTo('#page-wrapper');
			
			$('<div/>').attr({id:'age_reservation'}).appendTo('.custo_div_1');
			$('<img/>').attr({src:$.img()+'/admin_test/age_reservation.PNG', style:'width:400px; height:303px; display:block;margin-left:auto;margin-right:auto'}).appendTo('#age_reservation');
			$('<div/>').attr({id:'age_accom'}).appendTo('.custo_div_1');
			$('<img/>').attr({src:$.img()+'/admin_test/accom_compare.PNG', style:'display:block;margin-left:auto;margin-right:auto'}).appendTo('#age_accom');
			$('<div/>').addClass('custo_div_2').appendTo('#page-wrapper');
			$('<div/>').attr({id:'reser_count'}).appendTo('.custo_div_2');
			$('<img/>').attr({src:$.img()+'/admin_test/reservation_count.PNG', style:'width:1050px; display:block; margin-left:auto;margin-right:auto'}).appendTo('#reser_count');
			/*$('<div/>').attr({id:'page-wrapper', style:"padding:30px" }).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
				$('<div/>').addClass('col-lg-5').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/age_reservation.PNG', style:'padding:30px; width:90%'}).appendTo('.col-lg-5');
				$('<div/>').addClass('col-lg-7').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/accom_compare.PNG', style:'padding:30px; width:80%; height:100%'}).appendTo('.col-lg-7');
				
				$('<div/>').addClass('col-lg-12').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/reservation_count.PNG', style:'padding:30px; width:90%'}).appendTo('.col-lg-12');*/
			
		},
		top_accom : x=>{
			console.log('top_accom 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper'}).appendTo($('#content'));
			$('<div/>').addClass('accom_list').appendTo('#page-wrapper');
			$('<img/>').attr({src:$.img()+'/admin_test/accom_list.PNG', style:'width:60%;display:block;margin-left:auto;margin-right:auto'}).appendTo('.accom_list');
			/*$('<div/>').attr({id:'page-wrapper', style:"padding:30px"}).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
				$('<div/>').addClass('col-lg-12').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/accom_list.PNG'}).appendTo('.col-lg-12');*/
		}
		
}
