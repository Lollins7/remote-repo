#
# @lc app=leetcode.cn id=119 lang=python3
#
# [119] 杨辉三角 II
#

# @lc code=start
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0:
            return [1]
        ls = [[1]]
        n = 0
        while n < rowIndex:
            new = [a + b for a, b in zip([0] + ls[n], ls[n] + [0])]
            ls.append(new)
            n += 1
        return ls[n]

# @lc code=end
