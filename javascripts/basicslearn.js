// // console.log("hello");
// // let str ="arvind"
// // str.trim().toUpperCase();
// // console.log(str);
// // let str1="apnacollage";
// // str1.slice(4,9);
// // console.log(str1);
// // str1.indexOf("na");
// // console.log(str1);
// // str1.replace("apna","arvind");
// // console.log(str1);
// // str1.repeat(4);
// // console.log(str1);
// // console.log("hello");
// let str2 ="Collage";
// str2.replace("l","t");
// console.log(str2);


// let array=[['x','o','x'],['o','x','o'],['x','o','x']];
// console.log(array);
// let copyarray=array;
// console.log(copyarray);
// copyarray[0][1]="null";
// copyarray[1][0]="null";
// copyarray[1][2]="null";
// copyarray[2][1]="null";
// console.log(copyarray);
// console.log(array);

///// for loops...................................

// for (let index = 10; index <=5; index++) {
//      console.log(index);   
// }

// //// to print odd number
// for (let index =1; index <=15; index =index+2) {
//      console.log(index);   
// }
//// to print even  number.............
// for (let index =2; index <=15; index =index+2) {
//      console.log(index);   
// }
//// to print even  number...........
// let n=prompt("Enter your print  table")
// for (let index =n; index <=n*10; index =index+n) {
//      console.log(index);   
// }

///// while loops ........................................

// let i=1;
// while (i<=5) {
//       console.log(i);
//       i++;    
// }
// let i=prompt("enter the value of starting = ")
 
// while (i<=5) {
//       console.log(i);
//       i++;    
// }

/// using prompt.....................................

// let favirate ="avatar";
// let gues =prompt(" gues my favorite movies ");
// while (gues != favirate ){
//       gues =prompt("wrong try again ");
//       if (gues =='quit') {
//             console.log(" you quit");
//             break;
            
//       }
      
// }   
// if (gues == favirate) {
//       console.log("congrats");
      
      
// }  

//// loop with arrays 
// let arr =["anika","jyoti","sonam","juhi"];
// for (let index = 0; index < arr.length; index++) {
//       console.log(index ,arr[index]);
      
// }
//// loop with arrays 
// let array =["anika","jyoti","sonam","juhi"];
// for (let index =array.length-1; index >=0; index--) {
//       console.log(index ,array[index]);
      
// }

// let heros =[["iron","spider",'thor'],["superman","wonder","women"]];

// for(let i=0; i<heros.length; i++){
//       console.log(`List # ${i}`);
      

//       for(let j=0; j<heros[i].length; j++){
//             console.log(heros[i][j]);
            
//       }
// }

// let hero =[["iron","spider",'thor'],["superman","wonder","women"]];

// for(heros of hero){
//       console.log(heros);
      
// }
// for(heros of "iron"){
//       console.log(heros);
      
// }
// for (list of hero){
//       console.log(list);
      
//       for(heross of list){
//             console.log(heross);
            
//       }
      
// }


//  /// to create todo apps .......................

// let todo =[];
// let   req= prompt("please enter your request ");

// while (true) {
//       if(req =="quit"){
//             console.log("quiting the app");
//             break;
            
//       }
//       if(req == "list"){
//             console.log("---------------");
            
//            for(task of todo){
//             console.log(task);
            
//            }
//       }
//            else if( req =="add"){
//             let task =prompt("please enter the task you want to add");
//             todo.push(task);
//             console.log("task added");
            

//            }
//            else if( req =="delete"){
//             let idx = prompt("please enter the task index");
//             todo.splice(idx,1);
//             console.log("task deleted");
            

//            }
           
            
//      req =prompt("please enter your requiest ") 
      
// }

//// object literals .......................
/// it`s work on the key value pairs 

// let patna ={     /// object literals 
//       lasttime:"23.9.2024",
//       moths :"september"
// };
// console.log(patna);

// let student ={
//       name :"arvind",
//       age :"19",
//       marks:"88.56"
// };
// console.log(student);
// console.log(student);


/// notes obect literals me kabhi bhi order follow nhi krta hmesha change hota hai 

/////  to create a post ///////////////////////,,,
// const post ={
//       username :"@arvind",
//       content:"this is my first post",
//       like:500,
//       Reports :5,
//       tags :["@ravi","@subodh","etc"]
// };
// //// way to acces the any value two way...........

// console.log(post["username"]);

// console.log(post["content"]);

// console.log(post.Reports);
// console.log(post.tags);

// / conversion in get..............//////

// let obj ={
//       1:"a",
//       2:"b",
//       null:"c",
//       true:"d",
//       undefined:"e",
//       Object:"f"
// };
// //// ye sara ko js phle string me convert krta hai phir ushe use krta hai 
// console.log(obj);

// /// add / updates value in literals..............

// const student ={
//       name:"arvind",
//       age:19,
//       marks:88,
//       city:"patna"
// };
// //// updates ,,,,
// student.age=20;
// //// addd////
// student.gender="male" /// add 
// delete student.marks  /// delete 
// console.log(student);

//// nested object literals .................................
// const studentss ={
//       ravi :{
//             name:"ravi",
//             age:19,
//             marks:77
//       },
//       subodh:{
//             name:"subodh",
//             age:17,
//             marks:88
//       }
// };
// console.log(studentss.ravi);
// console.log(studentss.subodh);
// console.log(studentss.subodh.marks);
// console.log(studentss);

////// array of object
// let array =[
//       {
//             name:"arvind",
//             age: 19,
//             marks:84
//      },
//       {
//             name:"ravi",
//             age: 19,
//             marks:87
//      },
//       {
//             name:"manish",
//             age: 19,
//             marks:86
//      }
     
// ];

///////// MATHS METHODS ........................................

//// ISHKA RANGE 0 SE 1 KE BICH me hota hai na kabhi 0 or 1 generat hoga........................................
// // console.log(array[0].name);
// console.log(Math.abs(4));  // // abselute value
// console.log(Math.pow(3,2));
// console.log(Math.round(5.479879));
// console.log(Math.floor(5.7)); /// starting value
// console.log(Math.ceil(4,5)); /// largest value 
// console.log(Math.random());  /// TO GENERAT RANDOM NUMBER

//// USE MATHS RANDOM FN USE THAN CONVERT INTEGER 
// console.log(Math.random()*10);

// let toremdome=Math.random()*10;  /// eshka range hmesha  0-9

// let togenerat=Math.random()*10+1;  /// eshka range hmesha  0-10
// let togen100=Math.random()*100+1;  /// eshka range hmesha  0-100
// let ram=Math.random()*10+20;  /// jitna se multiple hoga   under me hi generat krega or + jitna number hoga add kr dega ./..../
// console.log(ram);

// console.log(Math.floor(toremdome));
// console.log(Math.floor(togenerat));
// console.log(Math.floor(togen100));
// let rass=Math.random()*5;
// console.log(Math.floor(rass));

/////................  functions in js .................

// function fun1() {
//       console.log(Math.floor(Math.random()*100+2));
// }
// fun1();
// function fun1(name) {
//       console.log(name);
// }
// fun1("avind")
// function randoms(){
//       let dics =Math.random()*5+1;
//       console.log(Math.floor(dics));
// }
// randoms();
//// pass arguments 
// function passarg(n) {
//       let pass =n*n;
//       console.log(pass);
// }
// passarg(5)

// function average(a,b,c) {
//       let calculateavg =(a+b+c)/3;
//       console.log(calculateavg);
// }
// average(2,4,6);
// average(2,4,12);
// function table(n) {
//       // for (let index = n; index <=n*10;   index=index+n) {
//       //       console.log(index);      
//       // }  
//       // for (let index =1; index <=10;   index++) {
//       //       console.log(index*n);      
//       // }  
// }
// table(2)

//// return keywords ................................
// function sum(a,b){
//       return a+b;
// }
// console.log(sum(2,5));
// console.log(sum(7,5));
// function agess(age) {
//       if (age >=18) {
//             return "adult";
//       }else{
//             return "not adult";
//       }
//       console.log("bye bye");    
// }
// console.log(agess(18));
//////////// practics qs../.........
// function sumofs(n){
//       let sum=0;
//       for (let index = 0; index <= n; index++) {
//            sum+=index;  
//       }
//       return sum;
// }
// console.log(sumofs(5));

// function stringsum(str) {
//       let sumof ="";
//       for (let index = 0; index <str.length; index++) {
//             sumof+=str[index];
//       }      
//       console.log(sumof);
      
// }
// let str =["ar","vi","nd","ku","mar","ya","dav"];
// stringsum(str);
// function outer() {
//       let x =23;
//       let y =34;
//       function inner() {
//             console.log(x);     
//       }
     
//       inner();
      
// }
//  //// used to laxical block to acces the element
// outer();

// function otr() {
      
//       {
//             let a=24;
//             const b=20;
//             c=29;
//       }
//       // console.log(a);
//       // console.log(b);
      
//       // console.log(c);
      
      
// }
// otr();

///// function expresions ...........................................................................
// let neme ="arvind";
// let sum =function(a,b) {
//       return a+b;
// }
// console.log(sum(2,4));

// let num =function() {
//       console.log("i do`t know");
// }
// console.log(num());

/// higher order function ...................................................................
///// jistna time man kre count ko pass krao bs 
// function multipletime(func ,count) {
//       for (let i = 1; i<=count; i++){
//            func();  
//       }  
// }
// let geet =function(){
//       console.log("HELLO ARVIND ");
      
// }
// multipletime(function () {console.log("arvind yadav")},1000)
// // multipletime(geet,12)

// ////// retuurn highorder fun.............

// function higherorder(request) {
//       if (request == "even") {
//             let even = function even(n) {
//                   console.log(n%2==0); 
//             } 
//             return even;
//       }
//       else if (request=="odd") {
//             let odd =function odd(n) {
//                   console.log(!(n%2==0)); 
//             }
//             return odd ;   
//       }else{
//             console.log("Wrong request ");
            
//       }
// }
// let evens = higherorder("even");
// let odds = higherorder("odd");
// console.log(evens(2)); //// true 
// console.log(odds(2)); //// false 

///// methods ...............................................................
// const calculate ={
//        num :24,
//       add: function(a,b){
//             return a+b;
//       },
//       sub: function(a,b){
//             return a-b;
//       },
//       mul: function(a,b){
//             return a*b;
//       }
// }
// let adds=calculate.add(2,6);
// console.log(adds);
// let subs=calculate.sub(2,6);
// console.log(subs);
// let muls=calculate.mul(2,6);
// console.log(muls);


//// this used in js ...............................................................

// const student ={
//       name:"arvind",
//       age:19,
//       phys:86,
//       chem:89,
//       maths:78,
//       eng:68,
//       getsvg(){
//             console.log(this);
            
//             let avg=(this.phys+this.chem+this.maths+this.eng)/4
//             console.log("average of this marks ",avg);
//       }

// };
// student.getsvg();


////// ...................... try catch ..........................................

// let a =5;
// try{
//       console.log(a);
// }catch(e){                   ///// try wrong after catch execute 
//       console.log("Exeptions throuth");
      //     console.log(e);
          
      
// }

//// arrow functions ........................................................
// let ar=()=>{
//       console.log("hello arvind");
      
// }
// console.log(ar());

/// arro function ko hm ek hi line me return krte hai 
/// ushe implicit return khte hai 
// let ones=(a,b )=>a*b  /// its a arrow implicit functions 
// console.log(ones(2,4));

// setTimeout(() => {
//       console.log("hello arvind");
      
      
// }, 2000);
// setInterval(() => {
//       console.log("hello sir i`am sorry ");
      
// }, 2000);
// clearInterval()
// let student ={
//       name:"arvind",
//       id:1234,
//       course:"b.tech",
//       prop:this,  /// globle scope
//       getname:function(){
//             console.log(this);
            
//             return this.name;
//       },
//       getmarks: ()=>{
//             console.log(this);
            
//         return this.name;
//       }
// };
// const a=5; /// global scope


/// Q.1
// let nsq=(n)=>n*n   /// pass to the arrow fn.
// console.log(nsq(4));
//// Q2.
// let sets =setInterval(() => {
//       console.log("Hello world");
      
// },2000);

/// ...............for each loops ...........................................................
// let arr=[1,5,2,4,7]
// // let ar=function(e){
// //       console.log(e); 
// // }
// arr.forEach ( function(e){
//       console.log(e);
      
// })
// arr.forEach(ar);

//// another way 
// for (const i of arr) {      /// for of me yahi disadvantage hai 
//       console.log(arr);    
// }
/////.............map ................its work on key value base ................................
// const maps =new Map();
// maps.set('a',2);
// maps.set('b',21);
// maps.set('c',22);
// maps.set('d',24);
// maps.set('e',27);
// // console.log(maps.get('a'));
// let mp =maps.forEach(element => {
//       console.log(element);
      
// });
// maps.set('a',8434246294)
// console.log(maps.get('a'));
// maps.delete('e')
// let mps =maps.forEach(element => {
//       console.log(element);
      
// });
// maps.set(8434246294,'mobile no');
// console.log(maps.get(8434246294));
// maps.set(2,'h');
// console.log(maps.get(2));
// console.log(maps.get('h')); /// i`ts not working on the key updates again get the values ...
// let ar=[2,4,35,7,9]
// let ns =ar.map(function(e){
//       return e*4
// });
// console.log(ns);
///// filter ...........................................
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 7);

// console.log(result);

//// every ............................
// let nu=[2,4,6]
// let ars =nu.every((e)=> e%2!=0)
// console.log(ars);

// //// reduce funtions...........................
// let num =[1,2,3,4];
// let sm =num.reduce((equmelator,value) => {
//       console.log(equmelator)    ////equmelator  again and again change hota rhega 
//       return equmelator+value});
//       /// than print final value 
//       console.log(sm);

// /// use reduce than find maximum number of array
// let arr=[3,2,4,5,6,8,9,12,76];
// let max =arr.reduce((max,el)=>{
//       if(max < el){
//             return el;
//       }else{
//             return max;
//       }
// })
// console.log(max);

//// Q. all are divided by 10
// let arrs=[10,20,30,40,49];
// let divs=arrs.every((arr)=>(arr%10==0));
// console.log(divs);

// ////Q minimum number of array 
//    let nums=[10,20,30,40,49];
//    let min =nums.reduce((min,el)=>{
//       if(min < el){
//             return min;
//       }else{
//           return el;  
//       }
//    });
//    console.log(el);
 ///// rest concept ..........................
//  function sum(...args) {
//       return args.reduce((sum,ee) => sum+ee) 
//  };
// // function sum (...args){
//       //// arguments 
//       for (let index = 0; index <args.length; index++) {
//           console.log("you give us ",args[i]); 
//       }
// }
// function min(){
//       console.log(arguments);
//       console.log(arguments.length);
//       arguments.push(1);
      
// } 
//// destruncturing /......................
// let names =["hello","many","rafha","radha","jamuna"]
// // let win=names[0]
// // let loss=names[1]
// // let sonns=names[2];
// let [first,second,...other] = names;   /// concept working on the destructuring 
// console.log(first,second,other);
/// destructing object ..............
// const deob ={
//       name:"Arvind",
//       age:19,
//       class:"b.tech",
//       username:"erarvind",
//       pass:"abcde"
// }
// let{username,pass,...other}=deob;
// console.log(username);


///............................ DOM//.........................//
// let sr =document.getElementById("hello")
// sr.style.fontSize='20px'
// sr.style.textAlign='center'
// sr.style.color='pink'
// let cl =document.getElementsByClassName('para')
// for (let index = 0; index < cl.length; index++) {
//       console.log("valiue of ",cl[index]);
      
// }

//// manipulating attributes .............................//
//// get attributes 
///// set attributes 
// let ge =documment.queryselecter('p')
// console.log(ge.innerhtml);
// let link = document.querySelectorAll('div');

// for (let i = 0; i < link.length; i++) {
//       link[i].style.color = "green";
      
// }
// let hchange =document.querySelector('h4');
// hchange.style.fontSize='40px';
// hchange.style.textAlign='center';
// hchange.style.background='green';
// hchange.classList.add('ar');
// hchange.setAttribute('ar','yellow')


////// Adding element on the page ...........
// let ads =document.createElement('h3');
// ads.innerText="hello arvind kumar";
// let rm =document.removeChild('hello');


// //// asssingnment solve 

////// total clear concept of addelement and remove element ..................

// let  para1=document.createElement('p');
// para1.innerText = "hey i am red";
// document.querySelector('body').prepend(para1);
// para1.classList.add("red")
// let  h3=document.createElement('h3');
// h3.innerText = "hey i am blue";
// document.querySelector('body').append(h3);
// h3.classList.add("blue")

// let div =document.createElement("div");
// let h1=document.createElement("h1");
// let para2 =document.createElement("p");

// h1.innerText =" i am a div ";
// para2.innerText ="me to ";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");

// document.querySelector("body").prepend(div);


// let cn=document.createElement("p");
// cn.innerText="hello i`am arvind kumar";
// document.body.append(cn)
// cn.classList.add('hello')
// // cn.remove();
// let Name=document.createElement("level");
// Name.innerText="Name ";
// document.body.append(Name)
// let input=document.createElement("input");
// input.innerText="enter";
// document.body.append(input)
// let btn=document.createElement("button");
// btn.innerText="submit";
// document.body.append(btn)
// btn.classList.add("bt")

// let btss =document.querySelectorAll("button")
// for(btss of btss){
//   btss.onclick=click
//    btss.onmouseenter=onmou
// }
// function click(){
//       console.log("hello ");
      
// }
// function onmou() {
//       console.log("hello sir click me ");
      
      
// }

// //// event listeners ............................
// let btn =document.querySelectorAll("button")
// for(btn of btn ){
//       btn.addEventListener("click",sys)
//       btn.addEventListener("click",says)
// }
// function sys(){
//      alert("hey guese");
      
// }
// function says(){
//      alert("hello friends ");
      
// }

// /////// vvvi concept of event listener in js 
// let btn =document.querySelector("button")

// btn.addEventListener("click",function(){
//       let h3 = document.querySelector("h3");
//       let randomcolor =getrandomcolor();
//       h3.innerText=randomcolor;

//       let div =document.querySelector("div");
//       div.style.backgroundColor=randomcolor;

//       console.log("color updates ");
      
// });
// function getrandomcolor(){
//       let red =Math.floor(Math.random()*255);
//       let green =Math.floor(Math.random()*255);
//       let blue =Math.floor(Math.random()*255);

//       let color =`rgb(${red},${green},${blue})`;
//       return color;

// }

// let para = document.querySelector("p");
// para.addEventListener("click",function(){
//       console.log("paragraph was clicked");
      
// })
// let box = document.querySelector("div");
// para.addEventListener("mouseenter",function(){
//       console.log("mouse in side box ");
      
// })


// ///// this used
// let btn =document.querySelector("button")
// btn.addEventListener("click",function(){
//       console.log(this.innerText);
//       // console.dir(this);
//       this.style.backgroundColor="blue"
// })

// ////// keywords ..................////
// let btn =document.querySelector("button");

// btn.addEventListener("click", function(event){
//       console.log(event);
      
//       console.log("button clicked");
// })
// let input =document.querySelector("input");
// // input.addEventListener("keydown",function(){
// input.addEventListener("click",function(event){
//       console.log(event);
      
// })
// let form=document.querySelector("form");
// // input.addEventListener("keydown",function(){
// form.addEventListener("submit",function(){
//       alert("submit your form");
      
// })
// let div =document.querySelector("div");
// let ul =document.querySelector("ul");
// let li =document.querySelectorAll("li");
// div.addEventListener("click",function(event){
//       event.stopPropagation();
//       console.log("Div was click ");
// });
// ul.addEventListener("click",function(event){
//       event.stopPropagation();
//       console.log("ul was click ");
      
// });
// for ( li of lis) {
//       lis.addEventListener("click",function(event){
//       event.stopPropagation();
//       console.log("li was clicked");
// }) ;   
// }
// ///// build todo apps .................events performense ....
// let btn =document.querySelector("button");
// let ul =document.querySelector("ul");
// let input =document.querySelector("input");

// btn.addEventListener("click",function(){
//       let item=document.createElement("li");
//       item.innerText=input.value;
   
//        //// to add delet button appent the classname 

//       let detbtn =document.createElement("button");
//       detbtn.innerText="Delete";
//       detbtn.classList.add("delete");
//       item.appendChild(detbtn);
//       ul.appendChild(item);
//       // console.log(input.value);  
//        input.value="" ;
   

// });

// ul.addEventListener("click",function(event){

//       if(event.target.classList.contains("delete")){
//             let listitem = event.target.parentElement;
//             // console.log(listitem);
            
//             listitem.remove();
//             console.log("Delete");  
//       }
//       // console.log("button clicked");
//       // console.log(event.target); //// target the events 

      
      
// });


// let dtbtns =document.querySelectorAll("ul");
//  for (dtbtn of dtbtns) {
//       dtbtn.addEventListener("click",function(){
//             // console.log("clicked");
//             let par=this.parentElement;
//             console.log(par);
//             par.remove();            
//       })
//  }



//////////////// Call Stack//////////////////////////
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans =two() + one();
    console.log(ans);
    
}
three();
