
function duplicateLetters(ipString) {
  let counter = {}
  for (let charecter of ipString){
    if(!counter[charecter]){
      counter[charecter] = 1;
    }
    else {
      counter[charecter] += 1;
    }
  }
  let max = 1;
  let maxchar = null;
  for (let key in counter){
    if(counter[key] > max){
      maxchar = key;
      max = counter[key];
    }
  }
  if(maxchar){
    return max;
  }
  else
    return false;
}

export {
  duplicateLetters,
};
