// const performance = require('perf_hooks').performance;

// Input:"hello world"
// Output:Hello World
//
function LetterCapitalize(str) {
  var newstr="";
  for(x=0; x<str.length; x++){
    // console.log(x);
    if(x===0){
      newstr+=str.charAt(x).toUpperCase();
      continue;
    }
    if(str.charAt(x)==' '){
      newstr+=str.charAt(x);
      newstr+=str.charAt(x+1).toUpperCase();
      x++;
      continue;
    }
    else{
      newstr+=str.charAt(x);
    }
  }
  console.log(newstr);
  // code goes here
  return str;

}

// LetterCapitalize("hello world");
// LetterCapitalize("i ran there dsfw Sjfks");

function SimpleSymbols(str) {
  for (var i = 0; i < str.length; i++) {

      // check to see if current character is an alphabetic character
      // by using a simple case-insensitive regex pattern
      if (str[i].match(/[a-z]/i) !== null) {

        // check to see if a + symbol is to the left and right
        // if not, then we know this string is not valid
        if (str[i-1] !== '+' || str[i+1] !== '+') {
          return false;
        }

      }

    }

    return true;

}


// console.log(SimpleSymbols("+d+=3===+d+=+s+"));

//closures
function f(y) {
  var z = 1;
  return function g(y) {
    console.log(y + z);
  }
}
// var z=10;
// f(1); //returns the function: function g(y) {alert(y + z);}
// f()(2); //grabs function g, assings 2 to y, knows z is 1 through closure scope and makes an alert(3)

//ANOTHER EXAMPLE
// var x=9;
function fx(y) {
  var z = 1;
  function g(y) {
    console.log(y + z + x);
  }
  g(y);
}
var z=10;
// fx(2); // calls f and alerts 3, inside g JavaScript knows variabe z because it is inside a Closure Scope.


function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    var x =19
    console.log(name); // use variable declared in the parent function
  }
  console.log("wat is x: "+x);
  displayName();
}
// init();

// JS Prototype and inheritance: Function based protoype classes
//
function Vehicle(name){
  this.name=name;
  console.log(this.name);
}

Vehicle.prototype.start= function(){
  return "Our car "+this.name+" has started.. vrooom!";
}

function Car(name){
  Vehicle.call(this,name);
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.run = function(){
  console.log(this.start());
}

// var c1= new Car("Ford");
// console.log(c1.start());
// c1.run();


//JS inheritance var based functions
//
var Polygon = function(sides,name){
  this.sides = sides;
  this.name = name;
}

Polygon.prototype.print = function(){
  return "Initializing a polygon named "+this.name+" with "+this.sides+" sides..";
}

// var square = new Polygon(4,"Square");
// console.log(square.print());

var Rect = function(sides,name){
  Polygon.call(this,sides,name);
}

// Rect.prototype = Object.create(Polygon.prototype);
//
// var r = new Rect(4,"recty");
// console.log(r.print());
//

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

var binaryarraytest= [1,2,3,4,5,6,7,8,9,10];
const targetbinary = 10;
// console.log("Binary search result for target : "+10+" is "+binarySearch(binaryarraytest,2));


// Queues and Stacks in JS
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
// console.log("Stack array :"+stack)
var i = stack.pop(); // stack is now [2]
// console.log("Stacks popping out now stack array is: "+stack);            // displays 5

var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
// console.log("Queue array is "+queue);
var i = queue.shift(); // queue is now [5]

// console.log("queue array after shift is now: "+queue);              // displays 2

// let and var difference?
// let has block Scope while var has function scope...
function testletvar(){
  if(true){
    var v=0;
    let sd=3;
  }
  console.log("v is : "+v);
  console.log("sd is : " +sd);
}

// var t0 = performance.now();
//
// testletvar();// <---- The function you're measuring time for
//
// var t1 = performance.now();
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

//how to test if something is an array
var justarray =[1,2];
// console.log(justarray.constructor===Array); //cannot use typeof because it gives object back..
// console.log(justarray.isArray());

//JS type coercion
//JS converts the number on right side for example to be the same type ..
// console.log("Hello"+8);
// console.log("8"==8);


// Find pair of numbers in array that have sum equal to what is passed as arg and return true or false...
// [1,2,3,4] Sum=8 ...
// [1,2,4,4] Sum=8 ..

var arrsum = [1,2,3,4,5,6,7,12,45,14];
var testsum = 8;
var count=0;

function numsort(x,y){
  return x-y;
}

function retsum(arr,sum){

  // for(var x=0;x<arr.length;x++){
  //   for(var y=x+1;y<arr.length;y++){
  //     console.log("x:"+arr[x] +" , y:"+arr[y]);
  //     var test=arr[x]+arr[y];
  //     if(test==sum){
  //       console.log("pair found was "+x+" ,"+y);
  //       break;
  //     }
  //     else{
  //       console.log("pair not found");
  //       count++;
  //     }
  //   }
  // }

  var sorted= arr.sort(numsort);
  console.log(sorted);
  var highindex=sorted.length-1;
  var lowindex= 0;
  var found=false;
  while(!found){
    if(sorted[lowindex]+sorted[highindex]>sum){
      highindex-=1;
    }
    else if (sorted[lowindex]+sorted[highindex]<sum) {
      lowindex+=1;
    }
    else{
      found=true;
      console.log("Pair found at "+lowindex+","+highindex);
      break;
    }
    count++;
  }
  console.log("Total no. of comparisons: "+count);
}

// retsum(arrsum,testsum);
//


// var length = 10000000; //  ten millions;
// var arr = [];
// for (let i = length; i > 0; i--) {
//   // random array
//   arr.push(parseInt(Math.random() * 1000000000));
// }
// console.log(arr.length);



//socket.io
// io.on  - for setting up connection and
// socket.emit - for emitting msgs
// socket.broadcast to emi message to specific person


// Odd occurences
// [1, 2, 3, 2, 3, 1, 3]
//

function oddoccurances(arr){
    // console.log(arr);
    // var sorted = arr.sort(numsort);
    // console.log(sorted);
    var hash = {};
    arr.forEach(function(e) {    // for each item e in the array
      // console.log("checking for "+e);
      if(hash[e]) hash[e]++;       // if we already encountered this item, then increments the counter
      else hash[e] = 1;            // otherwise start a new counter (initialized with 1)
    });
  // console.log(Object.values(hash));
  var oddoccnumbs = [];
  for(var e in hash){
    if(hash[e]%2) oddoccnumbs.push(e);
  }
  // console.log(getMax(hash));

}
const getMax = object => {
        Object.values(object).filter(x=>{
        })
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null,
             Object.values(object));
       });

    };
var t = [1, 2, 3, 2, 3, 1, 3, 1,5,8,6];
oddoccurances(t);

//to remember:
//null is empty value or non-existent value and if we do typof on null its an object..
//undefined is when we declared the var but no value has been defined to it..
var x =null;
var w;
// console.log("type of null variable x : "+typeof x);
// console.log("type of undefined var w :"+typeof w);


// write a function to multiple 2 number of times that is passed as argg or we can also use 2**4 double multi signs help with double multi...
// createBase(6);

function createBase(num){
  return Math.pow(2,num);
}
var num = 4;
// console.log("create base for "+num+" : "+createBase(num));


// checking for integer in JS
//
function isInt(num) {
  return num % 1 === 0;
}
//
// console.log(isInt(4)); // true
// console.log(isInt(12.2)); // false
// console.log(isInt(0.3)); // false


// (function IIFE(){
//     console.log( "It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created!" );
// })();


// Call method
//
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// console.log("call() function working : "+person.fullName.call(person1, "Oslo", "Norway"));  // Will return "John Doe"

//Using .apply() is very similar to .call. The only difference is that .call() takes arg1 and arg2 just one after another. For .apply() to work, arguments 1 and 2 need to be entered as an array:
// console.log("apply() function result passing an array: "+person.fullName.apply(person1, ["Oslo", "Norway"]));


//using bind() https://medium.com/@owenyangg/javascript-call-apply-and-bind-explained-to-a-total-noob-63f146684564
// it returns a new function...
var owen = {
name: "Owen"
}
function sayTo(first, second){
  return first + " " + this.name + " " + second;
}
var sayToOwen = sayTo.bind(owen);

// so now bind created the new function sayTo by replacing this with the object we pass like below:
// var sayToOwen = function(first, second){
//  return first + “ “ + owen.name + “ “ + second;
// }

//Spread operator
// spread operator doing the concat job
let arr = [1,2,3];
let arr2 = [4,5];

let c = [...arr,...arr2];
// console.log(c); // [ 1, 2, 3, 4, 5 ]
// console.log(Math.min(...c));
// console.log(Math.max(...c));


//isomorphic
//CBAABC DEFFED

function testiso(str1,str2){
  console.log(str1);
  var hash={};
  //hash[i] will hold string1 chars and hash[i]=value ->value will be str2 chars
  for(var i=0; i<str1.length; i++){
    if(!hash[str1[i]]){
      console.log(str1[i]+" does not exist");
      hash[str1[i]]=str2[i];
    }
    else{
      console.log(str1[i]+" it exists and the value is "+hash[str1[i]]);
      if(hash[str1[i]]!=str2[i]){
        console.log("hash key "+str1[i]+" does not map to: "+hash[str1[i]]+" , so its not isomorphic as its mapping to another char on str2 which is : "+str2[i]);
        return false;
      }
    }
  }
  console.log(hash)
  return true;
}
let s1="eggsdlsl";
let s2="addwt wq";
// var test1 = testiso(s1,s2);
// console.log("if pair is isomorphic: "+test1);
//

function factorial(num){
  if(num==1 || num ==0) return 1;
  return num * factorial(num-1);
}

// console.log(factorial(4));

function SimpleSymbols(str){
  var ret;
  for(var i=0; i<str.length; i++){
    if(i==0 && /^[A-Ba-z]+$/.test(str[i])){
      // console.log("issa bad :"+str[i]);
      return false;
    }
    if(i!==0 && /^[A-Ba-z]+$/.test(str[i]) && (str[i-1]!="+" || str[i+1]!="+")){
      // console.log("issa bad :"+str[i]);
      return false;
    }
  }
  return true;

}

// console.log(SimpleSymbols("+a="));


function CheckNums(num1,num2) {
  if(num1==num2) return -1;
  if(num1>num2) return false;
  return true;

}

// console.log(CheckNums(3,3));

function TimeConvert(num) {
  var hrs=0;
  var mins="";
  var total = num;
  while(num>59){
      hrs+=1;
      num -= 60;
  }
  console.log("total :"+num.toString())
  // code goes here
  // if(num.toString().length==1) num = "0"+num;
  return hrs+":"+num;
}

// console.log("Time convert is :"+TimeConvert(126));


function AlphabetSoup(str) {

  // console.log(str.split('').sort().join(''));
  return str.split('').sort().join('');

}

// console.log(AlphabetSoup("coderbyte"));

function partitiongrades(arr){
  var newarr=[];
  for(var i=0; i<arr.length; i++){
    // console.log(arr[i]);
    if(arr[i]<50){
      newarr.push(arr[i]);
      arr.pop(i);
    }
  }
  // console.log(arr);
  var ret= [...arr,...newarr];
  return ret;
}

var arrs=[80,70,4,20,30,60,50];
// console.log(partitiongrades(arrs));

// var Smartphones = function(name){
//   brand:this.name,
//   getName: function(){
//     return this.name;
//   }
// }

function sumAll(arr) {
  let sum =0;
  let max= Math.max(...arr);
  let min=Math.min(...arr);
  for(let i=min;i<=max;i++){
    sum+=i;
  }
  console.log("sum is "+sum);
  return sum;
}

// sumAll([1, 4]);

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  function compare(arr1,arr2){
    var hash={};
  arr1.map(function(key){
    hash[key]=false;
  })
  console.log(hash);
  arr1.map(function(key){
    arr2.map(function(val2){
//      console.log(val+" ?= "+val2);
      if(key==val2){
        hash[key]=true;
      }
    })
  })
  Object.keys(hash).find(function(key){
    return hash[key]===false ? newArr.push(key) : null;
  })
  console.log(newArr);
}
compare(arr1,arr2);
compare(arr2,arr1);
  return newArr;
}

function diffArrays(arr1, arr2) {
  var newArr = [];
  var hash={};
  var comb = [...arr1,...arr2];
  console.log("combined arr is: "+comb);
  comb.forEach(function(e){
    console.log(e);
    if(hash[e]) {
      hash[e]++;}
    else{
      hash[e]=1;
    }
  })
  console.log(hash);
  Object.keys(hash).filter(function(key){
    if(hash[key]==1){
      newArr.push(key);
    }
  })
  console.log(newArr);
}

function diffArrayss(arr1,arr2){
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

// diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArrayss([1, "calf", 3, "piglet"], [7, "filly"])

function destroyer(...arr) {
  // Remove all the values
  var newArr=[];
  var hash={};
  arr[0].forEach(function(key){
    // console.log(key);
    if(hash[key]){
       hash[key]++;
    }
    else{
      hash[key]=1;
    }
  })
  console.log(hash);
  Object.keys(hash).filter(function(key,index){
    console.log("Key is :"+key+" index: "+index);
    for(let x=1;x<arr.length; x++){
      if(key==arr[x]){
        hash[key]=undefined;
      }
    }
  })
  console.log(hash);
  for(var prop in hash){
    // console.log(prop)
    if(hash[prop]!=undefined){
      for(let i=0; i<hash[prop];i++){
        newArr.push(prop);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

// destroyer([1, 2, 3, 5, 1, 2, 3],2,3);
// https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const filtered = collection.filter(function(value,index){
      // console.log(value);
      var match =false;
      for(let key in source){
        // console.log("source obj: "+key);
        if(value.hasOwnProperty(key)){
          if(value[key]==source[key]) {
            match=true;
          }
          else{
            match=false;
            break;
          }
        }
        else{
          // console.log("not found")
          match=false;
          break;
        }
    }
      if(match){
        arr.push(value);
        return value;
      }
  })
  // console.log(JSON.stringify(arr));
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

//convert to lowercase
//space and underscores and replace with -
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 
  str=str.replace(/\s/g,"-");
  str= str.replace(/[_]/g,"-");
  var pstr="";
  console.log("before : "+str);
  // newstr=newstr.replace(/[A-Z]/g,function(match){
  //   console.log(match);
  //   return match.toLowerCase();
  // })
  for(let x=0; x<str.length; x++){
    // console.log(str[x]);
    //first we check if the strings are uppercase and there is no space before them like ThisIsGood
    if(str.charAt(x)==str.charAt(x).toUpperCase() && str.charAt(x)!="-"){
      // console.log(str[x]);
      if(x!=0){
        console.log(str.charAt(x))
        if(str.substring(x,x-1)!="-"){
          console.log(pstr.substring(0,x));
          pstr=pstr.substring(0,x+1)+"-"+str.charAt(x).toLowerCase()+pstr.substring(x,pstr.length);
        }
        else{
          pstr+=str.charAt(x).toLowerCase();
        }
        
      }
      else{
        pstr+=str.charAt(x).toLowerCase();
      }
        // console.log(newstr);
    }
    else{
      pstr+=str.charAt(x).toLowerCase();
    }
  }
  console.log("after : "+pstr);
  return pstr;
}

// spinalCase('thisIsSpinalTap');

function translatePigLatin(str) {
  // console.log(str);
  var newstr="";
  var s = "";
  var final="";
  var reg = /[bcdfghjklmnpqrstvxzwy]/g;
  for(let i=0;i<str.length; i++){
    // console.log(str.charAt(i));
      if(str[i].match(reg)!=null){
        newstr+=str[i];
      }
      else{
        s=str.substring(i);
        break;
      }
  }
  // console.log(newstr);
  // console.log(s);
  final= s+newstr;
  if(final==str){
    final=final+"way";
  }
  else{
    final=final+"ay";
  }
  console.log(final);
  return str;
}

// translatePigLatin("algorithm");
// translatePigLatin("eight")
// translatePigLatin("california");
// translatePigLatin("glove")
// translatePigLatin("paragraphs")

function myReplace(str, before, after) {
  // console.log(str.indexOf(before));
  let index=str.indexOf(before);
  var newafter="";
  if(before[0]==before[0].toUpperCase()){
    // console.log("capital found");
    newafter=after[0].toUpperCase() + after.substring(1);
  }
  else{
    newafter=after;
  }
  // console.log(newafter);
  // console.log(str.replace(before,newafter));
  return str.replace(before,newafter);
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("His name is Tom", "Tom", "john");
// myReplace("Let us get back to more Coding", "Coding", "algorithms")

// AT and GC { GCG, return [["G", "C"], ["C","G"],["G", "C"]] }
function pairElement(str) {
  newstr=[];
  for(let i=0; i<str.length; i++){
    if(str[i]=="G"){
      newstr.push([str[i],"C"])
    }
    if(str[i]=="C"){
      newstr.push([str[i],"G"])
    }
    if(str[i]=="A"){
      newstr.push([str[i],"T"])
    }
    if(str[i]=="T"){
      newstr.push([str[i],"A"])
    }
  }
  console.log(JSON.stringify(newstr));
  return newstr;

  //USING map
  // var pairs = {
  //   "A": "T",
  //   "T": "A",
  //   "C": "G",
  //   "G": "C"
  // }
  // //split string into array of characters
  // var arr = str.split("");
  // //map character to array of character and matching pair
  // return arr.map(x => [x,pairs[x]]);
}

// pairElement("GCG");
// pairElement("CTCTA");
// //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
// pairElement("TTGAG")
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]


function uniteUnique() {
  var concatArr = [];
   var i = 0;
   while (arguments[i]){
     concatArr = concatArr.concat(arguments[i]); i++;
   }
   const uniqueArray = concatArr.filter(function(item, pos) {
     return concatArr.indexOf(item) == pos;
   });
   return uniqueArray;
 }
 
//  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



// foreach,sort, filter, map
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);



// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

// console.log(combined);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const quickSort = (unsortedArr,start,end) => {
  console.log(JSON.stringify(unsortedArr));
  console.log("start index value is: "+unsorted[start]);
  console.log("end index value is: "+unsorted[end]);
  // console.log("Selected pivot is: "+pivot);
  //partition return pivot 
  if(unsorted.length>1){
    var partitionindex= partition(unsortedArr,start,end);
    console.log("Partition index is: "+partitionindex)
    if(start<partitionindex){
      quickSort(unsorted,start,partitionindex-1)
    }
    if(partitionindex<end){
      quickSort(unsorted,partitionindex+1,end);
    }
  }
  


  console.log(JSON.stringify(unsorted));
}  

function partition(unsortedArr,start,end){
  //idea is to  move all elements smaller than pivot to left of pindex which is start.. then in the end move all the elements to right of pivot by replacing it with pindex...and in the end we return that pindex which is the pivot.
  var paritionIndex= Math.floor((start + end) / 2);
  while(start<=end){
    while(unsortedArr[start]<unsorted[paritionIndex]){
      start++;
    }
    while(unsortedArr[end]>unsorted[paritionIndex]){
      end--;
    }
    if(start<=end){
      swap(unsorted,start,end)
      start++;
      end--;
    }
  }
  return start;
}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

var unsorted= [10,4,6,8,7,2,9,5,3,1];
// quickSort(unsorted,0,unsorted.length-1);

function palindrome(str) {
  // Good luck!
  // console.log(typeof str);
  str=str.replace(/[._,\s(:)/\-]/g,"").toLowerCase();
  console.log("original string without extra chars replaced with no space: "+str);
  newstr=str.split('').reverse();
  console.log(newstr);
  console.log("Splitted and reversed str: "+newstr);
  newstr=newstr.join('').toLowerCase();
  console.log("Joined back str: "+newstr);
  if(str!=newstr) return false;
  return true;
}

// console.log(palindrome("RAR ISI RAR"));
// console.log(palindrome("eye,."));
// console.log(palindrome("race car"));
// console.log(palindrome("not a palindrome"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("five|\_/|four"));


function rot13(str) { // LBH QVQ VG!
  console.log(str);
  var newstr="";
  var regex=/[A-Z]/;
  for(let i=0; i<str.length; i++){
    let cipher = str.charCodeAt(i);
    if(!(regex.test(str[i]))){
      console.log("regex failed so: "+str[i])
      newstr+=str[i];
      continue;
    }
    console.log("cipher is :"+cipher);
    if(cipher+13<=90){
      cipher = cipher+13;
    }
    else{
      let rem = (cipher+12)-90;
      console.log("remaining is :"+rem);
      cipher= 65+rem;
    }
     console.log(String.fromCharCode(cipher));
    cipher=String.fromCharCode(cipher);
    newstr+=cipher;
  }
  console.log(newstr);
  return newstr;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
// rot13("SERR CVMMN!");

function telephoneCheck(str) {
  // Good luck!
  
  str=str.replace(/[^0-9()]+/g,"");
  console.log(str);
  console.log(str.length);
  if(str.length==13 && str[1]=="(" && str[5]==")" && str[0]==1) return true;
  if(str.length==10) return true;
  return false;
}

// console.log(telephoneCheck("1(555)-555-5555"));

function uniteUnique(...arr) {
  console.log(JSON.stringify(arr));
  var combined=[];
  var fr=[];
  arr.forEach(function(value,index){
    console.log(value);
    combined=[...combined,...value];
    
  })
  console.log("combined array is :"+combined);
  fr = combined.filter(function(value,index){
    return combined.indexOf(value)>=index;
  })
  console.log("filtered vals: "+fr);
  return fr;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]])

function convertHTML(str) {
  // &colon;&rpar;
  console.log(str);
  var hash = {
    "&": "&​amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&​apos;"
  }
  var regex = /[&<>"']/g;
  str = str.replace(regex,function(c){
      return hash[c];  
  })
  // console.log("mathcing regex returned "+regex.test(str));
  // for(let i=0; i<str.length; i++){
  //   if(hash[str[i]]!=undefined){
  //     console.log("found a match from hash for : "+str[i]);
  //     str = str.replace(str[i],hash[str[i]]);
  //   }
  // }
  console.log(str);
  return str;
}

// convertHTML("Dolce & Gabanna");
// convertHTML('Stuff in "quotation marks"')
// convertHTML("Schindler's List")


function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE 
    console.log("states we have: "+states.length);
    console.log("Days we have :"+days);
    var final=[...states];
    var prevstate;
    //check start and end
    while(days>0){
      for(let i=0; i<states.length; i++){
        // console.log(states[i]);
        if(i==0){
          if(states[i+1]==1){
            console.log("Checking first cell and found first cells active state :"+states[i+1])
            final[i]=1;
          }
          else{
            final[i]=0;
          }
        }
        else{
          if(states[i+1]==states[i-1]){
            final[i]=0;
          }
          else if(i==states.length-1){
            if(states[i-1]==1){
              console.log("checking last cell found 2nd last cells active state :"+states[i-1])
              final[i]=1;
            }
            else{
              final[i]=0;
            }
          }
          else{
            final[i]=1;
          }
        
        }
      }
      // console.log(final);
      states=[...final];
      days--;
    }
    
    console.log(final);
}

// cellCompete([1,0,0,0,0,1,0,0],1)
// cellCompete([1,1,1,0,1,1,1,1],2)

function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE 
    console.log("num is "+num);
    console.log("arr is : "+arr);
    console.log("GCD : "+arr[3]%5);
    var highest;
    for(let i=num; i>0; i--){
      console.log(i);
      var dividesall= arr.every(function(value){
        return value%i==0;
      })
      if(dividesall==true){
        highest=i;
        break;
      }
    }
    console.log("higest value is GCD : "+highest);
}
// FUNCTION SIGNATURE ENDS

// generalizedGCD(5,[2,3,4,5,6])

//find pairs whose sum equals passed num
function checkSum(arr,sum){
  console.log(JSON.stringify(arr));
  var hash={};
  arr.forEach(function(value,index){
    if(sum-value > 0){
      hash[value]=sum-value;
    }
    
  })
  console.log(JSON.stringify(hash));
  var fin =[];
  for(let i=0; i<arr.length; i++){
    // console.log("going to compare hash[arr[i]] "+hash[arr[i]]);
    if(hash[arr[i]]!=undefined && arr.indexOf(hash[arr[i]])>0 && arr[i]!=hash[arr[i]]){   
        // console.log("Value on array at "+i+" is "+arr[i]+" has a hash value defined i.e "+hash[arr[i]]+" and vice versa has value "+arr.indexOf(hash[arr[i]]));
        fin.push([i,arr.indexOf(hash[arr[i]])]);
     }
  }
  console.log("The pairs are as follows: "+JSON.stringify(fin));
  return arr;
}

// checkSum([1,9,11,13,2,3,7,5,4,6,10],12)

function minimumTime(numOfParts, parts)
{
    var part1;
    var part2;
    var timetaken = 0;
    // var timetaken = sum of parts
    //run until the parts have been made
    while(numOfParts>1){
      //get the min partsizes
      part1 = Math.min(...parts);
      part2 = parts.reduce((prev, current) => (current < prev && current !== part1) ? current : prev
        , Infinity);
      //add them to timetaken
      timetaken += (part1+part2);
      //remove the elements from the array
      parts.splice(parts.indexOf(part1),1);
      parts.splice(parts.indexOf(part2),1);
      //add back the new combined parts to array
      parts.push(part1+part2);
      numOfParts--;
    }
    console.log("Total min time taken :"+timetaken);
    return timetaken;
}

// minimumTime(4,[8,4,6,12]);
// minimumTime(4,[20,4,8,2]);
// minimumTime(6,[1,2,5,10,35,89]);

function removeObstacle(numRows, numColumns, lot)
{
    // WRITE YOUR CODE HERE
    console.log(JSON.stringify(lot));
    var flat = 1;
    var obstacle = 0;
    var trench = 9;
    var currentpst=[];
    var startx = 0;
    var starty= 0;
    var endposition;
    var cellsleft = numRows*numColumns;
    // currentpst= start;
    var queue=[];
    console.log("current position is : "+lot[startx][starty]);
    var trenchfound = false;
    while(!trenchfound){
      if(lot[startx][starty]==1){
        currentpst=[startx,starty];
        queue = [[startx],[starty]];
        console.log("i can walk");
        //increment the moves by adding to queue and show the count of moves in queeue in the end which will be the distance.
        // trenchfound=true;
      }
      //search for the element up down and right left and see if its one thn set the current position to 1;
      
    }
}

// removeObstacle(3,3,[[1,0,0],[1,0,0],[1,9,1]])

function sumFibs(num) {
  var fibonacci=[];
  var prev1;
  var prev2;
  for(let i=0;i<=num; i++){
    // console.log(i);
    if(i==0){
      prev1=0;
      prev2=0;
      fibonacci.push(i);
    }
    else if(i==1){
      prev1=1;
      prev2=0;
      fibonacci.push(i);
    }
    else{
      fibonacci.push(prev2+prev1);
      prev1=fibonacci[i];
      prev2=fibonacci[i-1];
    }
  }
  // console.log(JSON.stringify(fibonacci));

  num = fibonacci.filter(function(value,index){
    return value%2!=0 && value<=num;
  })
  .reduce(function(total,current){
      return total+current;
  })
  console.log("sum of odd numbers in fibonacci "+num);
  return num;
}

// sumFibs(4000000);

function sumPrimes(num) {
  var primes =[];
  for(let i=2; i<=num; i++){
    if(isPrime(i)){
      // console.log("pusing i="+i);
      primes.push(i);
    }
  }
  // console.log(primes);
  num = primes.reduce(function(total,current){
    return total+current;
  })
  console.log("sum of primes "+num);
  return num;
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// sumPrimes(10);
// sumPrimes(977);

function destroyer(arr) {
  // Remove all the values
  console.log(arr[0]);
  // var finalarr=[... new Set(arr[0])];
  var args =  Array.from(arguments).slice(1);
  console.log("aray splices: "+args);  
  console.log("argument length "+arr.length)
  var final = arr.filter(function(value,index){
    return !args.includes(value);
  })
  console.log("The final array is "+final);
  
  // return arr;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function dropElements(arr, func) {
  // Drop them elements.
  let finalarr = [];
  // console.log(arr);
  let i=0;
  let ret = false;
  while(i<arr.length){
    console.log(func(arr[i]))
    if(func(arr[i])!==ret) {
      arr=arr.slice(i);
      break;
    }
    else{
      arr= arr.slice(i+1);
    }
    i++
  }
  console.log(arr);
  return arr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
// dropElements([0, 1, 0, 1], function(n) {return n === 1;})
// dropElements([1, 2, 3, 4], function(n) {return n > 5;})

function steamrollArray(arr) {
  // I'm a steamroller, baby
  // console.log(arr);
  let final = [...arr];
  // console.log("final aray "+final);
  arr.forEach((a)=>{
    if(a.length>0 && a.length!==undefined){
      console.log(a);
     steamrollArray(a);
    }
    else{
      final
    }
  });
  return final;
}

// steamrollArray([1, [2], [3, [[4]]]]);
// console.log(steamrollArray([1, [2], [3, [[4]]]]))

function binaryAgent(str) {
  console.log(parseInt(String.fromCharCode(parseInt("01000001", 2))));
  return str;
}

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

// var bob = new Person('Bob Ross');
// console.log("GetFullName() :"+bob.getFullName());
// console.log("getFirstName() :"+bob.getFirstName());
// console.log("getLastName() :"+bob.getLastName());
// console.log("setFirstName() :"+bob.setFirstName('Rob'));
// console.log("getFirstName() :"+bob.getFirstName());
// console.log("setLastName() :"+bob.setLastName('Rick'));
// console.log("getLastName() :"+bob.getLastName());
// console.log("setFullName() :"+bob.setFullName("Gucci Gang"));
// console.log("getFirstName() :"+bob.getFirstName());
// console.log("getLastName() :"+bob.getLastName());

// find equal sum pairs in array 
function findequalpairsums(a){
  a =a.sort((a,b)=> a-b);
  console.log(a,a.length);
  let sum = 0;
  var hash = {};
  for(i=0;i<a.length; i++){
    sum+=a[i];
    console.log('sum to look for '+sum)
    if(!hash[a[i]]){
      hash[a[i]] = a[i];
      console.log(hash);
    }
    if(sum-a[i+1]>0){ // means its smaller than sum and we can start looking for the smaller number
      if(hash[sum-a[i+1]]) {
        console.log("number exists "+hash[sum-a[i]],sum-a[i],sum,a[i])
        // sum=0;
      }
      else{
        console.log("no mathing exists for"+sum-a[i])
      }
    }
    else if(sum-a[i+1]==0){ //means its the same number add the next number to sum
      continue;
    }
    else{
      // sum=0;
      continue;
    }
    // console.log(hash)
  }
}

var a = [8,21,4,51,71,17,42]
// findequalpairsums(a)

//convert a callback to promis function
function watchTutorialCallback(callback, errorcallback){
  let userleft= false;
  let userwatchingcatmeme = false;

  if(userleft){
    errorcallback({
      name:'user left',
      message: ':('
    })
  }
  else if(userwatchingcatmeme){
    errorcallback({
      name: 'User cat meme watch lul XD',
      message: 'XD'
    })
  }
  else{
    callback('Thumbs and sub pls lUL')
  }
}

// watchTutorialCallback((message)=>{
//   console.log("Success : "+message)
// },(e)=>{
//   console.log("Error "+ e.name+" ,"+e.message)
// })

function watchTutorialPromise(){
  let userleft= false;
  let userwatchingcatmeme = true;
  return new Promise((resolve,reject)=>{
    if(userleft){
      reject({
        name:'user left',
        message: ':('
      })
    }
    else if(userwatchingcatmeme){
      reject({
        name: 'User cat meme watch lul XD',
        message: 'XD'
      })
    }
    else{
      resolve('Thumbs and sub pls lUL')
    }
  })
}

// watchTutorialPromise().then((message)=>{
//   console.log(message);
// }).catch((error)=>{
//   console.log("error : "+error.name +" ,"+error.message)
// })

const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("done p1"),1000);
})

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("done p2"),3000);
})

const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("done p3"),2000);
})

// Promise.all([
//   p1,
//   p2,
//   p3
// ]).then(message=>{
//   console.log(message)
// })

// p1.then((msg)=>{
//   console.log(msg);
//   return p2;
// })
// .then((msg)=>{
//   console.log(msg)
//   return p3;
// })
// .then((msg)=>{
//   console.log(msg)
// })
// .catch(e=>console.log(e))

// -------------------

// const circle = function(){
//   radius = 10;
//   function area(){ 
//      return Math.PI * this.radius * this.radius; 
//   }
// };
// const cir = new circle();
// console.log(cir.area());
// cir.radius = 12;        
// console.log( cir.radius)        // => 314.15..
// console.log(typeof cir.area);  

//String functions

// var str = "Visit W3Schools!";
// var n = str.search("W3Schools");

// const users = [
//   {
//     name: 'Yazeed',
//     age: 25
//   },
//   {
//     name: 'Sam',
//     age: 30
//   },
//   {
//     name: 'Bill',
//     age: 20
//   }
// ];

// getName = (user) => user.name;
// usernames = [];

// usernames = users.map(getName);

// console.log(usernames);
// // ["Yazeed", "Sam", "Bill"]
// var total = 0;
// total = users.reduce((total, user) => user.age + total, 0);

// console.log(total);

class Animal {
  
  constructor(age) {
    // console.log('Animal being made');
    this.age = age;
  }
  
  returnAge() {
    return this.age;
  }
  
}

class Dog extends Animal {

  constructor (age){
    super(age);
  }
  
  logAgeDog () {
    console.log(`This dog is: ${ super.returnAge()} years old`);
  }
  
}

const dog = new Dog(5);


// console.log(dog);

// dog.logAgeDog();


function alphabetPosition(text) {
  console.log(text.toUpperCase().match(/[a-z]/gi).map((c)=>c))
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// get all the capital letters in a sentence
function getAllCapitals(text){
  var regex = /[A-Z]/g;
  return text.match(regex);
}
// console.log(getAllCapitals('The quick brown fox jumps over the lazy dog. It barked.'));
// expected output: Array ["T", "I"]

function DNAStrand(dna){
  //your code here
// return dna.split("")
//   .map((c)=>{
//     if(c=="A") return "T"
//     if(c=="T") return "A"
//     if(c=="G") return "C"
//     if(c=="C") return "G"
//   })
//   .join('');
//or a better solution
  let pairs = {'A':'T','T':'A','C':'G','G':'C'};
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//  DNAStrand ("ATTGC") // return "TAACG"

// Duplicate Encoder
 //The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

 function duplicateEncode(word){
  console.log(word);
  // var hash = {};
  // word.toLowerCase().split("").forEach((v)=>{
  //     if(hash[v]==undefined){
  //       hash[v]= 1
  //     }
  //     else{
  //       hash[v]+=1
  //     }
  // })
  
  // return word.toLowerCase().split("").map((c)=>{
  //   if(hash[c]>1){
  //     return ')'
  //   }
  //   else{
  //     return '('
  //   }
  // }).join("");
  
  //better solution using lastindexof and indexof with map,split and join
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) { // w is array
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// duplicateEncode("din")
//slice
function tribonacci(signature,n){
  if(n===3) return signature
  else if(n<3) return signature.slice(0,n)
  signature.push(signature[signature.length-1]+signature[signature.length-2]+signature[signature.length-3])
  return tribonacci(signature,n-1)
}

// tribonacci([1,1,1],10)
// console.log(tribonacci([1,2,3],4))

function findMissingLetter(array)
{
  let str = '';
  array.forEach((v,i)=>{
    if(i>0){
      if(array[i].charCodeAt()-array[i-1].charCodeAt()>1){
        str = String.fromCharCode(array[i-1].charCodeAt()+1);
      }
    }
  })
  return str
}

// findMissingLetter(['a','b','c','d','f']);
// console.log(findMissingLetter(['O','Q','R','S']));

function digital_root(n) {
  let str = String(n);
  console.log(str.split(''));
  console.log(str.length)
  while(str.length>1){
    let sum =0
    for(i=0; i<str.length; i++){
      sum+= parseInt(str[i])
    }
    str = String(sum);
  }
  console.log("final is "+str)
  return parseInt(str)
}

// digital_root(456)

String.prototype.camelCase=function(){
  let str= String(this)
  let final = "";
  // console.log(str.replace(/\s[a-z]/g,""))
  console.log(str.charAt(str.indexOf(" ")+1).toUpperCase())
  while(str.indexOf(" ")>0){
    final+=str.slice(0,str.indexOf(" "))+str.charAt(str.indexOf(" ")+1).toUpperCase()
  }
  console.log(final)
}

// "test case as".camelCase()

function humanReadable(seconds) {
  let [hrs,secs,mins] = [0,0,0]
  if(seconds => 3600){
    hrs = Math.floor(seconds/3600)
    mins = Math.floor((seconds - (hrs*3600))/60)
    secs = (seconds - (hrs*3600)) - (mins*60)
  }
  if(seconds < 3600){
    mins = Math.floor((seconds/60))
    secs = seconds - (mins*60)
  }
  if(seconds < 60){
    secs = seconds
  }
  if(hrs<10) hrs ='0'+hrs
  if(mins<10) mins ='0'+mins
  if(secs<10) secs ='0'+secs
  console.log(hrs+':'+mins+':'+secs)
  return hrs+':'+mins+':'+secs

  // gucci solution
  // var pad = function(x) { return (x < 10) ? "0"+x : x; }
  // return pad(parseInt(seconds / (60*60))) + ":" +
  //        pad(parseInt(seconds / 60 % 60)) + ":" +
  //        pad(seconds % 60)
}

// humanReadable(60)
// humanReadable(86399)
// humanReadable(3700)
// humanReadable(359999)

function duplicateCount(text){
  // console.log(text)
  var hash={}
  text.toLowerCase().split('').filter((v,i)=>{
    // console.log(v.)
    if(text.toLowerCase().indexOf(v)!=text.toLowerCase().lastIndexOf(v)){
      hash[v] =1
    }
  })
  return Object.keys(hash).length
}

// console.log(duplicateCount("aabbcde"))
// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("aabBcde"))
// console.log(duplicateCount('Indivvisibility'))

function sumDigPow(a, b) {
  let arr = []
  for(let i=a; i<=b; i++){
      let sum = 0;
      let num = String(i).split('')
      sum = num.reduce((a,v,i)=>{
        return a+Math.pow(v,i+1)
      },0)
      if(i==sum) arr.push(i);
  }
  console.log(arr)
  return arr
}

// sumDigPow(1, Number.MAX_SAFE_INTEGER)
// sumDigPow(1, 10)

function solution(roman){
  const hash = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
  let last =0;
  return roman.split('').reduce((a,v,i)=>{
    if(hash[v]<last){
      console.log(a,v,i)
      a+= hash[v]
      last = hash[v]
      return a
    }
    if(hash[v]>last){
      console.log("last greater than "+last,a,v,i)
      a+=(hash[v]-last-last)
      last = hash[v]
      return a
    }
    else{
      console.log(a,v,i)
      a+= hash[v]
      last = hash[v]
      return a
    }
  },0)
}

// solution('XXI');
// solution('MMVIII')
// console.log(solution('MDCLXVI'))
// console.log(solution('VIII'))
// console.log(solution('MMIV'))
// console.log(solution(''))

function sumStrings(a,b) { 
  console.log(a,b)

  return BigIn +parseInt(b)
}

// console.log(sumStrings('123','456'))

function pigIt(str){
  return str.split(' ').reduce((a,v,i)=>{
    let first = v[0];
    if(v.match(/[a-z]/ig)!==null) {
      return a+v.substring(1,v.length)+first+'ay'+' '
    }
    else {
      return a+v
    }
  },'').trim()
  
}

// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('O tempora o mores !'));


// using match returns null if nothing is found against the expression..
var str = "Hello! W@orld!";
str.match(/[a-z\s]/ig).join('')

//find everything except !, we negate using ^
str.match(/[^!]/ig).join('')
//outputs "Hello World"

function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x])){
      console.log(s[x])
      return s[x];
    }
  return "";
}

// console.log(firstNonRepeatingLetter('stTress'));
// console.log(firstNonRepeatingLetter("sTtSS"));
// console.log(firstNonRepeatingLetter(''));
// firstNonRepeatingLetter('moonmen');

function zeros (n) {
  // var factorial = 1;
  // let countzeros= 0;
  // if(n===0) return 0;
  // if(n===1) return 0;
  // //calculate factorial
  // var i, nextNumber, carret;
  // factorial = n.toString().split('').reverse().map(Number)
  // while(--n){
  //   i = carret = 0

  //   while((nextNumber = factorial[i++]) !== undefined || carret) {
  //     carret = (nextNumber || 0) * n + carret
  //     factorial[i-1] = carret % 10
  //     carret = parseInt(carret/10)
  //   }
  // }
  // factorial = factorial.reverse().join('')
  // //
  // let str = String(factorial).split('');
  //   while(str[str.length-1]=="0"){
  //     str.pop()
  //     countzeros +=1
  //   }
  // return countzeros

  //5 comes from the prime dividers
  // To have a trailing zero, the number have to be divided by 10. Same as divided by 2 and 5.
  // In a factorial computation, there will be a lot more of *2 that *5, so we count how many times the final number can be divided by 5 and we have the number of times it's dividable by 10.


  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}

// console.log(zeros(99999));

function incrementString(strng){
  var numstring = '';
  var zerosfront = 0;
  var increment = '';
  numstring  = strng.match(/[0-9]/g)
  if(numstring!=null) {
    numstring = numstring.join('')
    for(i=0;i<numstring.length;i++){
      if(numstring[i]=='0') zerosfront++
      else break;
    }
    increment = String(Number(numstring)+1)
    while(zerosfront>0){ //concatenating zeros to increment
      increment = "0"+increment
      zerosfront--;
    }
    while(increment.length > numstring.length && increment[0]==0){
      increment = increment.split('').slice(1).join('')
    }
  }
  else{
    increment = '1';
  }
  if(strng.match(/[a-z]/ig)!=null)
  {
    strng = strng.match(/[a-z]/ig).join('')
    strng+= increment
  }
  else{
    strng = increment
  }
  console.log(strng)
  return strng
}

// incrementString("foobar1000")
// incrementString("foobar12")
// incrementString("foobar99")
// incrementString("foobar999")
// incrementString("foobar0043")
// incrementString("foobar099")
// incrementString("")
// incrementString("10")
// incrementString("1")

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  console.log(pattern,pattern.length)
  //find words with same length
  const matches = [];
  console.log(this.words.sort())
  this.words.forEach((v)=>{
    if(v.length===pattern.length){
      if(v===pattern) matches.push(v) // exact same word found
      if(pattern.indexOf('?')>=0) { // if there are questions start lookup
        let re = /\?/g;
        let p = pattern.split('');
        while ((match = re.exec(pattern)) != null) {
            matching = p.splice(match.index, 1, v[match.index]);
        }
        if(p.indexOf('?')<0){
          p = p.join('')
          if(this.words.includes(p)){
            matches.push(p)
          }
        }
      }
    }
  })
  // console.log(matches)
  return matches
}

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);

// fruits.getMatchingWords('lemon')
// fruits.getMatchingWords('?a?a?a')
// fruits.getMatchingWords('??????')
// fruits.getMatchingWords('cherr??')
// fruits.getMatchingWords('a????')
// Test.assertSimilar(fruits.getMatchingWords('lemon'), []);
//       Test.assertSimilar(fruits.getMatchingWords('cherr??'), []);
//       Test.assertSimilar(fruits.getMatchingWords('?a?a?a'), ['banana', 'papaya']);
//       Test.assertSimilar(fruits.getMatchingWords('??????'), ['banana', 'papaya', 'cherry']);
//       Test.assertSimilar(fruits.getMatchingWords('a????'), ['apple']);

function peak(arr){
  let leftsum=0;
  let rightsum=0;
  mid = Math.floor(arr.length/2)
  const hash={}
  while(mid>0){
    leftsum =0;
    rightsum =0;
    for(x=mid-1;x>=0;x--){
      leftsum+=arr[x]
    }
    for(y=mid+1;y<arr.length;y++){
      rightsum+=arr[y]
      if(rightsum>leftsum) break;
    }
    hash[mid] ='visited';
    if(leftsum==rightsum){
      return mid
    }
    if(leftsum>rightsum && hash[mid-1]!='visited') {
      mid--;
    }
    else if(leftsum<rightsum && hash[mid+1]!='visited') {
      mid++;
    }
    else if(hash[mid-1]=='visited' || hash[mid+1]=='visited'){
      return -1
    }
  }
 }

// two liner solution...
//  const sum = arr => arr.reduce((sum, num) => sum + num, 0)

//  const peak = arr => arr.findIndex((value, index, arr) =>
//    sum(arr.slice(0, index)) === sum(arr.slice(index + 1)))
   
//  peak([1,12,3,3,6,3,1])
//  peak([1,2,3,5,3,2,1])
//  peak([2,1,2,3,5,0,0,5,3,2,1])
//  peak([1,1,1,12,3,3,6,6,3,2,1])
// console.log(peak([0,40,0,30,0,0,20,50,0]))
// console.log(peak([10,20,30,40]))

function score( dice ) {
  let score = 0;
  const threes = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200
  }
  const ones = {
    1:100,
    5:50
  }
  let count = {}
  dice.forEach((v,i,a)=>{
    if(dice.indexOf(v)!==i) count[v]+=1
    else count[v]=1
  })
  Object.keys(count).filter((v)=>{
    while(count[v]>0){
      if(count[v]>=3){
        score+= threes[v];
        count[v]-=3;
      }
      else{
        if(ones[v]!=undefined){
          score+= ones[v];
          count[v]--;
        }
        else{
          count[v]=0
        }
      }
    }
  })
  console.log(score)
  return score;
}

// score( [5, 1, 1, 5, 1]);
// score( [4, 4, 4, 3, 3] )
// score( [2, 4, 4, 5, 4] )
// score( [2, 3, 4, 6, 2] )

function validSolution(board) {
	let valid = true;
	const testvaliditiy = (arr) => {
		let set = new Set(arr);
		if (arr.includes(0) || [...set].length !== 9) {
			return false;
		} else {
			return true;
		}
	}
	console.log("row testing ...")
	for (i = 0; i < board.length; i++) {
		if (!valid) break;
		let row = []
		for (j = 0; j < board.length; j++) {
			row.push(board[i][j])
		}
		// console.log(row)
		valid = testvaliditiy(row)
	}

	//column testing
	console.log("Column testing ...")
	for (i = 0; i < board.length; i++) {
		let col = []
		for (j = 0; j < board.length; j++) {
			col.push(board[j][i])
		}
		valid = testvaliditiy(col)
		if (!valid) break;
	}

	//3x3 testing
	console.log("Cube 3x3 testing ...")
	let row = 0;
	let column = 0;
	while (row < 9 && column < 9) {
		let cube = []
		for (i = row; i < row + 3; i++) {
			for (j = column; j < column + 3; j++) {
				cube.push(board[i][j])
			}
		}
		row += 3
		valid = testvaliditiy(cube)
		if (!valid) break;
		if (row == 9 && column != 9) {
			column += 3
			row = 0;
		}
	}
	return valid
}

// console.log(validSolution([
//   [5, 4, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]));


function zenreach(file,{user,topic}){
  filearr= file.split('\n');
  // console.log(filearr);
  var data = [];
  var currentuser = '';
  var currentobject = {};
  let commontopic = []
  filearr.forEach((line)=>{
    var linearr= line.split(' ');
    if(linearr[0]=='user'){
      currentuser=linearr[1];
      // console.log("found a user "+currentuser)
    }
    if(linearr[0]=='topic'){
      let topic = linearr[1];
      if(currentuser!=''){
        currentobject = {'user':currentuser,topic:[...commontopic]}
        currentobject['topic'].push(topic)
        // console.log(currentobject)
        let objindex = data.findIndex((obj)=>{
          return obj['user'] == currentuser
        })
        if(objindex==-1){
          data.push(currentobject)
        }
        else{
          data[objindex]['topic'].push(topic)
        }
      }
      else{
        commontopic.push(topic)
      }
    }
    console.log("data object is :"+JSON.stringify(data))
  })
  let result = false;
  data.findIndex((v,i)=>{
    if(v['user']==user){
      console.log(topic)
      result = data[i]['topic'].includes(topic)
    }
  })
  return result
}

var file='topic general\ntopic public\nuser johnsmith\ntopic gucci\ntopic crow\nuser jane\ntopic lol\ntopic grow'

// console.log(zenreach(file,{user:"johnsmith",topic:"general"}))

function factorial(n){
  // let fac =0;
  // let x =n;
  // while(x>0){
  //   console.log("x is "+x)
  //   let numoftimestoadd = x-1;
  //   console.log("num of times to add: "+numoftimestoadd)
  //   while(numoftimestoadd>0){
  //     if(fac===0) {
  //       fac=x
  //     }
  //     else {
  //       fac+=fac
  //     }
  //     console.log("fac in while looop :"+fac)
  //     numoftimestoadd--;
  //   }
  //   console.log("overall factorial is "+fac)
  //   // console.log("current sum of "+x+" is:"+currentsum);
  //   // fac+=currentsum
  //   x--;
  // }
  // console.log(fac)
  // return fac;
  // return factorial;
  userInt =n
  if(userInt===0)
    return '1'

  if(!userInt)
    return ''

  var i, nextNumber, carret,

  result = userInt.toString().split('').reverse().map(Number)
  console.log("result is "+result)
  while(--userInt){
    console.log('n is now: '+userInt)
    i = carret = 0
    while((nextNumber = result[i++]) !== undefined || carret) {
      carret = (nextNumber || 0) * userInt + carret
      result[i-1] = carret % 10
      carret = parseInt(carret/10)
    }
  }

  return result.reverse().join('')
}

// console.log(factorial(12))

function rolldiceSumProb(target, numofdices){
  // var nocombinations=Math.pow(6,numofdices);
  // var equalsumarr= []
  // if(numofdices==2){
  //   for(var x = 1; x <= 6; x++){
  //     for(var y = 1; y <= 6; y++){
  //       if(x+y==sum){
  //         equalsumarr.push(x+","+y)
  //       } 
  //     }
  //   }
  // }
  // if(numofdices==3){
  //   for(x = 1; x <= 6; x++){
  //     for(y = 1; y <= 6; y++){
  //       for(z = 1;z<=6;z++){
  //         if((x+y+z)===sum){
  //           equalsumarr.push(x+","+y+","+z)
  //         }
          
  //       }
  //     }
  //   }
  // }
  // return equalsumarr.length/nocombinations;
  let combinations = 0;
    function recur(lvl=1, sum=0) {
      for(let i=1; i<=6; i++) {
        if(lvl < numofdices) {
          console.log(lvl)
          recur(lvl+1, sum+i);
        }
        else if(sum+i === target) {
          console.log(sum)
          combinations++;
        }
      }
    }
    recur();
    // console.log(combinations/(6**numofdices));
    return combinations/(6**numofdices);
}

// rolldiceSumProb(11, 2)
// rolldiceSumProb(8, 2)
// rolldiceSumProb(8, 2)


function callApi(url){
  return new Promise((resolve,reject) => {
    console.log(`calling API: ${url}`)
    if(url==='twitter'|| url=='facebook'){
      resolve(`connected to ${url}`)
    }
    else{
      reject(`Sorry unsupported API : ${url}`)
    }
  });
}

//function always resolving
function capitalizeResponse(resp){
  return new Promise((resolve,reject)=>{
    resolve(resp.toUpperCase())
  })
}

//failling chain
// callApi('twitter')
// .then((resp)=>capitalizeResponse(resp))
// .then((caps)=>console.log(caps))
// .then(()=>callApi('wrongurl'))
// .then((resp)=>capitalizeResponse(resp))
// .then((resp)=>console.log(resp))
// .catch((e)=>console.log(e))

//passing chain
// callApi('twitter')
// .then((resp)=>capitalizeResponse(resp))
// .then((caps)=>console.log(caps))
// .then(()=>callApi('facebook'))
// .then((resp)=>capitalizeResponse(resp))
// .then((resp)=>console.log(resp))
// .catch((e)=>console.log(e))

// callApi('go')
// .then((resp)=>capitalizeResponse(resp))
// .then((caps)=>console.log(caps))
// .catch((e)=>console.log(e))

//failing promises
// callApi('twitter')
// .then((resp)=>callApi('go'))
// .then(resp=> callApi(''))
// .catch(e=>console.log(e))


// async function processresp(){
//     const twitter = await callApi('twitter');
//     const process_t = await capitalizeResponse(twitter)
//     console.log(`${process_t}`)
//     const facebook = await callApi('facebsook');
//     const process_f = await capitalizeResponse(facebook)
//     console.log(`${process_f}`);
// }

async function processresp(){
  try{
        const twitter = await callApi('twitter');
        const process_t = await capitalizeResponse(twitter)
        console.log(`${process_t}`)
        const facebook = await callApi('wrongurl');
        const process_f = await capitalizeResponse(facebook)
        console.log(`${process_f}`);
  }
  catch(e){
    console.log(e)
  }
}

// processresp()

//OOPS

class Address{
  constructor(street,city,country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class User{
  constructor(name,age,phone,email,address){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}

// let u1 = new User('Rupinder')
// console.log(u1);

//see the problem
// let u1 = new User('Matt',undefined,'19',undefined,new Address('12 Victoria St.','Vancouver'))
// console.log(u1);

class Builder{
  constructor(name){
    this.user = new User(name)
  }

  setAge(age){
    this.user.age = age;
    return this // return the builder object
  }

  setPhone(phone){
    this.user.phone = phone;
    return this
  }

  setEmail(email){
    this.user.email = email;
    return this
  }

  setAddress(address){
    this.user.address = address;
    return this
  }

  build(){
    return this.user
  }
}

// let b1 = new Builder('Matt');
// console.log(b1.setAge(19)) // `this` in the method returns Builder object here but we need user so we use the build method that returns the user
// b1.setEmail('adasd@ads.com')
// let user = b1.build();
// console.log(user)


class NewUser{
  constructor(name,{age,phone,email,address}={}){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}

// let nu1 = new NewUser('Matt',{age:19,email:'adasd@ads.com',phone:'19123213',address:new Address('12 Victoria St.','Vancouver','Canada')})
// console.log(nu1);

function chooseBestSum(t, k, ls) {
  let sumpairs = {};
  let combinations =[];
  const result = [];
  result.length = k
  const combine=(input,len,start) =>{
    if(len === 0) {
      combinations.push(result.join(" "));
      let sum = result.reduce((a,v)=>{
        return a+v
      })
      // console.log('sum is :'+sum)
      sumpairs[sum] = result.join(" ")
      return;
    }
    for (var i = start; i <= input.length - len; i++) {
      result[result.length - len] = input[i];
      combine(input, len-1, i+1 );
    }
  }
  combine( ls, k, 0);
  if(sumpairs[t]!=undefined) return t;
  else {
    lowersums= Object.keys(sumpairs).filter((v)=>{
      return v<t
    })
    return lowersums.length>0 ? Math.max(...lowersums) : null
  }
}

// var ts = [50, 55, 56, 57, 58, 59]
// ts = [50]
ts = [91, 74, 73, 85, 73, 81, 87]
// console.log(chooseBestSum(230, 3, ts))

const result = [];
result.length = 3; //n=2
const pairs  = []
function combine(input, len, start) {
  if(len === 0) {
    console.log(`len is 0 : ${result.join(" ")}` ); //process here the result
    pairs.push(result.join(" "))
    return;
  }
  for (var i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len-1, i+1 );
  }
}
//Best travel
// const array = ["apple", "banana", "lemon", "mango"];
// const array = [50, 55, 56, 57, 58];    
// combine( array, result.length, 0);
// console.log('total pairs: '+pairs[9])

function test12(){
  return;
}

// console.log(test12());

function sortByName(arr) {
  let ones= ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let tens = ['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
  let alphanums = {}
  arr.forEach((v,i)=>{
    let numstring = String(v)
    numstring =numstring.split('').reverse('').join('');
    let len= numstring.length;
    let str=''
    let x= 0;
    while(x<len){
      if(x==0){ //x==0 means ones
        if(numstring[x]!=0) str= str+ones[numstring[x]]+','
        if(numstring.length==1 && numstring[x]==0) str=ones[x]+','
      }
      if(x==1){ //handling tens
        if(numstring[x]!=1)
        {
          str+=tens[numstring[x]]+','
        }
        if(numstring[x]==1){
          str=str.trim()
          if(numstring[x-1]!=0){
            str = ones[numstring[1]+''+numstring[x-1]]+','
          }
          else{
            str = ones[numstring[x]+''+numstring[x-1]]+','
          }
        }
      }
      if (x==2){//handling hundreds
        str+=ones[numstring[x]]+' '+'hundred'+','
      }
      x++;
    }
    str=str.replace(/,,+/g,',')
    alphanums[str.split(',').reverse('').join(' ').trim()] = v;
    arr.splice(i,1,str.split(',').reverse('').join(' ').trim())
  })
  console.log(alphanums);
  console.log(arr)
  let sortedalpha= arr.sort().map((v)=>{
    return alphanums[v]
  })
  return sortedalpha;
}

//100
// sortByName([192])
// console.log(sortByName([994, 2, 10, 4,4,100,700,0]))
// console.log(sortByName([880, 802, 651, 491, 409, 695, 357, 2, 280, 286]))
// console.log(sortByName([875, 505, 504, 564, 557, 460, 711, 743, 317, 276, 48]))

// [4, 1, 3, 2]

function getMixedNum(fraction) {
  // Convert to a Mixed Number
  let [ numerator, denominator] = fraction.split('/')
  console.log('numerator : '+numerator)
  console.log('denominator : '+denominator)
  let remainder = numerator%denominator;
  let quotient = Math.floor(numerator/denominator)
  console.log('quotient :'+quotient);
  console.log('remainder :'+remainder);
  console.log(quotient+' '+remainder+'/'+denominator)
  return quotient+' '+remainder+'/'+denominator
}

// getMixedNum('18/11') // '1 7/11'
// getMixedNum('13/5')
// getMixedNum('75/10')

function landPerimeter(arr) {
  let grid = [...arr];
  let perimeter=0;
  const exploreLocation = (location,direction) =>{
    let dt=location.distancefromtop;
    let dl= location.distancefromleft;
    if(direction=='North'){
      dt-=1
    }
    if(direction=='South'){
      dt+=1
    }
    if(direction=='East'){
      dl-=1
    }
    if(direction=='West'){
      dl+=1
    }
    location = {
      'distancefromtop': dt,
      'distancefromleft': dl,
      'status':'unknown'
    }
    let status = locStatus(location)
    location.status= status;
    if(status=='X'){
      grid[location.distancefromtop] = grid[location.distancefromtop].split('')
      grid[location.distancefromtop].splice(location.distancefromleft,1,'V')
      grid[location.distancefromtop] = grid[location.distancefromtop].join('')
    }
    return location;
  }

  const locStatus = (location) =>{
    let rowgridsize= grid[0].length
    let gridsize = grid.length;
    dt= location.distancefromtop;
    dl= location.distancefromleft;
    if(dl>=rowgridsize || 
      dl<0 || 
      dt>=gridsize || 
      dt<0){
      return 'invalid'
    }
    else if(grid[dt][dl]=='O'){
      return 'O'
    }
    else if(grid[dt][dl]=='V'){
      return 'V'
    }
    else if(grid[dt][dl]=='X'){
      return 'X'
    }
  }

  let location ={
    distancefromtop: 0,
    distancefromleft: 0,
  }

  for(i=0;i<grid.length;i++){
    for(j=0;j<grid[i].length;j++){
      if(grid[i][j]=='X'){
        let sides=4;
        location.distancefromtop= i
        location.distancefromleft= j
        queue = [location];
        grid[location.distancefromtop] = grid[location.distancefromtop].split('')
        grid[location.distancefromtop].splice(location.distancefromleft,1,'V')
        grid[location.distancefromtop] = grid[location.distancefromtop].join('')
        while(queue.length>0){
            currentlocation = queue.shift()
            let newLocation= exploreLocation(currentlocation,'North');
            if(newLocation.status=='X'){
              queue.push(newLocation);
              sides-=1
            }
            else if(newLocation.status=='V'){
              sides-=1
            }

            newLocation =exploreLocation(currentlocation,'East')
            if(newLocation.status=='X'){
              queue.push(newLocation)
              sides-=1
            } 
            else if(newLocation.status=='V'){
              sides-=1
            }

            newLocation =exploreLocation(currentlocation,'West')
            if(newLocation.status=='X'){
              queue.push(newLocation)
              sides-=1
            } 
            else if(newLocation.status=='V'){
              sides-=1
            }

            newLocation =exploreLocation(currentlocation,'South')
            if(newLocation.status=='X'){
              queue.push(newLocation)
              sides-=1
            } 
            else if(newLocation.status=='V'){
              sides-=1
            }

            perimeter += sides
            sides=4;
        }
      }
    }
  }
  console.log(perimeter)
  return perimeter;
}

// let grid =['XOOXO',
// 'XOOXO',
// 'OOOXO',
// 'XXOXO',
// 'OXOOO']

// let grid =['XOOO',
// 'XOXO',
// 'XOXO',
// 'OOXX',
// 'OOOO']

// let grid=["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"];

// let grid=["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"] //52

// let grid=[
//   "XOOOXOO", //0
//   "OXOOOOO",//1
//   "XOXOXOO", //2
//   "OXOXXOO",//3
//   "OOOOOXX", //4
//   "OOOXOXX", //5
//   "XXXXOXO"] //6  54 =>52grid
// 0123456

// let grid =["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"] //40

// let grid = [
//   "XXXXXOOO", 
//   "OOXOOOOO", 
//   "OOOOOOXO", 
//   "XXXOOOXO", 
//   "OXOXXOOX"];

// let grid=[
// 'OXOOO',
// 'OOOXO',
// 'XOOOX',
// 'XXOOO',
// 'XOOOO',
// 'OXOXO',
// 'OXOOX',
// 'XOOOO',
// 'XXXOX',
// 'OOXXO',
// 'XXOXO',
// 'XOOOX',
// 'OOOOO'
// ]

// let grid = ["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"];
//  landPerimeter(grid)

function polygonPerimeter(matrix) {
  let perimeter = 0;
  for(i=0;i<matrix.length;i++){
    for(j=0;j<matrix[0].length;j++){
      if(matrix[i][j]==true){
        let sides = 4;
        matrix[i][j]='V';
        if(j+1<matrix[0].length && (matrix[i][j+1]==true || matrix[i][j+1]=='V')){//west
          sides-=1
        }
        if(i+1<matrix.length && (matrix[i+1][j]==true || matrix[i+1][j]=='V')){ //south
          sides-=1
        }
        if(i-1>=0 && (matrix[i-1][j]==true || matrix[i-1][j]=='V')){//east
          sides-=1
        }
        if(j-1>=0 && (matrix[i][j-1]==true || matrix[i][j-1]=='V')){
          sides-=1
        }
        perimeter+=sides;
      }
    }
  }
  console.log(perimeter)
  return perimeter;
}

// var matrix = [
//   [false,true,true], 
//   [true,true,false], 
//   [true,false,false]];

// var matrix = [
//   [true,true,true,true,true], 
//   [true,true,true,true,true]]

  // var matrix = [
  //   [true,true,true], 
  //   [true,false,true], 
  //   [true,true,true]]; //16

  // polygonPerimeter(matrix)//12

// Array destructuring:
const arr1 = ['Hello','World'];
const s = ['Destructing','is','awesome!']
const arr3 = [1,2,4,5]
const [str1,str2] = arr1
// console.log(str1)

let Usera = {
  'name':'Sherlock',
  'age':39,
  'city':'Victoria',
  'phone':'123-456-7890'
}

let {name,age} = Usera
// console.log(name)


// var compose = function(...funcs) {
//   console.log(`arguments length is: ${arguments.length}`)
//   if(arguments.length===1) return arguments[0];
//   funcs.reduce((v)=>{
//     console.log(v)
//   })
//   // else{
//   //   for(i=1;i<arguments.length;i++){
//   //     console.log(`i is: ${i}`)
//   //     return compose(arguments[i](arguments[i-1]))
//   //   }
//   // }
// }
// const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

// const compose = (x, ...fs) => fs.reduce((a, func) => func(a), x);


var doubleTheValue = function(val) { 
  return val * 2; 
}
var addOneToTheValue = function(val) { 
  console.log("add to val is "+val)
  return val + 1; }


const compose = (initvalue, ...funcs) => funcs.reduce((a,f)=> f(a),initvalue)

// console.log(compose(5, doubleTheValue))
// console.log(compose(5, doubleTheValue, addOneToTheValue))
// compose()


function square(num) {
  if(!square.cache) {
      square.cache = {}
  }
  if(!square.cache[num]){
      return square.cache[num] = (num * num)
  }
  return square.cache[num]
}

var complexFunction1 = function(arg1, arg2) { return arg1+arg2 };
var complexFunction2 = function(arg1, arg2) { return arg1+'as'+arg2 };
var cachedFunction1 = cache(complexFunction1);
var cachedFunction2 = cache(complexFunction2)

function cache(func) {
  let cache = {};
  return (...args) => {
    let arg1 = args[0];
    let arg2 = args[1];
    let cache_key = JSON.stringify(args);
    console.log(cache_key)
    if (cache_key in cache) {
      console.log('cached result found!'+cache);
      console.log(cache)
      return cache[cache_key];
    }
    else {
      console.log(cache)
      console.log('running for first time and caching the result');
      cache[cache_key] = func(arg1,arg2);
      return cache[cache_key];
    }
  }
}
// console.log( cachedFunction1('foo', 'bar') );
// console.log( cachedFunction1('foo', 'bar') );
// console.log( cachedFunction2('foo', 'bar') );
// console.log( cachedFunction2('foo', 'bar') );//different functions have different cache{} due to closures
// console.log( cachedFunction1('foo', 'bar') );


function sum(num) {
  let sumpairs=[]
  let sum = num;
  const breaknums =(num) =>{
    let goal = num;
    while(num>0){
      console.log(num);
      let currentpair=[]
      let difference = goal-num;
      if(difference>0){
        currentpair.push(difference)
      }
    }
  }

  while(num>0){
    console.log(num);
    let currentpair=[]
    let difference = sum-num;
    if(difference>0){
      currentpair.push(difference)
    }
    currentpair.push(num);
    console.log("Current pair was :"+currentpair)
    sumpairs.push(currentpair);
    num--
  }
  console.log('sumpairs we have are: '+sumpairs)
}

// sum(4)//5


var numberToPrice = function(number) {
  if(String(number).search(/[^0-9.-]/)!=-1) return 'NaN';
  if(!(number === +number && number !== (number|0)) && !(number === +number && number === (number|0))) return 'NaN'
  let str = String(number);
  let beforedecimal  = ''
  let afterdecimal  = ''
  let signs=''
  if(str.includes('.')){
    beforedecimal  = str.substring(0,str.indexOf('.'));
    afterdecimal= str.slice(str.indexOf('.'),str.indexOf('.')+3);
    if(afterdecimal.length<3){
      while(afterdecimal.length<3){
        afterdecimal +='0'
      }
    }
  }
  else{
    afterdecimal = ".00"
    beforedecimal  = str.substring(0);
  }
  if(beforedecimal=='') return 'NaN'
  if(beforedecimal.includes('-')){
    signs=beforedecimal[0]
    beforedecimal = beforedecimal.substring(1)
  }
  if(beforedecimal.length>3){
    beforedecimal = beforedecimal.split('').reverse('').join('');
    i=0;
    let chunks=[]
    while(i<beforedecimal.length){
      if(beforedecimal.length>3){
        if(i%3==0){
          chunks.push(beforedecimal.slice(i,i+3));
        }
      }
      i++;
    }
    beforedecimal=chunks.join(',').split('').reverse('').join('');
  }
  return signs+beforedecimal+afterdecimal
}

// console.log(numberToPrice(1500.129));
// console.log(numberToPrice(1000000.5));
// console.log(numberToPrice('@'));
// console.log(numberToPrice(1234567.89));
// console.log(numberToPrice(-5))
// console.log(numberToPrice(3432.89));
// console.log(numberToPrice(.00));
// console.log(numberToPrice(-200000.10));
// console.log(numberToPrice(1));

function whoIsWinner(piecesPositionList){
  console.log(piecesPositionList)
  let grid = [];
  grid.length = 6;
  let hash = {A:[],B:[],C:[],D:[],E:[],F:[],G:[]} //what column they will be set in
  let cols = {A:0,B:1,C:2,D:3,E:4,F:5,G:6} //what column they will be set in
  let row  = [];
  let currentcolumn = piecesPositionList[2].split('_')[0];
  piecesPositionList.forEach((v)=>{
    currentcolumn = v.split('_')[0];
    currentcolor = v.split('_')[1][0]
    // console.log('current column is: '+currentcolumn)
    // console.log('current color is: '+currentcolor)
    // console.log("will be put in "+hash[currentcolumn]);
    hash[currentcolumn].unshift(currentcolor)
    // grid[= currentcolor
  })
  console.log(hash)
  Object.keys(hash).forEach((v)=>{
    if(hash[v].length<6){
      while(hash[v].length<6){
        hash[v].unshift(' ')
      }
    }
  })


  let arr=[]
  var rows = 6;
  var columns = 7;
  for (var i = 0; i < rows; i++) {
    arr.push([''])
    for (var j = 0; j < columns; j++) {
        arr[i][j]=''
    }
  }
  console.log(arr)

  piecesPositionList.forEach((v)=>{
    currentcolumn = v.split('_')[0];
    currentcolor = v.split('_')[1][0];
    arr[5][cols[currentcolumn]] = currentcolor
    // arr[i][j]='R'
    // grid[= currentcolor
  })
  console.log(arr)


  let cc = arr[3][5];
  console.log('current color is '+cc)

}

// whoIsWinner(["C_Yellow",
//           "E_Red",
//           "G_Yellow",
//           "B_Red",
//           "D_Yellow",
//           "B_Red",
//           "B_Yellow",
//           "G_Red",
//           "C_Yellow",
//           "C_Red",
//           "D_Yellow",
//           "F_Red",
//           "E_Yellow",
//           "A_Red",
//           "A_Yellow",
//           "G_Red",
//           "A_Yellow",
//           "F_Red",
//           "F_Yellow",
//           "D_Red",
//           "B_Yellow",
//           "E_Red",
//           "D_Yellow",
//           "A_Red",
//           "G_Yellow",
//           "D_Red",
//           "D_Yellow",
//           "C_Red"])

function translate(sentence) {
  console.log(sentence)
  // let str=''
  return sentence.split(' ').map((v)=>{
    let anyspecials=v.match(/[^a-z0-9\s]/ig)
    v = v.match(/[a-z0-9]/ig).join('')
    if(v[0].match(/[aeiou]/ig)){
      if(anyspecials!=null) return v.slice(0)+'way'+anyspecials.join('')
      return v.slice(0)+'way'
    }
    if(v[0].toUpperCase()===v[0]){
      v = v.toLowerCase();
      v = v.slice(v.search(/[aeiou]/ig))+v.slice(0,v.search(/[aeiou]/ig))+'ay';
      v = v.split('')
      v.splice(0,1,v[0].toUpperCase()).join()
      if(anyspecials!=null) return v.join('')+anyspecials.join('');
      return v.join('');
    }
    else{
      v = v.toLowerCase();
      v = v.slice(v.search(/[aeiou]/ig))+v.slice(0,v.search(/[aeiou]/ig))+'ay';
      if(anyspecials!=null) return v+anyspecials.join('');
      return v
    }
  }).join(' ')
};

// console.log(translate('Hello World')); //'ellohay orldway' 
// console.log(translate('Algorithm eyti')) 
// console.log(translate('How everyoneway. are you?'))
// translate('Pizza? Yes Please!!');
// console.log(translate('Pizza? Yes Please!!'));

function dirReduc(arr){
  let last = arr[0]
  let reduced = arr.reduce((a,v,i)=>{
  // console.log(last,v)
    if((last==='NORTH' && v==='SOUTH') || (last==='SOUTH' && v==='NORTH') || (last==='WEST' && v==='EAST') || (last==='EAST' && v==='WEST')){
      a=a.split(',');
      a.pop()
      last=[...a].pop()
      a =a.join(',')
      return a+''
    }
    last=v
    return a+','+v
  },'')
  // console.log(reduced.split(',').slice(1))
  return reduced.split(',').slice(1)

  //another good solution
  // var opposite = {
  //   'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  // return plan.reduce(function(dirs, dir){
  //     if (dirs[dirs.length - 1] === opposite[dir])
  //       dirs.pop();
  //     else
  //       dirs.push(dir);
  //     return dirs;
  //   }, []);
}

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])

// calc with functions
const cmps = (f,n) => f?f(n):n
const zero= f => cmps(f,0)
const one= f => cmps(f,1)
const two= f => cmps(f,2)
const three= f => cmps(f,3)
const four= f => cmps(f,4)
const five= f => cmps(f,5)
const six= f => cmps(f,6)
const seven= f => cmps(f,7)
const eight= f => cmps(f,8)
const nine= f => cmps(f,9)

const plus = a => b => b+a;
const minus = a => b => b-a;
const times = a => b => a*b;
const dividedBy = a => b => Math.floor(b/a)

// console.log(seven(times(five()))) //35
// console.log(four(plus(nine())))
// console.log(six(dividedBy(two())))

// const dataFile = "##################################\nLocation: DEU\n##################################\nAmmonia: 200 particles\nNitrogen Oxide: 019 particles\nCarbon Monoxide: 127 particles\n##################################\n##################################\nLocation: USA\n##################################\nAmmonia: 200 particles\nNitrogen Oxide: 120 particles\nCarbon Monoxide: 120 particles\n##################################\n##################################\nLocation: AUS\n##################################\nAmmonia: 122 particles\nNitrogen Oxide: 132 particles\nCarbon Monoxide: 099 particles\n##################################";

const dataFile="##################################\nLocation: DEU\n##################################\n Ammonia: 023 particles\n Nitrogen Oxide: 919 particles\n Carbon Monoxide: 027 particles\n##################################\n##################################\nLocation: USA\n##################################\n Ammonia: 422 particles\n Nitrogen Oxide: 220 particles\n Carbon Monoxide: 130 particles\n##################################\n##################################\nLocation: AUS\n##################################\n Ammonia: 122 particles\n Nitrogen Oxide: 102 particles\n Carbon Monoxide: 399 particles\n##################################\n##################################\nLocation: BHS\n##################################\n Ammonia: 323 particles\n Nitrogen Oxide: 363 particles\n Carbon Monoxide: 399 particles\n##################################\n##################################\nLocation: BRB\n##################################\n Ammonia: 344 particles\n Nitrogen Oxide: 324 particles\n Carbon Monoxide: 314 particles\n##################################\n##################################\nLocation: CHN\n##################################\n Ammonia: 422 particles\n Nitrogen Oxide: 477 particles\n Carbon Monoxide: 398 particles\n##################################\n##################################\nLocation: COG\n##################################\n Ammonia: 044 particles\n Nitrogen Oxide: 144 particles\n Carbon Monoxide: 244 particles\n##################################\n##################################\nLocation: CRI\n##################################\n Ammonia: 092 particles\n Nitrogen Oxide: 099 particles\n Carbon Monoxide: 399 particles\n##################################\n##################################\nLocation: ISL\n##################################\n Ammonia: 021 particles\n Nitrogen Oxide: 009 particles\n Carbon Monoxide: 077 particles\n##################################\n##################################\nLocation: VEN\n##################################\n Ammonia: 102 particles\n Nitrogen Oxide: 103 particles\n Carbon Monoxide: 022 particles\n##################################\n";

function parseData() {
  console.log(dataFile);
  var hash = [];
  let arr = dataFile.split("\n");
  let location="";
  let position = 0;
  for(i=0;i<arr.length;i++){
    if(arr[i].includes("Location")){
      location = arr[i].trim().split(': ')[1]
      hash.push({'name':location,'position':position});
      position++;
      i++;
      continue;
    }
    if(location!="" && hash.findIndex((v)=>v.name==location)>=0 && !arr[i].includes('#') && arr[i]!=""){
      console.log(arr[i]);
      let index = hash.findIndex((v)=>v.name==location);
      let pollutant = arr[i].split(':')[0].slice(0).trim().split(' ').join('');
      let particles = parseInt(arr[i].split(': ')[1].split(' ')[0]);
      hash[index][pollutant] = particles; 
    }
  }
  console.log(hash);
  let arrammonia =[];
  let arrno = [];
  let arrco = [];
  let highestam = 0;
  let highestco=0;
  let highestno = 0;
  hash.filter((v,i)=>{
        if(v.Ammonia>highestam){
          highestam = v.Ammonia;
          arrammonia=[];
          arrammonia.push(v.name);
        }
        if(v.Ammonia==highestam && arrammonia.indexOf(v.name)<0){
          highestam = v.Ammonia;
          arrammonia.push(v.name);
        } 
        if(v['NitrogenOxide']>highestno){
          highestno = v['NitrogenOxide'];
          arrno=[];
          arrno.push(v.name)
        } 
        if(v['NitrogenOxide'] == highestno && arrno.indexOf(v.name)<0){
          highestno = v['NitrogenOxide'];
          arrno.push(v.name)
        }
        if(v['CarbonMonoxide']>highestco){
          highestco = v['CarbonMonoxide'];
          arrco=[];
          arrco.push(v.name)
        } 
        if(v['CarbonMonoxide'] == highestco && arrco.indexOf(v.name)<0){
          highestco = v['CarbonMonoxide'];
          arrco.push(v.name)
        }
  })
  let sentence = "Ammonia levels in "+arrammonia.join(', ')+" are too high. Nitrogen Oxide levels in "+arrno.join(', ')+" are too high. Carbon Monoxide levels in "+arrco.join(', ')+" are too high."
  console.log(sentence);
  return sentence;
}

// parseData();
//"Ammonia levels in USA, CHN are too high. Nitrogen Oxide levels in DEU are too high. Carbon Monoxide levels in AUS, BHS, CRI are too high."

function print1234(){
  // console.log("printing")
  // let result = "";
  // let a=5;
  // for(i=1;i<=a;i++){
  //   for(j=i;j<i+a;j++){
  //     result+=j+" ";
  //   }
  //   result=result.trim()+"\n";
  // }
  // console.log(result)
  var a = 5, result;

  var a=5;
  for (var i = 1; i <= a; i++) {  
       var result="";
   for (var j = 1; j <= a; j++) {
      result +=(i+j - 1)+ " ";
     }
     console.log(result);
    }
}

// print1234()

function nico  (key, message)  {
  let arr;
  let hash = {};
  let encoded="";
  Object.assign(key.split('').sort().map((key,i) => {
                hash[key] = (i+1);
              }));
  arr=key.split('').map((v,i)=>{
      return hash[v];
  });
  console.log(hash);
  console.log("array "+arr);
  console.log("array length "+arr.length);
  for(i=0;i<message.length;i++){
    let current = message.slice(i,i+arr.length).split('');
    console.log("curret is "+current,current.length);
    let str = [];
    str.length = current.length;
    console.log("str.length is "+str.length, current.length);
    arr.forEach((v,i)=>{
      console.log(v, str);
      if(current[i]==undefined) str[v-1]=" ";
      else str[v-1]=current[i];
    })
    console.log("after foreach: "+str, str.length);
    encoded+=str.join('');
    i=i+arr.length-1;
  }
  console.log(encoded.split(''));
  return  encoded;
}

// console.log(nico("crazy", "secretinformation"));
// nico("abc", "abcd");
// console.log(nico("ba", "1234567890"));
// console.log(nico("a", "message"));
// console.log(nico("key", "key"));
// console.log(nico("dbt5yxkg34", "bxth4e1sr7l3mqz59ktc"));
//'bxth4e1sr7l3mqz59ktc   rf     '

// console.log(nico("j3p9x8wk0t","f7s5md1bp8minzuucwcgi3cqnjqzgoqny13"))


// 23154
// crazy

// 2 3 1 5 4
// ---------
// s e c r e
// t i n f o
// r m a t i
// o n

// cseerntiofarmit on  
function domainName(url){
  if(url.search('//')>0){
    url = url.slice(url.search('//')+2);
  }
  if(url.search('www')>=0){
    url = url.slice(url.search('www')+4);
  }
  return url.slice(0,url.indexOf('.'));
}

// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("http://google.com"));
// console.log(domainName("http://www.google.co.jp"));
// console.log(domainName("www.xakep.ru"));
// console.log(domainName("https://youtube.com"));


//Object Extend:
var extend = function(...args) {
  let hash = {}
  args.forEach((v)=>{
    if(typeof v ==='object'){
      Object.keys(v).forEach((x)=>{
        if(hash[x]===undefined){
            hash[x] = v[x]
        }
      })
    }
    
  })
  return hash
  // or just a simple
  // return Object.assign({}, ...args.filter(Object.isObject).reverse());
}

// console.log(extend( {a: 1, b: 2}, {c: 3} ))
// console.log(extend( {a: 1, b: 2}, {c: 3}, {d: 4} ))
// console.log(extend( {a: 1, b: 2}, {a: 3, c: 3} ))
// console.log(extend({ a: 1, b: 2, length: 6 },
//   [],
//   'nope',
//   false,
//   [Function],
//   { c: 3, a: 3 }))
// console.log(extend({ a: false, b: null, c: 3 }, { a: true, b: 1 }))

class GroupByDifference {
  constructor(numbers){
    this.numbers = numbers
  }

  find(diff){
    let withinrange=[]
    this.numbers.forEach((v)=>{
      console.log(v)
      for(i=v-diff;i<v;i++){
        console.log(i)
        if(this.numbers.indexOf(i)!=-1){
          withinrange.push(this.numbers[this.numbers.indexOf(i)])
        }
      }
    })
    return withinrange
  }
}

var numbers = [5, 32, 5, 1, 31, 70, 30, 8];

console.log(new GroupByDifference(numbers).find(3))