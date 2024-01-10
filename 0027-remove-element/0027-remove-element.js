/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let k = 0; // Initializing k as the count of elements not equal to val
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            // If the current element is not equal to val
            // Move this element to the front of the array at index k
            nums[k] = nums[i];
            k++; // Increment count of elements not equal to val
        }
    }
    
    return k; // Return the count of elements not equal to val (k)
}
