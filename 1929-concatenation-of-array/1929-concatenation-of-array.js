/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const n = nums.length;
    // Create an empty array to store the result
    let ans = [];

    // Iterate through nums and add each element to ans
    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);
    }

    // Iterate through nums again and add each element to ans
    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);
    }

    // Return the resulting array
    return ans;
};