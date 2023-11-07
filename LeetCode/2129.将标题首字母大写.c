/*
 * @lc app=leetcode.cn id=2129 lang=c
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start

char *capitalizeTitle(char *title)
{
    int len = strlen(title);
    int j = 0;
    for (int i = 0; i < len; i++)
    {
        if (title[i + j] = '\0')
        {
            return title;
        }
        else if (title[i + j] = ' ')
        {
            j += 1;
            title[i + j] = toupper(title);
        }
        else
        {
            title[i + j] = tolower(title);
        }
    }
    return title;
}
// @lc code=end
