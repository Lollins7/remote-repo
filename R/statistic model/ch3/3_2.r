# 直方图，密度估计曲线，经验分布图，QQ图

x <- read.table("data//3_1.txt")
x <- as.numeric(unlist(x))

hist(x, freq = FALSE, col = "#1148c9c0")
lines(density(x), col = "red")

plot(ecdf(x), verticals = TRUE, do.p = FALSE)


qqnorm(x)
qqline(x)
