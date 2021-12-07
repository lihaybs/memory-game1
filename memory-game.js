const cards = [
  { name: `🤬` },
  { name: `😝` },
  { name: `😜` },
  { name: `☠️` },
  { name: `💀` },
  { name: `👺` },
  { name: `👹` },
  { name: `👿` },
  { name: `😈` },
  { name: `😨` },
  { name: `😰` },
  { name: `😡` },
  { name: `🥵` },
  { name: `😅` },
  { name: `😂` },
  { name: `🤣` },
  { name: `🥲` },
  { name: `☺️` },
  { name: `😊` },
  { name: `😟` },
  { name: `😕` },
  { name: `🙁` },
  { name: `☹️` },
  { name: `🥸` },
  { name: `😎` },
  { name: `🤓` },
  { name: `🤬` },
  { name: `😝` },
  { name: `😜` },
  { name: `☠️` },
  { name: `💀` },
  { name: `👺` },
  { name: `👹` },
  { name: `👿` },
  { name: `😈` },
  { name: `😨` },
  { name: `😰` },
  { name: `😡` },
  { name: `🥵` },
  { name: `😅` },
  { name: `😂` },
  { name: `🤣` },
  { name: `🥲` },
  { name: `☺️` },
  { name: `😊` },
  { name: `😟` },
  { name: `😕` },
  { name: `🙁` },
  { name: `☹️` },
  { name: `🥸` },
  { name: `😎` },
  { name: `🤓` },
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
  shuffle(cards);
  console.log(cards);
}

function chack(a, b) {
  console.log(a);
  console.log(b);
  return a.name == b.name && a != b;
}

// setTimeout (function(){
//   alert(`Try again`);
// }, 1000);

// let chack = (arr,i,j) => i != j && arr[i].name === arr[j].name
let i = 0;
let compare = [];
let compareF = (obj) => {
  compare[i] = obj;
  i++;
  console.log(compare);

  if (compare.length == 2) {
    if (
      !(
        compare[0].innerHTML == compare[1].innerHTML &&
        compare[0].id != compare[1].id
      )
    ) {
      setTimeout(() => {
        compare[0].innerHTML = ``;
        compare[1].innerHTML = ``;
        compare[0].onclick = cardClicked;
        compare[1].onclick = cardClicked;
      }, 800);
    }
    setTimeout(() => {
      compare = [];
      i = 0;
    }, 1000);
  }
};

// if (i==2) {
//   for(i of compare){
//     console.log(i);
//   }
//   i=0
//   compare[0] == compare[1] ? console.log(`You right`): console.log(`Try again`);
//   compare=[];
// }

const cardClicked = (evn) => {
  if (i != 2) {
    const cardEl = evn.target;
    cardEl.onclick=``;
    const idx = cardEl.id;
    // console.log(cards[idx]);
    cardEl.innerHTML = cards[idx].name;
    compareF(cardEl);
  }
};

function creatCardElement(idx) {
  const board = document.getElementById("board");
  // console.log(board);
  // document.querySelector("")
  const cardEl = document.createElement("div");
  // cardEl.innerHTML = card.name;
  cardEl.id = idx;
  cardEl.className = "card";
  // cardEl.addEventListener(`click`, f);
  cardEl.onclick = cardClicked;
  // cardEl.onclick = ()=> {
  //   alert(card.name);
  // };

  board.appendChild(cardEl);
}
// console.log(
//   chack(cards[randRange(0, cards.length)], cards[randRange(0, cards.length)])
// );
function main() {
  shuffle(cards);
  for (let idx in cards) {
    creatCardElement(idx);
  }
}


window.onload = () => {
  main();
};
