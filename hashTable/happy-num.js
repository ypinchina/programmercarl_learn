// https://leetcode.cn/problems/happy-number/
// 快乐数
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = 0
  n += '' // 把数字强制转换为字符串
  const set = new Set()
  while (sum !== 1) {
      sum = 0
      for (let i = 0; i < n.length; i++) {
          sum += n[i] * n[i]
      }
      if (set.has(sum)) return false
      set.add(sum)
      n = sum + ''
  }
  return true
};