//this is day 3 of traning

//closure and callbacks
//closure => allows a function to access variables from it's outer scope even after the outer function has finished executing

// const outer = () =>{
//     let count = 0;
//     const inner = () =>{       //this is a closure funsction
//         count++ ;              //usually we can't get access to let variables outside it block but here we can
//         console.log(count);
//     }
//     return inner;
// }

// const val = outer();
// val();  // count don't die after this call this still stores the refernce , tha's why we can access the previous count value 
// val();


// const outer = () =>{
    //     let count = 0;
    //     const inner = () =>{       //this is a closure funsction
    //         count++ ;              //usually we can't get access to let variables outside it block but here we can
    //         console.log(count);
    //     }
    //     inner();
    // }
    
    // outer();  //1
    // outer(); // 1  output will be same because count variable is destroyed after every function call that's why output is same and that's where we closures comes into picture.This is also called as statemanagement.


// function greet(lang) {
//   return function (name) {
//     console.log(lang + ": Hello " + name);
//   };
// }

// const greetEnglish = greet("EN");
// const greetSpanish = greet("ES");

// greetEnglish("Abhi");  // EN: Hello Abhi
// greetSpanish("Abhi");  // ES: Hello Abhi

//advantages of clousers => data privacy and state management

//***callbacks***

// const outer = (name,callback) =>{
//     console.log("hello",name);
//     callback();
// }
// const inner =() =>{
//     console.log("bye");
// }
// outer("abhi",inner);

//callbacks are just a function which are passed as an argument to another functions which will be called later
//benefits of callbacks => these are used to implement async functions

//jquery's
//these are used to simplfy the use of DOM

// const changing_color = () =>{
//     let ele = document.getElementById("n1");
//     let color = ele.style.backgroundColor;

//     if(color == "red"){
//         ele.style.backgroundColor = "";
//     }
//     else{
//     document.getElementById("n1").style.backgroundColor = "red";
//     document.getElementById("n1").style.borderRadius = "5px";}
// }

// const making_bold = () => {
//     let ele = document.getElementById("n1");
//     let is_bold = ele.style.fontWeight;

//     if(is_bold === "bold"){
//         ele.style.fontWeight = "normal";   
//     }
//     else{
//         ele.style.fontWeight = "bold";
// }
// }

// const operation = () =>{
//     let val = document.getElementById("choice");
// }