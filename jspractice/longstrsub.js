let s = "pwwkew"

function longstr(str){
    let sub=str[0];
    if(!str.length){
        return 0
    }
    let longstr=sub;
    let j=0;
    for(let i=j+1;i<str.length;i++){
        if(str.slice(j,i).split('').includes(str[i])){
            ++j;
            i=j;
        }else{
            sub=str.slice(j,i+1)
        }

        if(sub.length>longstr.length){
            longstr=sub
        }
    }
    console.log(longstr)
    return longstr.length;
}

console.log(longstr(s))