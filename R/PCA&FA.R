# PCA
rm(list = ls())
library(psych)
# d <- read.csv("D:\\VScode\\Workplace\\R\\c6_1.csv", header = T)
d <- read.table("demo.txt")
nms <- d[["Local"]]
d <- d[, -1]
d[is.na(d)] <- 0
d <- data.frame(d)
options(digits = 2)
d <- scale(x = d)
fa.parallel(d, fa = "pc")

p <- principal(d, nfactors = 2, rotate = "none")
p$loadings[, 1]
T1_nonstand <- p$loadings[, 1]
T1 <- T1_nonstand / sqrt(as.numeric(t(T1_nonstand) %*% T1_nonstand))
T1_nonstand / sqrt(p$values[1])

p$scores
as.matrix(t(p$loadings[, 1:2])) %*% solve(cor(d)) %*% d[1, ]

p1 <- princomp(d, cor = TRUE)
summary(p1, loadings = TRUE)

fun.PCA <- function(S, k) {
  p <- nrow(S)
  rowname <- paste("X", 1:p, sep = "")
  colname <- paste("PrinComp", 1:k, sep = "")
  T_trans <- matrix(0, nrow = p, ncol = k, dimnames = list(rowname, colname))
  eig <- eigen(S)
  for (i in 1:k) T_trans[, i] <- eig$vectors[, i]
  Factor.Loading <- matrix(0, nrow = k, ncol = p, dimnames = list(colname, rowname))
  for (i in 1:k) {
    for (j in 1:p) {
      Factor.Loading[i, j] <- sqrt(eig$values[i]) * eig$vectors[j, i] / sqrt(S[j, j])
    }
  }
  rowname <- c("Standard Deviation", "Proportion of Variance", "Cumulative Proportion")
  B <- matrix(0, nrow = 3, ncol = k, dimnames = list(rowname, colname))
  for (i in 1:k) {
    B[1, i] <- sqrt(eig$values[i])
    B[2, i] <- B[1, i]^2 / sum(eig$values)
    B[3, i] <- sum(B[1, 1:i]^2) / sum(eig$values)
  }
  method <- c("Principal Component Analysis")
  list(
    method = method, loadings = T_trans,
    Factor.Loading = Factor.Loading, B = B
  )
}

PCA.fit <- fun.PCA(cor(d), k = 2)
PCA.fit

# Factor Analysis
fa.pcm <- function(S, k) {
  p <- nrow(S)
  diag_S <- diag(S)
  sum_rank <- sum(diag_S)
  rowname <- rownames(S)
  colname <- paste("Factor", 1:k, sep = "")
  A <- matrix(0, nrow = p, ncol = k, dimnames = list(rowname, colname))
  eig <- eigen(S)
  for (i in 1:k) {
    A[, i] <- sqrt(eig$values[i]) * eig$vectors[, i]
  }
  h <- diag(A %*% t(A))
  rowname <- c("SS loadings", "Proportion Var", "Cumulative Var")
  B <- matrix(0, nrow = 3, ncol = k, dimnames = list(rowname, colname))
  for (i in 1:k) {
    B[1, i] <- sum(A[, i]^2)
    B[2, i] <- B[1, i] / sum_rank
    B[3, i] <- sum(B[1, 1:i]) / sum_rank
  }
  A <- round(A, 3)
  B <- round(B, 3)
  h <- round(h, 3)
  diag_S <- round(diag_S, 3)
  method <- c("Principal Component Method")
  list(
    method = method, loadings = A,
    var = cbind(common = h, spcific = diag_S - h), B = B
  )
}
fa.pcm.fit <- fa.pcm(cor(d), k = 2)
fa.pcm.fit

vm.ipfm <- varimax(fa.pcm.fit$loadings, normalize = F) #### (方差最大化旋转)
vm.ipfm
