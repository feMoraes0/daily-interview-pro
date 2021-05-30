function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedListFromArray(array) {
  const linkedList = createNode(array.shift());
  let listNode = linkedList;
  array.forEach((element) => {
    listNode.next = createNode(element);
    listNode = listNode.next;
  });
  return linkedList;
}

function reverseListIteratively(list) {
  let result = null;
  while(list != null) {
    let current = createNode(list.value);
    if(result != null) {
      current.next = result;
    }
    result = current;
    list = list.next;
  }
  return result;
}

function reverseListRecursively(list, result = null) {
  if(list == null) {
    return result;
  }
  let current = createNode(list.value);
  if(result != null) {
    current.next = result;
  }
  return reverseListRecursively(list.next, current);
}

const solutionIterative = reverseListIteratively(createLinkedListFromArray([5, 6, 7, 4, 3, 2, 1]));
console.log(solutionIterative);

const solutionRecursive = reverseListRecursively(createLinkedListFromArray([5, 6, 7, 4, 3, 2, 1]));
console.log(solutionRecursive);
