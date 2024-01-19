// https://leetcode.cn/problems/3sum/
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = nums.sort((a,b) => a - b)
    // 使用三指针法  首先要进行排序
    const result = []
    for (let i = 0; i < arr.length; i++) {
        // i 是第一个指针 作固定指针
        if (arr[i] > 0) {
            // 已经排序 第一个固定元素就比0大，说明后面两个之和绝对不可能是负数
            return result
        }
        let left = i + 1, right = arr.length - 1
        // left 是第二个指针 ， right 是三个指针
        if (i > 0 && arr[i] === arr[i - 1]) continue // 第一个指针去重
        while(left < right) {
            if (arr[i] + arr[left] + arr[right] > 0) {
                right-- 
                // 右指针指针前移
            } else if (arr[i] + arr[left] + arr[right] < 0) {
                // 左指针后移
                left ++
            } else {
                while (nums[left] === nums[left + 1]) left ++
                while (nums[right] === nums[right - 1]) right--
                // 左指针和右指针的去重
                result.push([arr[i], arr[left], arr[right]])
                // 将 结果元组加入数组
                left++
                right--
            }
        }
    }
    return result
};
