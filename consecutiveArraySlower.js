var array = [0,3];
//Order the array
array.sort();
//console.log(array);

//Creates variable to hold the number of missing
//numbers to make the array consecutive
var needed = 0;

function makeArrayConsecutive2(array) {
for(i=0; i<array.length; i++){
	
	var n = i+1;
	//console.log(array[n]);

//Check to see if the next number is consecutive
//& splice in the consecutive number if it isn't
if (array[i]+1!= array[n] && n<array.length){
	//console.log(array[n]);

	array.splice(n, 0, array[i]+1);
	console.log(array);
	
	//add 1 to needed 
	needed++;
	}

	//console.log(needed);
} 
console.log(needed);
}

makeArrayConsecutive2(array);