#include <stdio.h>

int main()
{
    char c;
    c = getchar();
    while (c != '#')
    {
        if (c >= 'a' && c <= 'z')
        {
            c -= 32;
        }
        else if (c >= 'A' && c <= 'Z')
        {
            c += 32;
        }
        printf("%c", c);
        c = getchar();
    }

    return 0;
}