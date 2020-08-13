% finds all pairs in a given Nx3 matrix of CIELAB values that are less than
% threshold de2000 units apart. returns this as a Mx2 matrix, where each
% row specifies the indicies of a pair of colors that are less than the 
% specified amount of units apart (very close together in color)
function pairs = find_similar_colors(arr, threshold)

[n m] = size(arr);
pairs = [];

    for i = 1 : n
        for j = i+1 : n
            if deltaE2000(arr(i,:), arr(j,:)) < threshold
                    pairs = [pairs ; [i j]];
            end
        end
    end

    pairs = reshape(pairs, 1, numel(pairs));
end