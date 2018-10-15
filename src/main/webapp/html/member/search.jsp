<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="content-box">
	<br />
	<div id="search_box">
		<div id="search_btn_style"><a id="search_btn">검색</a></div>
		<select name="search_option" id="search_option">
			<option value="none">검색조건</option>
			<option value="id">아이디</option>
			<option value="name">이      름 </option>
			<option value="teamid">팀이름</option>
		</select>
		<input id="search_word" name="search_word" type="text" placeholder="검색어 입력" />
	</div>
	<table id="content_box_table">
		<tr id="content_box_meta">
			<th>아이디</th>
			<th>이   름</th>
			<th>나   이</th>
			<th>성   별</th>
			<th>팀   명</th>
			<th>역   할</th>
		</tr>
		<c:forEach items="${member}" var="i">
		<tr>
			<td>${i.userId}</td>
			<td><a class="username" id="${i.userId}">${i.name}</a></td>
			<td>${i.age}</td>
			<td>${i.gender}</td>
			<td>${i.roll}</td>
			<td>${i.teamId}</td>
		</tr>
		</c:forEach>
		<tr>
			<td colspan="6"> 
			카운트커맨드 : (${page.countRow}명) <br />
			<ul class="pageBox">
			<c:if test="${page.existPrev}"> 
				<li><a id="${page.prevBlock}" class="pageNumber"> ◀ 이전 |</a></li> 
			</c:if>
			<c:forEach begin="${page.beginPage }" end="${page.endPage }" step="1" varStatus="i">
				<li>
				<span> <a class="pageNumber" id="${i.index }">${i.index }</a> </span>
				</li>
			</c:forEach>
			<c:if test="${page.existNext}" > <!-- eq =,ne !=,lt <,le <=,ge >,gt >= -->
				<li><a id="${page.nextBlock}" class="pageNumber"> | 다음 ▶</a></li> 
			</c:if>
			</ul>
			</td>
		</tr>
	</table><br />
	</div>
<script>
</script>
