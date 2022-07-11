function sorted = sort_colors(reference, to_sort)

sorted = reference;

% for each color in the list
for i = 1:8
    % check for a match with the other colors
    matching_index = 0;
    for j = 1:8
        % if there's a match, set matching_index and break
        if reference(i,1) == to_sort(j,1) && reference(i,2) == to_sort(j,2) && reference(i,3) == to_sort(j,3)
            matching_index = j;
            break;
        end
    end

    sorted(i,4) = to_sort(matching_index,4);


end

end