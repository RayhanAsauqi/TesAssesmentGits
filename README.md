# Readme: Balanced Bracket Checker

This is a simple JavaScript function to check if a string contains balanced brackets.

## Function

The function `isBalancedBracket(str)` takes a string `str` as input and returns `"YES"` if the brackets are balanced, and `"NO"` otherwise.

### Example

```javascript
console.log(isBalancedBracket("{[()]}")); // Output: YES
console.log(isBalancedBracket("{[(])}")); // Output: NO
console.log(isBalancedBracket("{(([])[])[]}")); // Output: YES
```

In the first example, `"{[()]}"`, the brackets are balanced, so the output is `"YES"`. In the second example, `"{[(])}"`, the brackets are not balanced, so the output is `"NO"`. In the third example, `"{(([])[])[]}"`, the brackets are balanced, so the output is `"YES"`.

## Implementation

The function uses a stack data structure to keep track of opening brackets encountered while traversing the string. For each closing bracket, it checks if the corresponding opening bracket is at the top of the stack. If the brackets are balanced, the stack will be empty at the end of the traversal.

The function maintains a set of opening brackets and a map of closing brackets with their corresponding opening brackets to efficiently check for balanced brackets.

### Complexity

The implementation has linear time complexity O(n) since each character in the input string is processed once. The space complexity is also O(n) due to the usage of the stack.

### Supported Brackets

The function supports the following brackets:

- Round brackets: `( )`
- Square brackets: `[ ]`
- Curly brackets: `{ }`

## How to Use

1. Copy the `isBalancedBracket` function into your JavaScript code.
2. Call the function with a string containing brackets as the argument.
3. The function will return `"YES"` if the brackets are balanced, and `"NO"` otherwise.

Feel free to use and modify this function in your projects to check for balanced brackets!