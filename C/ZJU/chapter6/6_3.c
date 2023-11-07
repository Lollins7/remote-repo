#include <stdio.h>

int main()
{
    char s[100];
    int i = 0;
    do
    {
        scanf("%c", &s[i]);
        i++;
    } while (s[i - 1] != '.');
    int j;
    int cnt = 0;
    int k = 0;
    for (j = 0; j < i; j++)
    {
        if (s[j] != ' ')
        {
            cnt++;
            if (k != 0 && s[j] != '.')
            {
                printf(" ");
                k = 0;
            }
            if (s[j] == '.' && s[j - 1] != ' ' && cnt != 1)
            {
                printf("%d", cnt - 1);
            }
        }
        else if (cnt != 0)
        {
            printf("%d", cnt);
            cnt = 0;
            k = 1;
        }
    }

    return 0;
}