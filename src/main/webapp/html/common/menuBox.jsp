<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="menu-box">
	<ul id="menu">
		<c:choose>
			<c:when test="${domain eq 'common'}">
				<li><a id="move_admin">ADMIN</a></li>
			</c:when>
			<c:when test="${domain eq 'member' || domain eq 'admin' || empty domain}">
				<li><a id="move_home">HOME</a></li>
			</c:when>
		</c:choose>
	</ul>
</div>
