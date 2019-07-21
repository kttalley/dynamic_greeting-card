const today = new Date();
const hourNow = today.getHours();
let greeting;


if (hourNow > 18) {
    greeting = 'Good evening.';
} else if (hourNow > 12) {
    greeting = 'Good afternoon.';
} else if (hourNow > 0) {
    greeting = 'Good morn.';
}

document.write('<h3>' + greeting + '</h3>');
document.write('<h4>The time is ' + hourNow + ':00</h4>');