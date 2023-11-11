#include<stdio.h>
int main(void)
{
    int denominator, numerator;
    scanf("%d/%d", &numerator, &denominator);
    for (int i = numerator; i > 1; i--)
    {
        if (denominator % i == 0 && numerator % i == 0)
        {
            denominator /= i;
            numerator /= i;
        }
    }
    printf("%d/%d", numerator, denominator);
    return 0;
}