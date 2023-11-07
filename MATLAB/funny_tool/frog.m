function guguagif
    ax = gca;
    ax.DataAspectRatio = [1 1 1];
    ax.XLim = [-5 5];
    ax.YLim = [-5 5];
    ax.XColor = 'none';
    ax.YColor = 'none';
    ax.Color = [115, 173, 194] ./ 255;
    hold on
    DelayTime = .5;
    pause(.5)
    F = getframe(ax);
    [imind, cm] = rgb2ind(F.cdata, 256);
    imwrite(imind, cm, 'test.gif', 'gif', 'Loopcount', inf, 'DelayTime', DelayTime);

    % hold(ax,'on')
    % =========================================================================
    % 绘制荷叶
    [X, Y] = getEllipse([0.14, -1.5], 3.6, 1.8, 0, 200);
    fill(X, Y, [166, 211, 177] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 4, 'FaceAlpha', 1)
    fill([1.45, 1.5, 2.75], [-3.4, -2.4, -2.95], [115, 173, 194] ./ 255, 'EdgeColor', 'none')
    plot([1.4, 1.5, 2.6], [-3.2, -2.4, -2.8], 'Color', [41, 47, 50] ./ 255, 'LineWidth', 4)
    plot([-1.1, -0.8], [-3.2, -2.6], 'Color', [51, 57, 50] ./ 255, 'LineWidth', 2)
    plot([- .6, -0.5], [-3.2, -2.9], 'Color', [51, 57, 50] ./ 255, 'LineWidth', 2)
    plot([-3.3, -2.8], [-1.7, -1.63], 'Color', [51, 57, 50] ./ 255, 'LineWidth', 2)
    pause(.5); saveFrame()

    % 绘制小草
    [X, Y] = getEllipse([0, 0], .62, .5, 0, 200);
    Y = Y - .2;
    X(Y < 0) = []; Y(Y < 0) = [];
    X = [X, X(end:-1:1)];
    Y = [Y, -Y(end:-1:1)];
    [X1, Y1] = rotateData(X, Y, pi / 8); X1 = X1 + .85; Y1 = Y1 + 3.2;
    [X2, Y2] = rotateData(X, Y, -pi / 8); X2 = X2 - .15; Y2 = Y2 + 3.2;
    plot([.3, .33], [2.5, 3], 'Color', [41, 47, 50] ./ 255, 'LineWidth', 4)
    fill(X1, Y1, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    fill(X2, Y2, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    pause(.5); saveFrame()

    % 绘制腿部
    [X, Y] = getEllipse([1.65, -1.5], .5, .2, 0, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([1.55, -1.8], .4, .15, -pi / 5, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([1.28, -1.8], .4, .2, -pi / 2.5, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([1.8, - .6], 1.3, .8, pi / 6, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    %
    [X, Y] = getEllipse([-1.55, -1.3], .5, .2, 0, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([-1.48, -1.6], .4, .15, pi / 5, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([-1.18, -1.7], .4, .2, pi / 2.5, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([-1.6, - .45], 1.3, .8, -pi / 6, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    pause(.5); saveFrame()

    % 绘制身体和肚子
    [X, Y] = getEllipse([0.27, 0.4], 2.25, 2.18, 0, 200);
    fill(X, Y, [185, 215, 108] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 4, 'FaceAlpha', 1)
    [X, Y] = getEllipse([0.18, - .48], 1.05, .75, -pi / 15, 200);
    fill(X, Y, [253, 241, 155] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 1.8, 'FaceAlpha', 1)
    pause(.5); saveFrame()

    % 绘制眼睛
    [X, Y] = getEllipse([-1.39, 2.1], .88, .81, pi / 7, 200);
    fill(X, Y, [253, 241, 155] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([1.9, 1.98], .89, .81, -pi / 7, 200);
    fill(X, Y, [253, 241, 155] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)

    [X, Y] = getEllipse([-1.28, 2.1], .28, .28, 0, 200);
    fill(X, Y, [41, 47, 50] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)
    [X, Y] = getEllipse([1.82, 2.0], .28, .28, 0, 200);
    fill(X, Y, [41, 47, 50] ./ 255, 'EdgeColor', [41, 47, 50] ./ 255, 'LineWidth', 2, 'FaceAlpha', 1)

    X = 0:.01:pi; Y = -sin(X);
    X = X ./ 3.9 - .2;
    Y = Y ./ 6 + 1.65;
    plot(X, Y, 'Color', [41, 47, 50] ./ 255, 'LineWidth', 2)
    pause(.5); saveFrame()

    % =========================================================================
    % 椭圆数据点生成函数
    function [X, Y] = getEllipse(Mu, XR, YR, theta, pntNum)
        % Mu     | 中心点
        % XR,YR  | 旋转前X,Y半轴长度
        % theta  | 旋转角度
        % pntNum | 生成数据点个数
        tList = linspace(0, 2 * pi, pntNum);
        X = cos(tList) .* XR;
        Y = sin(tList) .* YR;
        rotateMat = [cos(theta), -sin(theta); sin(theta), cos(theta)];
        XY = rotateMat * [X; Y] + Mu(:);
        X = XY(1, :); Y = XY(2, :);
    end

    % 数据旋转角度
    function [X, Y] = rotateData(X, Y, theta)
        rotateMat = [cos(theta), -sin(theta); sin(theta), cos(theta)];
        XY = rotateMat * [X; Y];
        X = XY(1, :); Y = XY(2, :);
    end

    function saveFrame
        F = getframe(ax);
        [imind, cm] = rgb2ind(F.cdata, 256);
        imwrite(imind, cm, 'test.gif', 'gif', 'WriteMode', 'append', 'DelayTime', DelayTime);
    end

end
