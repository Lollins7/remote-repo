#include <stdio.h>
int main(void)
{
    int n;
    scanf("%d", &n);
    int cyclic_number_1 = n;
    int min_number = 1;
    while (cyclic_number_1 > 1)
    {
        min_number *= 10;
        cyclic_number_1--;
    }
    int i = min_number;
    while (i < min_number * 10)
    {
        int medium_number_1 = i;
        int sum_number = 0;
        int cyclic_number_2 = n;
        while (cyclic_number_2 > 0)
        {
            int c = 1;
            int cyclic_number_3 = n;
            int medium_number_2 = medium_number_1 % 10;
            while (cyclic_number_3 > 0)
            {
                c *= medium_number_2;
                cyclic_number_3--;
            }
            sum_number += c;
            medium_number_1 /= 10;
            cyclic_number_2--;
        }
        if (sum_number == i)
        {
            printf("%d\n", i);
        }
        i++;
    }
    return 0;
}