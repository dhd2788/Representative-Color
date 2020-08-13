% delete colors from a list of provided CIELAB values that are within a
% specified delta E threshold of each other
function colors = delete_similar_colors(lab, threshold)
        pairs = find_similar_colors(lab, threshold);
        val = mode(pairs);

        while 1
            
            % delete the rows containing the most frequent color
            % this if statement is because val turns into a uint8 once the
            % pairs array is down to one element
            if(~isnan(val))
                lab(val,:) = [];
            end
            
            % update the pairs
            pairs = find_similar_colors(lab, threshold);
            val = find_mode(pairs);
            
            % break when done
            if isempty(pairs)
                break
            elseif isnan(val) % this means that all remaining pairs contain
                              % 1, 2, or 3, which are cruicial colors
                break
            end
        end
        
        colors = lab;

end

function val = find_mode(pairs)
    val = mode(pairs);
    
    % while val is 1, 2, or 3
    while(val == 1 || val == 2 || val == 3)
        pairs(pairs==val) = NaN;
        
        val = mode(pairs);
    end
    
end