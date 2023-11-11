#include <stdio.h>

int main(int argc, char const *argv[])
{
    int cows, columns, flag = 0;
    scanf("%d %d", &cows, &columns);
    int matrix[cows][columns];
    for (int i = 0; i < cows; i++)
    {
        for (int j = 0; j < columns; j++)
        {
            scanf("%d", &matrix[i][j]);
        }
    }
    for (int i = 1; i < cows - 1; i++)
    {
        for (int j = 1; j < columns - 1; j++)
        {
            if (matrix[i][j] > matrix [i - 1][j] && matrix[i][j] > matrix [i + 1][j]
            && matrix[i][j] > matrix [i][j - 1] && matrix[i][j] > matrix[i][j + 1])
            {
                printf("%d %d %d\n", matrix[i][j], i + 1, j + 1);
                flag = 1;
            }
        }
    }
    if (flag == 0)
    {
        printf("None %d %d", cows, columns);
    }

    return 0;
}