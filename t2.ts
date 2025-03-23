// const location:readonly string[] = ["Dadar","Prabhadevi"]; //readonly doesn't allow other string items to enter in array

//const space:string[] = ["Sun","Moon","Jupiter"]

//space.push(54)

//console.log(location)


// const person:{id:number,name:string,age?:number}={ //if you don't want to give age put question mark next to age 

//     id:121,
//     name:"aradhya"

// }

// console.log(person)

//inerface

// interface isProduct{

//     productId:number,
//     productName:string,
//     productprice?: number

// }
// //here isProduct is a interface of products

// const a1:isProduct={
//     productId:101,
//     productName:"mobile"
// }

// const a2:isProduct={

//     productId:102,
//     productName:"Watch"
// }

// console.log(a1,a2)


interface school{
    schoolName:string,
    schoolId:number,
    schoolloc?:string,
    details(a:number):number
}

const a1:school={
    schoolName:"Balmohan vidyamandir",
    schoolId:1,
    schoolloc:"shivaji park",
    details:function(a:45)
    {
         return a
    }
}

console.log(a1)











