// console.log("hello");
// a = 1;
// b = 1;

// if(a === b){
//     console.log("yes")
// }
// console.log(a == b);
// console.log(a === b);

//var has bloack level scope
//let has funtion level scope

// var a = 10;
// console.log(a);

// const b = 10;
// console.log(b);

// let c = 10;
// console.log(c);

// c += 1;
// a += 1;

// console.log(a);
// console.log(b);
// console.log(c);

// a = true;
// if(a){
//     var b = 10;
//     let c = 12;
// }
// console.log(b);
// console.log(c);


function op(){
    const num1 = document.getElementById("operation").value;
    const num2 = document.getElementById("operation1").value;
    const res = num1*num2;

    console.log(res);
}