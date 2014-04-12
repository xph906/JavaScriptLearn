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
console.log("objRef1.number: "+objRef1.number);    //4
console.log("objRef2.number: "+objRef2.number);    //5
console.log("prot.number: "+prot.number);          //undifined

/*
Now change objRef1 and objRef2's prototypes, 
if number is in prototype, we shouldn't see number properety anymore;
Otherwise, number property is still there.
*/

objRef1.prototype = Object.prototype;
objRef2.prototype = Object.prototype;

console.log("[After Chaning Prototype] objRef1.number: "+objRef1.number);  //4
console.log("[After Chaning Prototype]objRef2.number: "+objRef2.number);   //5

/*Conclusion:
	When define an object from a constructor:
	var obj = new MyObject(number);
	"this.property" in constructor will set the value in the object, instead of in prototypes
*/
