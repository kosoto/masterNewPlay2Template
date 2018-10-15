"use strict"
$.prototype.nullChecker=x=>{
	var flag = false;
	var i = 0;
	for (i in x){
		if(x[i]===''){
			flag = true;
		}
	}
	return flag;
}
$.prototype.zeroChecker=x=>{
	var flag = false;
	var i = 0;
	for (i in x){
		if(x[i]==0){
			flag = true;
		}
	}
	return flag;
}	