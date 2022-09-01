const sumAll = function(x, y) {
    let result;
    let sum = 0;
    
    /* if(x < 0 || y === "90" ){
    result = "ERROR";
    } */
   
    if (x < 0 || typeof y === "string" || typeof y === "object"){
        result  = "ERROR";
    } else if (y > x){
    for (let i = x; i <= y; i++ ){
        sum += i;
        result = sum;
        }
    } else {
    if (x > y){
        for (let i = y; i <= x; i++ ){
            sum += i;
            result = sum;
            }
        }
    }
    return result;    
}

// Do not edit below this line
module.exports = sumAll;
