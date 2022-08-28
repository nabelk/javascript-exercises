const repeatString = function(string, num) {
    let result = "";
    while(num > 0){
        result += string;
        num--;
    }
   
return result;
};

repeatString('hey', 3);
repeatString('hey', 10); 
repeatString("hey", 1);


// Do not edit below this line
module.exports = repeatString;
