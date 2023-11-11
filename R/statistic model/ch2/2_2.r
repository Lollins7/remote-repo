A <- matrix(c(1:20), nrow = 4)
B <- matrix(c(1:20), nrow = 4, byrow = TRUE)
# (1)
C <- A + B
# (2)不存在
# (3)
D <- A * B
# (4)
F <- A[1:3, 1:3]
# (5)
G <- B[, c(1, 2, 4, 5)]
