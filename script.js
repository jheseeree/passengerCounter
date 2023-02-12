let passengerCount = 0;
let currentCount = 0;
let totalCount = 0;

var passengers = document.getElementById('passengers');
var passengerSets = document.getElementById('passenger_sets');

function increment() {
    currentCount = currentCount + 1;
    passengers.innerText = currentCount;
}

function save() {
    totalCount = totalCount + currentCount;
    passengerSets.textContent += ' ['+currentCount+'] ';
}

function reset() {
    passengerCount = 0;
    currentCount = 0;
    totalCount = 0;
    passengers.innerText = currentCount;
    passengerSets.textContent = null;
}