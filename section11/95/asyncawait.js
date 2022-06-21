// const doWork = () =>{
//     return "Abhi"
// }

// console.log(doWork());
// const doWork = async() =>{
//     return "Abhi"
// }

// console.log(doWork());
// const doWork = async() =>{
//     return "Abhi"
// }

// doWork().then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })
// const doWork = async() =>{
//     throw new Error("error created")
//     return "Abhi"
// }

// doWork().then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                reject("there is an error")
            }
            resolve(a+b)
        },2000)
    })
}

const doWork = async() =>{
   const sum = await add(3,5);
   const sum2 = await add(sum,5);
   const sum3 = await add(sum2,-5);
   return sum3;
}

doWork().then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})