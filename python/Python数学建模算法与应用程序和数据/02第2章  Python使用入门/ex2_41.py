# 程序文件ex2_41.py
import pandas as pd
import numpy as np
# 使用行和列的名称进行标签定位的df.loc[]
# 使用整型索引（绝对位置索引）的df.iloc[]
a = pd.DataFrame(np.random.randint(1, 6, (5, 3)),
                 index=['a', 'b', 'c', 'd', 'e'],
                 columns=['one', 'two', 'three'])
a.loc['a', 'one'] = np.nan  # 修改第1行第1列的数据
b = a.iloc[1:3, 0:2].values  # 提取第2、3行，第1、2列数据
a['four'] = 'bar'  # 增加第4列数据
a2 = a.reindex(['a', 'b', 'c', 'd', 'e', 'f'])
a3 = a2.dropna()  # 删除有不确定值(NaN)的'行'
