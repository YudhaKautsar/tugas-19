const kata = 'Semangat...';

console.log(kata.repeat(5));

const bintang = "*";
for (var baris = 5, bbintang=5; baris > 0; baris--) {
    console.log(bintang.repeat(bbintang));
    bbintang+=20;
}
for (var baris = 0, bbintang=65; bbintang > 0;) {
    console.log(bintang.repeat(bbintang));
    bbintang-=20;
}