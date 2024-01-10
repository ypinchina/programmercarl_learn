// 反转字符串 https://leetcode.cn/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    i++, j--;
  }
  return s;
};
