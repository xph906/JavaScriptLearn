/*
The followin code is to figure out Constructor and Prototype in JavaScript:
Question: 
	function MyObject(value){
		this.number = value;
	}
	var objRef1 = new MyObject(4);
	var objRef2 = new MyObject(5);
	var prototype = MyObject.prototype;
*/


function MyObject(value){
		this.number = value;
	}
var objRef1 = new MyObject(4);
var objRef2 = new MyObject(5);
var prot = MyObject.prototype;
console.log("objRef1.number: "+objRef1.number);
console.log("objRef2.number: "+objRef2.number);
console.log("prot.number: "+prot.number);

/*
Now change objRef1 and objRef2's prototypes, 
if number is in prototype, 
*/