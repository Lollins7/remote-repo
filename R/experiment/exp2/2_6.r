df <- data.frame(
    "序号" = c(1, 2, 3, 4, 5), "姓名" = c("张三", "李四", "王五", "赵六", "丁一"),
    "性别" = c("女", "男", "女", "男", "女"), "年龄" = c(14, 15, 16, 14, 16),
    "身高(cm)" = c(156, 165, 157, 162, 159), "体重(kg)" = c(42.0, 49.0, 41.5, 52.0, 45.5)
)
write.table(df, file = "data//2_5.txt")
df <- read.table("data//2_5.txt", head = T)
df <- as.data.frame(df)
write.csv(df, file = "data//2_5.csv", row.names = FALSE)
