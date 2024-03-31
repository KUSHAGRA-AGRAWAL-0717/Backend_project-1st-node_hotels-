// var a=0
// var b=9
// var ans=a+b
// console.log(ans)
// //for loop and if else statement are same as the c language and
// //we can yiu use as it is in the javascript
// const person={
//     name: "kushagra",
//     age: 17,
//     isStudent: false,
//     hobbies: ["loniliness","painting","watching movies"]
// }
// console.log(person.hobbies)
// console.log(person)
// //
// const ages=[32,33,16,40]
// function checkage(age){
//     return age<=18
// }
// const result=ages.filter(checkage)
// var prompt=require("prompt-sync")();
// var age=prompt("please enter your age ")
// console.log(age)
////////////
//////////////////
// function add(a,b){
//     return a+b;
// }
// var add=function(a,b){
//     return a+b;
// }
// var add=(a,b)=>{return a+b} //call back function
// var add=(a,b)=> a+b;
// (function(){                                    //we don't require to call that function
//     console.log("prince is an intelligent guy")
// })();
// var result=add(2,3)
// console.log(result)
//understanding the call back functions
// function callback(){
//     console.log("i am writing an function");
// }
// const add=function(a,b,callback){            //inside an functionn i fan function is calling then we say the inside function as an call back function
//     var result=a+b
//     console.log("result "+result);
//     callback();
// }
// add(2,3,callback);

/////////another function method of the callback
// const add=function(a,b,callback){            //inside an functionn i fan function is calling then we say the inside function as an call back function
//     var result=a+b
//     console.log("result "+result);
//     callback();
// }

// // add(2,3,function(){
// //     console.log("new function is unlocked");
// // })
// //or
// add(2,3,()=>console.log("function is  enhanced"));

////////////////////////////

// var fs=require("fs");
// var os=require("os");

// var user=os.userInfo();  //with the help of the os we can find the detail of the user of the server
// console.log(user)

// fs.appendFile("greetinig.txt","Hi "+user.username+"!\n",()=>{   //file path then data and then callback function
//     console.log("file is created");
// });

// console.log(os)

// console.log(fs);
//these fs and os are the code modules
/////////////////////////////////////////////////
//importing differnet files from the other files
// var _=require("lodash")
// const notes=require("./notes.js")

// console.log("server file is available")
// var age=notes.age
// var result=notes.addnumber(3,age)

// console.log("result is : ",result)

// console.log(age)

// var data=["kushagra",1,2,3,3,1,2,"name","age"]
// var filter=_.uniq(data)
// console.log(filter)

// const jsonString='{"name": "john","age":30,"city":"jaipur"}';
// const jsonObject=JSON.parse(jsonString)
// console.log(jsonObject.city)

// const objecttoConvert={
//     name: "kushagra",
//     age: 17
// };
// const json=JSON.stringify(objecttoConvert)
// console.log(json)  //json is an type of en string
// console.log(typeof json)

//////////////////////////////////////////

//

// const express=require("express")

// const app = express(); //it is a type of the map in the app
//  const db=require('./db')
// // app.get("/", function (req, res) {
// //   res.send("Hello World"); //the first argument id an address end with the / and the inside the res and req parameters says that when we request it will give us an response of the hello world
// // });

// app.get("/", function (req,res) {
//      res.send('kushagra agrawal always in the trouble')
// });

// app.listen(3000, () => {
//   console.log("server is responding or live");
// });
// //this 3000 is an port where i decide that server will form in that room

// // app.post("/items", (req, res) => {
// //   res.send("data is transferred");
// // });

//////

//////

const express = require("express");
const app = express();
const db = require("./db");



const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItem = require("./models/MenuItem");
const Person = require("./models/Person");

const PORT=process.env.PORT || 3000

app.get("/", function (req, res) {
  res.send("welcome to the world of the coding");
});

// app.post("/person", (req, res) => {
//   const data = req.body;
//   const newPerson = new Person(data);
//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log("error saving person", error);
//       res.status(500).json({ error: "internal server eror" });
//     } else {
//       console.log("data saved successfully");
//       res.status(200).json(savedPerson);
//     }
//   });
// });

////post route to add a person
//
// app.post("/person", async (req, res) => {
//   try{
//     const data=req.body
//     const newPerson=new Person(data)
//     const response=await newPerson.save()
//     console.log('data saved')
//     res.status(200).json(response)
//   }catch(err){
//     console.log(err)
//     res.status(500).json({error: 'internal server error'})
//   }
// });

// //get method to get the person
// app.get('/person',async (req,res)=>{
//   try{
//      const data= await Person.find();
//      console.log('data fetched')
//      res.status(200).json(data)
//   }catch(err){
//     console.log(err)
//     res.status(500).json({error: 'internal server error'})
//   }
// })

// app.get('/Menu',async (req,res)=>{
//   try{
//     const data= await MenuItem.find();
//     console.log('menuitem fetched')
//     res.status(200).json(data)
//   }catch(err){
//     console.log(err)
//     res.status(500).json({error: 'internal server error'})
//   }
// })

// app.post('/Menu',async (req,res)=>{
//   try{
//     const data=req.body
//   const newmenu=new MenuItem(data)
//   const response=await newmenu.save()
//   console.log('data is saved')
//   res.status(200).json(response)
//   }catch(err){
//     console.log(err)
//     res.status(500).json({error: 'internal server error'})
//   }
// })

// app.get('/person/:workType',async (req,res)=>{        //paramaterized call
//   try{
//     const workType=req.params.workType;       //extract the work type ffrom the url parameters
//     if(workType=='chef'|| workType=='manager' || workType=='waiter'){
//          const response=await Person.find({work: workType})
//          console.log("response fetched")
//          res.status(200).json(response);
//     }else{
//       res.status(404).json({error: 'invalid worktype'})
//     }
//   }catch(err){
//     console.log(err)
//     res.status(500).json({error: 'internal server error'})
//   }
// })

//import the router files
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuItem = require("./routes/menuItemRoutes");
app.use("/menu", menuItem);


app.listen(PORT, () => {
  console.log("listening the port 3000");
});
