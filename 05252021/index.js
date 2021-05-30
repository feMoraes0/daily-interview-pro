
function getFirstAndLast(array, target) {
  let result = [-1, -1];
  position = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] == target) {
      result[position] = i;
      position = 1;
    } else if(array[i] != target && position == 1) {
      break;
    }
  }

  if(result[0] != -1 && result[1] == -1) {
    result[1] = result[0];
  }

  return result;
}

function getFirstAndLastJSVersion(array, target) {
  let result = [];

  result.push(array.indexOf(target));
  result.push(array.lastIndexOf(target));

  return result;
}

const solution = getFirstAndLast([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9);
console.log(solution);
const solution1 = getFirstAndLast([100, 150, 150, 153], 150);
console.log(solution1);
const solution2 = getFirstAndLast([1, 2, 3, 4, 5, 6, 10], 9);
console.log(solution2);
const solution3 = getFirstAndLast([1, 2, 3, 4, 5, 6, 10], 6);
console.log(solution3);

console.log(" === JS Version === ")
const solutionJS = getFirstAndLastJSVersion([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9);
console.log(solutionJS);
const solutionJS1 = getFirstAndLastJSVersion([100, 150, 150, 153], 150);
console.log(solutionJS1);
const solutionJS2 = getFirstAndLastJSVersion([1, 2, 3, 4, 5, 6, 10], 9);
console.log(solutionJS2);
const solutionJS3 = getFirstAndLastJSVersion([1, 2, 3, 4, 5, 6, 10], 6);
console.log(solutionJS3);
