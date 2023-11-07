#include <stdio.h>
int main(void)
{
    int max_value = 104729, start_value, end_value;
    int count_value = 0, n = 0;
    scanf("%d %d", &start_value, &end_value);
    for (int i = 2; i <= max_value; i++)
    {
        int flag = 0;
        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        {
            count_value++;
            if (count_value == end_value)
            {
                printf("%d", i);
                break;
            }
            else if (count_value >= start_value)
            {
                printf("%d", i);
                n++;
                if (n % 10 == 0)
                {
                    printf("\n");
                }
                else
                {
                    printf(" ");
                }
            }
        }
    }
    return 0;
}