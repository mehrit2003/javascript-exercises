//Conditions Order is IMPORTANT( if() )

const sumAll = function (x, y) {
  //Check if both numbers are Integer
  if(!Number.isInteger(x) || !Number.isInteger(y)) 
  return "ERROR";;

  //Check if both numbers are not Negative
  if( x < 0 || y < 0) 
  return "ERROR";
  console.log(x);

    //Working with large number first  x > y (TOP Solution)
    if(x > y){
      const temp = x;   //declare temporary variable to swap x and y values
      x = y;
      y = temp;
  
    }



  //increasing sum with for loop
  let sum = 0;
  for(let i = x; i < y + 1; i++){
    sum +=i;
  }


  
 
    
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
