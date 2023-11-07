#
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] 加一
#

# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        num = 0
        for i in range(len(digits)):
            num += (digits[len(digits) - 1 - i] * (10 ** i))
        num += 1
        ls = []
        num = str(num)
        for i in range(len(num)):
            ls.append(int(num[i]))
        return ls


# @lc code=end
