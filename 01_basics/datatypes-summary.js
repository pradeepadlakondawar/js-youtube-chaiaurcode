//kis tarha se datatypes ko memmory me rkha jata hai and unke acees kiya jata hai, is tarha se datatypes ko 2 types me divide kiya h primitive and non-premitive/refrencetype datatypes.

//Primitive data type  -callbyvalue hote h
// string, number, boolean,null,undefined,symbol,BigInt


let number=123
let srt1="123"
let isLoggedin=true
const outsidetemp= null;
let userEmail;  //undefined

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id == anotherid);

const bigNumber = 234556947362234n



//Non-primitve/refrencetype
//array,object,functions

const arr=["hello","pradeep","have a goodday"];

const obj ={
    name: "pradeep",
    id: 1,
    male: true
}

const myfunc = function(){
    console.log("hello world");
}

//master the objects and web/broweser enevts.IMPORTANT!