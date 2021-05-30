
function sortArray(array) {
  const temp = [];
  for( let i = 0; i < array.length; i++ ){
    let current = array[i];
    if(temp[current - 1] == undefined) {
      temp[current - 1] = [current]
    } else {
      temp[current - 1].push(current);
    }
  }

  let solution = [];
  for(let j = 0; j <= temp.length - 1; j++) {
    solution = solution.concat(temp[j]);
  }

  // or if use temp as object
  // for(key in temp) {
  //   console.log(temp[key]);
  //   solution = solution.concat(...temp[key]);
  // }

  return solution;
}

const solution = sortArray([3, 3, 2, 1, 3, 2, 1]);
console.log(solution);