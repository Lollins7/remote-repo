/*
 * @lc app=leetcode.cn id=2129 lang=cpp
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start
class Solution
{
public:
    string capitalizeTitle(string title)
    {
        int n = title.size();
        int l = 0, r = 0;     // 单词左右边界（左闭右开）
        title.push_back(' '); // 避免处理末尾的边界条件
        while (r < n)
        {
            while (title[r] != ' ')
            {
                ++r;
            }
            // 对于每个单词按要求处理
            if (r - l > 2)
            {
                title[l] = toupper(title[l]);
                ++l;
            }
            while (l < r)
            {
                title[l] = tolower(title[l]);
                ++l;
            }
            l = r + 1;
            ++r;
        }
        title.pop_back();
        return title;
    }
};

// @lc code=end
