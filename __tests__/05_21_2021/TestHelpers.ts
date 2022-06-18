import { Node } from '../../src/05_21_2021/types';

function createNode(value: number): Node {
  return {
    value,
    next: null,
  }
}

export function createLinkedListFromArray(array: Array<number>): Node {
  const root = createNode(array.shift() as number);
  let node = root;

  array.forEach((element) => {
    node.next = createNode(element);
    node = node.next;
  });

  return root;
}

export function convertListToNumber(root: Node): number {
  let response = 0;
  let multiplier = 1;
  let node = root;

  while(node.next) {
    response += node.value * multiplier;
    multiplier *= 10
    node = node.next;
  }

  return response;
}
