function denseRanking(scores, gitsScores) {
    // Menghapus nilai-nilai duplikat dari array skor dan mengurutkannya secara descending
    const uniqueSortedScores = scores.filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => b - a);
  
    const rankings = [];
    for (const gitsScore of gitsScores) {
      // Menghitung peringkat GITS berdasarkan skornya
      let rank = 1;
      for (const score of uniqueSortedScores) {
        if (gitsScore >= score) {
          break;
        }
        rank++;
      }
      rankings.push(rank);
    }
  
    return rankings;
  }
  
  // Contoh penggunaan fungsi
  const scores = [100, 100, 50, 40, 40, 20, 10];
  const gitsScores = [5, 25, 50, 120];
  
  const result = denseRanking(scores, gitsScores);
  console.log(result); // Output: [6, 4, 2, 1]
  