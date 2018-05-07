/**
 * 网址    https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 * 思路:因为是球无重复字符串的最长字串，可以新建一个空字符串储存，然后遍历，将每一个字符最为开头的字符，然后继续遍历后续的东西，知道发现重复数字为之。
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = []
  let max = 0
  if (s.length === 0) {
    return null
  } else {
    for (let i = 0, len = s.length; i < len; i++) {
      let str = ''
      str += s[i]
      max = str.length > max ? str.length : max
      for (let j = i + 1, len = s.length; j < len; j++) {
        if (str.indexOf(s[j]) < 0) {
          str += s[j]
          max = str.length > max ? str.length : max
        } else {
          break
        }
      }
    }
    return max
  }
};
lengthOfLongestSubstring("abcdbax")
