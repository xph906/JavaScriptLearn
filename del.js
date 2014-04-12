/*
	This code is used to show delete can only remove a property in an object's property list: 
	it cannot remove properties in object's parent 
*/

function MyObject(){
	this.variable = 2323;
}
MyObject.prototype.value = 4545;

var obj = new MyObject();
console.log(obj.value);   //4545
obj.value = 2727;         //Set a new property of value in its own object
console.log(obj.value);   //2727

//delete can remove its own property
delete obj.value;
console.log(obj.value);    //4545

//delete cannot remove prototype's property
delete obj.value;
console.log(obj.value);    //4545