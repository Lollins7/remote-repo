#include <stdio.h>
#include <string.h>

int main()
{
    char str[81];
    int k;
    gets(str);
    k = strlen(str);
    k -= 1;
    for (k; k >= 0; k--)
    {
        printf("%c", str[k]);
    }
    printf("\n");

    return 0;
}