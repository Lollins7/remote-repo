#include <stdio.h>

int main(int argc, char const *argv[])
{
    int count_value, i, max = 0, medium_value;
    scanf("%d", &count_value);
    int stored_array[count_value], count_array[10];
    for (i = 0; i < 10; i++)
    {
        count_array[i] = 0;
    }
    for (i = 0; i < count_value; i++)
    {
        scanf("%d", &stored_array[i]);
        while (stored_array[i])
        {
            medium_value = stored_array[i] % 10;
            count_array[medium_value]++;
            stored_array[i] /= 10;
        }
    }
    for (i = 0; i <10; i++)
    {
        if (max < count_array[i])
        {
            max = count_array[i];
        }
    }
    printf("%d:", max);
    for (i = 0; i <10; i++)
    {
        if (count_array[i] == max)
        {
            printf(" %d", i);
        }
    }
    printf("\n");
    return 0;
}