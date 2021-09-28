%Identifies the colors and count of each color in each image
main_f();

function [tom_img_open, low_res_16, low_res_8, rand] = main_f()

    ImageFiles = dir("crop_768x768/*.png");
    
    for j = 1:length(ImageFiles)
        
        %image file name
        tom_image = ImageFiles(j).name;
        
        if strcmp(tom_image, 'zpeppers.png') % for debugging one image at a time
        
        %% full path names
        tom_img_path = "crop_768x768/" + tom_image;
        tom_img_64_pth = "resize_64x64/" + tom_image;
        tom_img_16_pth = "resize_16x16/" + tom_image;
        color_array_img_pth = "array/" + tom_image;
        tom_img_16_scramble_pth = "scramble_16x16/" + tom_image;
        % opens full image
        tom_img_open = imread(tom_img_path);
        
        tom_img_64 = resize_img(tom_img_open, 12, 0);
        tom_img_64 = enlarge_pixels_768(tom_img_64);
        imwrite(tom_img_64, tom_img_64_pth);
        
        % creates 16x16 image
        tom_img_16 = resize_img(tom_img_open, 48, 0);
        
        % there were some "bad" pixels on some of the images. replace them
        % here
        if strcmp(tom_image, 'green22days1_hdrOff.png')
            tom_img_16(16, 8, :) = [163 136 59];
        elseif strcmp(tom_image,'redBaseBlack1_hdrOff.png')
            tom_img_16(5, 6, :) = [244 54 35];
            tom_img_16(10, 2, :) = [221 44 36];
            tom_img_16(10, 3, :) = [224 36 30];
        end
        
        %% create scrambled image
        tom_img_16_scramble = scramble_img(tom_img_16);
        tom_img_16_scramble = enlarge_pixels_768(tom_img_16_scramble);
        imwrite(tom_img_16_scramble, tom_img_16_scramble_pth);

        tom_img_array_list = tom_color_array_list(tom_img_16);
        tom_img_16 = enlarge_pixels_768(tom_img_16);
        imwrite(tom_img_16, tom_img_16_pth);
        array_colors_img_pth = "array_colors_image/" + tom_image;
        
        %% create array images
        array_width = 3;
        array_height = 3;
        array_length = array_width*array_height;
        tom_img_lab = rgb2lab(squeeze(tom_img_array_list)); % squeeze to convert 1x20x3 to 20x3
        threshold = 3.0; % how many delta E's apart the colors must be
        
        % this is where we change the delta E threshold for each individual
        % image. Most stay at 2.0 but these images had too many colors so
        % the threshold was increased

        
        % remove the colors that fall within the delta E threshold
        % indices 1-3 will not be touched
        tom_img_lab = delete_similar_colors(tom_img_lab, threshold);
        
        % ii we have less than array_length colors, add more
        [a b] = size(tom_img_lab);
        if(a < array_length)
            tom_img_lab = add_midpoints(tom_img_lab);
        end
        
        %% bias the average and delete excess colors
        % we bias the average because oftentimes there is more shadow in
        % the image than specular highlights, so our average winds up being
        % darker than we'd like it to be. for images that had too many dark
        % colors, we change the weight of the average here so that more
        % dark colors are deleted than light ones
        make_plot = 1;
        if(a > array_length)
            
            weight = 5;
            
            if strcmp(tom_image, 'gold_2_7days_hdrOff.png')
                weight = 3;
            elseif strcmp(tom_image,'green4days2_hdrOff.png')
                weight = 3;
            elseif strcmp(tom_image,'green_2_17days_1_hdrOff.png')
                weight = 0;
            elseif strcmp(tom_image,'green_2_2_hdrOff.png')
                weight = 1;
            elseif strcmp(tom_image,'mysteryLightOr_hdrOff.png')
                weight = 3;
            elseif strcmp(tom_image,'redBaseBlack1_hdrOff.png')
                weight = 0;
            elseif strcmp(tom_image,'redBaseGreen1_hdrOff.png')
                weight = 1;
            elseif strcmp(tom_image,'sand2.png')
                weight = -6;
            elseif strcmp(tom_image,'skin.png')
                weight = 100;
            elseif strcmp(tom_image,'wood.png')
                weight = 100;
            else
                weight = 5;
            end
            
            if(make_plot == 1)
                plot_Lab(4,tom_img_lab(:,:,:)',0,'r',70,0);
                %plot_Lab(3,tom_img_lab(:,:,:)',1,[0.5 0.5 0.5],70,0);
            end
            
            % get the mean lightness so that we can throw out the outliers
            mean_lightness = tom_img_lab(1,1) + weight;
            
            % calculate the absolute values of all data points - mean_lightness
            % this will help us identify which data points are far off
            lightness_differences = abs(tom_img_lab(:,1) - mean_lightness);
            
            % keep the first three elements
            lightness_differences(1:3) = 0;
            
            % remove the ones furthest away
            while numel(lightness_differences) > array_length
                [val idx] = max(lightness_differences);
                tom_img_lab(idx,:) = [];
                lightness_differences(idx,:) = [];
            end
            
            if(make_plot == 1)
                plot_Lab(4,tom_img_lab(:,:,:)',0,'r',120,0);
            end
            
        end
        

        % this line is here for debugging purposes to keep track of the
        % number of colors. variables unused
        [a1 b1] = size(tom_img_lab);
        
        % convert back to RGB, then append with black if there are less
        % than the required number of colors (helpful for debugging)
        tom_img_array_list_new = lab2rgb(tom_img_lab);
        sizearr = size(tom_img_array_list_new);
        tom_img_array_list_new = [tom_img_array_list_new ; zeros(array_length-sizearr(1),3)];
        tom_img_array_list_new = tom_img_array_list_new(1:array_length,:);
        tom_img_array_list_new = reshape(tom_img_array_list_new, [1,array_length,3]); % give back the useless dimension for calling the color_array function
        tom_img_array_list_new = uint8(tom_img_array_list_new.*255); %change from double to uint8
        color_array_img_new = color_array(tom_img_array_list_new,0,array_width, array_height);
        color_array_img_new = enlarge_pixels(color_array_img_new);
        imwrite(tom_img_array_list_new, array_colors_img_pth)
        
        imwrite(color_array_img_new, color_array_img_pth);
        
        % create a figure to more easily let us look at the array image
        % set show_figure to 1 to enable. useful for debugging
        show_figure = 0;
        if show_figure == 1
            figure;
            sizex = 2;
            sizey = 3;
            subplot(sizex, sizey, 1)
            imshow(tom_img_16_scramble)
            subplot(sizex, sizey, 2)
            imshow(tom_img_16)
            subplot(sizex, sizey, [3 6])
            imshow(color_array_img_new)
            subplot(sizex, sizey, 4)
            imshow(tom_img_64)
            subplot(sizex, sizey, 5)
            imshow(tom_img_path)
            title(tom_image)
        end
        end
        
    end
end

% takes the nth pixel in each nth row and discards the rest
function img = resize_img(img, n, offset)
    img = img(1+offset:n:end, :, :);
    img = img(:, 1+offset:n:end, :);
end

%creates a list of colors to be used for the array
function array_img_list = tom_color_array_list(img)
     % segements the image into 9 sections:
     %    s_1 top left quadrant
     %    s_2 top right quadrant
     %    s_3 bottom left quadrant
     %    s_4 bottom right quadrant
     %    s_5 center column
     %    s_6 center row
     %    s_7 center quadrant
     s_1 = img(1:8, 1:8, :);
     s_2 = img(1:8, 9:16, :);
     s_3 = img(9:16, 1:8, :);
     s_4 = img(9:16, 9:16, :);
     s_5 = img(1:16, 4:12, :);
     s_6 = img(4:12, 1:16, :);
     s_7 = img(4:12, 4:12, :);

    % identifies the most saturated pixel in each section and full image
    s_1_sat_color = most_sat(s_1);
    s_2_sat_color = most_sat(s_2);
    s_3_sat_color = most_sat(s_3);
    s_4_sat_color = most_sat(s_4);
    s_5_sat_color = most_sat(s_5);
    s_6_sat_color = most_sat(s_6);
    s_7_sat_color = most_sat(s_7);
    full_sat_color = most_sat(img);
    
    % identifies the most chromatic pixel in each section and full image
    s_1_chr_color = most_chr(s_1);
    s_2_chr_color = most_chr(s_2);
    s_3_chr_color = most_chr(s_3);
    s_4_chr_color = most_chr(s_4);
    s_5_chr_color = most_chr(s_5);
    s_6_chr_color = most_chr(s_6);
    s_7_chr_color = most_chr(s_7);
    full_chr_color = most_chr(img);
    
    % creates an average color from each section and the whole image
    s_1_avg = avg_color(s_1);
    s_2_avg = avg_color(s_2);
    s_3_avg = avg_color(s_3);
    s_4_avg = avg_color(s_4);
    s_5_avg = avg_color(s_5);
    s_6_avg = avg_color(s_6);
    s_7_avg = avg_color(s_7);
    full_avg = avg_color(img);
    array_img_list = [full_avg, full_sat_color, full_chr_color, s_1_sat_color, s_2_sat_color, s_3_sat_color, s_4_sat_color, s_5_sat_color, s_6_sat_color, s_7_sat_color];
    array_img_list = [array_img_list s_1_chr_color, s_2_chr_color, s_3_chr_color, s_4_chr_color, s_5_chr_color, s_6_chr_color, s_7_chr_color];
    array_img_list = [array_img_list s_1_avg, s_2_avg, s_3_avg, s_4_avg, s_5_avg, s_6_avg, s_7_avg];
    
end

% identifies the most saturated pixel
function sat_color = most_sat(img)
    % converts to hsv color    
    hsv = rgb2hsv(img);
    % grabs saturation layer
    s_img = hsv(:,:,2);
    [max_value_c, index] = max(s_img); 
    [max_value, c] = max(max_value_c);
    % uses index of max saturation to identify the color in RGB
    sat_color = img(index(c), c, :); 
end

% identifies the most chromatic pixel
function chr_color = most_chr(img)
    % convert to CIELAB
    lab = rgb2lab(img);
    
    [n m o] = size(lab);
    chromas = zeros(n,m);
    for i = 1 : n
        for j = 1 : m
            % chroma is distance from center (distance from (a*,b*) to (0,0)
            chromas(i,j) = sqrt(lab(i,j,2)^2 + lab(i,j,3)^2);
        end
    end
    
    [max_value_c, index] = max(chromas);
    [max_value, c] = max(max_value_c);
    % uses index of max chroma to identify the color in RGB
    chr_color = img(index(c), c, :); 
end

% makes an average color for each section and the full image
function avg_clr = avg_color(img)
    avg_clr = zeros(1, 1, 3, 'uint8'); %initializes avg color to (0,0,0)
    red = img(:, :, 1); %grabs red from the image
    red_avg = mean( red, 'all' ); %takes the average of the reds
    avg_clr(1,1,1) = red_avg; %assigns the avg of the reds
    green = img(:, :, 2); %grabs green from the image
    green_avg = mean( green, 'all' ); %takes the avg of the greens
    avg_clr(1,1,2) = green_avg; %assigns the avg fo the greens
    blue = img(:, :, 3); %grabs blue from the image
    blue_avg = mean( blue, 'all' ); %takes the avg of the blues
    avg_clr(1,1,3) = blue_avg; %assigns the avg of the blues
end

%creates an array of 20 colors with gray (171,171,171) background
% rand: 0 to keep the order, 1 to shuffle
function color_array_img = color_array(color_list, rand, x, y)
    color_array_img = 171*ones(x*2+1, y*2+1, 3, 'uint8'); %initializes background
    
    if rand == 0
        rand_ints = [1:x*y];
    elseif rand ~= 0
        rand_ints = randperm(x*y, x*y); %creates a list of random ints 1-20 (no repeats)
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

%enlarges the image to avoid stretching and nearest neighbor avging
%used for square images (16x16/64x64 -> 768x768)
function large_image = enlarge_pixels_768(small_img)
    img_width = size(small_img, 1);
    large_image = zeros(768, 768, 3, 'uint8');
    proportion = 768 / img_width;
    for r = 1:img_width
        for c = 1:img_width
            A = zeros(proportion, proportion, 3);
            A(:,:, 1) = small_img(r, c, 1);
            A(:,:, 2) = small_img(r, c, 2);
            A(:,:, 3) = small_img(r, c, 3);
            large_image( ((r-1)*proportion + 1):r*proportion, ((c-1)*proportion + 1):c*proportion, :) = A;
        end
    end
end

%enlarges image to avoid stretching and nearest neighbor avging
%used for array images (8x10 -> 192x240)
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