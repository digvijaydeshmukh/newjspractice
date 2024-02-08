var merge = function (intervals) {
    let arr=intervals.sort((a,b)=>a[0]-b[0])
    let result=[];
    let pair=arr[0];
    
    for(let i of arr){
      if(pair[1]>=i[0]){
        pair[1]=Math.max(pair[1],i[1])
      }else{
        result.push(pair);
        pair=i
      }
    }
    result.push(pair)
    return result
    };
    let intervals=[[1,3],[2,6],[8,10],[15,18]] //[[1,3],[2,6],[8,10],[15,18]]
    console.log(merge(intervals))