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

//adding animation event listeners
let cardElement = document.getElementById('card');

cardElement.addEventListener('animationStart', listener, flase);
cardElement.addEventListener('animationEnd', listener, flase);
cardElement.addEventListener('animationIteration', listener, flase);

cardElement.className = 'slideIn';

function listener(event){
    let l = document.createElement('li');
    switch(event.type) {
        case 'animationStart':
            l.innerHtml = 'started: elapsed time is' + event.elapsedTime;
            break;
        case 'animationEnd':
            l.innerHTML = 'Ended: elapsed time is' + event.elapsedTime;
            break;
        case 'animationIteration':
            l.innerHTML = 'New loop started at time' + event.elapsedTime;
            break;
    }
    document.getElementById('output').appendChild(l);
}