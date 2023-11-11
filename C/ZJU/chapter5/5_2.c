#include <stdio.h>
int main(void)
{
    int get_value;
    scanf("%d", &get_value);
    if (get_value < 0)
    {
        printf("fu ");
        get_value = -get_value;
    }
    int digit = 1, medium_value_1 = get_value;
    while (medium_value_1 > 9)
    {
        medium_value_1 /= 10;
        digit *= 10;
    }
    while (digit >= 1)
    {
        int medium_value_2 = get_value / digit;
        switch (medium_value_2)
        {
        case 0:
            printf("ling");
            break;
        case 1:
            printf("yi");
            break;
        case 2:
            printf("er");
            break;
        case 3:
            printf("san");
            break;
        case 4:
            printf("si");
            break;
        case 5:
            printf("wu");
            break;
        case 6:
            printf("liu");
            break;
        case 7:
            printf("qi");
            break;
        case 8:
            printf("ba");
            break;
        case 9:
            printf("jiu");
            break;
        }
        if (digit >= 1)
        {
            get_value %= digit;
            digit /= 10;
            printf(" ");
        }
    }
    printf("\n");
    return 0;
}