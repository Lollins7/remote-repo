#
# @lc app=leetcode.cn id=125 lang=python3
#
# [125] 验证回文串
#

# @lc code=start
class Solution:
    def isPalindrome(self, s: str) -> bool:
        string = ""
        for i in s.upper():
            if (ord('A') <= ord(i) <= ord('Z')) or ('0' <= i <= '9'):
                string += i
        if string == "":
            return True
        for j in range((len(string) // 2)):
            if string[j] != string[len(string) - 1 - j]:
                break
        else:
            return True
        return False
# @lc code=end
