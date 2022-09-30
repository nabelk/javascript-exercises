const findTheOldest = function(arr){
    arr.sort((a, b) => {
        let lastperson, firstperson;
        if (!a.yearOfDeath || !b.yearOfDeath){
            lastperson = (new Date().getFullYear()) - a.yearOfBirth;
            firstperson = (new Date().getFullYear()) - b.yearOfBirth;
        } else {
            lastperson = a.yearOfDeath - a.yearOfBirth;
            firstperson = b.yearOfDeath - b.yearOfBirth;
        }
        return lastperson > firstperson ? - 1 : 1;
     });

    return arr[0];    
};

// Do not edit below this line
module.exports = findTheOldest;
