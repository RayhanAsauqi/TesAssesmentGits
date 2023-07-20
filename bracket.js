function isBalancedBracket(str) {
    const stack = [];
    const openingBrackets = new Set(["(", "[", "{"]);
    const closingBrackets = new Map([
      [")", "("],
      ["]", "["],
      ["}", "{"],
    ]);
  
    for (const char of str) {
      if (openingBrackets.has(char)) {
        // Jika karakter adalah braket buka, masukkan ke dalam stack
        stack.push(char);
      } else if (closingBrackets.has(char)) {
        // Jika karakter adalah braket tutup
        if (stack.length === 0 || stack.pop() !== closingBrackets.get(char)) {
          // Periksa apakah stack kosong atau braket tutup tidak sesuai dengan braket buka terakhir di stack
          return "NO";
        }
      }
    }
  
    // Setelah melewati seluruh karakter pada string, periksa apakah stack kosong
    return stack.length === 0 ? "YES" : "NO";
  }
  
  // Contoh penggunaan fungsi
  console.log(isBalancedBracket("{[()]}")); // Output: YES
  console.log(isBalancedBracket("{[(])}")); // Output: NO
  console.log(isBalancedBracket("{(([])[])[]}")); // Output: YES
  