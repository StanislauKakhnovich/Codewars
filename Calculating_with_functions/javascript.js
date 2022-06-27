// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function zero(operator) {return operator?parseInt(eval(`${0}${operator}`)):0}
function one(operator) {return operator?parseInt(eval(`${1}${operator}`)):1}
function two(operator) {return operator?parseInt(eval(`${2}${operator}`)):2}
function three(operator) {return operator?parseInt(eval(`${3}${operator}`)):3}
function four(operator) {return operator?parseInt(eval(`${4}${operator}`)):4}
function five(operator) {return operator?parseInt(eval(`${5}${operator}`)):5}
function six(operator) {return operator?parseInt(eval(`${6}${operator}`)):6}
function seven(operator) {return operator?parseInt(eval(`${7}${operator}`)):7}
function eight(operator) {return operator?parseInt(eval(`${8}${operator}`)):8}
function nine(operator) {return operator?parseInt(eval(`${9}${operator}`)):9}

function plus(num2) {return `+${num2}`}
function minus(num2) {return `-${num2}`}
function times(num2) {return `*${num2}`}
function dividedBy(num2) {return `/${num2}`}


console.log(seven(times(five())));
console.log(seven(dividedBy(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };