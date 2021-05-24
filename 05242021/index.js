function isValid(input) {
  const stack = [];
  const symbols = {
    "open": "({[",
    "close":")}]"
  };

  for(let i = 0; i < input.length; i++) {
    const element = input[i];
    if (symbols.open.includes(element)) {
      stack.push(element);
    } else if (symbols.close.includes(element)) {
      const check = stack.pop();
      if (symbols.open.indexOf(check) !== symbols.close.indexOf(element)) {
        return false;
      }
    }
  }

  if(stack.length === 0) {
    return true;
  }

  return false;
}

const solution = isValid("[{}](){}[{({{}})})");
console.log(solution);
