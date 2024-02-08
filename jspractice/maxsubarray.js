let temp=[-2,1,-3,4,-1,2,1,-5,4]
function maxsub(numArr){
    let curr=0;
    let max=-Infinity;
    for(let i=0;i<numArr.length;i++){
        curr=Math.max(numArr[i],curr+numArr[i])
        max=Math.max(curr,max)
    }
    return max
}

console.log(maxsub(temp))