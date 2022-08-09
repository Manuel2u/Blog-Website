let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let diff = 0;
arr.forEach(function(element) {
    sum += element;
});

let mean = sum / arr.length;

arr.forEach(function(number){
    diff = number - mean;
    diff += diff;
    diff = Math.pow(diff, 2);
});

var mean_dev = diff / arr.length;

standard_dev = Math.sqrt(mean_dev);

console.log(standard_dev);