let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let modal = document.querySelector(".modal-wrapper");
let blkgb = document.querySelector(".modal-bg");

let li = document.querySelectorAll("li");
let list = [...li];
let test = [];

// console.log(list.classes.contains("listSelected"));
let listSelected = document.querySelector(".tab-menu--selected");
let listLength = list.length;

let tabEl = document.querySelectorAll(".tab-content");
let tabEls = [...tabEl];
console.log(tabEls);
// $(".tab-content").addClass("blue");
let ulEl = document.querySelector("ul");
for (let i = 0; i < list.length; i++) {
  // list[i].setAttribute("data-index", i);
  // list[i].dataset.id = i;
  list[i].setAttribute("data-id", i);
  // tabEl[i].dataset.id = i;
}
ulEl.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.currentTarget);
  console.log("this", this);
  // openTab(e.target.dataset.id);
  openTab(e.target.getAttribute("data-id"));
});

// console.log(ulEl);
// list.forEach((el, i) => {
//   list[i].dataset.index = i;
//   tabEl[i].dataset.index = i;
// });

// for (let i = 0; i < list.length; ++i) {
//   list[i].addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.currentTarget);

//     list.forEach((el, index) => {
//       console.log(i, index);
//       if (index == i) {
//         el.classList.add("tab-menu--selected");
//       } else {
//         el.classList.remove("tab-menu--selected");
//       }
//     });
//     tabEls.forEach((el, index) => {
//       console.log(i, index);
//       if (index == i) {
//         el.classList.add("tab-content--active");
//       } else {
//         el.classList.remove("tab-content--active");
//       }
//     });
//   });
// }

// for (let i = 0; i < list.length; ++i) {
//   list[i].addEventListener("click", (e) => {
//     console.log(e);
//     // console.log(e.target.dataset.id);
//     console.log(e.currentTarget);
//     // console.log(i);
//     openTab(e);
//   });
// }
function openTab(index) {
  list.forEach((el) => el.classList.remove("tab-menu--selected"));
  tabEls.forEach((el) => el.classList.remove("tab-content--active"));
  tabEls[index].classList.add("tab-content--active");
  list[index].classList.add("tab-menu--selected");
}
// openTab(2);

// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener("click", function () {
//     if (i == 0) {
//       tabEls[i].classList.add("tab-content--active");
//       list[i].classList.add("tab-menu--selected");
//       console.log(`참, i: ${i}`);
//     } else {
//       if (i == 1) {
//         tabEls[i].classList.add("tab-content--active");
//         list[i].classList.add("tab-menu--selected");
//         console.log(`참, i: ${i}`);
//       } else {
//         tabEls[i].classList.add("tab-content--active");
//         list[i].classList.add("tab-menu--selected");
//         console.log(`참, i: ${i}`);
//       }
//     }
//   });
//   list.forEach((el, j) => {
//     tabEls[j].classList.remove("tab-content--active");
//     el.classList.remove("tab-menu--selected");
//     console.log(`지우기, j: ${j}`);
//   });
// }

// list[0].addEventListener("click", function () {
//   console.log(0);
//   for (let i = 0; i < list.length; i++) {
//     if (i == 0) {
//       tabEls[i].classList.add("tab-content--active");
//       list[i].classList.add("tab-menu--selected");
//     } else {
//       tabEls[i].classList.remove("tab-content--active");
//       list[i].classList.remove("tab-menu--selected");
//     }
//   }
// });
// list[1].addEventListener("click", function () {
//   console.log(1);
//   for (let i = 0; i < list.length; i++) {
//     if (i == 1) {
//       tabEls[i].classList.add("tab-content--active");
//       list[i].classList.add("tab-menu--selected");
//     } else {
//       tabEls[i].classList.remove("tab-content--active");
//       list[i].classList.remove("tab-menu--selected");
//     }
//   }
// });

// list.forEach(function (el, i) {
//   el.addEventListener("click", function () {
//     // for (let i = 0; i < list.length; ++i) {
//     if (i == 0) {
//       el.classList.add("tab-menu--selected");
//       tabEls[i].classList.add("tab-content--active");
//       el.classList.remove("tab-menu--selected");
//       tabEls[i].classList.remove("tab-content--active");
//     } else if (i == 1) {
//     } else if (i == 2) {
//     }
//     // }
//   });
// });

// let hasSelected = function () {
//   for (let j = 0; j < listLength; j++) {
//     list[j].classList.contains("tab-menu--selected");
//     console.log(list[j], list[j].classList.contains("tab-menu--selected"));
//   }
// };

// hasSelected();

//클릭시 추가 이외의것들은 제외
// for (let i = 0; i < listLength; i++) {
//   list[i].addEventListener("click", () => {
//     // if (hasSelected()) {
//     if (list[i].classList.contains("tab-menu--selected")) {
//       list[i].classList.toggle("tab-menu--selected");
//     } else {
//       list[i].classList.toggle("tab-menu--selected");
//     }
//   });
// }
// list[0].addEventListener("click", () => {
//   tabEls[0].classList.add("tab-content--active");
//   list[0].classList.add("tab-menu--selected");
//   tabEls[1].classList.remove("tab-content--active");
//   list[1].classList.remove("tab-menu--selected");
//   tabEls[2].classList.remove("tab-content--active");
//   list[2].classList.remove("tab-menu--selected");
// });
// 클릭했을때 add, 나머지는 remove

// [0]을 클릭하면 add=[0], remove=[1][2] / [0+1][0+2]
// [1]을 클릭하면 add=[1], remove=[0][2] / [1-1][1+1]
// [2]을 클릭하면 add=[2], remove=[0][1] / [2-2][2-1]

//0~2까지 돌 동안 0일때만 뭐를 해라...

// list[0].addEventListener("click", () => {
//   for (let i = 0; i < list.length; i++) {
//     if (i == 0) {
//       tabEls[i].classList.add("tab-content--active");
//       list[i].classList.add("tab-menu--selected");
//     } else {
//       tabEls[i].classList.remove("tab-content--active");
//       list[i].classList.remove("tab-menu--selected");
//     }
//   }
// });
// list[1].addEventListener("click", () => {
//   for (let i = 0; i < list.length; i++) {
//     if (i == 1) {
//       tabEls[i].classList.add("tab-content--active");
//       list[i].classList.add("tab-menu--selected");
//     } else {
//       tabEls[i].classList.remove("tab-content--active");
//       list[i].classList.remove("tab-menu--selected");
//     }
//   }
// });
// list[2].addEventListener("click", () => {
//   for (let i = 0; i < list.length; i++) {
//     if (i == 2) {
//       tabEls[i].classList.add("tab-content--active");
//       list[i].classList.add("tab-menu--selected");
//     } else {
//       tabEls[i].classList.remove("tab-content--active");
//       list[i].classList.remove("tab-menu--selected");
//     }
//   }
// });

// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener("click", () => {
//     for (let i = 0; i < list.length; i++) {
//       if (i == 0) {
//         tabEls[i].classList.add("tab-content--active");
//         list[i].classList.add("tab-menu--selected");
//         console.log("0자리");
//       } else if (i == 1) {
//         tabEls[i].classList.add("tab-content--active");
//         list[i].classList.add("tab-menu--selected");
//         console.log("1자리");
//       } else if (i == 2) {
//         tabEls[i].classList.add("tab-content--active");
//         list[i].classList.add("tab-menu--selected");
//         console.log("2자리");
//       } else {
//         tabEls[i].classList.remove("tab-content--active");
//         list[i].classList.remove("tab-menu--selected");
//         console.log("else");
//       }
//     }
//     console.log("리턴");
//     return;
//   });
// }

// list[0].addEventListener("click", () => {
//   tabEls[0].classList.add("tab-content--active");
//   list[0].classList.add("tab-menu--selected");
//   tabEls[1].classList.remove("tab-content--active");
//   list[1].classList.remove("tab-menu--selected");
//   tabEls[2].classList.remove("tab-content--active");
//   list[2].classList.remove("tab-menu--selected");
// });

// list[1].addEventListener("click", () => {
//   tabEls[1].classList.add("tab-content--active");
//   list[1].classList.add("tab-menu--selected");
//   tabEls[0].classList.remove("tab-content--active");
//   list[0].classList.remove("tab-menu--selected");
//   tabEls[2].classList.remove("tab-content--active");
//   list[2].classList.remove("tab-menu--selected");
// });

// list[2].addEventListener("click", () => {
//   tabEls[2].classList.add("tab-content--active");
//   list[2].classList.add("tab-menu--selected");
//   tabEls[0].classList.remove("tab-content--active");
//   list[0].classList.remove("tab-menu--selected");
//   tabEls[1].classList.remove("tab-content--active");
//   list[1].classList.remove("tab-menu--selected");
// });

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

blkgb.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target); // 실제로 클릭된곳
  console.log(e.currentTarget); //이벤트리스너가 부착된곳

  // console.log(blkgb);
  //클릭한게 진짜 검은색이에요?
  if (e.target == blkgb) {
    modal.style.display = "none";
  }
});
