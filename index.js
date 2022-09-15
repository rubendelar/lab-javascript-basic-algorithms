// Iteration 1: Names and Input

let hacker1 = "Pepe";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jacinto";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

//3.1

let driversName = "";
for (let i = 0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName);

//3.2
//hacker2.length -1: con esto comenzamos por el final del string y le restamos -1 para que empieze por la ultima letra correctamente.

let navigatorsName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);

//3.3

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//bonus1

let lorem = `lorem`;

function amountOfWords(andreu) {
  return andreu.split(" ").filter((word) => word !== "").length;
}

console.log(amountOfWords(lorem));

function etFindingWithFilter(juan) {
  return juan.split(" ").filter((farik) => farik == "et").length;
}

console.log(etFindingWithFilter(lorem));

//bonus2

let phraeToCheck = "luzazul";

function palindromeCheck(wordToCheck) {
  let length = wordToCheck.length - 1;
  let index = 0;

  while (index < length) {
    if (wordToCheck(index) === " ") index++;
    else if (wordToCheck[length] === " ") length--;
  }
}
