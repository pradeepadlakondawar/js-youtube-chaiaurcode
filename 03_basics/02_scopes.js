// //  {}-scopes

// // let a =10
// // const b =20
// // var c=30

// if(true){
//     let a =100
//     const b =200
//     var c=300
// }

// console.log(a);
// console.log(b);
// console.log(c);


// scope insedie {} are called as block scope and outside the {} is called as Global scope.

// global scope in browser consul is diff then global scope in code



function one(){
    const username="pradeep";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

one();
