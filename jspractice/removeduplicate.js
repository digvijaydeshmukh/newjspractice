let nums=[2,2,1,4,5,4];
let result=[];
let temp=[];
// let temp=nums.reduce((acc,c)=>{
//     if(c in acc){
//         acc[c]++
//     }else{
//         acc[c]=1
//     }
//     return acc
// },{})
nums.forEach(el=>{
    if(el in temp){
        temp[el]++
    }else{
        temp[el]=1
    }
})
Object.entries(temp).forEach(el=>{
    if(el[1]===1){
        result.push(el[0])
    }
})

console.log(result.map(i=>Number(i)))