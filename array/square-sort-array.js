// 977. 有序数组的平方
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 最暴力解法 时间复杂度O(n^2)

var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};

// 稍微暴力的解法 时间复杂度O(nlogn)

var sortedSquares = function (nums) {
  const result = nums.maps((item) => item * item).sort(a - b);
  return result;
};

// 时间复杂度为O(n)的写法

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let k = nums.length - 1,
    i = 0,
    j = nums.length - 1;
  const arr = new Array(nums.length).fill(0);
  while (i <= j) {
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      arr[k] = nums[j] * nums[j];
      j--;
    } else {
      arr[k] = nums[i] * nums[i];
      i++;
    }
    k--;
  }
  return arr;
};
