const myNums = [1,2,3]

// const newNums = myNums.reduce((accumilator,currentValue)=>{

// },initialValue)


// general use of reduce in shopping cart adding total price for all dding cart items
// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`accumaltor: ${acc}  &  currentval ${currval}`);
//         return acc+currval
// },0)

const myTotal = myNums.reduce((acc,currval)=> (acc+currval),0)  // in arrow function

// console.log(myTotal);


const shoppingCart= [
    {
        itemName: "javascript",
        price: 3000
    },
    {
        itemName: "python",
        price: 4999
    },
    {
        itemName: "Andriod dev",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

// now we have to do the sum of all courses which will be selected

const priceToPay =shoppingCart.reduce((acc,item) => (acc+item.price), 0)

console.log(priceToPay);