%creates a scrambled version of the image, img
function scrambled_img = scramble_img(img, scramble_true)
    [n, m, ~] = size(img);
    scrambled_img_list = zeros(1, n*m, 3, 'uint8'); %creates a straight line image of pixels
    %scrambled_img = zeros( n, m, 3, 'uint8'); %initializes img
    rand_int_list = randperm(n*m, n*m); %random list of integers
    scram_index = 1;
    for i = 1 : length(rand_int_list)
        rand_int = rand_int_list(i);
        mod_val = mod(rand_int, n);
        final_val = [ 0 0 0 ];
        while final_val(1) + final_val(2) + final_val(3) == 0
        
            mod_val = mod(rand_int, n);
            
            if mod_val == 0 
                floor_val = floor(rand_int / n);
                mod_val = mod_val + n;
            else
                floor_val = floor(rand_int / n) + 1;
            end
            
            final_val = img(floor_val,mod_val,:);
            
            rand_int = randi([1 256]);
            
        
        end
        
        scrambled_img_list(1, scram_index, :) = img( floor_val, mod_val, :);
        scram_index = scram_index + 1;
    end
    scrambled_img = reshape(scrambled_img_list, n, m, 3);
end