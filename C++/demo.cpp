#include <iostream>
#define sum(x, y) (x + y)
#define square(x) ((x) * (x))

int main()
{
    std::cout << sum(1, 2) << ' ' << 2 * sum(3, 5) << std::endl; // 输出 3 16
}
