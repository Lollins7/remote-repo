#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ls = []
        max_s = 0
        for i in s:
            if i not in ls:
                ls.append(i)
            else:
                if (len(ls) > max_s):
                    max_s = len(ls)
                ls = ls[ls.index(i)+1:]
                ls.append(i)
        return max(max_s, len(ls))


# @lc code=end

