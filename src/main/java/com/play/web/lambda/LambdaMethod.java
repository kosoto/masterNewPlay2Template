package com.play.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

/*
Consumer<T>	void accept(T t)
Function<T,R> R apply(T t)
Predicate<T> boolean test(T t)
Supplier<T> T get()
UnaryOperator<T> static <T> UnaryOperator<T> identity()
 
 * 
 * */
public class LambdaMethod {
	public static void main(String[] args) {
		/*Function<String, Integer> f = s->Integer.parseInt(s);*/
		Function<String, Integer> f = Integer::parseInt;
		int a = f.apply("5");
		System.out.println(a);
		Consumer<String> c = System.out::println;
		c.accept("Hello Lambda !!");
	}
}
