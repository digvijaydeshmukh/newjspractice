// let temp=[[0, 1], [2, 3], [4, 5]];
// function flatarr(arr){
//     let result=[];

//     function callfun(a){
//         for(let i=0;i<a.length;i++){
//             if(Array.isArray(a[i])){
//                 callfun(a[i])
//             }else{
//                 result.push(a[i])
//             }
//         }
//     }
//         callfun(arr)
//         return result
    
// }
// console.log(flatarr(temp))

// let temp=[10, 20];

// function converarrtolist(temp){
//     let result=null;
//     for(let i=temp.length-1;i>=0;i--){
//         result={value:temp[i],rest:result}
//     }

//     return result
// }
// console.log(converarrtolist(temp))

// let temp={ value: 10, rest: { value: 20, rest: null } }

// function convertoarr(obj){
//     let result=[];
//     function callfun(el){
//         if(el!=null){
//             result.push(el.value)
//             callfun(el.rest)
//         }
//     }
//     callfun(obj)
//     return result
// }

// console.log(convertoarr(temp))
// let t=[10, 20];
// console.log({...[t]})
// console.log(temp.flat(1))

// function faltarr(arr){
//     let result=[];
    
//     function pqr(s){
//         for(let i=0;i<s.length;i++){
//             if(Array.isArray(s[i])){
//                 pqr(s[i])
//             }else{
//                 result.push(s[i])
//             }
//         }
//     }
//     pqr(arr)
//     console.log(result)
// }

// console.log(faltarr(temp))

// function arrayToNestedObject(arr) {
//     let result = null;
  
//    for(let i=arr.length;i>=0;i--){
//     result={value:arr[i],rest:result}
//    }
//    return result
//   }


//   console.log(arrayToNestedObject([10, 20, 30]));

// let temp={value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};

// function convertoArr(obj){
//     let result=[];

//     function rec(el){
//         if(el!=null){
//             result.push(el.value);
//             rec(el.rest)
//         }
//     }
//     rec(obj)

//     return result
// }

// console.log(convertoArr(temp))


// let obj={
//     num:1
// }

// function sum(a,b,c){
//  console.log(this.num+a+b+c)
// }

// let t=sum.call(obj,1,2,3)
// let t1=sum.apply(obj,[1,2,3])
// let t2=sum.bind(obj)
// t2(1,2,3)

let nums= [[4, 5], [5, 6]]


function intervals(arr){
    let result=[];
    let sortarr=arr.sort((a,b)=>a[0]-b[0])
    let pair=sortarr[0]
    for(let i of sortarr){
        if(pair[1]>=i[0]){
            pair[1]=Math.max(pair[1],i[1])
        }else{
            result.push(pair);
            pair=i
        }
    }

    result.push(pair)
    return result
}

console.log(intervals(nums))