#include <stdio.h>

int main(void)
{
    float f1, f2;
    char ch;
    int i;
    scanf("%f %d %c %f", &f1, &i, &ch, &f2);
    printf("%c %d %.2f %.2f", ch, i, f1, f2);

    return 0;
}