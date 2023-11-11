#include <stdio.h>
int main(void)
{
    int n, a, i;
    printf("Please␣enter␣a␣positive␣integer :\n");
    scanf("%d", &n);
    printf("Reverse:");
    for (i = 1;;)
    {
        a = n % 10;
        printf("%d", a);
        n /= 10;
        if (n == 0)
            break;
        i++;
    }
    printf("\n");
    printf("Figure :%d\n", i);
    return 0;
}