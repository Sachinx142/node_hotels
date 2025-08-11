// Introduction to Node.js & Learn basics of JavaScript
// 1.Code run
// const a = 10;
// const b = 20;
// const sum = a + b;
// console.log("The sum is + ", sum)

// const name = "sachin";
// console.log(name)
// console.log(typeof name)
// console.log(typeof sum)

// Error and const is a constant variable and we can't change value and variable
// name = "Tarun"
// console.log(name)

// const cars = ['Volvo','Ford','BMW']
// cars.push("Tesla")
// console.log(cars)
// console.log(cars[2])

// let hour = 10;

// if(hour < 12){
//     console.log("We are not allowed")
// }
// else{
//     console.log("we are allowed")
// }

// let count = 10;
// for(let i = 1; i<=10; i++){
//     console.log("Number",i)
// }

// const person = {
//     name:"Sachin Mehra",
//     age:18,
//     profession:"Full Stack Developer",
//     hobbies:["Playing Coding","Scrolling Reels on Instagran"],
//     age:"",
// }

// console.log(person)
// console.log(person.hobbies)
// console.log(person.hobbies[0])
// person.hobbies.push("Solve Complex Problems")
// console.log(person.hobbies)

// const ages = [18,20,50,80]
// const result = ages.filter(checkAge)

// function checkAge(age){
//     return age >= 18 && age<= 50
// }

// console.log(result)

// const prompt = require('prompt-sync')();

// const age = parseInt(prompt("What is your age?: "));

// if (age >= 18) {
//     console.log("You can vote in the election.");
// } else {
//     console.log("You can't vote in the election.");
// }

// Create server in node js & callback function javascript

// function add (a,b) {
//    return a + b
// }

// const add = function(a,b)  {
//     return  a+b;
// }

// const add = (a,b) => {return a + b}

// const add = (a,b) => {
//     return a + b;
// }

// const add = (a,b) => a + b;

// const result = add(10,10)
// console.log(`The Result is : ${result}`)

// IIFE Function

// (function(){
//     console.log("Hii Sachin Mehra")
// })();

// Callback :- Callback function is way to call another function as a call reference to another function and excute later.
// function callback(){
//     console.log("This is a Simple Callback Funciton")
// }

// const add = (a,b,callback) =>{
//     const result = a + b;
//      console.log(result)//When We work Completed Mail Function
//      callback();
// }

// add(10,10,callback)

// const add = (a,b,sachin) =>{
//     const result = a + b;
//      console.log(result)//When We work Completed Mail Function
//      sachin();
// }

// add(10,10,function(){
//     console.log("Add Function Complted")
// })

// add(10,10,() =>{
//     console.log("Add Function Complted")
// })

// Node js

// Core Module and fs module
// const fs = require("fs")
// const os = require("os")

// const user = os.userInfo()

// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt',"Hii"+ user.username + "!\n",()=>{
//     console.log("file is created")
// })

// console.log(os)
// console.log(fs)

// const notes = require("./notes")
// // console.log("server file is available")

// const age = notes.age;
// console.log(age)

// const result = notes.addNumber(age+18,18)
// console.log(result)

// Lodash
// let _ = require('lodash');
// let data = ["person","person",1,2,1,2,"name","age","2"]
// const filter = _.uniq(data)
// console.log(filter)

// console.log(_.isString("sachin"))

// JS Problem with filter
// const users = [
//   { name: "Sachin", age: 20, isActive: true },
//   { name: "Tarun", age: 17, isActive: true },
//   { name: "Rahul", age: 22, isActive: false },
//   { name: "Anjali", age: 25, isActive: true },
// ];

// const result = users.filter(user=>user.age > 18 && user.isActive)
// console.log(result)

// users.forEach((ele)=>{
//     console.log(ele)
// })

// JSON

//Object to Convert JSON Format
// const objectToConvert = {
//     name:"Alice",
//     age:18
// }

// const jsonString = JSON.stringify(objectToConvert);//Converting JSON Object to String
// console.log(typeof jsonString)

// API
// const express = require("express")
// const app = express();

// app.get("/",function(req,res){
//     res.send("Hello World")
// })

// app.get("/chicken",(req,res)=>{
//     res.send("Chicken is serve")
// })

// app.post("/idli",(req,res)=>{
//     const data = {
//         size:10,
//         isSolid:true,
//         isLikingPerson:2
//     }
//     res.send(data)
//     // console.log("Hii")
//     // res.send("Data Has been Saved")
// })

// app.listen(8000,()=>{
//     console.log("Server is running at 8000")
// })

// const express = require("express");
// const app = express();

// app.use(express.json());

// let saveData = [];

// app.post("/save", (req, res) => {
//   try {
//     const { name, email, phone } = req.body;

//     if (!name || !email || !phone) {
//       return res.json({ message: "All field required" });
//     }

//     const newData = { name, email, phone };
//     saveData.push(newData);

//     res.json({
//       message: "Data saved in memory",
//       data: newData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(8000);

const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;



app.get("/", (req, res) => {
res.send(
  "Welcome to my hotel... how i can help you ?,we have list of menu"
);
});

// Importing the router file
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes")

 // Use the Router
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
      console.log("Server is running at 8000");
});
