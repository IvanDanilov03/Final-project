// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);




// const time = 1000;
// const step = 10;

// function outNum(num, elem){
//   let l = document.querySelector('#' + elem);
//   n = 0;
//   let t = Math.round(time / (num / step));
//   let interval = setInterval(() => {
//     n = n + step;
//     if(n == num){
//       clearInterval(interval);
//     }
//     l.innerHTML = n;
//   }, t)
// }


// isScrolledIntoView(outNum(9870, 'numbers__item__title-num-one'))
// outNum(8760, 'numbers__item__title-num-two')

// outNum(7890, 'numbers__item__title-num-three')

// outNum(60, 'numbers__item__title-num-four')

