// https://leetcode.cn/problems/remove-linked-list-elements/description/
// 203. 移除链表元素
// 简单
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，
// 并返回 新的头节点 。

// 方法一： 直接解法

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let p = head;
  while (p && p.val === val) {
    head = p.next;
    p = head;
  }
  while (p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};

// 方法二 增加虚拟的头节点

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  p = dummyHead;
  while (p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return dummyHead.next;
};
