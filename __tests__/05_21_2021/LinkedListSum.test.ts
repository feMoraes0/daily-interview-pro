import { LinkedListSum } from '../../src/05_21_2021/LinkedListSum';
import { createLinkedListFromArray, convertListToNumber } from './TestHelpers';

describe('Linked List Sum', () => {
  const sut = new LinkedListSum();

  it('Given 2->4->3 (342) and 5->6->4 (465), then should return 7->0->8 (807) as answer', () => {
    const linkedListA = createLinkedListFromArray([2, 4, 3]);
    const linkedListB = createLinkedListFromArray([5, 6, 4]);
    const response = sut.solve(linkedListA, linkedListB);
    expect(convertListToNumber(response)).toBe(807);
  });

  it('Given 8->4->3 (348) and 3->4->2 (243), then should return 1->9->5 (591) as answer', () => {
    const linkedListA = createLinkedListFromArray([8, 4, 3]);
    const linkedListB = createLinkedListFromArray([3, 4, 2]);
    const response = sut.solve(linkedListA, linkedListB);
    expect(convertListToNumber(response)).toBe(591);
  });

  it('Given 8->4->3 (348) and 2->5->3 (352), then should return 0->0->7 (700) as answer', () => {
    const linkedListA = createLinkedListFromArray([8, 4, 3]);
    const linkedListB = createLinkedListFromArray([2, 5, 3]);
    const response = sut.solve(linkedListA, linkedListB);
    expect(convertListToNumber(response)).toBe(700);
  });

  it('Given 3->6->5 (563) and 7->2->6 (627), then should return 0->9->1->1 (1190) as answer', () => {
    const linkedListA = createLinkedListFromArray([3, 6, 5]);
    const linkedListB = createLinkedListFromArray([7, 6, 2]);
    const response = sut.solve(linkedListA, linkedListB);
    expect(convertListToNumber(response)).toBe(1190);
  });

  it('Given 1->2->3 and 1->2->3, then should return 2->4->6 (642) as answer', () => {
    const linkedListA = createLinkedListFromArray([1, 2, 3]);
    const linkedListB = createLinkedListFromArray([1, 2, 3]);
    const response = sut.solve(linkedListA, linkedListB);
    expect(convertListToNumber(response)).toBe(642);
  });
});
