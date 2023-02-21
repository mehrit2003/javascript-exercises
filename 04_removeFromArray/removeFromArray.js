const removeFromArray = function(arr, element ) {
    
    let arrLength = arr.length; 
    console.log(arrLength);

    for(let i = 0; i <arrLength; i++){
        
        if(arr[i] === element){    
            console.log(arr.indexOf(element))}; 

            //remove 1 item starting at indexOf our argument;
            arr.splice(arr.indexOf(element), 1);
            
            console.log(arrLength);
            
            return arr;
            
    }


};

// Do not edit below this line
module.exports = removeFromArray;


//Googling: remove item from array by Value