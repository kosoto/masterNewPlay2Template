<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content-box" class="container text-center">
<h1> 회원 탈퇴 </h1><br />
<form id="delete_form">
<input type="password" name="password" placeholder="비밀번호를 입력하세요."/>  <br /><br />
</form>	<br />
	<a id="delete_form_btn" class="btn btn-primary w-300px">탈퇴</a>
</div>
<script>
$('#delete_form_btn').click(function(){
	$('#delete_form').attr({
		action : "${context}/member/remove",
		method: "post"
	}).submit();
});
</script>

