//create 3 arrays that will hold different options

let subject = ["football", "basketball", "soccer", "tennis", "hockey", "golf", "tournament"];
let day = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let hour = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];
let amPM = ["am", "pm"];

//create randomizer that selects a random index from array

let randomSubject = Math.floor(Math.random() * subject.length);
let randomDay = Math.floor(Math.random() * day.length);
let randomHour = Math.floor(Math.random() * hour.length);
let randomAmPm = Math.floor(Math.random() * amPM.length);

//console log the random index into text

let randomMessage = () => {

let v1 = subject[randomSubject];
let v2 = day[randomDay];
let v3 = hour[randomHour];
let v4 = amPM[randomAmPm];

return `You have a ${v1} game on ${v2} at ${v3} ${v4}.`;
};

console.log(randomMessage());