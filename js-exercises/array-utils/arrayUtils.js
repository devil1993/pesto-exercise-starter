
function forEach(arrayToRunFunctionOn, callbackFunction, thisArg = undefined){
    if(Array.isArray(arrayToRunFunctionOn)){
      if(typeof(callbackFunction) === typeof(()=>0) && callbackFunction.length>0){
        for (let i = 0; i < arrayToRunFunctionOn.length; i++) {
          switch (callbackFunction.length) {
            case 1:
              callbackFunction.call(thisArg, arrayToRunFunctionOn[i]);  
              break;
            case 2:
              callbackFunction.call(thisArg, arrayToRunFunctionOn[i], i);
              break;
            default:
              callbackFunction.call(thisArg, arrayToRunFunctionOn[i], i, arrayToRunFunctionOn);
              break;
          }
        }
      }
      else{
        throw "Parameter 2 of forEach should be of type function. The function should have at least one parameter.";
      }
    }
    else
      throw "Parameter 1 of forEach should be an Array.";
}


function map(arrayToRunFunctionOn, callbackFunction, thisArg = undefined){
  if(Array.isArray(arrayToRunFunctionOn)){
    if(typeof(callbackFunction) === typeof(()=>0) && callbackFunction.length>0){
      let mappedResults = []
      for (let i = 0; i < arrayToRunFunctionOn.length; i++) {
        switch (callbackFunction.length) {
          case 1:
            mappedResults.push(callbackFunction.call(thisArg, arrayToRunFunctionOn[i]));  
            break;
          case 2:
            mappedResults.push(callbackFunction.call(thisArg, arrayToRunFunctionOn[i], i));
            break;
          default:
            mappedResults.push(callbackFunction.call(thisArg, arrayToRunFunctionOn[i], i, arrayToRunFunctionOn));
            break;
        }
      }
      return mappedResults;
    }
    else{
      throw "Parameter 2 of map should be of type function. The function should have at least one parameter.";
    }
  }
  else
    throw "Parameter 1 of map should be an Array.";
}

function filter(arrayToRunFunctionOn, callbackFunction, thisArg = undefined){
  if(Array.isArray(arrayToRunFunctionOn)){
    if(typeof(callbackFunction) === typeof(()=>0) && callbackFunction.length>0){
      let filteredResults = []
      for (let i = 0; i < arrayToRunFunctionOn.length; i++) {
        switch (callbackFunction.length) {
          case 1:
            if(callbackFunction.call(thisArg, arrayToRunFunctionOn[i])){
              filteredResults.push(arrayToRunFunctionOn[i]);
            }
            break;
          case 2:
            if(callbackFunction.call(thisArg, arrayToRunFunctionOn[i], i)){
              filteredResults.push(arrayToRunFunctionOn[i]);
            }
            break;
          default:
            if(callbackFunction.call(thisArg, arrayToRunFunctionOn[i], i, arrayToRunFunctionOn)){
              filteredResults.push(arrayToRunFunctionOn[i]);
            }
            break;
        }
      }
      return filteredResults;
    }
    else{
      throw "Parameter 2 of filter should be of type function. The function should have at least one parameter.";
    }
  }
  else
    throw "Parameter 1 of filter should be an Array.";

}

function reduce(arrayToRunFunctionOn, callbackFunction, initialValue = undefined){
  if(Array.isArray(arrayToRunFunctionOn)){
    if(typeof(callbackFunction) === typeof(()=>0) && callbackFunction.length>1){
      let reducedResult, i;
      if(initialValue){
        reducedResult = initialValue;
        i = 0;
      }
      else {
        if(arrayToRunFunctionOn.length === 0){
          throw TypeError();
        }
        reducedResult = arrayToRunFunctionOn[0];
        i = 1; 
      }
      for (; i < arrayToRunFunctionOn.length; i++) {
        switch (callbackFunction.length) {
          case 2:
            reducedResult = callbackFunction.call(this, reducedResult, arrayToRunFunctionOn[i]);
            break;
          case 2:
            reducedResult = callbackFunction.call(this, reducedResult, arrayToRunFunctionOn[i], i);
            break;
          default:
            reducedResult = callbackFunction.call(this, reducedResult, arrayToRunFunctionOn[i], i, arrayToRunFunctionOn);
            break;
        }
      }
      return reducedResult;
    }
    else{
      throw "Parameter 2 of filter should be of type function. The function should have at least two parameters.";
    }
  }
  else
    throw "Parameter 1 of filter should be an Array.";
}

export {
  forEach,
  map,
  filter,
  reduce,
}
