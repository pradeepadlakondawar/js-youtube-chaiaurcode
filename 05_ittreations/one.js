// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }



for (let i = 0; i < 10; i++) {

    //console.log(`outerloop I value: ${i}`);
    for (let j = 0; j < 10; j++) {
       // console.log(`inner loop J value: ${j} and innerloop I value: ${i}`);
    
    }
}

let myArr = ["superman","flash","batman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}




// break and continue

// for (let index = 1; index <= 20; index++) {

//     if(index==5){
//         console.log("5 DETECTED ");
//         break;
//     }
//     console.log(`value of i is: ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {

    if(index==5){
        console.log("5 DETECTED ");
        continue;
    }
    console.log(`value of i is: ${index}`);
    
}