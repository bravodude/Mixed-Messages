//create 3 arrays that will hold different options

let pronounArray = ["He", "She"];
let verbArray = ["excited", "sad", "happy", "crying", "yelling", "laughing"];
let nounArray = ["basketball", "game", "score", "team", "life"];


//create randomizer that selects a random index from array

let randomPronoun = Math.floor(Math.random() * pronounArray.length);
let randomVerb = Math.floor(Math.random() * verbArray.length);
let randomNoun = Math.floor(Math.random() * nounArray.length);

//console log the random index into text

let randomMessage = () => {

let v1 = pronounArray[randomPronoun];
let v2 = verbArray[randomVerb];
let v3 = nounArray[randomNoun];

return `${v1} was ${v2} about ${v3}.`;
};

console.log(randomMessage());