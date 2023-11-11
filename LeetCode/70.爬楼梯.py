#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] 爬楼梯
#
# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        def f(n):
            ls = [0 for i in range(n)]
            if n == 1:
                return 1
            elif n == 2:
                return 2
            else:
                ls[0] = 1
                ls[1] = 2
                for i in range(3, n+1):
                    ls[i - 1] = ls[i - 2] + ls[i - 3]
                return ls[-1]
        return f(n)

# @lc code=end
