// var n = [1,2,3];
// n[0] = 2;
// console.log(n);

// var num = [1,2,3];
// console.log(num[0])

// let map = {
//     'a' : 1,
//     'b' : 2
// }

// console.log(map['a']);

// a = 1
// b = 2;
// console.log(a+" "+b);

// function Text(){
//     console.log("this is console");
// }

// **we can't reinitlize the varaibles with let and const datatype**
// const n = 10;
// const n = 11;
// console.log(n);

// let n = 10;
// let n = 11;
// console.log(n);

// understanding var and let => var has proagram level scope and let has block level scope
// if(true){
//     var a = 1;
//     let b = 1;
// }
// console.log(a);
// console.log(b);//we can't access this variable here

// difference between == and ===
// a = "1";
// b = 1;
// //== checks for similar data but === checks for similer datatype
// console.log(a == b);//ture
// console.log(a === b);//false

//there are 2 types of datatypes in js primitive and non-primitive
// primitive are basic datatypes where the datatypes are immutable
//primitive datatypes are Number ,String ,boolean ,Null undefined
//Non-primitive datatypes are arrays ,objects.

// let a = [1,2,3];
// a[0] = 2;
// console.log(a);

// let b = {
//     'a' :2,
//     'b' :3
// }
// b['a'] = 4;
// console.log(b);

// let num = prompt("Enter numnber"); // this won't work in this console this only work in web
// console.log(num);

// map function in arrays
// const arr = [1,2,3]
// const res = arr.map(n => n*2);// this will map the operation to the rest of the array
// console.log(res);

// //filter 
// const new_res = arr.filter(n => n%2 == 0);//this fileter outs the array and outputs only which saticfies this condition
// console.log(new_res);

// // reeduce
// const r = arr.reduce((acc,curr) => (acc+curr) ,0);//acc is a accumilater that stores all the sum of digits and curr stores the current value
// console.log(r);

//loops
//for loop
// for(let i = 0 ; i < 10 ; i++){
//     console.log(i);
// }

//while loop
// let j = 0;
// while (j < 10){
//     console.log(j);
//     j++;
// }

//do while loop
// let j = 0;
// do{
//     console.log(j);
//     j += 1
// }while(j < 10);

//functions

// function new_fun(){
//     console.log(10);
// }
// new_fun();

// function res(a){
//     console.log(a+2);
// }
// res(1);

// function new_res(a,b){
//     return a+b;
// }
// console.log(new_res(1,3));

// Arrow functions
// const new_func = () => {
//     console.log("this is a Arrow function");
// }
// new_func();

// const func = (a,b) => {
//     console.log(a*b);
//     return a*b;
// }
// console.log(func(1,3));

//switch
// let day = 2;

// switch(day){
//     case 1 : console.log("monady");
//     break;
//     case 2 : console.log("Tuesday")
//     break;
//     default : console.log("not a day");
// }


// reversing a string
// let s = "abhi";
// let s1 = s.split("");
// n = s1.length-1;
// i = 0;
// while(i <= n){
//     [s1[i],s1[n]] = [s1[n],s1[i]];
//     i += 1;
//     n -= 1;
// }
// console.log(s1.join(""));


// multiplying 2 values using Dom

// const Text =() =>{
//     const num1 = document.getElementById("num1").value;
//     const num2 = document.getElementById("num2").value;

//     const res = num1*num2;

//     console.log(res);
// }

// changing a element color in html using Dom
// when we use this Dom all th elements reloaded that the reasom why react is introduced ,react uses virtual Dom
// const Text = ()=>{
//     const new_ele = document.getElementById("t1");
//     new_ele.style.color = "red";
// }

// multiplying and changing in web page
// const Text =() =>{
//     const num1 = document.getElementById("num1").value;
//     const num2 = document.getElementById("num2").value;

//     const res = num1*num2;
//     const n_res = document.getElementById("res").value = res;
// }


// const Text = () =>{
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);

//     const op = document.getElementById("opreation").value;

//     console.log(op);

//     let res;
//     if(op === "+"){
//         res = num1+num2;
//     }
//     else if(op == "-"){
//         res = num1 -num2;
//     }
//     else if(op == "*"){
//         res = num1 * num2;
//     }
//     else{
//         res = num1 / num2;
//     }
//     const real_res = document.getElementById("res").value = res;

// }

// we are compare 2 objects in js just by using == or ===
// we have to check each element
// let arr = [1,2,3];
// let new_arr = [1,2,3];

// console.log(arr === new_arr);

// let a = "abhinav";
// let b = "a";
// console.log(a.includes(b));
// console.log(a.indexOf(b));
// console.log(a.toUpperCase());
// there is no inbuilt function to make first letter as capitial and remaining lower

// let arr = [];
// arr.push([1,1]);
// console.log(arr);

// let arr = [1,2,3];
// console.log(arr.count(1));