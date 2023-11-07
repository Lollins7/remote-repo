#
# @lc app=leetcode.cn id=504 lang=python3
#
# [504] 七进制数
#

# @lc code=start
class Solution:
    def convertToBase7(self, num: int) -> str:
        if num == 0:
            return '0'
        divior = 0
        mid = 0
        s = ''
        if num < 0:
            s += '-'
            num = -num
        while(num != 0):
            divior += 1
            mid = num % 7**(divior)
            num -= mid
            s += str(int(mid/(7**(divior-1))))
        if s[0] == '-':
            return ('-' + s[:0:-1])
        else:
            return s[::-1]
        # @lc code=end
