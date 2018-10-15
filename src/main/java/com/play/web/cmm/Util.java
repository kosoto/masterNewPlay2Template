package com.play.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import javax.servlet.http.HttpServletRequest;

public class Util {
	public static Consumer<Integer> logi = System.out::println;
	public static Consumer<String> log = System.out::println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Function<Integer, String> convStr = String::valueOf;
	public static Predicate<String> isNull = s -> s.equals("");
	public static Predicate<String> notNull = isNull.negate();
	public static Predicate<String> isOne = s -> s.equals("1");
	public static Predicate<String> notOne = isOne.negate();
	public static Function<HttpServletRequest,String> ctx = HttpServletRequest::getContextPath;
}
