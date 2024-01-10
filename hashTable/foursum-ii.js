// 四数相加 II
// https://leetcode.cn/problems/4sum-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(-sum)) {
        result += map.get(-sum);
      }
    }
  }
  return result;
};
