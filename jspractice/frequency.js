let nums=[1,1,1,2,2,3];
let k=2;

function check(nums,k){
    let result=[];
    let arr={};
   let temp=nums.reduce((acc,c)=>{
        if(c in acc){
            acc[c]++
        }else{
            acc[c]=1
        }
        return acc;
    },{})

    // nums.forEach(el => {
    //     if(el in arr){
    //         arr[el]++
    //     }else{
    //         arr[el]=1
    //     }
    // });
    // console.log("ar",arr)
    // console.log("ar",temp)
    let f=Object.entries(temp).sort((a,b)=>a[1]-b[1])
    console.log(f)
    while(result.length!=k){
        let temp=f.pop();
        result.push(temp[0])
    }
    var b = result.map(i=>Number(i));
    return b
}

console.log(check(nums,k))