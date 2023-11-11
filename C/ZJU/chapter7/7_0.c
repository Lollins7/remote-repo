#include <stdio.h>
#include <string.h>

const char *num[] = {"ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"};

int main()
{
    char ch, number[10];
    int s = 0, i;
    while ((ch = getchar()) != '\n')
    {
        s += ch - '0';
    }
    sprintf(number, "%d", s);
    printf("%s", num[number[0] - '0']);
    for (i = 1; i < strlen(number); i++)
    {
        printf(" %s", num[number[i] - '0']);
    }
    printf("\n");

    return 0;
}