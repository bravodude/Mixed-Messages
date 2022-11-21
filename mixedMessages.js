//create 3 arrays that will hold different options

let pronounArray = ["He", "She"];
let verbArray = ["excited", "sad", "happy", "crying", "yelling", "laughing"];
let nounArray = ["basketball", "game", "score", "team", "life"];


//create randomizer that selects a random index from array

let randomPronoun = (array) => {
    let num = Math.floor(Math.random() * array.length) + 1;
    return num;
};

let randomVerb = (array) => {
    let num = Math.floor(Math.random() * array.length) + 1;
    return num;
};

let randomNoun = (array) => {
    let num = Math.floor(Math.random() * array.length) + 1;
    return num;
};


console.log(randomPronoun(pronounArray));
console.log(randomVerb(verbArray));
console.log(randomVerb(nounArray));

