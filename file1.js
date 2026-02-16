var v1 =100;

console.log(`${v1}`);   
console.log(`v1 = ${v1}`);

var name ="kiran kumar";
console.log(name);
console.log(`name = ${name}`);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.substr(0,5));

var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());   
console.log(d.getDay());     //0 to 6 (0 is Sunday, 1 is Monday, and so on)
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());


var a = 10; 
var b = 20;

var uname = "kiran";
var pas = "kumar";
if(a > b){
    console.log("a is greater than b");
}   
else{
    console.log("b is greater than a");
}
if(uname == "kiran" && pas == "kumar"){
    console.log("login successful");
}       
else{
    console.log("login failed");
}   


if(a === b){ // === check the datatype of the variable and value of the variable
    console.log("v1 and v2 are equal");
}

for(let i = 0; i < 5; i++){     
    console.log(i);
 }// i is accessible outside the for loop because var is function scoped

 var i = 0;
    while(i <= 5){
        console.log(i);
        i++;
    }

 var i=1;
 do{
    console.log(i);
    i++;
 }  while(i <= 3);

 let fruits = ["apple", "banana", "orange"];
 for (let fruit of fruits){
    console.log(fruit); 
 }
 for (let fruit in fruits){ // it gives index of the array
    console.log(fruit); 
 }

 var items = ["pencil", "pen", "eraser"];

 console.log(items);
 console.log(items[0]);
 console.log(items.length);
 console.log(items[items.length - 1]); // it gives last element of the array
 items.push("sharpener");
 console.log(items);
 
 items.splice(2,1,"rani"); // here 2 is index and 1 is number of element to be removed and "rani" is element to be added
    console.log(items);
 items.unshift("book"); // here we are adding element at the beginning of the array
    console.log(items);   

 items.shift(); // here we are removing element from the beginning of the array
    console.log(items);
    
 var e1={id:1, name:"kiran", age:25};
 console.log(e1);
 console.log(e1.name);
 console.log(e1["age"]);   


 var e2 =[ {id:201, name:"kumar", job:"developer", salary:50000},
           {id:202, name:"rani", job:"tester", salary:40000},
           {id:203, name:"sita", job:"manager", salary:60000},
           {id:204, name:"geeta", job:"analyst", salary:55000} ];
           
           for(var i=0; i < e2.length; i++){
            console.log(e2[i].id+" "+e2[i].name+" "+e2[i].job+" "+e2[i].salary);
           }


           for(let e of e2){
            for(var i in e){
                console.log(`${i}:${e[i]}`);

            }
            console.log("-------------");                       
           }

function iszero(num){
    return num === 0;
}

var n=0;
if(iszero(n)){
    console.log("n is zero");
}
else{
    console.log("n is not zero");
}


function sayhello()
{
    console.log("hello");
}
function drawline()
{
    var line = "------------------";
    for(var i=1;i<=20;i++){
        line += "-";
    }
    console.log(line);
}

drawline();
sayhello();
drawline(); 




const add = (a,b) => a+b; // here we are using arrow function
var result = add(5,3);    
console.log(result);

const square = x => x*x; // here we are using arrow function
var result = square(4);
console.log(result);

const sayhello1 = () => console.log("hello");
sayhello1();


const multiply = (a,b) =>{
var result = a*b;
return result;
}
var result1 = multiply(5,3);
console.log(result1);

let num = [1,2,3,4,5];
let squared = num.map(x => x*x);
console.log(squared);

let fruits1 = ["apple", "banana", "orange"];
fruits1.forEach(fruit => console.log(fruit));
