//for in loop

// for of loop doesnt ittrate object


const myObj={
    js:"javascript",
    cpp: "C++",
    rb: "Rubby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(`key ${key} shortcut is for ${myObj[key]}`);
}

let myarr = ["js","cpp","html","rb"]

for (const key in myarr) {
    console.log(key);
    console.log(` ${myarr[key]}`);
}