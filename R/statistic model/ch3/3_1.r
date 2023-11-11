# 均值、方差、标准差、极差、标准误、变异系数、偏度、峰度

x <- read.table("data//3_1.txt")
x <- as.numeric(unlist(x))
n <- length(x)
m <- mean(x)
v <- var(x)
R <- max(x) - min(x)
s <- sd(x)
sm <- s / sqrt(n)
g1 <- (n * sum((x - m)^3)) / ((n - 1) * (n - 2) * s^3)
g2 <- (n * (n + 1) * sum((x - m)^4)) / ((n - 1) * (n - 2) * (n - 3) * s^4)
