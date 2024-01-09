// 回到梦开始的地方 两数之和
// https://leetcode.cn/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      result = [i, map.get(diff)];
    } else {
      map.set(nums[i], i);
    }
  }
  return result;
};
