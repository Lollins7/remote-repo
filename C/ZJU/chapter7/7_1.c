#include<stdio.h>
int main(void)
{
    int get_value;
    scanf("%d", &get_value);
    if (get_value >= 100)
    {
        int medium_value_1 = get_value / 100, medium_value_2 = 0;
        while (medium_value_2 < medium_value_1)
        {
            printf("B");
            medium_value_2++;
        }
        get_value %= 100;
    }
    if (get_value >= 10)
    {
        int medium_value_3 = get_value / 10, medium_value_4 = 0;
        while (medium_value_4 < medium_value_3)
        {
            printf("S");
            medium_value_4++;
        }
        get_value %= 10;
    }
    int medium_value_5 = 0;
    while (medium_value_5 < get_value)
    {
        printf("%d", medium_value_5+1);
        medium_value_5++;
    }
    return 0;
}