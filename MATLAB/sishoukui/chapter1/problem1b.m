clear,clc;
p = optimproblem('ObjectiveSense', "max");
c = [3,-1,-1];
x = optimvar("x",3,1,'LowerBound',0);
p.Objective = c*x;
p.Constraints.c1 = [-2,0,1] * x == 1;
p.Constraints.c2 = [1,-2,1] * x <= 11;
p.Constraints.c3 = [-4,1,2] * x >= 3;
[s,fval] = solve(p)
xx = s.x %显示决策变量的值