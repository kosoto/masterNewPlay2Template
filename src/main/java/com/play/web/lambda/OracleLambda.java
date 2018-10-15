package com.play.web.lambda;

import java.util.function.Predicate;

/*
Consumer<T>	void accept(T t)
Function<T,R> R apply(T t)
Predicate<T> boolean test(T t)
Supplier<T> T get()
UnaryOperator<T> static <T> UnaryOperator<T> identity()
 * 
 * */
public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "Hello";
		String r = p.test(y) ? "NULL" : "NOT NULL";
		System.out.println(r);
		
	}
}
