//create 3 arrays that will hold different options

let subject = ["football", "basketball", "soccer", "tennis", "hockey", "golf", "tournament"];
let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let hour = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];
let amPM = ["AM", "PM"];

//create randomizer that selects a random index from array

let randomSubject = Math.floor(Math.random() * subject.length);
let randomDay = Math.floor(Math.random() * day.length);
let randomHour = Math.floor(Math.random() * hour.length);
let randomAmPm = Math.floor(Math.random() * amPM.length);

//console log the random index into text

const randomMessage = () => {

let v1 = subject[randomSubject];
let v2 = day[randomDay];
let v3 = hour[randomHour];
let v4 = amPM[randomAmPm];

console.log(`You have a ${v1} game soon.`);
console.log(`It's happening on ${v2}.`);
console.log(`Be ready at ${v3} ${v4}.`);
};


randomMessage();