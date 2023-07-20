# Balanced Bracket Checker

ini contoh implementasi fungsi javascript untuk mengecek jika data string memiliki bracket yang setara (balanced brackets checker).

## Fungsi

pertama mendeklarasi sebuah fungsi `isBalancedBracket(str)` dengan menerima input string di dalam fungsi tersebut `str` dan akan mereturn `"YES"` jika bracket yang dimiliki setara, dan jika tidak maka akan mereturn dengan nilai`"NO"`.

### Contoh

```javascript
console.log(isBalancedBracket("{[()]}")); // Output: YES
console.log(isBalancedBracket("{[(])}")); // Output: NO
console.log(isBalancedBracket("{(([])[])[]}")); // Output: YES
```

Pada contoh pertama, `{[()]}`, tanda kurungnya seimbang, sehingga outputnya adalah "YES". Pada contoh kedua, `{[(])}`, tanda kurungnya tidak seimbang, sehingga outputnya adalah "NO". Pada contoh ketiga, `{(([])[])[]}`, tanda kurungnya seimbang, sehingga outputnya adalah "YES".
## Penerapan

Fungsi ini menggunakan struktur data tumpukan (stack) untuk mencatat tanda kurung pembuka yang dijumpai saat melintasi string. Untuk setiap tanda kurung penutup, fungsi ini memeriksa apakah tanda kurung pembuka yang sesuai berada di bagian atas tumpukan. Jika tanda kurungnya seimbang, tumpukan akan kosong pada akhir perjalanan.


Fungsi tersebut menjaga himpunan (set) dari tanda kurung pembuka dan sebuah peta (map) dari tanda kurung penutup beserta tanda kurung pembuka yang sesuai untuk memeriksa dengan efisien apakah tanda kurung tersebut seimbang.

### Kompleksitas

Implementasi tersebut memiliki kompleksitas waktu linear O(n) karena setiap karakter dalam string masukan diproses sekali. Kompleksitas ruangnya juga O(n) karena penggunaan tumpukan (stack)

### Tanda Kurung yang Didukung

Fungsi ini mendukung Tanda kurung berikut:
- Tanda kurung bulat: `( )`
- Tanda kurung siku: `[ ]`
- Tanda kurung kurawal: `{ }`

## Cara Penggunaan

1. Copy the `isBalancedBracket` function into your JavaScript code.
1.Salin fungsi `isBalacedBracket` kedalam kode javaScript Anda
2. Call the function with a string containing brackets as the argument.
2.Panggil fungsi dengan sebuah string yang berisi tanda kurung sebagai argumen.
3. Fungsi akan mengembalikan nilai `"YES"` jika tanda kurungnya seimbang, dan `"NO"`jika sebaliknya.


