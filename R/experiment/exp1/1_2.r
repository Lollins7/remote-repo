A <- matrix(c(0, 2, -3, 2, -1, 3, 1, 3, -4), nrow = 3)
B <- matrix(c(1, 2, 2, -3, 3, 1), nrow = 2)
t(solve(t(A), t(B)))
