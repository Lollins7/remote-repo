for i=0:0.2:2
e = 1+i;
f = @(theta,theta_bar) theta_bar^2-cos(theta)-e+1;
fimplicit(f);legend(['e=',num2str(e)]);hold on;
          end
xlabel('角度\theta');ylabel('角速度\omega');title('相平面图');
labels=num2cell(1:0.2:3);
labels = cellfun(@num2str,labels,'UniformOutput',false);
legend(labels);plotset;
print('推导函数相平面图','-dpng');