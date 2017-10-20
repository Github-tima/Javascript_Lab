document.write("Tima Phetnoi");
document.write("<br>")
document.write("Lab2");
document.write("<br>")

//answer1

function rotateLeft(arr){
	return [arr[1],[arr[2]],arr[0]];
}
document.write("Answer1");
document.write("<br>")
document.write(rotateLeft([1,2,3]));
document.write("<br>")
document.write(rotateLeft([5,11,9]));
document.write("<br>")
document.write(rotateLeft([7,0,0]));

//answer2

function reverse3(arr){
	return arr.reverse();
}
document.write("Answer2")
document.write("<br>")
document.write(reverse3([1,2,3]));
document.write("<br>")
document.write(reverse3([5,11,9]));
document.write("<br>")
document.write(reverse3([7,0,0]));

//answer3
function har23(arr){
	return arr[0] == 2 || arr[0] == 3 || arr[1] == 2 || arr[1] == 3;
}
document.write("Answer3");
document.write("<br>");
document.write(har23([2,5]));
document.write("<br>");
document.write(har23([4,3]));
document.write("<br>");
document.write(har23([4,5]));


//answer4

function fix23(arr) {
	let myarray = arr;
	if (myarray[0] == 2 && myarray[1] == 3) {
		myarray[1] = 0;
	} else if (myarray[1] == 2 && myarray[2] == 3) {
		myarray[2] = 0;
	}
	return myarray;
}

document.write("Answer4");
document.write(fix23([1,2,3]));
document.write("<br>");
document.write(fix23([2,3,5]));
document.write("<br>");
document.write(fix23([1,2,1]));
document.write("<br>");

//answer5

function maxTriple(arr){
	return [arr[0], arr[parseInt(arr.length/2)], arr[arr.length - 1]].sort()[arr.length-1];
}

document.write("Answer5");
document.write(maxTriple([1,2,3]));
document.write("<br>");
document.write(maxTriple([1,5,3]));
document.write("<br>");
document.write(maxTriple([5,2,3]));
document.write("<br>");

//answer6

function swapEnds(arr) {
   let swap = arr[0];
   arr[0] = arr[arr.length-1];
   arr[arr.length-1] = swap;
   return arr;
}

document.write("Answer6");
document.write("<br>");
document.write(swapEnds([1,2,3,4]));
document.write("<br>");
document.write(swapEnds([1,2,3]));
document.write("<br>");
document.write(swapEnds([8,6,7,9,5]));
document.write("<br>");

//answer7

function unlucky1(arr){
   return ((arr[0] == 1 && arr[1] == 3) || (arr[1] == 1 && arr[2] == 3)) || (arr[arr.length-2] == 1 && arr[arr.length-1])
	

}
document.write("Answer7");
document.write("<br>");
document.write(unlucky1([1,3,4,5]));
document.write("<br>");
document.write(unlucky1([2,1,3,4,5]));
document.write("<br>");
document.write(unlucky1([1,1,1]));
document.write("<br>");

//answer8

function front11(arr1,arr2){
	if(arr1.length == 0 && arr2.length == 0){
		  return [];
	} else if (arr1.length == 0 && arr2.length != 0){
      return [arr2[0]]; 
  } else if (arr1.length !=0 && arr2.lenght == 0){
      return [arr1[0]];
  } else {
     return [arr1[0], arr2[0]];
  }
}

document.write("Answer8");
document.write("<br>")
document.write(front11([1,2,3],[7,9,8]));
document.write("<br>");
document.write(front11([1],[2]));
document.write("<br>");
document.write(front11([1,7],[]));
document.write("<br>");

//answer9
function isEverywhere (arr,x) {
 	for (let i = 0; i <arr.length-1; i++){
 		if(arr[i] != x && arr[i+1] != x){
 			  return false;
 		}
 	return true;
}

document.write("Answer9");
document.write("<br>");
document.write(isEverywhere([1, 2, 1, 3],1));
document.write("<br>");   
document.write(isEverywhere([1, 2, 1, 3],2));
document.write("<br>");
document.write(isEverywhere([1, 2, 1, 3, 4],1)); 
document.write("<br>");


//amswer10

function tenRun(arr){
	let newarray = [];
	let i = 0;
	while (i < arr.length){
		if (arr[i] % 10 != 0) {
			newarray.push(arr[i]);
			i++;
		} else {
			let x = arr[i];
			newarray.push(x);
			i++;
			while (arr[i] % 10 != 0 && i < arr.length) {
				newarray.push(x);
				i++;
			}
		}
	}
	return newArr;	
}


document.write("Answer10");
document.write("<br>");
document.write(tenRun([2,10,3,4,20,5]);
document.write("<br>");
document.write(tenRun([2,10,3,4,20,5]);
document.write("<br>");
document.write(tenRun([2,10,3,4,20,5]);
document.write("<br>");



//answer11

function twoTwo(arr) {

	if (arr.length == 1 && arr[0] == 2) {
		return false;
	}
	if (arr.length >= 2 && (arr[0] == 2 && arr[1] != 2)) {
		return false;
	}

	for(let i = 1; i < arr.length - 1; i++) {
		if (arr[i] == 2 && arr[i+1] != 2 && arr[i-1] != 2) {
			return false;
			}
		}
	return true;
}


document.write("Answer11");
document.write("<br>")
document.write(twoTwo([4,2,2,3]);
document.write("<br>");
document.write(twoTwo([2,2,4]);
document.write("<br>");
document.write(twoTwo([2,2,4,2]));
document.write("<br>");


//answer12

function shiftLeft(arr) {
	arr.push(arr.shift())
	return arr;
}

document.write("Answer12");
document.write("<br>");
document.write(shiftLeft([6,2,5,3]));
document.write("<br>");
document.write(shiftLeft([1,2]));
document.write("<br>");
document.write(shiftLeft([1]));
document.write("<br>");

//answer13

function evenOdd(arr){
	let even = [];
	let odd = [];
	for (let i = 0; 
       i < arr.length; 
       i++){
		  if (arr[i] % 2 == 0){
			even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
  }
	return even.concat(odd);
}

document.write("Answer13");
document.write("<br>");
document.write(evenOdd([1,0,1,0,0,1,1]));
document.write("<br>");
document.write(evenOdd([3,3,2]));
document.write("<br>");
document.write(evenOdd([2,2,2]));
document.write("<br>");

//answer14

function fizzBuzz (start,end) {
	let arr = [];
	for(let i = start; i < end; i++) {
		if(i % 15 == 0){
			arr.push("FizzBuzz");
		} else if (i % 3 == 0) {
			arr.push("Fizz");
		} else if (i % 5 == 0) {
			arr.push("Buzz");
		} else {
			arr.push(String(i));
		}
	}
	return arr;
}

document.write("Answer14");
document.write(fizzBuzz([1,6]));
document.write("<br>");
document.write(fizzBuzz([1,8]);
document.write("<br>");
document.write(fizzBuzz([1,11]);
document.write("<br>");

//answer15

function countClumps(arr){
	let clump = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i+1]){
			if (i == 0){
				clump = 1;
			} else if (arr[i-1] != arr[i]){
				clump++;
			}
		}
	}
	return clump;
}

document.write("Answer15");
document.write("<br>")
document.write(countClumps([1,2,2,3,4,4]));
document.write("<br>");
document.write(countClumps([1,1,2,1,1]));
document.write("<br>");
document.write(countClumps([1,1,1,1,1]));
document.write("<br>");



