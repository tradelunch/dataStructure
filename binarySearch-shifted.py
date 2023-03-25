def shifted_binary_search(arr, target):
    # Find the pivot element
    left, right = 0, len(arr) - 1
    while left < right:
        mid = (left + right) // 2
        if arr[mid] > arr[right]:
            left = mid + 1
        else:
            right = mid
    
    # Determine which subarray to search
    pivot = left
    left, right = 0, len(arr) - 1
    if target >= arr[pivot] and target <= arr[right]:
        left = pivot
    else:
        right = pivot - 1
    
    # Perform a binary search on the subarray
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    # Return -1 if target is not found
    return -1
