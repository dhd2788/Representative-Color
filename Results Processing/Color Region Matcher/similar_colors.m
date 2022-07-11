% delete colors from a list of provided CIELAB values that are within a
% specified delta E threshold of each other
function colors = similar_colors(colors_fix_me, colors_read_me)

colors = zeros(8,4);

% for the number of colors
for i = 1:8

    % construct the distance list
    distance_list = [];
    for j = 1:9-i
        for k = 1:9-i
            distance_list(j,k) = distance_between_colors(colors_fix_me(j,:), colors_read_me(k,:));
        end
    end

    % find the shortest distance between two colors in the distance list
    minimum = min(min(distance_list));
    [x,y] = find(minimum==distance_list);

    % remove the minimum pair (if it's a tie, choose the first one)
    colors(i,:) = [colors_fix_me(x(1),1:3) colors_read_me(y(1),4)];

    % remove those colors from the lists
    colors_fix_me(x(1),:) = [];
    colors_read_me(y(1),:) = [];
end
% pairs = find_similar_colors(lab, threshold);
% val = mode(pairs);
%
% while 1
%
%     % delete the rows containing the most frequent color
%     % this if statement is because val turns into a uint8 once the
%     % pairs array is down to one element
%     if(~isnan(val))
%         lab(val,:) = [];
%     end
%
%     % update the pairs
%     pairs = find_similar_colors(lab, threshold);
%     val = find_mode(pairs);
%
%     % break when done
%     if isempty(pairs)
%         break
%     elseif isnan(val) % this means that all remaining pairs contain
%         % 1, 2, or 3, which are cruicial colors
%         break
%     end
% end
%
% colors = lab;
%
% end
%
% function val = find_mode(pairs)
% val = mode(pairs);
%
% % while val is 1, 2, or 3
% while(val == 1 || val == 2 || val == 3)
%     pairs(pairs==val) = NaN;
%
%     val = mode(pairs);
% end

end

function dist = distance_between_colors(col1, col2)
dist = sqrt( (col1(1) - col2(1))^2 + (col1(2) - col2(2))^2 + (col1(3) - col2(3))^2 );
end