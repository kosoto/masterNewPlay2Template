<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<nav class="navbar navbar-light bg-light static-top">
  <div class="container">
    <a id="logo_btn" class="navbar-brand" >Yanolja!</a>
    <div class="float-right">
		<a id="board" class="btn btn-primary w-100px " href="#">게시판</a>
	    <a id="login_btn" class="btn btn-primary w-100px " href="#">로그인</a>
	    <a id="add_btn" class="btn btn-primary w-100px " href="#">회원가입</a>
    </div>
  </div>
</nav>
<script>
	$('#logo_btn').click(function(){
		location.href='${context}/';
	});
	$('#login_btn').click(function(){
		location.href='${context}/move/auth/member/login';
	});
	$('#add_btn').click(function(){
		location.href='${context}/move/auth/member/add';
	});
	$('#board').click(function(){
		location.href='${context}/move/auth/board/listAll'
	});
</script>
