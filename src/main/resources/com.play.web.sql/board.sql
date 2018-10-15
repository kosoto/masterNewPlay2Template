CREATE TABLE BOARD(
	bno INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(200) NOT NULL,
	content TEXT NULL,
	writer VARCHAR(50) NOT NULL,
	regdate TIMESTAMP NOT NULL DEFAULT now(),
	viewcnt INT DEFAULT 0,
	PRIMARY KEY (bno));
	
INSERT INTO board(bno,title ,content,writer,regdate ,viewcnt) values();

SELECT * FROM MEMBER;

