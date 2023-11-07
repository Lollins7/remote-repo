#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        price = prices[0]
        for i in prices[1:]:
            if i < price:
                price = i
            if i - price > profit:
                profit = i - price
        return profit

# @lc code=end
