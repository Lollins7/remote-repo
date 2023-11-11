A <- matrix(c(0, 2, -3, 2, -1, 3, 1, 3, -4), nrow = 3)
eig <- eigen(t(A) %*% A)
eig$values
eig$vectors
