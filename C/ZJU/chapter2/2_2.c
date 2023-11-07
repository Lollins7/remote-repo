#include <stdio.h>

int main(void)
{
    int start_time,end_time,elapsed_time;

    scanf("%d %d",&start_time,&elapsed_time);

	int hour = (start_time  / 100) + (elapsed_time / 60) +
     ((start_time  % 100) + (elapsed_time % 60)) / 60;
	int minute = ((start_time  % 100) + (elapsed_time % 60)) % 60;

	end_time = hour * 100 + minute;

	printf("%d",end_time);
    return 0;
}