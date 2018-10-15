package com.play.web.lambda;

/*
람다식(함수)은
식: Expression. EL ${tot - pagenum}
함수 : Function. aa(p){ x = 2+p; return x;}
연산식이 하나이면 {} 이 생략가능함.
**/
public class LambdaIntro {
	public static void main(String[] args) {
		System.out.println((int)Num.execute((t1, t2) -> t1 > t2 ? t1 : t2 , 6 , 3));
	}
	@FunctionalInterface
	interface Calc<T>{T execute(T t1, T t2);}
	static class Num{
		public static <T> T execute(Calc<T> c, T t1, T t2) {
			return c.execute(t1, t2);
			
		}
	}
}
