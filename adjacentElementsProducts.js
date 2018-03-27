var inputArray = [5,1,2,3,1,4];

function adjacentElementsProduct(inputArray){
var product;
var productArray = [];
	for(i=0; i<inputArray.length-1; i++){
		var n = i+1;

		product = inputArray[i]*inputArray[n];
		//console.log(product);

		
		productArray.push(product);
	}
	console.log(Math.max(...productArray));
}

adjacentElementsProduct(inputArray);