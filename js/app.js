const juniorDeveloper = document.getElementById('junior-developer');
let myText = 'Junior Developer';
let myText2 = 'Curious Person'
let textArray = myText.split('');
let indexNumber = 0;
let displayText = [];
let joinText = displayText;
setInterval(() => {
    displayText.push(textArray[indexNumber])
    indexNumber++;
    // console.log(displayText);
    let showTextBro = displayText.join("");
    juniorDeveloper.innerText = showTextBro;
    document.getElementById('about-me').innerText = showTextBro;

    if (indexNumber === textArray.length) {


        if (indexNumber !== myText2.length) {
            indexNumber = 0;
            displayText = [];
            textArray = myText2.split('');
        } else {
            indexNumber = 0;
            displayText = [];
            textArray = myText.split('');
        }



    }
}, 200);

// clock javascript code bro 
const clock = () => {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDay();
    let month = date.getMonth();
    let datein = date.getDate();
    let year = date.getFullYear();
    let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let amOrPm = year > 12 ? 'PM' : 'AM';

    let timeFormat = hours > 12 ? hours - 12 : hours;
    let hoursHisabBro = timeFormat < 10 ? `0${timeFormat}` : timeFormat;
    let secondHisabBro = seconds < 10 ? `0${seconds}` : seconds;
    let minuteHisabBro = mins < 10 ? `0${mins}` : mins;

    let toDay = `${dayArray[day]}, ${monthArray[month]} ${datein}, ${year}`;
    const time = `${hoursHisabBro} : ${minuteHisabBro} : ${secondHisabBro} ${amOrPm}`;



    document.getElementById('time-format').innerText = time;

    document.getElementById('day').innerText = toDay;


};
clock();

setInterval(clock, 1000);



// total visitor 
let visitor = 0;
const visitorBabu = setInterval(() => {
    visitor++;
    document.getElementById('total-visitor').innerText = visitor;
    if (visitor === 1000) {
        clearInterval(visitorBabu)
    }
}, 1);


// total subscriber
let subscriber = 0;
const subscriberBabu = setInterval(() => {
    subscriber++;
    document.getElementById('total-subscriber').innerText = subscriber;
    if (subscriber === 700) {
        clearInterval(subscriberBabu)
    }
}, 1);


let project = 0;
const projectBabu = setInterval(() => {
    project++
    document.getElementById('total-project').innerText = project;
    if (project === 120) {
        clearInterval(projectBabu)
    }
}, 1)