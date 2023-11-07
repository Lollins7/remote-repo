#include<stdio.h>
int main(void)
{
    int foot,inch,centimeter;
    double foot_and_inch;

    scanf("%d",&centimeter);

    foot_and_inch = centimeter / 30.48;
    foot = foot_and_inch;
    inch = (foot_and_inch - foot) * 12;

    printf("%d %d",foot,inch);

    return 0;
}