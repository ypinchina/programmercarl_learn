// https://leetcode.cn/problems/minimum-size-subarray-sum/
// 209. 长度最小的子数组
// 中等
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
// 如果不存在符合条件的子数组，返回 0 。
// 解法一 暴力解法 回超时 O(n^2)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let result = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        const len = j - i + 1;
        result = Math.min(len, result);
        break;
      }
    }
  }
  return result === Number.MAX_VALUE ? 0 : result;
};
