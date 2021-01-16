function totalAmountAdjectives(obj) {
return Object.values(obj).length;
}
function totalAmountAdjectives(obj) {
return Object.keys(obj).length;
}


function sayWhat(obj) {
	return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
}
 function sayWhat(obj) {
	return obj[1] + " " + obj[2] + " " + obj[3] + " " + obj[2];
}


function nSidedShape(n) {
	return ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'][n-1];


function and(a, b) {
	return a && b;
}


function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}

function firstLast(arr) {
	return [arr[0], arr[arr.length-1]]
}


const kToK = (n, k) => Math.pow(k, k) === n;
function kToK(n, k) {
	return k ** k === n ? true: false;
}
function kToK(n, k) {
	return k**k === n
}

function dividesEvenly(a, b) {
	return a % b === 0;
}


function operation(num1, num2) {
	return num1 / num2 === 24 ? 'divided' : num1 * num2 === 24 ? 'multiplied' : num1 - num2 === 24 ? 'subtracted' : num1 + num2 === 24 ? 'added' : null
function operation(num1, num2) {
	let answer = 24
	switch (24){
		case (num1 * num2 ):
			return 'multiplied'
			break
		case (num1 + num2):
			return 'added'
			break
		case (num1 / num2):
			return 'divided'
			break
		case (num1 - num2):
		return 'subtracted'
			break
		default: return null
	}
}
function operation(num1, num2) {
	if(num1 + num2 === 24){
	return 'added';
	}else if (num1 - num2 === 24){
	return "subtracted" ;
	}else if(num1 * num2 === 24){
		return "multiplied";
	}else if(num1 / num2 === 24){
		return "divided";
	}else{
		return null
	}
}


function absolute(n) {
	return n * Math.sign(n);
}
const absolute = n => Math.max(n, -n);
function absolute(n) {
	if(n<0){
		n = n*-1
	}
	return n
}
absolute = n => n > 0 ? n : n = -n

function profitableGamble(prob, prize, pay) {
	return prob*prize > pay;
}
function profitableGamble(prob, prize, pay) {
	
	if(prob * prize > pay){
		return true
	} else {
		return false;
	}
	
}
function profitableGamble(prob, prize, pay) {
	return prob * prize - pay > 0 ? true : false
}


function acceptIntoMovie(age, isSupervised) {
  return age >= 15 || isSupervised
}
function acceptIntoMovie(age, isSupervised) {
  return age>=15 || isSupervised ? true : false
}
function acceptIntoMovie(age, isSupervised) {
	return (age >= 15 || isSupervised == true);
}
function acceptIntoMovie(age, isSupervised) {
	if ( age < 15 && !isSupervised) {
		return false;
	} else {
		return true;
	}
}
function acceptIntoMovie(age, isSupervised) {
	if(age >= 15 || isSupervised === true){
		return true;
	}else if (age<15 || isSupervised === false){
		return false;
	}else{
		return false;
	}
	
}

function getLastItem(arr) {
  return arr[arr.length - 1]
}
function getLastItem(arr) {
  return arr.pop();
}
const getLastItem = a => a.slice(-1)[0];


function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}

function isOdd(num) {
	return num % 2 != 0;
}
function isOdd(num) {
	return num % 2 !== 0 ? true : false;
}
function isOdd(num) {
	return num % 2  ?  true : false;
}
function isOdd(num) {
	 if (num % 2) {
    return true
  } else {
    return false
  }
}


function yeah_nope(bool) {
	return bool ? "yeah" : "nope";
}
function yeah_nope(bool) {
	return bool===true?"yeah":"nope";
	
}

