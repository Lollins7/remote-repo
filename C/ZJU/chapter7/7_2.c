#include <stdio.h>

int main()
{
    int t, i;
    long a, j, k;
    scanf("%d", &t);
    if (t >= 1 && t <= 10)
    {
        for (i = 1; i <= t; ++i)
        {
            scanf("%ld %ld %ld", &a, &j, &k);
            if (a + j > k)
            {
                printf("Case #%d: true\n", i);
            }
            else
            {
                printf("Case #%d: false\n", i);
            }
        }
    }

    return 0;
}