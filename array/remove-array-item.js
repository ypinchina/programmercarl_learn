// leetcode 27 移除元素  https://leetcode.cn/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let ans = 0
  for (let i of nums) {
      if (i !== val) {
          nums[ans] = i
          ans++
      }
  }
  return ans
};

// 空间复杂度O(1)，时间复杂度O(n)

// 双指针的另一种写法
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0, j = 0 
  // 双指针
  for (i; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[j] = nums[i]
          j++
      }
  }
  return j
};