const number = Math.floor(Math.random() * 15);

const repeatString = function(string, num) {
    let result = "";
    while(num > 0){
        result += string;
        num--;
    }

    if (num < 0) return "ERROR";
    if (num === number) return string.repeat(num);
   
return result;
};

repeatString('hey', 3);
repeatString('hey', 10); 
repeatString("hey", 1);
repeatString("hey", 0);
repeatString('hey', -1);



// Do not edit below this line
module.exports = repeatString;
