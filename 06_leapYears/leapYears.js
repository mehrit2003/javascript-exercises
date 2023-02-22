const leapYears = function(year) {

    //check if dividable by 4
    if(year % 4 == 0  ){
        if(year % 100 ==0){ //if year is dividable by 100 return false unless it is dividable by 400
            if(year % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }else{
        return false;
    }

    
    

};

// Do not edit below this line
module.exports = leapYears;
