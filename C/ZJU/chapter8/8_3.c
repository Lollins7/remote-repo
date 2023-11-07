#include <stdio.h>

int main(int argc, char const *argv[])
{
    int stored_array[10], i, min_value;
    for (i = 0; i < 10; i++)
    {
        scanf("%d", &stored_array[i]);
    }
    if (stored_array[0] == 0)
    {
        for (i = 1; i < 10; i++)
        {
            while (stored_array[i]--)
            {
                printf("%d", i);
            }
        }
    }
    else
    {
        for (i = 1; i < 10; i++)
        {
            if (stored_array[i] > 0)
            {
                printf("%d", i);
                stored_array[i]--;
                break;
            }
        }
    }
    for (i = 0; i < 10; i++)
    {
        while (stored_array[i]--)
        {
            printf("%d", i);
        }
    }
    return 0;
}

// 看错题目，写成了冒泡排序
// int main(int argc, char const *argv[])
// {
//     int stored_array[10], i, j, medium_value;
//     int output_value = 9, desert_index;
//     for (i = 0; i < 10; i++)
//     {
//         scanf("%d", &stored_array[i]);
//     }
//     for (i = 0; i < 10; i++)
//     {
//         if (output_value > stored_array[i] && stored_array[i] != 0)
//         {
//             output_value = stored_array[i];
//             desert_index = i;
//         }
//     }
//     stored_array[desert_index] = 10;
//     for (i = 0; i < 10 - 1; i++)
//     {
//         for (j = 0; j < 10 - 1 - i; j++)
//         {
//             if (stored_array[j] > stored_array[j + 1])
//             {
//                 medium_value = stored_array[j + 1];
//                 stored_array[j + 1] = stored_array[j];
//                 stored_array[j] = medium_value;
//             }
//         }
//     }
//     for (i = 0; i < 9; i++)
//     {
//         output_value = output_value * 10 + stored_array[i];
//     }
//     printf("%d", output_value);

//     return 0;
// }