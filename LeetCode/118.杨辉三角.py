#
# @lc app=leetcode.cn id=118 lang=python3
#
# [118] 杨辉三角
#

# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 1:
            return [[1]]
        ls = [[1, 1] for i in range(numRows)]
        ls[0] = [1]
        for i in range(numRows-2):
            for j in range(i + 1):
                ls[i + 2].insert(-1, ls[i + 1][j] + ls[i + 1][j + 1])
        return ls
        # @lc code=end
