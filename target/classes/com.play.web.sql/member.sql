SHOW DATABASES;
show tables;
select * from member;
CREATE TABLE MEMBER(
  USERID VARCHAR(20)
);
INSERT INTO MEMBER VALUES('choi');
SELECT * FROM MEMBER;
UPDATE MEMBER
SET USERID = 'hong';
DROP TABLE MEMBER;

CREATE TABLE MEMBER(
    USERID VARCHAR(20) PRIMARY KEY,
    NAME VARCHAR(20),
    TEAMID VARCHAR(20),
    ROLL VARCHAR(20),
    PASSWORD VARCHAR(20),
    SSN VARCHAR(10),
    AGE VARCHAR(4),
    GENDER VARCHAR(20),
    SUBJECT VARCHAR(20),
    PHONE VARCHAR(13),
    EMAIL VARCHAR(20)
);
ALTER TABLE MEMBER ADD CONSTRAINT FK_MEMBER_TEAMID FOREIGN KEY (TEAMID) REFERENCES PROJECT_TEAM (TEAMID) ON DELETE CASCADE;
DESC MEMBER;
CREATE TABLE EXAM(
    EXAM_SEQ INT AUTO_INCREMENT PRIMARY KEY,
    USERID VARCHAR(20),
    SUB_SEQ DECIMAL,
    SCORE VARCHAR(20),
    MONTH VARCHAR(20),
    RECORD_SEQ DECIMAL
);
ALTER TABLE EXAM ADD CONSTRAINT FK_EXAM_USERID FOREIGN KEY (USERID) REFERENCES MEMBER (USERID) ON DELETE CASCADE;
DROP TABLE EXAM;
CREATE TABLE RECORD(
    RECORD_SEQ INT AUTO_INCREMENT PRIMARY KEY,
    GRADE VARCHAR(20),
    AVG VARCHAR(20)
);
DROP TABLE RECORD;
CREATE TABLE SUBJECT(
    SUB_SEQ INT AUTO_INCREMENT PRIMARY KEY,
    SUB_NAME VARCHAR(20)
);
DROP TABLE SUBJECT;
CREATE TABLE PROJECT_TEAM(
  TEAMID VARCHAR(20) PRIMARY KEY,
  TEAMNAME VARCHAR(20)
); 
DROP TABLE PROJECT_TEAM;
CREATE TABLE IMAGE(
	IMG_SEQ INT AUTO_INCREMENT PRIMARY KEY,
	IMG_NAME VARCHAR(20),
	EXTENSION VARCHAR(10),
	USERID VARCHAR(20),
	CONSTRAINT FK_IMAGE_MEMBER
	FOREIGN KEY (USERID) REFERENCES MEMBER(USERID) ON DELETE CASCADE
);
DROP TABLE IMAGE;


INSERT INTO PROJECT_TEAM (
TEAMID, TEAMNAME) VALUES('nolja','걍놀자');
INSERT INTO PROJECT_TEAM (
TEAMID, TEAMNAME) VALUES('jienHouse','지은이네');
INSERT INTO PROJECT_TEAM (
TEAMID, TEAMNAME) VALUES('turtleKing','왕거북이');
INSERT INTO PROJECT_TEAM (
TEAMID, TEAMNAME) VALUES('coddingZzang','코딩짱');
SELECT * FROM PROJECT_TEAM;
INSERT INTO PROJECT_TEAM (
TEAMID, TEAMNAME) VALUES('none','없음');


INSERT INTO MEMBER(USERID, NAME, TEAMID, ROLL, PASSWORD, SSN, AGE, GENDER, SUBJECT, PHONE, EMAIL)
VALUES ('A1','안형준','nolja','leader','1','850101-1','34','남','Java','010-1234-1234','ahj@gmail.com'),
('A2','세인','nolja','minfe','1','840221-1','35','남','NULL','010-4057-0570','cseini@nate.com'),
('A3','희태','nolja','back','1','980505-1','21','남','NULL','',''),
('A4','상훈','nolja','front','1','900925-1','29','남','NULL','',''),
('A5','태형','nolja','android','1','940822-1','25','남','NULL','',''),
('antoni','토니안','coddingZzang','front','1','821110-1','37','남','NULL','',''),
('C11','최정훈','coddingZzang','leader','1','960903-1','23','남','NULL','',''),
('C12','윤호','coddingZzang','front','1','880931-1','31','남','NULL','',''),
('C13','가은','coddingZzang','front','1','900801-2','29','여','NULL','',''),
('C14','정훈','coddingZzang','front','1','960526-1','23','남','NULL','',''),
('C15','승태','coddingZzang','front','1','890727-1','30','남','NULL','',''),
('danielgang','강다니엘','turtleKing','back','1','950702-1','24','남','NULL','',''),
('egoing','이고잉','nolja','front','1','701212-1','49','남','NULL','',''),
('eunsm','은수미','nolja','minfe','1','700707-2','49','여','NULL','',''),
('gangta','안칠현','turtleKing','android','1','810911-1','38','남','NULL','',''),
('H10','단아','jienHouse','front','1','930116-2','26','여','NULL','',''),
('H6','혜리','jienHouse','leader','1','930718-2','26','여','NULL','',''),
('H7','지은','jienHouse','front','1','930818-2','26','여','NULL','',''),
('H8','준','jienHouse','front','1','920714-1','27','남','NULL','',''),
('H9','재경','jienHouse','front','1','890129-1','30','남','NULL','',''),
('haha','하하','coddingZzang','front','1','770707-1','42','남','NULL','',''),
('heson0124','최혜선','nolja','minfe','1','770902-2','42','여','NULL','',''),
('honggd','홍길동','jienHouse','minfe','1','281518-1','91','남','NULL','',''),
('hongjp','홍준표','nolja','minfe','1','531111-1','66','남','NULL','',''),
('jangwh','장우혁','jienHouse','back','1','820202-1','37','남','NULL','',''),
('junghd','정형돈','turtleKing','minfe','1','750505-1','44','남','NULL','',''),
('kimdr','김동률','nolja','minfe','1','720311-1','47','남','NULL','',''),
('kimgura','김구라','jienHouse','minfe','1','690808-1','50','남','NULL','',''),
('kimst','김성태','coddingZzang','front','1','580312-1','61','남','NULL','',''),
('kimus','김유신','nolja','front','1','850214-1','34','남','NULL','',''),
('kimyc','김영철','coddingZzang','minfe','1','711111-1','48','남','NULL','',''),
('leegs','이광수','jienHouse','minfe','1','860521-1','33','남','NULL','',''),
('leehl','이효리','jienHouse','front','1','780102-2','41','여','NULL','',''),
('leejs','이준석','jienHouse','minfe','1','851015-1','34','남','NULL','',''),
('leemb','이명박','jienHouse','minfe','1','561130-1','63','남','NULL','',''),
('leemjh','임정희','turtleKing','android','1','880808-2','31','여','NULL','',''),
('leesangs','이상순','nolja','leader','1','740203-1','45','남','NULL','',''),
('leesh','이승환','coddingZzang','minfe','1','580714-1','61','남','NULL','',''),
('ljwon','이재원','coddingZzang','front','1','830303-1','36','남','NULL','',''),
('mbappe','음바페','nolja','minfe','1','940505-1','25','남','NULL','',''),
('mooncw','문채원','turtleKing','back','1','870308-2','32','여','NULL','',''),
('moonhj','문희준','jienHouse','android','1','780305-1','41','남','NULL','',''),
('moonjh','문정혁','turtleKing','android','1','810103-1','38','남','NULL','',''),
('nohongchul','노홍철','turtleKing','minfe','1','800412-1','39','남','NULL','',''),
('okjooh','옥주현','turtleKing','android','1','780709-2','41','여','NULL','',''),
('park503','박근혜','coddingZzang','minfe','1','590515-2','60','여','NULL','',''),
('parkjh','박정현','nolja','front','1','740111-1','45','남','NULL','',''),
('parkms','박명수','turtleKing','minfe','1','710923-1','48','남','NULL','',''),
('qqq','qqq','none','leader','qqq','850505-1','34','남','Java','qqq','qqq'),
('rainism','정지훈','coddingZzang','front','1','810909-1','38','남','NULL','',''),
('S16','승호','turtleKing','leader','1','920721-1','27','남','NULL','',''),
('S17','소진','turtleKing','front','1','930312-2','26','여','NULL','',''),
('S18','이슬','turtleKing','front','1','901028-2','29','여','NULL','',''),
('S19','진태','turtleKing','front','1','930408-1','26','남','NULL','',''),
('S20','누리','turtleKing','front','1','891107-2','30','여','NULL','',''),
('shinhs','신해성','coddingZzang','back','1','820101-1','37','남','NULL','',''),
('songjk','송종국','jienHouse','minfe','1','740123-1','45','남','NULL','',''),
('songym','송영무','nolja','front','1','580811-2','61','여','NULL','',''),
('sonhm','손흥민','jienHouse','minfe','1','911112-1','28','남','NULL','',''),
('sparkle','스파클','turtleKing','android','1','500505-1','69','남','NULL','',''),
('sungyr','성유리','coddingZzang','minfe','1','790506-2','40','여','NULL','',''),
('yoojs','유재석','nolja','minfe','1','740402-1','45','남','NULL','',''),
('youngjincom','영진컴','turtleKing','android','1','770808-1','42','남','NULL','',''),
('ysm','유시민','turtleKing','front','1','630303-1','56','남','NULL','','');

select * from board;

