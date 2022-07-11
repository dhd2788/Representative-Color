clear

% load color choices
colors_to_fix = readtable("colors.xlsx");
colors_to_read = readtable("results.xlsx");

% results
result_colors = [];
results = {"File Name", "color1", "color2", "color3", "color 4", "color5", "color6", "color7", "color 8"};
count = 2; % start on row 2 because row 1 is occupied by column titles

for i = 1:length(colors_to_fix.File_Name)

    % read in color i from the colors used in pavlovia
    colors_fix_me = [];
    for j = 2:9
        col = cell2mat(colors_to_fix{i,j});
        col = split(col,',');
        col = col';
        col = str2double(col);
        colors_fix_me = [colors_fix_me ; col];
    end
    colors_fix_me(:,4) = 0;

    % read in color i from the list with flags
    colors_read_me = [];
    for j = 2:9
        col = cell2mat(colors_to_read{i,j});
        col = split(col,',');
        col = col';
        col = str2double(col);
        colors_read_me = [colors_read_me ; col];
    end

    % find the shortest distance between two colors
    result_colors = similar_colors(colors_fix_me, colors_read_me);

    % sort the resulting list
    result_colors_sorted = sort_colors(colors_fix_me, result_colors);

    % add to the results table
    results{count,1} = colors_to_fix.File_Name{i};
    for j = 1:8
        results{count,j+1} = color_to_string(result_colors_sorted(j,:));
    end
    count = count + 1;

end

% save the file
filename = 'fixed_colors';
xlswrite(filename, results);

% helper function
function str = color_to_string(col)

for x = 1 : numel(col) / 4
    str = num2str(col(x,1));
    for y = 2 : 4
        str = append(str, ', ', num2str(col(x,y)));
    end
end


end