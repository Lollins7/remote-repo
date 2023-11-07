#include<stdio.h>
int main(void)
{
    int read_number,hundreds_digits,tens_digits,single_digits;

    scanf("%d",&read_number);
    hundreds_digits = read_number / 100;
    tens_digits = (read_number - hundreds_digits * 100) / 10;
    single_digits = (read_number - hundreds_digits * 100 - tens_digits * 10);

    printf("%d",single_digits * 100 + tens_digits * 10 + hundreds_digits);

    return 0;
}