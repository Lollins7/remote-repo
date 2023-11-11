/*
 * @lc app=leetcode.cn id=2591 lang=c
 *
 * [2591] 将钱分给最多的儿童
 */

// @lc code=start
int distMoney(int money, int children)
{
    if (children > money)
        return -1;
    if (children == money)
        return 0;
    int res_money = money - children;
    int nums = res_money / 7;
    if ((nums == children) && (res_money % 7 == 0))
        return children;
    if (nums >= children)
        return children - 1;
    if ((money - nums * 8 == 4) && (children - nums == 1))
    {
        return nums - 1;
    }
    else
    {
        return nums;
    }
}
// @lc code=end
