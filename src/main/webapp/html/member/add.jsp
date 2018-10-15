<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<div class="container text-center">
<div id="content-box">
	<h1>회원가입</h1><br />
	<form id="join_form" >
	<div id="join_form_textbox" >
		<input type="text" name="userid" placeholder="아이디를 입력하세요." required="required"/><br /><br />
		<input type="password" name="password" placeholder="비밀번호를 입력하세요." required="required"/><br /><br />
		<input type="text" name="name" placeholder="이름을 입력하세요." required="required"/><br /><br />
		<input type="text" name="ssn" placeholder="주민등록번호를 입력하세요.(예: xxxxxx-x)" required="required" /><br /><br />
		<input type="email" name="email" placeholder="email을 입력하세요." required="required"/><br /><br />
		<input type="tel" name="phone" placeholder="핸드폰 번호를 입력하세요." required="required"/><br /><br />
	</div>
	<div id="join_form_otherbox">
		소속팀
		<input type="radio" name="teamid" value="none" checked="checked" /> 없음
		<input type="radio" name="teamid" value="nolja" /> 걍놀자
		<input type="radio" name="teamid" value="jienHouse" /> 지은이네
		<input type="radio" name="teamid" value="turtleKing" /> 왕거북이
		<input type="radio" name="teamid" value="coddingZzang" /> 코딩짱<br /><br />
		프로젝트역할
		<select name="roll" id="roll">
			<option value="leader">팀장</option>
			<option value="front">프론트개발</option>
			<option value="back">백단개발</option>
			<option value="android">안드로이드개발</option>
			<option value="minfe">민폐</option>
		</select><br /><br />
		수강과목
		<input type="checkbox" name="subject" value="Java" checked="checked"  /> Java
		<input type="checkbox" name="subject" value="JSP" /> JSP
		<input type="checkbox" name="subject" value="PHP"/> PHP
		<input type="checkbox" name="subject" value="nodejs"/> NodeJS
		<input type="checkbox" name="subject" value="linux" /> Linux
		<input type="checkbox" name="subject" value="HTML" /> HTML
		<input type="checkbox" name="subject" value="Spring" /> Spring<br /><br />
		</div>
	</form>
		<a id="join_form_btn" class="btn btn-primary w-300px">가입하기</a>
</div>
</div>
<script>
	$('#join_form_btn').click(function(){
		/*var form = document.getElementById('join_form');
		form.action = app.x()+"/member/add";
		form.method = "post";
		form.submit();*/
		$('#join_form').attr({
			action: "${context}/member/add",
			method: "post"
	}).submit();
});
</script>
