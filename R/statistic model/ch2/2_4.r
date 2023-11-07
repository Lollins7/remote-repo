h <- matrix(c(1:25), nrow = 5)
for (i in 1:5) {
    for (j in 1:5) {
        h[i, j] <- 1 / (i + j - 1)
    }
}
# (1)
det(h)
# (2)
solve(h)
# (3)
e <- eigen(h)
e$values
e$vectors
