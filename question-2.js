const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let scoreOver50 = students.filter((a) => a.score > 50);
console.log(scoreOver50);

scoreOver50 = scoreOver50.map((plus10) => plus10.score + (plus10.score * 0.1)).reduce((a,b) => a+b,0);

console.log(`Total score is ${scoreOver50}`)

