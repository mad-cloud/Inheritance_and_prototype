//Q1.
let StudentPrototype={
  details(fname,lname,bYear){
      this.fname=fname;
      this.lname=lname;
      this.bYear=bYear;
  }
}

let jarvis=Object.create(StudentPrototype);//import the properties and methods of StudentPrototype
jarvis.details("Jarvis","J",1994);
jarvis.gender="Male";
console.log(jarvis);

//Q2.
let vis=Object.create(jarvis);
console.log(vis.__proto__);//here the prototype of vis is jar
console.log(vis.__proto__.__proto__);//here it will print prototype of jar which is PersonPrototype
console.log(vis.__proto__.__proto__.__proto__);//here it prints prototype of PersonPrototype which is object prototype
console.log(vis.__proto__.__proto__.__proto__.__proto__);//here it prints null 

//Q3.
let arr10={
  sum:function(arr){
      return arr.reduce((acc,cur)=>acc+=cur,0);
  }
}
let arr11=[12,13,14,15];
let arr12=[61,67,68,69,62];
console.log(arr10.sum(arr11));
console.log(arr10.sum(arr12));

//Q4.
function funDetails(){
  const keys = Object.keys(jarvis);
  console.log(keys);
}
funDetails();
