%% initiate results variables

clear;

% load results
results_offline = dir("results/Normal/*.csv");
results_ar      = dir("results/AR/*.xlsx");

T = [];
for i = 1:length(results_offline)
    T{i} = readtable("results/Normal/" + results_offline(i).name);
end

V = [];
for i = 1:length(results_ar)
    V{i} = readtable("results/AR/" + results_ar(i).name);
end

% load color choices
colors = readtable("colors_normal.xlsx");

% ar specific colors
colors_ar = readtable("colors_full.xlsx");
colors_bg = readtable("colors_top_four_final_blackgrey.xlsx");
colors_gb = readtable("colors_top_four_final_greyblack.xlsx");
colors_order = readtable("colors_order.xlsx");

% read in results file
results_count_offline = readtable("results_count.xlsx");
results_count_ar      = readtable("results_count_ar.xlsx");

% loop through each offline file
for i = 1:length(T)
    for j = 1:length(results_count_offline.fileName)

        fileName = results_count_offline.fileName(j);
        index = find(strcmp(T{i}.File_Name,fileName));

        % which choice value was picked?
        choiceName = T{i}.mouseResponse_clicked_name(index);

        switch(char(choiceName(1)))
            case 'firstChoice'
                choice = 1;
            case 'secondChoice'
                choice = 2;
            case 'thirdChoice'
                choice = 3;
            case 'fourthChoice'
                choice = 4;
            case 'fifthChoice'
                choice = 5;
            case 'sixthChoice'
                choice = 6;
            case 'seventhChoice'
                choice = 7;
            case 'eighthChoice'
                choice = 8;
        end

        results_count_offline{j,choice+1} = results_count_offline{j,choice+1} + 1;

        switch(char(choiceName(2)))
            case 'firstChoice'
                choice = 1;
            case 'secondChoice'
                choice = 2;
            case 'thirdChoice'
                choice = 3;
            case 'fourthChoice'
                choice = 4;
            case 'fifthChoice'
                choice = 5;
            case 'sixthChoice'
                choice = 6;
            case 'seventhChoice'
                choice = 7;
            case 'eighthChoice'
                choice = 8;
        end

        results_count_offline{j,choice+1} = results_count_offline{j,choice+1} + 1;

    end
end

% loop through each AR file
for i = 1:length(V)
    % loop through each row in the observer's results file
    for j = 1:length(results_count_ar.fileName)

        % current file we're working with
        imageName = results_count_ar.fileName(j);
        block1 = results_count_ar.Block(j);
        block2 = 0;
        background = results_count_ar.Background(j);

        % find the index of that file in the observer's response
        if block1 == 1
            block1 = 1;
            block2 = 2;
        elseif block1 == 2
            block1 = 3;
            block2 = 4;
        else
            block1 = 5;
            block2 = 6;
        end

        index = find(strcmp(V{i}.FileName,imageName) & block1==V{i}.Block & background==V{i}.Background);

        % which choice value was picked?
        choice = V{i}.ColorChoice(index);
        results_count_ar{j,choice+3} = results_count_ar{j,choice+3} + 1;

        index = find(strcmp(V{i}.FileName,imageName) & block2==V{i}.Block & background==V{i}.Background);

        % which choice value was picked?
        choice = V{i}.ColorChoice(index);
        results_count_ar{j,choice+3} = results_count_ar{j,choice+3} + 1;
    end
end

results_count_ar_temp = results_count_ar;

% loop through the AR files again and fix the color order
[len,~] = size(results_count_ar_temp);
for i = 1:len

    if results_count_ar_temp{i,2} == 1 || results_count_ar_temp{i,2} == 4

        % figure out what file we're on
        idx = find(strcmp(colors_order{:,1},results_count_ar_temp{i,1}));

        % loop through all the colors
        for j = 1:8

            % get the new index of the color
            color_idx_old = j;
            color_idx_new = colors_order{idx,j+1};

            % offset the index by the number of columns
            color_idx_old = color_idx_old + 3;
            color_idx_new = color_idx_new + 3;

            % slot in the new data
            results_count_ar{i,color_idx_old} = results_count_ar_temp{i,color_idx_new};

        end
    end
end

% re-order colors_ar
colors_ar_temp = colors_ar;

[len,~] = size(colors_ar_temp);
for i = 1:len
    for j = 1:8
        color_idx_old = j;
        color_idx_new = colors_order{i,j+1};

        color_idx_old = color_idx_old + 1;
        color_idx_new = color_idx_new + 1;

        colors_ar{i,color_idx_new} = colors_ar_temp{i,color_idx_old};
    end
end



clear background block1 block2 choice choiceName fileName imageName i index j T U V
clear colors_ar_temp results_count_ar_temp color_idx_old color_idx_new idx len

%% generate pretty plots/graphs for the AR results
num_images = 7;
for i = 1:num_images

    image_name = colors_ar{i,1};

    cols_ar = [];
    cols_bg = [];
    cols_gb = [];
    for j = 1:8
        cols_ar(j,:) = str2double(strsplit(char(colors_ar{i,j+1}),','));
        cols_bg(j,:) = str2double(strsplit(char(colors_bg{i,j+1}),','));
        cols_gb(j,:) = str2double(strsplit(char(colors_gb{i,j+1}),','));
    end

    % plot 1: nested bar graph/histogram
    figure

    names = ["Black BG", "Grey BG", "Black-Grey BG", "Grey-Black BG"];
    vals = [1 4 2 3];
    for j = 1:4
        subplot(2,2,j)
        title(names(j))
        xlabel('choice')
        ylabel('frequency')
        index = find(strcmp(results_count_ar.fileName,image_name) & results_count_ar.Background == vals(j));
        t1 = table2array(results_count_ar(index(1),4:end));
        t2 = table2array(results_count_ar(index(2),4:end));
        t3 = table2array(results_count_ar(index(3),4:end));
        results = [ t1 ; t2 ; t3 ];
        results_combined = t1 + t2 + t3;
        results = results';
        b = bar(results_combined);

        % plot the bar graph
        hold on

        title(names(j))
        xlabel('Color ID')
        ylabel('Number of times selected')
        ylim([0 25])

        cols_to_use = [];
        switch(j)
            case 1
                cols_to_use = cols_ar;
            case 2
                cols_to_use = cols_ar;
            case 3
                cols_to_use = cols_bg;
            case 4
                cols_to_use = cols_gb;
        end
        for k = 1:8
            hbr = bar(k,results(k,:),'FaceColor', cols_to_use(k,1:3));
        end

        hold off

    end

    % plot 2: calculate average cielab values from results
    averagest1 = [ 0 0 0 ];
    averagest2 = [ 0 0 0 ];
    averagest3 = [ 0 0 0 ];

    labs = rgb2lab(cols_ar(:,1:3));

    % start with sum
    for j = 1:8
        for k = 1:3
            averagest1(k) = averagest1(k) + results(j,1)*labs(j,k);
            averagest2(k) = averagest2(k) + results(j,2)*labs(j,k);
            averagest3(k) = averagest3(k) + results(j,3)*labs(j,k);
        end
    end

    % divide out the average
    [num_observers, ~] = size(results_ar);
    num_observers = num_observers * 2; % each image is being observed twice per observer
    averagest1 = averagest1 ./ num_observers;
    averagest2 = averagest2 ./ num_observers;
    averagest3 = averagest3 ./ num_observers;
    average = (averagest1 + averagest1 + averagest3) ./ 3;
    averages = [ averagest1 ; averagest2 ; averagest3 ];

    average_lab = mean(labs);

    % plot the choices in cielab
    figure
    plot_Lab(4,labs',0,'r',60,0);
    %plot_Lab(4,average',0,'r',220,0);

    % path for the images
    images = dir("C:\Users\darad\Desktop\Research Project\Representative-Color\Pavlovia Study Generator\resources\*.png");

    % get the four averages for the scrambled version


    % final plot: comparing averages of each background
    % for each image type (scramble, 16x16, full)
    figure
    for x = 1:3

        averages = [];

        % for each background
        for y = 1:4
            index = find( strcmp(results_count_ar.fileName,image_name) & results_count_ar.Block == x & results_count_ar.Background == y );

            sums = table2array(results_count_ar(index,4:end));

            averages_times_sums = labs;
            for k = 1 : 8
                averages_times_sums(k,:) = averages_times_sums(k,:) .* sums(k);
            end

            for k = 1:3
                averages(y,k) = sum(averages_times_sums(:,k)) ./ num_observers;
            end

        end

        % grab the image and add it to the subplot
        subplot(1,3,x)
        fun = fun_image_ar("C:\Users\darad\Desktop\Research Project\Representative-Color\Results Processing November\Images\AR\", image_name, lab2rgb(averages)*255, x);

        % overlay text
        text = insertText(fun,[1 50],1.3135,'AnchorPoint','LeftBottom');

        imshow(fun);

        save_image = 0;
        if save_image == 1
            imwrite(fun, "avg_" + image_name);
        end
    end

    % plot that fixes luminance
    figure
    xlabel('luminance')
    ylabel('frequency of choice')

    %figure
    %plot_Lab(4,average_lab',0,'r',30,0);
    %plot_Lab(4,averages',0,'r',10,0)

    close all

end

%% generate pretty plots/graphs for the results
num_observers = 12;
num_images = 19;
results_count = results_count_offline;

for i = 1:num_images

    cols = [];
    for j = 1:8
        cols(j,:) = str2double(strsplit(char(colors{i,j+1}),','));
    end

    % plot 1

    figure
    title('scramble')
    xlabel('choice')
    ylabel('frequency')
    t1 = table2array(results_count(i+num_images*0,2:end));
    t2 = table2array(results_count(i+num_images*1,2:end));
    t3 = table2array(results_count(i+num_images*2,2:end));
    results = [ t1 ; t2 ; t3 ];
    results_combined = t1 + t2 + t3;
    results = results';
    b = bar(results_combined);

    % plot the bar graph
    hold on

    title('Frequency of color choices')
    xlabel('Color ID')
    ylabel('Number of times selected')

    for j = 1:8
        hbr = bar(j,results(j,:),'FaceColor', cols(j,1:3));
    end

    hold off

    % calculate average cielab values from results
    averagest1 = [ 0 0 0 ];
    averagest2 = [ 0 0 0 ];
    averagest3 = [ 0 0 0 ];

    labs = rgb2lab(cols(:,1:3));

    % start with sum
    for j = 1:8
        for k = 1:3
            averagest1(k) = averagest1(k) + results(j,1)*labs(j,k);
            averagest2(k) = averagest2(k) + results(j,2)*labs(j,k);
            averagest3(k) = averagest3(k) + results(j,3)*labs(j,k);
        end
    end

    % divide out the average
    averagest1 = averagest1 ./ (num_observers*2);
    averagest2 = averagest2 ./ (num_observers*2);
    averagest3 = averagest3 ./ (num_observers*2);
    average = (averagest1 + averagest1 + averagest3) ./ 3;
    averages = [ averagest1 ; averagest2 ; averagest3 ];

    average_lab = mean(labs);

    % plot the choices in cielab
    figure
    plot_Lab(4,labs',0,'r',60,0);
    %plot_Lab(4,average',0,'r',220,0);

    % path for the images
    images = dir("C:\Users\darad\Desktop\SimpleTestExp\resources\*.png");

    % save the image
    %save_image = 0;
    save_image = 1;
    if save_image == 1
        figure
        image_name = char(table2array(results_count(i,1)));
        image_name(1:12) = [];
        fun = fun_image("C:\Users\darad\Desktop\SimpleTestExp\resources\", image_name, lab2rgb(averages)*255);

        imshow(fun);
        %imwrite(fun, "avg_" + image_name);

    end


    figure
    plot_Lab(4,average_lab',0,'r',30,0);
    plot_Lab(4,averages',0,'r',10,0);

    % bad graph with luminance points
    %     figure
    %     xlimmin = min(labs(:,1));
    %     xlimmax = max(labs(:,1));
    %
    %     xlim([xlimmin-1 xlimmax+1])
    %
    %     hold on
    %     for j = 1:8
    %         sum = t1(j)+t2(j)+t3(j);
    %         plot(labs(j,1),sum,'r*')
    %     end
    %     hold off

    close all

end

%% some repeatability statistics

% pool observers
num_observers = 12;

% number of unique images (excluding repeats)
num_images = 60;

T = [];
for i = 1:length(results_offline)
    T{i} = readtable("results/Normal/" + results_offline(i).name);
end

repeatability_results_observers = zeros(num_observers, 2);
repeatability_results_images = results_count_offline(:,1:4);
repeatability_results_images.Properties.VariableNames = ["fileName" "avgColorDif" "countSame" "expectedColorDif"];
repeatability_results_images{:,2:4} = 0;

for i = 1:num_observers

    count_same = 0;
    avg_color_dif = 0;

    % give them a score based on how consistent they were
    for j = 1:num_images % for each image
        file_name = results_count_offline{j,1};
        file_name_full = file_name;

        % indices of the two answers
        index = find(strcmp(T{i}.File_Name,file_name));

        % the image's colors
        file_name = cell2mat(file_name);
        file_name = file_name(13:end);
        file_name = strcat('resources/',file_name);
        index_color = find(strcmp(file_name,colors.File_Name));

        cols = [];
        for k = 1:8
            cols(k,:) = str2double(strsplit(char(colors{index_color,k+1}),','));
        end

        choices = zeros(2,3);

        % color values for the two answers
        choiceName = T{i}.mouseResponse_clicked_name(index);
        for k = 1:size(choiceName)

            switch(char(choiceName(k)))
                case 'firstChoice'
                    choice = 1;
                case 'secondChoice'
                    choice = 2;
                case 'thirdChoice'
                    choice = 3;
                case 'fourthChoice'
                    choice = 4;
                case 'fifthChoice'
                    choice = 5;
                case 'sixthChoice'
                    choice = 6;
                case 'seventhChoice'
                    choice = 7;
                case 'eighthChoice'
                    choice = 8;
            end

            % what color was that?
            choices(k,:) = cols(choice,:);
        end

        % get difference between the two found colors
        color_dif = sqrt((choices(1,1) - choices(2,1)).^2 + (choices(1,2) - choices(2,2)).^2 + (choices(1,3) - choices(2,3)).^2);
        avg_color_dif = avg_color_dif + color_dif;
        repeatability_results_images{j,2} = repeatability_results_images{j,2} + color_dif;
        
        s1 = str2mat(choiceName(1));
        s2 = str2mat(choiceName(2));
        if strcmp(s1, s2) == 1
            count_same = count_same + 1;
            repeatability_results_images{j,3} = repeatability_results_images{j,3} + 1;
        end

    end

    avg_color_dif = avg_color_dif / num_images;

    repeatability_results_observers(i,1) = avg_color_dif;
    repeatability_results_observers(i,2) = count_same;
end

repeatability_results_images{:,2} = repeatability_results_images{:,2} ./ num_observers;

% what a random observer should look like
count_same = 0;
random_observer_color_dif = 0;
monte_carlo_repeats = 1200;
monte_carlo_compare = 1100;
for i = 1:num_images
    file_name = results_count_offline{i,1};

    % the image's colors
    file_name = cell2mat(file_name);
    file_name = file_name(13:end);
    file_name = strcat('resources/',file_name);
    index_color = find(strcmp(file_name,colors.File_Name));

    cols = [];
    for k = 1:8
        cols(k,:) = str2double(strsplit(char(colors{index_color,k+1}),','));
    end

    random_image_color_dif = 0;
    for j = 1:monte_carlo_repeats

        choice1 = randi(8);
        choice2 = randi(8);
        color1 = cols(choice1,:);
        color2 = cols(choice2,:);

        random_observer_color_dif = random_observer_color_dif + sqrt((color1(1) - color2(1)).^2 + (color1(2) - color2(2)).^2 + (color1(3) - color2(3)).^2);
        random_image_color_dif = random_image_color_dif + sqrt((color1(1) - color2(1)).^2 + (color1(2) - color2(2)).^2 + (color1(3) - color2(3)).^2);
    end
    repeatability_results_images{i,4} = random_image_color_dif/monte_carlo_compare;

end
random_observer_color_dif = random_observer_color_dif ./ (monte_carlo_compare*num_images);

clear choice choice1 choice2 choiceName choices color1 color2 monte_carlo_repeats
clear cols count_same file_name file_name_full i index index_color j k num_images 
clear num_observers s1 s2 T avg_color_dif color_dif monte_carlo_compare

%% some repeatability statistics for AR

% pool observers
num_observers = 12;

% number of unique images (excluding repeats)
num_images = 84;

% read result files one by one
T = [];
for i = 1:length(results_ar)
    T{i} = readtable("results/AR/" + results_ar(i).name);
end

% results containers
repeatability_results_observers_ar = zeros(num_observers, 2);
repeatability_results_images_ar = results_count_ar(:,1:7);
repeatability_results_images_ar.Properties.VariableNames = ["fileName" "Block" "Background" "avgColorDif" "countSame" "expectedColorDif" "type"];
repeatability_results_images_ar{:,4:7} = 0;

% for each observer
for i = 1:num_observers

    count_same = 0; % number of times they've repeated their response
    avg_color_dif = 0; % average distance between color choices (0 if same)
    % give them a score based on how consistent they were
    for j = 1:num_images % for each image

        file_name = results_count_ar{j,1};

        % indices of the two answers
        blocks = 0;
        switch(results_count_ar{j,2})
            case 1
                final_block = 1;
                blocks = [1 2];
            case 2
                final_block = 2;
                blocks = [3 4];
            case 3
                final_block = 3;
                blocks = [5 6];
        end
        index1 = find ( strcmp(file_name,T{i}.FileName) & blocks(1)==T{i}.Block & results_count_ar{j,3}==T{i}.Background ) ;
        index2 = find ( strcmp(file_name,T{i}.FileName) & blocks(2)==T{i}.Block & results_count_ar{j,3}==T{i}.Background ) ;
        index = [index1 index2];

        % the color choices depend on the background
        final_background = 0;
        colors_tmp = 0;
        switch(results_count_ar{j,3})
            case 1
                final_background = 1;
                colors_tmp = colors_ar;
            case 2
                final_background = 2;
                colors_tmp = colors_bg;
            case 3
                final_background = 3;
                colors_tmp = colors_gb;
            case 4
                final_background = 4;
                colors_tmp = colors_ar;
        end

        % the image's colors
        file_name = cell2mat(file_name);
        index_color = find(strcmp(file_name,colors_tmp.File_Name));

        cols = [];
        for k = 1:8
            cols(k,:) = str2double(strsplit(char(colors_tmp{index_color,k+1}),','));
        end

        choices = zeros(2,3);

        % color values for the two answers
        choiceName = T{i}.ColorChoice(index);

        % what color was that?
        choices = cols(choiceName,:);

        % get difference between the two found colors
        color_dif = sqrt((choices(1,1) - choices(2,1)).^2 + (choices(1,2) - choices(2,2)).^2 + (choices(1,3) - choices(2,3)).^2);
        avg_color_dif = avg_color_dif + color_dif;

        % add to our counter of exact matches if the choices are the same
        if choices(1) == choices(2)
            count_same = count_same + 1;
        end

        % add result to the images file
        index = find(strcmp(file_name,repeatability_results_images_ar.fileName) & final_block==repeatability_results_images_ar.Block & final_background==repeatability_results_images_ar.Background);
        repeatability_results_images_ar{index,"avgColorDif"} = repeatability_results_images_ar{index,"avgColorDif"} + color_dif;

    end

    avg_color_dif = avg_color_dif / num_images;

    repeatability_results_observers_ar(i,1) = avg_color_dif;
    repeatability_results_observers_ar(i,2) = count_same;

end

repeatability_results_images_ar{:,"avgColorDif"} = repeatability_results_images_ar{:,"avgColorDif"} ./ num_observers;

% what a random observer should look like
count_same = 0;
random_observer_color_dif_ar = 0;
monte_carlo_repeats = 1200;
monte_carlo_compare = 1200;
for i = 1:num_images

    % the file name
    file_name = results_count_ar{i,1};
    file_name = cell2mat(file_name);

    % background and block numbers
    final_background = results_count_ar{i,"Background"};
    final_block = results_count_ar{i,"Block"};

    % load the image's colors
    colors_file = [];
    switch(final_background)
        case 1
            colors_file = colors_ar;
        case 2
            colors_file = colors_bg;
        case 3
            colors_file = colors_gb;
        case 4
            colors_file = colors_ar;
    end

    index_color = find(strcmp(file_name,colors_file.File_Name));

    cols = [];
    for k = 1:8
        cols(k,:) = str2double(strsplit(char(colors_file{index_color,k+1}),','));
    end

    % run monte carlo results
    random_image_color_dif_ar = 0;
    for k = 1:monte_carlo_repeats

        choice1 = randi(8);
        choice2 = randi(8);
        color1 = cols(choice1,:);
        color2 = cols(choice2,:);

        random_observer_color_dif_ar = random_observer_color_dif_ar + sqrt((color1(1) - color2(1)).^2 + (color1(2) - color2(2)).^2 + (color1(3) - color2(3)).^2);
        random_image_color_dif_ar = random_image_color_dif_ar + sqrt((color1(1) - color2(1)).^2 + (color1(2) - color2(2)).^2 + (color1(3) - color2(3)).^2);
    end
    index = find(strcmp(file_name,repeatability_results_images_ar.fileName) & final_block==repeatability_results_images_ar.Block & final_background==repeatability_results_images_ar.Background);
    repeatability_results_images_ar{index,"expectedColorDif"} = random_image_color_dif_ar/monte_carlo_compare;
end
random_observer_color_dif_ar = random_observer_color_dif_ar ./ (monte_carlo_repeats*num_images);

clear avg_color_dif blocks choice1 choice2 choiceName choices color1 color2
clear cols count_same file_name i index index1 index2 index_color j k
clear monte_carlo_compare monte_carlo_repeats num_images num_observers T
clear colors_tmp colors_file

%% generate images of the colors
% todo: what is this?
for i = 1:length(colors.FileName)
    tom_img_array_list_new = [];

    for j = 2:9
        col = cell2mat(colors{i,j});
        col = split(col,',');
        col = col';
        col = str2double(col);
        %col = cell2mat(col);
        tom_img_array_list_new = [tom_img_array_list_new ; col];
    end

    array_length = 8;
    array_width = 2;
    array_height = 4;
    array_colors_img_pth = colors{i,1};
    sizearr = size(tom_img_array_list_new);
    tom_img_array_list_new = [tom_img_array_list_new ; zeros(array_length-sizearr(1),3)];
    tom_img_array_list_new = tom_img_array_list_new(1:array_length,:);
    tom_img_array_list_new = reshape(tom_img_array_list_new, [1,array_length,4]); % give back the useless dimension for calling the color_array function
    tom_img_array_list_new = uint8(tom_img_array_list_new.*255); %change from double to uint8
    %color_array_img_new = color_array(tom_img_array_list_new,0,array_width, array_height);
    %color_array_img_new = enlarge_pixels(color_array_img_new);

    %imwrite(color_array_img_new, char(colors.File_Name(i)));

end


%% highlight regions based on corresponding color

images = results_count_online{21:40,1};
threshold = 3.0; % delta E threshold for showing image

% loop through each image
for i = 1:20

    % create a figure with a black and white version of the 16x16 image
    % behind
    figure;

    image_name = "C:\Users\darad\Desktop\Research Project\Representative-Color\Pavlovia Study Generator\" + char(images(i));
    image = imread(image_name);
    image2 = im2double(image);

    imageBW(:,:,1) = rgb2gray(image);
    imageBW(:,:,2) = rgb2gray(image);
    imageBW(:,:,3) = rgb2gray(image);
    imageRGB = image;

    % read the current color
    cols = zeros(8,4);
    for j = 1:8
        cols(j,:) = str2double(strsplit(char(colors{i,j+1}),','));
    end

    % for each color choice
    for j = 1:8

        subplot(2,4,j);

        image_final = imageBW;

        color = cols(j,1:3);
        collab = rgb2lab(color);

        % for each pixel in the image
        [row,col,~] = size(image);
        for k = 1:16
            for l = 1:16
                x = ((k-1)*48)+1;
                y = ((l-1)*48)+1;
                pix = image2(x,y,:);
                pix = squeeze(pix);
                pixlab = rgb2lab(pix');

                % check if the pixel is close enough in color
                if deltaE2000(pixlab,collab) < threshold
                    image_final(x:x+47,y:y+47,:) = imageRGB(x:x+47,y:y+47,:);
                end
            end
        end
        imshow(image_final);
        image_final = imageBW;

    end
    clear all
end

%% were observers biased based on positions of the choices
total = 0;
same = 0;
for i = 1:40
    for j = 7:89
        if i == 26 || i == 27 || i == 47 || i == 48 || i == 68 || i == 69
            continue
        end
        total = total + 1;
        if U{i}.mouseResponseLocation(j) == U{i}.mouseResponseLocation(j-1)
            same = same + 1;
        end
    end
end

%% frequency of chromatic and saturated choices
chromatic = sum(results_count_online.secondChoice);
saturated = sum(results_count_online.firstChoice);
total_responses = sum(results_count_online.firstChoice)+...
    sum(results_count_online.secondChoice)+...
    sum(results_count_online.thirdChoice)+...
    sum(results_count_online.fourthChoice)+...
    sum(results_count_online.fifthChoice)+...
    sum(results_count_online.sixthChoice)+...
    sum(results_count_online.seventhChoice)+...
    sum(results_count_online.eighthChoice);

%% UPDATED frequency of chromatic and saturated choices
chroma_plus_chroma = 0;
mean_plus_chroma = 0;
chromatic = 0;
average = 0;
other = 0;
fabricated = 0;

% other interesting regions
left_cheek = 0;
right_cheek = 0;

chroma_plus_chroma_expected = 0;
mean_plus_chroma_expected = 0;
chromatic_expected = 0;
average_expected = 0;
other_expected = 0;
fabricated_expected = 0;

left_cheek_expected = 0;
right_cheek_expected = 0;

votes = 5;

for i = 4:15
    for j = 1:8
        % figure out what type the color is
        color = str2double(strsplit(char(colors{i,j+1}),','));

        % average
        if(color(1,4) > 9 && color(1,4) < 19)
            average_expected = average_expected + votes;
            average = average + table2array(results_count_online(i,j+1));
        end

        % chromatic
        if(color(1,4) > 19 && color(1,4) < 29)
            chromatic_expected = chromatic_expected + votes;
            chromatic = chromatic + table2array(results_count_online(i,j+1));
        end

        % chromatic + chromatic
        if(color(1,4) == 3)
            chroma_plus_chroma_expected = chroma_plus_chroma_expected + votes;
            chroma_plus_chroma = chroma_plus_chroma + table2array(results_count_online(i,j+1));
        end

        % chromatic + chromatic
        if(color(1,4) == 4)
            mean_plus_chroma_expected = mean_plus_chroma_expected + votes;
            mean_plus_chroma = mean_plus_chroma + table2array(results_count_online(i,j+1));
        end

        % fabricated
        if(color(1,4) == -1)
            fabricated_expected = fabricated_expected + votes;
            fabricated = fabricated + table2array(results_count_online(i,j+1));
        end

        % other type
        % todo

    end


end

%% were observers consistent with themselves

% list of image names
image_names = [];
for i = 1:20
    image_name = char(table2array(results_count_online(i,1)));
    image_name(1:12) = [];
    image_name = string(image_name);
    image_names = [image_names ; image_name];
end

responses_repeated = 0;
responses_total = 0;
tiers_strings = ["resources/t1" "resources/t2" "resources/t3" "resources/t4"];
for i = 1:40 % observers
    for j = 1:20 % images
        % index of file
        image_name = image_names(j);

        indices = [];
        responses = [];
        for k = 1:4
            indices = [indices find(strcmp(U{i}.File_Name,tiers_strings(k) + image_name))];
            responses = [responses U{i}.mouseResponse_clicked_name(indices(k))];
        end

        % convert choice names to choice numbers
        responses_converted = [];
        for k = 1:4
            switch(char(responses(k)))
                case 'firstChoice'
                    responses_converted = [responses_converted 1];
                case 'secondChoice'
                    responses_converted = [responses_converted 2];
                case 'thirdChoice'
                    responses_converted = [responses_converted 3];
                case 'fourthChoice'
                    responses_converted = [responses_converted 4];
                case 'fifthChoice'
                    responses_converted = [responses_converted 5];
                case 'sixthChoice'
                    responses_converted = [responses_converted 6];
                case 'seventhChoice'
                    responses_converted = [responses_converted 7];
                case 'eighthChoice'
                    responses_converted = [responses_converted 8];
            end
        end

        % number of times there was a repeated answer
        [~,~,ix] = unique(responses_converted);
        C = accumarray(ix,1).';
        C = C - 1;
        responses_repeated = responses_repeated + sum(C);
        responses_total = responses_total + 4;

    end
end

%% test the null hypothesis

% online data
bins = 1:8;

nullHypothesisLillie = zeros(80,1);

% for each row in results_count_online
for i = 1:80
    obsCounts = results_count_offline{i,2:9} + results_count_online{i,2:9};
    nullHypothesisLillie(i) = lillietest(obsCounts);
    %     n = sum(obsCounts);
    %
    %     pd = fitdist(bins','Poisson','Frequency',obsCounts');
    %     expCounts = n * pdf(pd,bins);
    %     [h,p,st] = chi2gof(bins,'Ctrs',bins,...
    %                         'Frequency',obsCounts, ...
    %                         'Expected',expCounts,...
    %                         'NParams',1);

    %     nullHypothesis(i) = h;

end

%% functions
function pixels = fun_image(location, name, averages)

% load the images
scramble  = imread(location + "t1" + name);
sixteen   = imread(location + "t2" + name);
full      = imread(location + "t4" + name);

% set up a blank white image
size_x = 768 * 2 + 400;
size_y = 768 * 2 + 400;
pixels = 255*ones([size_x size_y 3], class(scramble));

% change the color of each quadrant to the corresponding average color
% choice
for i = 1:3
    pixels(1:size_x/2, 1:size_y/2, i) = averages(1,i);
    pixels(1:size_x/2, size_y/2+1:size_y, i) = averages(2,i);
    pixels(size_x/2+1:size_x, 1:size_y/2, i) = averages(3,i);
    % pixels(size_x/2+1:size_x, size_y/2+1:size_y, i) = averages(4,i);
end

% overlay the images onto the blank one in the corner quadrants
pixels(1:768, 1:768, :) = scramble(1:768, 1:768, :);
pixels(1:768, size_y-768+1:size_y,:) = sixteen(1:768, 1:768, :);
pixels(size_x-768+1:size_x, 1:768,:) = full(1:768, 1:768, :);

% add text
averages = rgb2lab(averages./255);
averages(3,:) = averages(3,:) - averages(1,:);
averages(2,:) = averages(2,:) - averages(1,:);
space = 10;
decimal_places = 2;
pixels = insertText(pixels, [space     768     ; space     818     ; space     868     ],["L* = " + round(averages(1,1),decimal_places,'decimals') ; "a* = " + round(averages(1,2),decimal_places,'decimals') ; "b* = " + round(averages(1,3),decimal_places,'decimals')], 'FontSize', 40, 'TextColor','white', 'BoxOpacity',0);
pixels = insertText(pixels, [768*2+400 768     ; 768*2+400 818     ; 768*2+400 868    ], ["L* = " + round(averages(2,1),decimal_places,'decimals') ; "a* = " + round(averages(2,2),decimal_places,'decimals') ; "b* = " + round(averages(2,3),decimal_places,'decimals')], 'FontSize', 40, 'TextColor','white', 'BoxOpacity',0, 'AnchorPoint','RightTop');
pixels = insertText(pixels, [space     768+200 ; space     818+200 ; space     868+200], ["L* = " + round(averages(3,1),decimal_places,'decimals') ; "a* = " + round(averages(3,2),decimal_places,'decimals') ; "b* = " + round(averages(3,3),decimal_places,'decimals')], 'FontSize', 40, 'TextColor','white', 'BoxOpacity',0);

end

%% functions
function pixels = fun_image_ar(location, name, averages, type)

% load the images
type_string = "StimuliBlock" + int2str(type) + "Full\";
path = imread(location + type_string + name);

% set up a blank white image
size_x = 768 * 2;
size_y = 768;
pixels = 255*ones([size_x size_y 3], class(path));

start_x = size_x/2;
start_y = 1;

mid_x = size_x*3/4;
mid_y = size_y/2;

end_x = size_x;
end_y = size_y;

% change the color of each quadrant to the corresponding average color
% choice
for i = 1:3
    pixels(start_x:mid_x, start_y:mid_y, i) = averages(1,i); % black
    pixels(start_x:mid_x, mid_y+1:end_y, i) = averages(4,i); % grey
    pixels(mid_x+1:end_x, start_y:mid_y, i) = averages(2,i); % black-grey
    pixels(mid_x+1:end_x, mid_y+1:end_y, i) = averages(3,i); % grey-black
end

% overlay the image on top
pixels(1:768, 1:768, :) = path(1:768, 1:768, :);

end


%creates an array of colors with gray (171,171,171) background
% rand: 0 to keep the order, 1 to shuffle
function color_array_img = color_array(color_list, rand, x, y)
color_array_img = 171*ones(x*2+1, y*2+1, 3, 'uint8'); %initializes background

if rand == 0
    rand_ints = [1:x*y];
elseif rand ~= 0
    rand_ints = randperm(x*y, x*y); %creates a list of random ints (no repeats)
end

i = 1;
for r = 1:x
    for c = 1:y
        %assigns every other pixel to a new color from the list of sat/avg colors
        color_array_img(r*2, c*2, :) = [color_list(1, rand_ints(i), 1), color_list(1, rand_ints(i), 2), color_list(1, rand_ints(i), 3)];
        i = i + 1;
    end
end
end


function large_image = enlarge_pixels(small_img)
img_height = size(small_img, 1);
img_width = size(small_img, 2);
prop_c = 48;
prop_r = 48;
large_image = zeros((img_height)*prop_c, (img_width)*prop_c, 3, 'uint8');
for r = 1:img_height
    for c = 1:img_width
        A = zeros(prop_r, prop_c, 3);
        A(:,:, 1) = small_img(r, c, 1);
        A(:,:, 2) = small_img(r, c, 2);
        A(:,:, 3) = small_img(r, c, 3);
        large_image( ((r-1)*prop_r + 1):r*prop_r, ((c-1)*prop_c + 1):c*prop_c, :) = A;
    end
end
end

function dist = distance_between_colors(col1, col2)
dist = sqrt( (col1(1) - col2(1))^2 + (col1(2) - col2(2))^2 + (col1(3) - col2(3))^2 );
end

function colors = str2colors(str)
for j = 2:9
    col = cell2mat(str{j});
    col = split(col,',');
    col = col';
    col = str2double(col);
    colors = [colors ; col];
end
end