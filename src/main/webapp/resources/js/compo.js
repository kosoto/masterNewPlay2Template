"use strict"
var ui = {
	div : x=>{return $('<div/>').attr(x);},
	span:x=>{return $('<span/>').attr(x);},
	anchor:x=>{ // ui.anchor({id:'',txt:'text'});
		return $("<a/>").attr({id:x.id,href:"#"}).html(x.txt);},
	ul:x=>{ 
		let y = $('<ul/>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({id:x.id+'-'+i}).appendTo(y);
		}
			return y;
	},
	input : x=>{ // id,val
		let y = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.txt
						+'</span>'
						+'<input id="'+x.id+'" type="text" placeholder="'+x.placeholder+'" class="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>').appendTo(y);
		return y;
	},
	label : x=>{
		return $('<label/>').attr('for',x.id).text(x.txt);
	},
	button : x =>{
		/*default(outline), primary(blue), success(green), info(light blue), warning(yellow), danger(red), dark(blakc), light(white), link(trans)*/
		return $('<button/>').attr('type','button').addClass('btn btn-'+x.clazz).html(x.txt);
	},
	tbl : x =>{
		let d = $('<div/>').addClass('panel panel-'+x.type);
		let ph = $('<div/>').addClass('panel-heading').html(x.head);
		let pb = $('<div/>').addClass('pannel-body').html('<p>'+x.body+'</p>');
		let t = $('<table/>').attr({id:x.id}).addClass(x.clazz);
		let thead = $('<thead/>')
		let tr= $('<tr/>');
		$.each(x.list,(i,j)=>{
			$('<th/>').html(j).appendTo(tr);
		})
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
		ph.appendTo(d);
		pb.appendTo(d);
		t.appendTo(d);
		return d;
	},
	page : x=>{
		return $('<ul/>').attr({id:'ul'}).addClass('pagination justify-content-center').appendTo($('<nav/>').attr('aria-label','페이지네이션'));
	}
}