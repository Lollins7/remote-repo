#
# @lc app=leetcode.cn id=58 lang=python3
#
# [58] 最后一个单词的长度
#

# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.strip()
        num = 0
        s_len = len(s)
        for i in range(s_len):
            if (s[s_len - i - 1] != ' '):
                num += 1
            else:
                break
        return num


# @lc code=end
