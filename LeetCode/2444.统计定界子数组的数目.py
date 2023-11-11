#
# @lc app=leetcode.cn id=2444 lang=python3
#
# [2444] 统计定界子数组的数目
#

# @lc code=start
class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        l, max_i, min_i, ret = -1, -1, -1, 0
        for i in range(len(nums)):
            if nums[i] > maxK or nums[i] < minK:
                l = i
            if nums[i] == maxK:
                max_i = i
            if nums[i] == minK:
                min_i = i
            ret += max(0, min(min_i, max_i) - l)
        return ret

# @lc code=end
