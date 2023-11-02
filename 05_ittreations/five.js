// for each

const coding =["html","py","js","java"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (val)=>{
//     console.log(val);
// } )



// function printMe(val){
//     console.log(val);
// }

// coding.forEach(printMe)



// coding.forEach( (item , inded, arr)=>{
//     console.log(item , inded, arr);
// })


const myCoding= [
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "cascade style sheet",
        filename:"css"
    },
    {
        language: "HyperText Markup Lang",
        filename:"html"
    }
]

myCoding.forEach( (val)=>{
    console.log(val.filename);
} )