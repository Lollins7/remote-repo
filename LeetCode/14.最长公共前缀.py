#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] 最长公共前缀
#

# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        conpre = strs[0]
        compare = strs[0]
        for str in strs[1:]:
            base = ""
            for i in range(min(len(compare), len(str))):
                if (compare[i] == str[i]):
                    base += str[i]
                else:
                    break
            if (base == ""):
                return base
            elif (len(conpre) > len(base)):
                conpre = base
            base = ""
            compare = str
        return conpre


# @lc code=end
