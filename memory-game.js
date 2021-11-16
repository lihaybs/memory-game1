const cards = [
  { name: `A` },
  { name: `B` },
  { name: `C` },
  { name: `A` },
  { name: `B` },
  { name: `C` },
];
function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}
function main() {
    console.log([...cards]);
    shuffle(cards)
    console.log(cards);
}

function chack(a,b) {
    console.log(a);
    console.log(b);
  return(a.name==b.name && a!=b)
}

console.log(chack(cards[randRange(0,cards.length)],cards[randRange(0,cards.length)]));
main();

