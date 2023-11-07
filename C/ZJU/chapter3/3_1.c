#include <stdio.h>
int main(void)
{
    int day;
    scanf("%d", &day);
    if (day % 5 <= 3 && day % 5 != 0)
    {
        printf("Fishing in day %d", day);
    }
    else
    {
        printf("Drying in day %d", day);
    }
    return 0;
}