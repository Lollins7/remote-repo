#include <stdio.h>
int main(void)
{
    int decimalism, hex;
    scanf("%d", &decimalism);
    hex = (decimalism / 16) * 10 + decimalism % 16;
    printf("%d\n", hex);

    return 0;
}