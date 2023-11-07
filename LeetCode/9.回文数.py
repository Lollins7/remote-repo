#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] 回文数
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        length = len(x)
        for i in range(length//2):
            if (x[i] != x[length - i -1]):
                return False
        else:
            return True
# @lc code=end

