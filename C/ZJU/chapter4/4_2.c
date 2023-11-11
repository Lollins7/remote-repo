#include<stdio.h>
int main(void)
{
    int get_number;
    scanf("%d", &get_number);
    for (int cyclic_number_1 = 1; cyclic_number_1 <= get_number; cyclic_number_1++)
    {
        for (int cyclic_number_2 = 1; cyclic_number_2 <= cyclic_number_1; cyclic_number_2++)
        {
            printf("%d * %d = %-4d", cyclic_number_2, cyclic_number_1,cyclic_number_1 * cyclic_number_2);
        }
        printf("\n");
    }
    return 0;
}