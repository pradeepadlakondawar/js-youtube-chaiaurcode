//for of

// common scenarios we see --> ["","",""]  arry of str -->[{},{},{}] arry of obj

const arr =[1,2,3,4,5,6]

for (const val of arr) {
    // console.log(val);
}

const greeting = "Hello world!"

for (const greet of greeting) {
    // console.log(greet);
}

//maps  = it contains unique values and store in sequence

const map = new Map()
map.set("IN","India")
map.set("US","United state of America")
map.set("FR","France")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key , val] of map) {
    console.log(`${key} -- ${val}`);
}