#include <string.h>
#include <stdio.h>

char str[180];

int main()
{
    char ch;
    int i, k, p = 0;
    gets(str);
    k = strlen(str);
    scanf("%c", &ch);
    for (i = 0; i < k; i++)
    {
        if (str[i] == ch)
        {
            p = 1;
        }
        if (p)
        {
            printf("%c", str[i]);
        }
    }
    if (!p)
    {
        printf("Not found\n");
    }
    else
    {
        printf("\n");
    }

    return 0;
}