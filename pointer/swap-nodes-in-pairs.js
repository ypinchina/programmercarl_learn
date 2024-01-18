// 24. 两两交换链表中的节点

// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
// 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

// https://leetcode.cn/problems/swap-nodes-in-pairs/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let cur = dummyHead;
  while (cur.next !== null && cur.next.next !== null) {
    let temp = cur.next;
    let temp1 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp;
    temp.next = temp1;
    cur = temp;
  }
  return dummyHead.next;
};
