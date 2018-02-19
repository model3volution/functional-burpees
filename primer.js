//Try to do these on your own and checkout the console in Chrome to check your work, or if checking in node, make sure you have atleast V8.7
console.log("START");
const magicNumbers = [72, 3, 9, 10, 65, 0, 18, 21];

// Find the largest number from the magicNumbers array => 72 
const magicNum = Math.max(...magicNumbers);
console.log(magicNum);

/*
   Sort the numbers from highest to lowest, but leave the original array the same
   [ 72, 65, 21, 18, 10, 9, 3, 0 ]
*/

const magicSorted = [...magicNumbers].sort((a, b) => b - a);
console.log(magicNumbers);
console.log(magicSorted);

const names = ['Michael', 'Ying', 'Sid', 'Ravi', 'Rodo', 'Mark'];

/*
   Turn each name into an object:
   {name:'Michael'}

*/

const namesObj = names.map((value) => ({name: value}));
console.log(namesObj);

const coolPeople = [
   {
       name: 'Michael Liendo',
       profession: 'Developer',
       yearsProgramming: 10
   },
   {
       name: 'Ravi Andulu',
       profession: 'Developer',
       yearsProgramming: 6
   },
   {
       name: 'Ying Wang',
       profession: 'Developer',
       yearsProgramming: 1
   },
   {
       name: 'Sid Dawar',
       profession: 'Developer',
       yearsProgramming: 3
   }
];

//filter the cool people so that it excludes anyone that has an 'M' in their name
const filteredCoolPeople = coolPeople.filter((person) => person.name.indexOf('M') == -1);
console.log(filteredCoolPeople);


// How many years of programming does everyone have together?
const totalYearsProgramming = coolPeople.reduce( (prev, current) => prev + current.yearsProgramming, 0);
console.log(totalYearsProgramming);