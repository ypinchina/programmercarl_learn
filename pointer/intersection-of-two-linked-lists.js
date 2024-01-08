// 相交链表
// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA,
    pB = headB;
  let lenA = 0,
    lenB = 0;
  while (pA) {
    lenA++;
    pA = pA.next;
  }
  while (pB) {
    lenB++;
    pB = pB.next;
  }
  pA = headA;
  pB = headB;
  if (lenA > lenB) {
    let count = lenA - lenB;
    while (count > 0) {
      pA = pA.next;
      count--;
    }
  } else if (lenB > lenA) {
    let count = lenB - lenA;
    while (count > 0) {
      pB = pB.next;
      count--;
    }
  }
  while (pB) {
    if (pA === pB) {
      return pA;
    }
    pA = pA.next;
    pB = pB.next;
  }
  return null;
};
