<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<body>
<div id="wrapper">
	<div id="header">
		<jsp:include page="../common/titleBox.jsp"/>
		<jsp:include page="../common/menuBox.jsp"></jsp:include>
	</div>
	<div id="content">
		<jsp:include page="../member/search.jsp"></jsp:include>
	</div>
	<div id="footer">
		<jsp:include page="../common/footer.jsp"></jsp:include>	
	</div>
</div>
<script>
	admin.main({context :'${context}',
				searchOption : '${searchOption}',
				searchWord : '${searchWord}'});
</script>
</body>
</html>