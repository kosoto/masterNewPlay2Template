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
			
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px" }).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
					
				$('<div/>').addClass('col-lg-3').attr({id:'graph_1', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/pie_graph_1.PNG', style:'width:100%'}).appendTo('#graph_1');
						
					
				$('<div/>').addClass('col-lg-3').attr({id:'graph_2', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/pie_graph_2.PNG', style:'width:100%'}).appendTo('#graph_2');
					
					
				$('<div/>').addClass('col-lg-6').attr({id:'graph_3', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/accom_type_graph.PNG', style:'width:80%; height:100%'}).appendTo('#graph_3');
				
				
				$('<div/>').addClass('col-lg-7').attr({style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/customer_graph.PNG', style:'width:100%; height:100%'}).appendTo('.col-lg-7');
				$('<div/>').addClass('col-lg-5').attr({style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/customer_gen_graph.PNG', style:'width:75%'}).appendTo('.col-lg-5');
				
					
				$('<div/>').addClass('col-lg-4').attr({id:'col_3', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/TOP_local.PNG', style:'width:70%'}).appendTo('#col_3');
				$('<div/>').addClass('col-lg-4').attr({id:'col_4', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/TOP_views.PNG', style:'width:70%'}).appendTo('#col_4');
				$('<div/>').addClass('col-lg-4').attr({id:'col_5', style:'padding:30px'}).appendTo('.row');
					$('<img/>').attr({src:$.img()+'/TOP_average.PNG', style:'width:70%'}).appendTo('#col_5');
				
		},
		sales : x=>{
			console.log('sales 버튼 클릭');
			$('#content').empty();
			$
		},
		accom : x=>{
			console.log('accom 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px"}).appendTo('#content');
			
		},
		custo : x=>{
			console.log('custo 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px" }).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
				$('<div/>').addClass('col-lg-5').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/age_reservation.PNG', style:'padding:30px; width:90%'}).appendTo('.col-lg-5');
				$('<div/>').addClass('col-lg-7').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/accom_compare.PNG', style:'padding:30px; width:80%; height:100%'}).appendTo('.col-lg-7');
				
				$('<div/>').addClass('col-lg-12').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/reservation_count.PNG', style:'padding:30px; width:90%'}).appendTo('.col-lg-12');
			
		},
		top_accom : x=>{
			console.log('top_accom 버튼 클릭');
			$('#content').empty();
			$('<div/>').attr({id:'page-wrapper', style:"padding:30px"}).appendTo($('#content'));
			$('<div/>').addClass('row').appendTo('#page-wrapper');
				$('<div/>').addClass('col-lg-12').appendTo('.row');
					$('<img/>').attr({src:$.img()+'/accom_list.PNG'}).appendTo('.col-lg-12');
		}
		
}
