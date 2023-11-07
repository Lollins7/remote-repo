#
# @lc app=leetcode.cn id=1936 lang=python3
#
# [1936] 新增的最少台阶数
#

# @lc code=start
class Solution:
    def addRungs(self, rungs: List[int], dist: int) -> int:
        num = 0
        rungs_len = len(rungs)
        rungs.insert(0, 0)
        for i in range(rungs_len):
            if (rungs[i + 1] - rungs[i] > dist):
                num += ((rungs[i + 1] - rungs[i]) // dist)
                if ((rungs[i + 1] - rungs[i]) % dist) == 0:
                    num -= 1
        return num
# @lc code=end
