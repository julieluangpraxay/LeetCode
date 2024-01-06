/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    let carry = 1; // Start with carry as 1 to add one to the number

    while (i >= 0 && carry > 0) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10; // Update the current digit
        carry = Math.floor(sum / 10); // Calculate the carry for the next iteration
        i--;
    }

    // If there's still a carry after processing all digits
    if (carry > 0) {
        digits.unshift(carry); // Add the carry as a new most significant digit
    }

    return digits;
};