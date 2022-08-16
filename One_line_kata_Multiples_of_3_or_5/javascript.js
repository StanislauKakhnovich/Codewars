// Yet another one-line task involving threes and fives (I know, I'm the worst), inspired by Sum of All the Multiples of 3 or 5, 
// in this kata you need to do exactly what the name says: Return the sum of all numbers divisible by three or five up to and 
// including n in under 53 characters in JS or 64 characters in R. No other restrictions or limitations :)

// Inputs may be up to ~200m. They will always be valid, non-negative integers.

// sum(2)=> 0
// sum(5)=> 8
// sum(10)=> 33
// sum(100)=> 2418
// sum(1000)=> 234168
// sum(1111)=> 288045
// Please rank and upvote if you enjoyed it! Good luck! :)

// function solution(number){
//     let result = 0;
//     if(number>0) {
//         for (let i=1; i<number; i++) {
//             if (i%3==0||i%5==0){
//                 result = result + i;
//             }
//         }
//     }
//     return result;
// }
//sum=n=>{let r=0;for(let i=1;i<=n;i++){if(i%3==0||i%5==0)r+=i}return r};
//sum=n=>{return n==1?0:(n%3==0||n%5==0)?n+sum(n-1):sum(n-1)}
//sum=n=>{return n * (n + 1) / 2}

// sum=n=>{
//     let result = 0;
//     for (let i=1; i<=n; i++) {
//         if (i%3==0||i%5==0){
//             result = result + i;
//         }
//     }
//     return result
// }

sum=n=>Array.from({length:n+1},(_,i)=>(i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)

console.log(sum(10));
console.log(sum(15));
