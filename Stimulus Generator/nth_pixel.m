%%
% NTH_PIXEL(rgbImage, n) takes an NxM image, rgbImage, takes the nth pixel 
% of each row and removes the rest. Only rows where N is divisible by n are
% kept. This reduces the resolution of the output image.
function newImage = nth_pixel(rgbImage, n)

% determine size of image
[N, M, d] = size(rgbImage);

% for effeciency, set up the new image before looping
newImage = zeros(floor(N/n), floor(M/n), 3);

% for each row, col
for row = 1 : floor(N/n)
    for col = 1 : floor(M/n)
        newImage(row, col, :) = rgbImage( ((row-1)*n)+1, ((col-1)*n)+1, :);
    end
end

end