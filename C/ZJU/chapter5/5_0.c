#include<stdio.h>
int main(void)
{
    int get_value, medium_value;
    double first_value = 1, second_value = 2, sum_value = 0;
    scanf("%d", &get_value);
    for (int i = 0; i < get_value; i++)
    {
        sum_value += second_value / first_value;
        medium_value = first_value + second_value;
        first_value = second_value;
        second_value = medium_value;
    }
    printf("%.2lf", sum_value);
    return 0;
}