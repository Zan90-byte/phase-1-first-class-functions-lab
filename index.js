// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

//console.log(returnFirstTwoDrivers(drivers));

//*********************************** */

//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

//console.log(returnLastTwoDrivers(drivers));

//************************************ */

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//*********************************** */

function createFareMultiplier(number) {
    return function(fare){
        return number * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// console.log(fareDoubler(10));
// console.log(fareTripler(10));

//********************************** */


function selectDifferentDrivers(drivers, cb) {
    return cb(drivers);
}

// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
