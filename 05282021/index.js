function two_sum(list, k) {
  const support = {};

  for(let i = 0; i < list.length; i++) {
    const searched = k - list[i];
    if( support[searched]  != undefined ){
      return true;
    } else {
      support[searched] = true;
      support[list[i]] = true;
    }
  }

  return false;
}

const solution = two_sum([4, 7, 1, -3, 2], 5);
console.log(solution);
