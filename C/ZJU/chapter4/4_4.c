#include <stdio.h>

int main(void)
{
    int n, times;
    int i, t = 0;
    scanf("%d %d", &n, &times);
    while (1)
    {
        scanf("%d", &i);
        ++t;
        if (i == n && t == 1)
        {
            printf("Bingo!\n");
            break;
        }
        else if (i < 0 || t > times)
        {
            printf("Game Over");
            break;
        }
        else if (i == n && t > 1 && t <= 3 && t <= times)
        {
            printf("Lucky You!\n");
            break;
        }
        else if (i > n)
        {
            printf("Too big\n");
        }
        else if (i < n && i > 0)
        {
            printf("Too small\n");
        }
        else if (i == n && t > 3 && t <= times)
        {
            printf("Good Guess!\n");
            break;
        }
    }
    return 0;
}