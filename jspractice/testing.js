let s = "pwwkhew";

function longstr(str){
sub=str[0];

if(!str.length){
    return 0
}
let longs=sub[0];
let j=0
for(let i=0;i<str.length;i++){
    if(str.slice(j,i).split('').includes(str[i])){
        ++j;
        j=i
    }else{
        sub=str.slice(j,i+1)
    }
}
if(sub.length>longs.length){
    longs=sub
}
return longs
}

console.log(longstr(s))