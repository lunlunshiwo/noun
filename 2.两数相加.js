/**
 * 网址    https://leetcode-cn.com/problems/two-sum/description/
 * 思路:这个题目是将两个数组反转，转化为数字，相加在反转，无难度
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum=Number(l1.reverse().join(''))+Number(l2.reverse().join(''))
  return sum.toString().split('').reverse()
};
addTwoNumbers([2,4,3],[5,6,4])
