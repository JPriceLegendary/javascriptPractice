var statues = [];
//statues.sort();


function makeArrayConsecutive2(statues) {
//sorts array
statues.sort((a,b)=>{
        return a-b;
});
    
    //creates count variable
    var needed = 0;
        
for(i=0; i<statues.length; i++){
        var n = i+1;

if (statues[i]+1!= statues[n] && n<statues.length){

   statues.splice(n, 0, statues[i]+1);
        needed++;
	}
	
} return needed;
}

makeArrayConsecutive2(statues);