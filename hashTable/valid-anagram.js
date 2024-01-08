// https://leetcode.cn/problems/valid-anagram/description/
// 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (let i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  for (let j of t) {
    if (map.has(j)) {
      map.set(j, map.get(j) - 1);
    } else {
      return false;
    }
  }
  return !Array.from(map).some((item) => item[1] != 0);
};
