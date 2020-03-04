import { forEach, map, filter, reduce} from './arrayUtils';

describe('forEach', () => {
  it('should execute code for each element of array', () => {
    expect(typeof forEach).toBe('function');
  });
  it('The forEach function should execute for all elements', () => {
    let checkValue = 0
    // this function adds value to the variable checkvalue.
    const foo = x => { checkValue += x; };
    forEach([1,2,3], foo);
    // after the execution the value of checkvalue should be 0+1+2+3 =6
    expect(checkValue).toBe(6);
  });
});

describe('map', () => {
  it('should execute a function for each element of array and return the result in same order.', () => {
    expect(typeof forEach).toBe('function');
  });
  it('The map function should map the fuction to all elements', () => {
    const foo = x => x *x;
    let mappedResult = map([1,2,3], foo);
    // after the execution compare the stringified json
    expect(JSON.stringify(mappedResult)).toBe(JSON.stringify([1,4,9]));
  });
});



// let checkValue = 0
// const foo = x => { checkValue += x; };
// forEach([1,2,3], foo);
// console.log(checkValue);

// const cube = (x) => x*x*x;
// console.log(JSON.stringify(map([1,2,3], cube)) == JSON.stringify([1,8,27]));

// console.log(filter([1,2,3,4,5,6,7], (x) => x%2 === 0));


// console.log(reduce([1,2,3,4,5,6,7], (prev, current) => prev + current, 10));

// console.log(reduce([1,2,3,4,5,6,7], (prev, current) => prev + current));