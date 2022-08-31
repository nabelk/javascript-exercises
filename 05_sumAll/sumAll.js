const sumAll = function(x, y) {
    let sum = 0;
    if (y > x){
    for (let i = x; i <= y; i++ ){
        sum += i;
    }
} else{
    if (x > y){
        for (let i = y; i <= x; i++ ){
            sum += i;
        }
    }
}
    return sum;  
}

// Do not edit below this line
module.exports = sumAll;
