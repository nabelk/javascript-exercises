const removeFromArray = function(array, ...args) {
    // .filter() is an array method that make a copy of the elements.
    // .includes() an array method that decides the choosen elements.

    // Solution 1

    /* const removedResult = array.filter(item => !args.includes(item));
    return removedResult; */

    // Solution 2

    /* const lotsofArguments = [...args];
    const removedResult = array.filter (item => !lotsofArguments.includes(item));
    return removedResult; */

    // Solution 3

    const lotsofArguments = [...args]; // spread operator
    for (let i =0; i < array.length; i++){
        for(let z = 0; z < lotsofArguments.length; z++) {
        if ( array [i] === lotsofArguments[z] ){
            array.splice(z, 1);
            }
        }
    }   
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
