const name ='pradeep';
const marks= 200;

console.log(name + marks); // concating the string

console.log(`My name is ${name} and I got Marks ${marks}`); // this the new syntax by using "backticks" this backticks are also called as templateliterals !use this 


//another way to declare string

const newName= new String ("PradeeAD"); //it will create string obj
console.log(newName);
console.log(newName[1]); // we can access it by key value pair also
console.log(newName.__proto__);

//you can see all strings metods in console under prototypes. You can learn more on MDN

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf('d'));

const newstring= newName.substring(0,5);
console.log(newstring);

const anotherString =newName.slice(-6,4);
console.log(anotherString);

const user="   pro     "
console.log(user);
console.log(user.trim());

const url ="https://pradeep.com/pradeep%20ad";
console.log(url.replace('%20','-'));
console.log(url.includes('pradeep'));
console.log(url.includes('pro"'));

//converting string into array dependig on some symbols or spaces

const newName2 = new String("pradeep-ad-001");

console.log(newName2.split('-'));



//some practice

const str1="Abcd";
const str2="efgh";

console.log(str1<str2);
console.log(str1>=str2);
console.log(str1===str2);

// generally while comparing strings try to make them all to lower case or uppercase while comparing

console.log(str1.toLowerCase()===str2.toLowerCase());
console.log(str1.toUpperCase()===str2.toUpperCase());
console.log(`${newName2.charCodeAt(4)} == ${newName2.charAt(4)}`);





