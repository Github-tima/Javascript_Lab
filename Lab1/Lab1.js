document.write("Tima Phetnoi");
document.write("<br>");
document.write("JavaScript Lab1");
document.write("<br>");

// Answer 1
document.write("<br>");

function makeAbba(a, b) {
	return a + b + b + a;
}
document.write("Answer no.1");
document.write("<br>");
document.write(makeAbba("Hi", "Bye")); // "HiByeByeHi"
document.write("<br>");
document.write(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
document.write("<br>");
document.write(makeAbba("What", "Up")); // "WhatUpUpWhat"
document.write("<br>");


/////////////////////////////////////////////////////////////////////

// Answer 2
document.write("<br>");

function endsLy(a) {
	return a.slice(-2) == "ly";	
}

document.write("Answer no.2");
document.write("<br>");
document.write(endsLy("oddly")); // true
document.write("<br>");
document.write(endsLy("y")); // false
document.write("<br>");
document.write(endsLy("oddy")); // false
document.write("<br>");



/////////////////////////////////////////////////////////////////////

// Answer 3
document.write("<br>");

function firstHalf(x) {
	 return x.substr(0,x.length / 2);
}

document.write("Answer no.3");
document.write("<br>");
document.write(firstHalf("WooHoo")); //"Woo"
document.write("<br>");
document.write(firstHalf("HelloThere")); //"Hello"
document.write("<br>");
document.write(firstHalf("abcdef")) //"abc"
document.write("<br>");

//////////////////////////////////////////////////////////////////////

// Answer 4

document.write("<br>");

function right2(p) {
	return p.slice(-2) + p.substr(0, p.length-2);
}

document.write("Answer no.4");
document.write("<br>");
document.write(right2("Hello")); // "loHel"
document.write("<br>");
document.write(right2("java"));  // "vaja"
document.write("<br>");
document.write(right2("Hi"));   // "Hi"
document.write("<br>");


/////////////////////////////////////////////////////////////////////

// Answer 5

document.write("<br>");

function conCat(c,d){
	return c.charAt(c.length-1) == c.charAt(0) 
	? c.substr(o,c.length -1) + d : c + d;
	
}

document.write("Answer no.5");
document.write("<br>");
document.write(conCat("abc","cat")) // "abcat"
document.write("<br>");
document.write(conCat("dog","cat")) // "dogcat"
document.write("<br>");
document.write(conCat("abc","")) // "abc"
document.write("<br>");



//////////////////////////////////////////////////////////////////

// Answer 6

document.write("<br>");

function frontAgain(ft){
	return ft.substr(0,2) == ft.slice(-2);
}
document.write("Answer no.6");	
document.write("<br>");	
document.write(frontAgain("edited")); //true
document.write("<br>");	
document.write(frontAgain("edit")); //false
document.write("<br>");	
document.write(frontAgain("ed")); // true
document.write("<br>");


//////////////////////////////////////////////////////////////////

// Answer 7

document.write("<br>");

function defront(front) {

	if (front.substr(0,2) == 'ab'){
		return front;	
	} else if (front.charAt(0) == 'a'){
		return 'a' + front.substr(2);
	} else if (front.charAt(1) == 'b') {
		return 'b' + front.substr(2);
	} else {
		return front.substr(2);
	}
}

document.write("Answer no.7");
document.write("<br>");
document.write(defront("Hello")) //"llo
document.write("<br>");
document.write(defront("java")) //"va"
document.write("<br>");
document.write(defront("away")) // "aay"
document.write("<br>");


//////////////////////////////////////////////////////////////////

// Answer 8

document.write("<br>");

function withoutX2 (str) {
	if (str.charAt(0) == 'x') {
	return str.substr(1);
	} else if (str.charAt(1) == 'x') {
	return str.charAt(0) + str.substr(2);
	} else if (str.substr(0,2) != 'xx'){
  return str;
  }
}
	
document.write("Answer no.8");
document.write("<br>");
document.write(withoutX2("xHi")); //"Hi"
document.write("<br>");
document.write(withoutX2("Hxi")); //"Hi"
document.write("<br>");
document.write(withoutX2("Hi"));  //"Hi"
document.write("<br>");



/////////////////////////////////////////////////////////////////

// Answer 9
document.write("<br>");

function lastChars(a, b) {
	
    if(a.length != 0 && b.length == 0) {
	return a.charAt(0) + "@";
	} else {
	return a.charAt(0) + b.charAt(b.length-1);
	}
}
   	
document.write("Answer no.9");
document.write("<br>");
document.write(lastChars("last","chars"));//ls
document.write("<br>");
document.write(lastChars("yo","java")); //"ya"
document.write("<br>");
document.write(lastChars("hi", "")); //"h@"
document.write("<br>");

//////////////////////////////////////////////////////////////////

// Answer 10
document.write("<br>");

function middleTwo(mt) {
	var md = mt.length / 2 - 1;
	return mt.slice(md, md + 2);	
}

document.write("Answer no.10");
document.write("<br>");
document.write(middleTwo("string")); //ri
document.write("<br>");
document.write(middleTwo("code")); //od
document.write("<br>");
document.write(middleTwo("Practice")); //ct 
document.write("<br>");
	

//////////////////////////////////////////////////////////////////



