let nums = [1, 2, 3, 4, 5];
// let temp=nums.map(el=>el*2)
// console.log(temp)
// let temp=nums.filter(el=>el>4)
// console.log(temp)
// let temp = nums.reduce((acc, c) => { return acc + c }, 0)
// console.log(temp)

// Array.prototype.myMap=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this))
//     }
//     return temp;
// }

// let test=nums.myMap(el=>el*2)
// console.log(test)

// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i])
//     }
//     return temp;
// }

// let test=nums.myFilter(el=>el>2)
// console.log(test)

// Array.prototype.myReduce=function(cb,initialVal){
//     let acc=initialVal;
//     for(let i=0;i<this.length;i++){
//         acc=acc?cb(acc,this[i],i,this):this[i]
//     }

//     return acc
// }

// let test=nums.myReduce((acc,c)=>acc+c)
// console.log(test)


// Array.prototype.MyReduce=function(cb,initialVal){
//     let acc=initialVal
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         acc=acc?cb(acc,this[i],i,this):this[i]
//     }
//     return acc
// }

// let test=nums.MyReduce((acc,c)=>acc+c)
// console.log(test)