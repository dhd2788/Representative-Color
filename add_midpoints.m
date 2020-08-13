% add midpoints between each of the currently existing colors. the purpose
% of this function is to artifically add colors when there are not enough
% such that all the colors added are midpoints between colors that already
% exist. this keeps us within the "gamut" of colors in the image while
% still attempting to keep them sufficiently different.
function out = add_midpoints(in)
    [x y] = size(in);
    
    for i = 1 : x
        for j = i+1 : x
            % add the midpoint between the two colors
            in = add_midpoint(in,i,j);
            
            % if the new color is too similar to other ones, remove it
            if ~isempty(find_similar_colors(in,2))
                in = in(1:end-1,:);
            end
            
        end
    end
    
    out = in;

end

% helper function to add the midpoint of two specified colors to a given
% vector
function out = add_midpoint(in, i1, i2)
    P1 = in(i1,:);
    P2 = in(i2,:);
    out = (P1(:) + P2(:)).'/2;
    out = [in ; out];
end