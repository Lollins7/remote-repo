#include<stdio.h>
int main(void)
{
    int start_number, end_number, sum_number = 0, count_number = 0;
    scanf("%d %d", &start_number, &end_number);
    for (start_number; start_number <= end_number; start_number++)
    {
        int symbol_number = 1;
        for (int medium_number = 2; medium_number < start_number; medium_number++)
        {
            if (start_number % medium_number == 0)
            {
                symbol_number = 0;
            }
        }
        if (symbol_number == 1)
        {
            count_number++;
            sum_number += start_number;
        }
    }
    printf("%d %d",count_number, sum_number);
    return 0;
}