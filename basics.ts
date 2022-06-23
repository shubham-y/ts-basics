let userName: string = "Shubham";
let hasLoggedIn: boolean = true;

userName += " Yadav";
console.log(hasLoggedIn); 

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

// Arrays
const names: string[] = userName.split(" ");
// Generic array type, Array<elemType>
const myValues: Array<number> = [1, 2, 3];

// Interfaces
interface Person {
    first: string;
    last: string;
};

const myPerson: Person = {
    first: "Shubham",
    last: "Yadav"
};

// Record<Keys, Type>
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

if(ids[30] === 'D') {
}

//Type Inference
for(let i = 0; i < 10; i++) {
    console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => `${v * 10}`);