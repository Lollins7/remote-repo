#include <stdio.h>
int main(void)
{
    int get_value, count_1, medium_value, sum_value = 0, count_2 = 1;
    scanf("%d %d", &get_value, &count_1);
    medium_value = get_value;
    for (int i = 1; i <= count_1; i++)
    {
        sum_value += get_value;
        count_2 *= 10;
        get_value += count_2 * medium_value;
    }
    printf("%d\n", sum_value);
    return 0;
}