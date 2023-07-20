function calculateA000124(n) {
    const result = [];
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i;
      result.push(sum);
    }
  
    return result.join("-");
  }
  
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function main() {
    readline.question("Masukkan jumlah tingkat tangga (n): ", (input) => {
      const n = parseInt(input);
      if (isNaN(n) || n < 1) {
        console.log("Masukkan angka positif yang lebih besar dari 0.");
      } else {
        const output = calculateA000124(n);
        console.log("Output: ", output);
      }
      readline.close();
    });
  }
  
  main();
  