import numpy as np
a = np.eye(4)
b = np.rot90(a)
c, d = np.linalg.eig(b)
