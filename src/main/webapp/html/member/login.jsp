<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="container text-center">
	<div id="content-box">
		<h1>로그인하고 혜택 받으세요!</h1><br /><br />
		<form id="login_form" name="login_form" class="w-auto">
			<input type="text" name="userid" id="userid" placeholder="아이디를 입력하세요." ><br /><br />
			<input type="password" name="password" id="password" placeholder="비밀번호를 입력하세요." ><br /><br /><br />
		</form>
	</div>
		<h2><a id="login_form_btn" class="btn btn-primary w-300px">로그인</a></h2>
</div>

<script>
$('#login_form_btn').click(function(){
	$('#login_form').attr({
		action : "${context}/member/login",	
		method : "post"
	}).submit();
});
</script>
