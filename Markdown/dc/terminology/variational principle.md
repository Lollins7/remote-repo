## **变分大法**（variational principle）

假设我们有两个定点$(a,p)$和$(b,q)$，连接这两点的任意曲线方程$y=y(x)$都将满足如下的边界条件：
$$
y(a) = p,\quad y(b) = q
$$
现在考虑如下形式的定积分：
$$
I = \int_a^b f(y,y')dx
$$
其中$f(y,y')$是关于$y(x)$和其一阶导数$y'(x)$的函数，我们期望找到一个具体的$y(x)$，使得$I$的极值（极大或极小）。

![img](https://pic3.zhimg.com/v2-56c44e21aef59e4e4519899a6663ae82_r.jpg)

如果$y(x)$有微小的改变$\delta y(x)$（高大上叫法：$\delta y(x)$称为函数$y(x)$的**变分**），那么$f(y,y')$的变化为：
$$
\delta f = \frac{\part f}{\part y}\delta y + \frac{\part f}{\part y'}\delta y'
$$
 $I$相应的变化为：
$$
\delta I=\int_a^b \left[\frac{\partial f}{\partial y}\delta y+\frac{\partial f}{\partial y'}\delta y'\right]\mathrm{d}x
$$
由于$y(x)$的边界条件固定，$\delta y(a) = \delta y(b)=0$（因为从点$(a,p)$到$(b,q)$的轨迹有多种，$y(x)$是一个函数族，可以理解为$Y(x) = y(x) + \delta \eta(x)$，$Y(x)$和$y(x)$起始点和终点位置相同，故端点的变化率为$0$），对上式稍作化简，得：
$$
\delta I=\int_a^b\left[\frac{\partial f}{\partial y}-\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\partial f} { \partial y'}\right)\right]\delta y(x)\mathrm{d}x
$$
如果$I$有极值，对任意满足边界条件的$\delta y(x)$都必须有$\delta I = 0$，这就要求
$$
\boxed{\frac{\partial f}{\partial y}-\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\partial f}{\partial y^{\prime}}\right)=0}
$$
这便是传说中的 **Euler-Lagrange 方程**，它是变分法的核心定理。有了此等大杀器，原则上就可以找出所寻求的极值函数 $y(x)$。

本文主要参考了[浅谈变分原理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/139018146)，文中给出了方法背景与详细例题。