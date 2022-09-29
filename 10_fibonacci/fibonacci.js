const fibonacci = function(indexNum) {
    let a = 0; // 1st index of fibonacci
    let b = 1; // 2nd index of fibonacci
    let c = null;
    if (typeof indexNum !== "number") indexNum = Number(indexNum);
    if (indexNum === 1) return b;
    if (indexNum < 0) return "OOPS"; 
    console.log(`Index number = ${indexNum}`);

    for (let i = 2; i <= indexNum; i++ ){
       console.log(`Round of loop: ${i}`)
       c = a+ b
       console.log(`c = (a:${a} + b:${b} = c:${c})`);
       a = b; // Move var of a to the next index
       console.log(`a = b which is ${a}`);
       b = c; // Move var of b to the next index
       console.log(`b = c  which is ${b}`);
    }

    console.log (`result: ${c}`);
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
