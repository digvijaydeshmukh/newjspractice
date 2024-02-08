function removeConsecutiveRepeats(str, maxRepeats) {
    if (typeof str !== 'string' || typeof maxRepeats !== 'number' || maxRepeats < 1) {
      console.log('Invalid input parameters');
      return;
    }
  
    let result = '';
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        if (count <= maxRepeats) {
          result += str[i].repeat(count);
        }
        count = 1;
      }
    }
  
    console.log(result);
  }
  
  
  removeConsecutiveRepeats('aaabbaaccccdd', 1);