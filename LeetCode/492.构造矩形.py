#
# @lc app=leetcode.cn id=492 lang=python3
#
# [492] 构造矩形
#
from math import sqrt
# @lc code=start


class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        ls = []
        for i in range(int(sqrt(area))):
            if area % (i + 1) == 0:
                ls.append([int(area//(i+1)), i+1])
        return ls[-1]
        # @lc code=end
