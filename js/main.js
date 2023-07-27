//SCROLL HEADER
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

// SLIDER

let bigTitle1 = document.querySelector("#big1");
let title1 = document.querySelector(".title-left");
setTimeout(function () {
  bigTitle1.classList.remove("animate__fadeInDown");
  title1.classList.remove("animate__fadeInUp");
}, 2000);
// console.log(title);

var elem = document.querySelector(".slider-top");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  // autoPlay: 3000,
  // autoPlay:true,
  on: {
    change: function (index) {
      // console.log(index);
      let number = document.querySelector(`.title-right .number1`);
      number.textContent = `0${index + 1}`;
      let bigTitle = document.querySelector(`#big${index + 1}`);
      bigTitle.classList.add("animate__fadeInDown");
      title1.classList.add("animate__fadeInUp");

      setTimeout(function (e) {
        bigTitle.classList.remove("animate__fadeInDown");
        title1.classList.remove("animate__fadeInUp");
      }, 2000);
    },
  },
});

// element argument can be a selector string
//   for an individual element
let product = document.querySelector(".product-img");
var sp = new Flickity(product, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  // prevNextButtons:false,
  // autoPlay: 2000,
  pageDots: false,
  on: {
    change: function (index) {
      let listProduct = document.querySelectorAll(".product-left");
      listProduct.forEach((item) => item.classList.toggle("active"));
    },
  },
});
// PRODUCT HOT2

// console.log(window.innerWidth);

window.addEventListener("resize", (e) => {
  console.log(123);
  if (e.currentTarget.innerWidth < 1199&&e.currentTarget.innerWidth > 769) {
    document.querySelector(".slider-top ").style.height =
      "700px";
      document.querySelector(".slider-top > .flickity-viewport ").style.height =
      "700px";
  } else if (e.currentTarget.innerWidth < 769 ) {
    console.log(123);
    document.querySelector(".slider-top ").style.height =
      "480px";
      document.querySelector(".slider-top > .flickity-viewport ").style.height =
      "480px";
    document.querySelector('.list-product2').style.display='block';
    $(".list-product2").not(".slick-initialized").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 1,
      arrows: false,
    });
  }
});

// Earth Parrallax

parallaxEarth = function () {
  var bodywidth = document.querySelector("body").offsetWidth;
  //console.log(bodywidth)
  document.addEventListener("mousemove", function (e) {
    // getting mouse dimentions
    var mouseX = e.pageX;
    var now = (15 * (mouseX - bodywidth / 2)) / bodywidth;
    document.querySelector(".earth").style.transform =
      "rotate(" + now + "deg) translateX(-50%)";
    document.querySelector(".earth").style.transformOrigin = "0% 50%";

    // {
    //   "transform:": "rotate(" + now + "deg) translateX(-50%)",
    //   "-webkit-transform": "rotate(" + now + "deg) translateX(-50%)",
    //   "-o-transform": "rotate(" + now + "deg) translateX(-50%)",
    //   "transform-origin": "0% 50%",
    //   "-webkit-transform-origin": "0% 50%",
    //   "-o-transform-origin": "0% 50%",
    // };
  });
};

document.addEventListener("DOMContentLoaded", () => {
  $(".list-product2").not(".slick-initialized").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
  });
  parallaxEarth();
});

// CLICK BAR

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

// LOAD
let preload = document.getElementById("Loaded");

window.addEventListener("load", function () {
  preload.style.display = "none";
});
