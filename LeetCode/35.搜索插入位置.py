#
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] 搜索插入位置
#

# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if nums[-1] < target:
            return len(nums)
        if nums[0] > target:
            return 0
        left, right = 0, len(nums) - 1
        while (left <= right):
            mid = (left + right) // 2
            if (nums[mid] > target):
                right = mid - 1
            elif (nums[mid] < target):
                left = mid + 1
            else:
                return mid
        return left

# @lc code=end
