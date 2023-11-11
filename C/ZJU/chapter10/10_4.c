#include <stdio.h>
#include <string.h>

char str[103];

int main()
{
    int i, k, n;
    gets(str);
    k = strlen(str);
    scanf("%d", &n);
    if (n % k == 0)
        puts(str);
    else
    {
        for (i = n % k; i < k; i++)
        {
            printf("%c", str[i]);
        }
        for (i = 0; i < n % k; i++)
        {
            printf("%c", str[i]);
        }
        printf("\n");
    }

    return 0;
}