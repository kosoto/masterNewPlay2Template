<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar navbar-light bg-light static-top">
  <div class="container">
    <a id="logo_btn" class="navbar-brand">Yanolja!</a>
    <div class="float-right">
	    <a id="retrieve_btn" class="btn btn-primary" >${user.name }님의 페이지</a>
	    <a id="board-write"  class="btn btn-primary" >게시글 쓰기</a>
	    <a id="board_list" class="btn btn-primary">게시글 목록 보기</a>
	    <a id="logout_btn" class="btn btn-primary w-100px " href="#">로그아웃</a>
    </div>
  </div>
</nav>
<script>
	/* if(!'${user}'==""){
		user.session({userid:'${user.userid}',name:'${user.name}',teamid:'${user.teamid}',roll:'${user.roll}',age:'${user.age}',gender:'${user.gender}',ssn:'${user.ssn}',phone:'${user.phone}',email:'${user.email}'});
	} */
	$('#logo_btn').click(function(){
		location.href='${context}/';
	});
	$('#logout_btn').click(function(){
		location.href='${context}/member/logout';
	});
	$('#retrieve_btn').click(function(){
		location.href='${context}/member/retrieve';
	});
	$('#board-write').click(function(){
		location.href='${context}/move/login/board/register'
	});
	$('#board_list').click(function(){
		location.href='${context}/move/login/board/readPage'
	});
</script>
