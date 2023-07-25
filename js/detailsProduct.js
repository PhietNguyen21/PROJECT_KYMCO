let header = document.querySelector("header");
window.addEventListener("scroll", function (e) {
  var scrollY = this.scrollY;
  // console.log(scrollY);
  if (scrollY > 0) {
    header.classList.add("bg");
  } else if (scrollY === 0) {
    header.classList.remove("bg");
  }
});

function clickBar() {
  let bar = document.querySelector(".bar");
  let menu = document.querySelector(".menu-respon");
  let line1 = document.querySelector(".line1");
  let line2 = document.querySelector(".line2");
  let line3 = document.querySelector(".line3");
  let temp = 1;
  bar.addEventListener("click", function () {
    temp++;
    if (temp % 2 === 0) {
      menu.style.display = "block";
      line1.style.transform = `rotate(-45deg) translate(-9px, 8px)`;
      line2.style.display = "none";
      line3.style.transform = `rotate(45deg) translate(2px, 3px)`;
    } else {
      menu.style.display = "none";
      line1.style.transform = `none`;
      line2.style.display = "block";
      line3.style.transform = `none`;
      temp = 1;
    }
  });
}

clickBar();

//   CLICK CHANGE IMG

let listBtn = document.querySelectorAll(".list-btn button");
let img = document.querySelector(".slider_content img");

function ChangeImg(arr) {
  arr.forEach(function (item) {
    item.addEventListener("click", function (e) {
      // ADD ACTIVE
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("active")) {
          arr[i].classList.remove("active");
        }
      }

      item.classList.add("active");
      if (item.classList[0] === "green") {
        img.src = "img1/img/xanhngang_1.png";
      } else if (item.classList[0] === "red") {
        img.src = "img1/img/denngang_1.png";
      } else {
        img.src = "img1/img/dennhamngang.png";
      }
    });
  });
}

ChangeImg(listBtn);

// CLICK HIDDEN SLIDE

let icon = document.querySelector(".icon");
let tb1 = document.querySelector(".tb1");

function clickList(item, tb) {
  item.addEventListener("click", function (e) {
    if (tb.classList.contains("tb-click")) {
      tb.classList.remove("tb-click");
      item.classList.remove("active");
    } else {
      tb.classList.add("tb-click");
      item.classList.add("active");
    }
  });
}

clickList(icon, tb1);

// clickList()

let tb2 = document.querySelector(".tb2");
let icon2 = document.querySelector(".icon2");

// clickList(icon2, tb2);

let listIcon = document.querySelectorAll(".item-head .icon");
let listTb = document.querySelectorAll(".tb");
console.log(listTb);
let temp1 = 1;
let tempIT2 = 1;
let tempIT = 1;
listIcon.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    let tb = document.querySelector(`.tb${index + 1}`);

    // CLICK HIEN DAU +,-
    for (let i = 0; i < listIcon.length; i++) {
      if (
        listIcon[i] !== item &&
        !listIcon[i].getAttribute("class").includes("active")
      ) {
        listIcon[i].classList.add("active");
        // document.querySelector(tb).classList.remove('tb-click');
      }
      item.classList.remove("active");
      // CLICK VAO HIEN RA BANG

      for (let j = 0; j < listTb.length; j++) {
        if (
          listTb[i] !== tb &&
          !listTb[i].getAttribute("class").includes("tb-click")
        ) {
          listTb[i].classList.add("tb-click");
        }
        tb.classList.remove("tb-click");
      }
    }

    if (temp1 % 2 !== 0) {
      // Luu lai bien dang click
      tempIT = this;
      console.log(tempIT);
      // Lan dau` se vao` else
      
      // TH bien1 === bien2 xay ra khi click 1 bien khac
      // console.log(tempIT2);
      if (tempIT === tempIT2) {
        console.log('them active');
        item.classList.add("active");
        tb.classList.add("tb-click");
      } else {
        item.classList.remove("active");
        tb.classList.remove("tb-click");
      }
      temp1++;
    } else {
      // console.log('lan 2');
      // console.log(tempIT);
      // ACtive o day la dau + va tat bang, xoa active hien ra bang
      // Neu an lan` 2 ma` khac voi bien cua lan` 1 thi` cho go ACTIVE
      // console.log('lan 1 chay');
      
      // Lan click 2 khac voi bien lan click 1 ta se gan temp= this
      if (this !== tempIT) {
        this.classList.remove("active");
        tb.classList.remove("tb-click");
        tempIT2 = this;
      } else {
        this.classList.add("active");
        tb.classList.add("tb-click");
      }
      temp1 = 1;
    }
  });
});
