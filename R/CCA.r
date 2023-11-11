sigma <- matrix(c(1, 0.03, 0.24, 0.59, 0.03, 1, 0.06, 0.07, 0.24, 0.06, 1, 0.24, 0.59, 0.07, 0.24, 1), nrow = 4)
s1 <- sigma[1:2, 1:2] # X的协方差矩阵
s2 <- sigma[3:4, 3:4] # Y的协方差矩阵
s12 <- sigma[1:2, 3:4] # X与Y的协方差矩阵
s21 <- sigma[3:4, 1:2] # Y与X的协方差矩阵
m1 <- solve(s1) %*% s12 %*% solve(s2) %*% s21
m2 <- solve(s2) %*% s21 %*% solve(s1) %*% s12
# X协方差矩阵的-1/2次方
neg_sqrt_s1 <- eigen(s1)$vectors %*% sqrt(solve(diag(eigen(s1)$values))) %*% t(eigen(s1)$vectors)
# Y协方差矩阵的-1/2次方
neg_sqrt_s2 <- eigen(s2)$vectors %*% sqrt(solve(diag(eigen(s2)$values))) %*% t(eigen(s2)$vectors)
neg_sqrt_s1 %*% eigen(m1)$vectors[, 1] # 第一对典型相关系数中U的系数
neg_sqrt_s2 %*% eigen(m2)$vectors[, 1] # 第一对典型相关系数中V的系数
# 第一个相关系数
t(eigen(m1)$vectors[, 1]) %*% neg_sqrt_s1 %*% s12 %*% t(t(eigen(m2)$vectors[, 1]) %*% neg_sqrt_s2)
