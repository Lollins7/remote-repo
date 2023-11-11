x <- read.table("data//3_1.txt")
x <- as.numeric(unlist(x))

shapiro.test(x)
ks.test(x, "pnorm")
