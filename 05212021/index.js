function createNode(value) {
  return {
    value: value,
    next: null
  };
};

function createLinkedListFromArray(array) {
  const linkedList = createNode(array.shift());
  let listNode = linkedList;
  array.forEach((element) => {
    listNode.next = createNode(element);
    listNode = listNode.next;
  });
  return linkedList;
}

function addTwoLists(list1, list2, carriage = 0) {
  if(!list1 || !list2) {
    if(carriage > 0) {
      return createNode(carriage);
    }
    return null;
  }

  let localCarriage = carriage;
  let localValue = list1.value + list2.value + localCarriage;

  if(localValue > 9) {
    localValue = localValue  - 10;
    localCarriage = 1;
  } else {
    localCarriage = 0;
  }

  const solution = createNode(localValue);
  solution.next = addTwoLists(list1.next, list2.next, localCarriage);

  return solution;
}

const linkedList1 = createLinkedListFromArray([2, 4, 3]);
const linkedList2 = createLinkedListFromArray([5, 6, 4]);

const solution = addTwoLists(linkedList1, linkedList2);

console.log(solution);