// function sum(...val:number[]){
//     let result=0;
//     val.forEach(el => {
//        result+=el 
//     });
//     return result
// }

// console.log(sum(1,2,3,4,5))

// let a=[1,2,3,4];
// let b=[5,6,7,8];
// let c=a.push(...b)
// // console.log(a)
// export interface abc{
//     a:number,
//     b:number,
//     c:number
// }
// function multiply({a,b,c}:abc) {
//     console.log(a * b * c);
//     }
    
// multiply({a:1,b:2,c:3});

let input= 'aabcbade';

function longestsub(input){
    let sub=input[0];
    if(!input.length){
        return 0
    }

    let longsub=sub;
    let j=0;
    for(let i=j+1;i<input.length;i++){
    if(input.slice(j,i).split('').includes(input[i])){
        ++j;
        i=j;
    }else{
        sub=input.slice(j,i+1)
    }
    }

    if(sub.length>longsub.length){
        longsub=sub;
    }
    console.log(longsub)
    return longsub.length
}

console.log(longestsub(input))