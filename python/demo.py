import matplotlib.pyplot as plt
import matplotlib.patches as patches

# 创建一个新的图形
fig, ax = plt.subplots()

# 定义第一个多连通区域的顶点坐标
vertices1 = [(1, 2), (2, 3), (3, 5), (4, 1), (5, 2)]

# 定义第二个多连通区域的顶点坐标
vertices2 = [(7, 2), (8, 3), (9, 5), (10, 1), (11, 2)]

# 创建第一个多边形路径
polygon1 = patches.Polygon(vertices1, closed=True,
                           edgecolor='b', facecolor='none')

# 创建第二个多边形路径
polygon2 = patches.Polygon(vertices2, closed=True,
                           edgecolor='r', facecolor='none')

# 将多边形添加到图形中
ax.add_patch(polygon1)
ax.add_patch(polygon2)

# 设置坐标轴范围
ax.set_xlim(0, 12)
ax.set_ylim(0, 6)

# 可以添加标题和标签
plt.title("多连通区域示例")
plt.xlabel("X轴")
plt.ylabel("Y轴")

# 显示图形
plt.show()
