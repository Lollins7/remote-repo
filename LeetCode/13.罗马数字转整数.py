#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] 罗马数字转整数
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        ls = ['I', 'V', 'X', 'L', 'C', 'D', "M"]
        dict = {}
        num = 0
        dict['I'] = 1
        dict['V'] = 5
        dict['X'] = 10
        dict['L'] = 50
        dict['C'] = 100
        dict['D'] = 500
        dict['M'] = 1000
        s += "I"
        s_ls = list(s)
        s_len = len(s)
        for i in range(s_len-1):
            if (ls.index(s_ls[i]) < ls.index(s_ls[i + 1])):
                num -= dict[s_ls[i]]
            else:
                num += dict[s_ls[i]]
        return num
# @lc code=end

