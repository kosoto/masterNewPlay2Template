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
		.appendTo($('#nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.basic();
		});
		
		
		$('#amdin').remove();
		$('<a/>').attr({id:'sales_btn', href:'#'}).html('매출정보')
		.addClass('ya_cusor')
		.appendTo($('#nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.sales();
		});
		
		$('#add_btn').remove();
		$('<a/>').attr({id:'accom_btn', href:'#'}).html('숙소정보')
		.addClass('ya_cusor')
		.appendTo($('#nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.accom();
		});
		
		$('#login_btn').remove();
		$('<a/>').attr({id:'custo', href:'#'}).html('고객정보')
		.addClass('ya_cusor')
		.appendTo($('#nav_right')).click(e=>{
			e.preventDefault();
			sanghoon.service.custo();
		});
		
		$('<a/>').attr({id:'top_accom_btn', href:'#'}).html('top 숙소')
		.addClass('ya_cusor')
		.appendTo($('#nav_right')).click(e=>{
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
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px" }).appendTo($('#content'));
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
					$('<img/>').attr({src:$.img()+'/admin_test/TOP_average.PNG', style:'width:70%'}).appendTo('#col_5');
				
		},
		sales : x=>{
			console.log('sales 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper'}).appendTo('#content');
			$('<div/>').addClass('sales_graph').appendTo('#page-wrapper');
			$('<img/>').attr({src:$.img()+'/admin_test/sales_graph.PNG'}).appendTo('.sales_graph');
			$('<div/>').addClass('sales_table').appendTo('#page-wrapper');
			table.appendTo('.sales_table');
			let revenue = ['날짜','1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
			let hotel = ['호텔','1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','11000','12000'];
			let motel = ['모텔','100','200','300','400','500','600','700','800','900','1000','1100','1200'];
			let table = $('<table/>').attr({id:'table'});
			let thead = $('<thead/>').attr({id:'thead'});
			let tr = $('<tr/>');
			$.each(revenue.list,(i,j)=>{
				$('<th/>').html(j).appendTo(tr);
			})
			tr.appendTo(thead);
			thead.appendTo(table);
			$('<tbody/>').appendTo(table);
			for(let i; i<hotel.length();i++){
				$('<tr/>').append(
				$('<td/>').attr('width', '5%').html(i)
				).appendTo($('tbody'));
			}
			for(let j; j<motel.length();j++){
				$('<tr/>').append(
				$('<td/>').attr('width', '5%').html(j)		
				).appendTo($('tbody'));
			}
			
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
						$('<img/>').attr({src:$.img()+'/admin_test/price_reservation.PNG', style:'width:500px'}).appendTo('#price_reservation');
					$('<div/>').attr({id:'accom_reservation'}).appendTo('.left_wrapper');
							$('<img/>').attr({src:$.img()+'/admin_test/accom_reservation.PNG', style:'width:500px'}).appendTo('#accom_reservation');
				$('<div/>').addClass('right_wrapper').appendTo('#page-wrapper');
					$('<div/>').attr({id:'location'}).appendTo('.right_wrapper');
							$('<img/>').attr({src:$.img()+'/admin_test/location.PNG', style:'width:500px'}).appendTo('#location');
			
		},
		custo : x=>{
			console.log('custo 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px" }).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
				$('<div/>').addClass('col-lg-5').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/age_reservation.PNG', style:'padding:30px; width:90%'}).appendTo('.col-lg-5');
				$('<div/>').addClass('col-lg-7').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/accom_compare.PNG', style:'padding:30px; width:80%; height:100%'}).appendTo('.col-lg-7');
				
				$('<div/>').addClass('col-lg-12').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/reservation_count.PNG', style:'padding:30px; width:90%'}).appendTo('.col-lg-12');
			
		},
		top_accom : x=>{
			console.log('top_accom 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px"}).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
				$('<div/>').addClass('col-lg-12').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/admin_test/accom_list.PNG'}).appendTo('.col-lg-12');
		}
		
}
