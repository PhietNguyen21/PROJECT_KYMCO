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
// ADD ACTIVE
var listTag = document.querySelectorAll(".tag-content");
// console.log(listTag);
for (var i = 0; i < listTag.length; i++) {
  listTag[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";


    let allProduct=document.querySelector('.all-product');
    let choseProduct=document.querySelector('.choseProduct');
    console.log(choseProduct);
    if(this.classList.contains('tagall'))
    {
      allProduct.style.display='block';
      choseProduct.style.display='none';
    }else{
      allProduct.style.display='none';
      choseProduct.style.display='block';
    }
  });
}

// CLICK CHOSE CAR
let listCar = document.querySelectorAll(".itemCar");
listCar.forEach((item) =>
  item.addEventListener("click", function () {
    for (var i = 0; i < listCar.length; i++) {
      if (listCar[i].classList.contains("active")) {
        listCar[i].classList.remove("active");
      }
    }
    this.classList.toggle("active");
    let img = this.querySelector("img");
    img.src = "img1/img/iconWhite.png";

    for (var i = 0; i < listCar.length; i++) {
      if (listCar[i] !== this) {
        let imgblack = listCar[i].querySelector("img");
        imgblack.src = "img1/img/iconBlack.png";
      }
    }
  })
);

// CLICK BANG LAI

let listHybrid = document.querySelectorAll(".itemHybird");
listHybrid.forEach((item) =>
  item.addEventListener("click", function () {
    for (var i = 0; i < listHybrid.length; i++) {
      if (listHybrid[i].classList.contains("active")) {
        listHybrid[i].classList.remove("active");
      }
    }
    this.classList.toggle("active");
  })
);

// Change Price

const rangeInput = document.querySelectorAll(
  '.range-input input[type="range"]'
);

const progress = document.querySelector(".slider .progress");

let priceGap = 1000;

let priceMin = document.querySelector("#min");
let priceMax = document.querySelector("#max");
rangeInput.forEach((input) =>
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceMin.innerHTML = minVal + "$";
      priceMax.innerHTML = maxVal + "$";
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  })
);

// CHOSE SEX

let choseSex = function () {
  let listSex = document.querySelectorAll(".chose__sex .itemSex");

  listSex.forEach(function (item) {
    item.addEventListener("click", function () {
      for (const key of listSex) {
        if (key.classList.contains("active")) {
          key.classList.remove("active");
        }
      }
      this.classList.toggle("active");

      let woman = document.querySelector(".chose__sex .woman");
      let imgCurrent = woman.querySelector("img");
      imgCurrent.src = "img1/img/wonmenWhite.png";

      for (let i = 0; i < listSex.length; i++) {
        // MAN
        if (listSex[i].classList.contains("man") && listSex[i] !== this) {
          let img = listSex[i].querySelector("img");

          img.src = "img1/img/menBlack.png";
        }
        // WOMAN
        else if (
          listSex[i].classList.contains("woman") && listSex[i] !== this ) {
          let imgMan = listSex[0].querySelector("img");
          imgMan.src = "img1/img/menWhite.png";
          let img = listSex[i].querySelector("img");
          img.src = "img1/img/womanBlack.png";
        }
      }
    });
  });
};

// Swap product





choseSex();


function clickBar(){
  let bar=document.querySelector('.bar');
  let menu=document.querySelector('.menu-respon');
  let line1=document.querySelector('.line1');
  let line2=document.querySelector('.line2');
  let line3=document.querySelector('.line3');
  let temp=1;
  bar.addEventListener('click',function(){
    temp++;
    if(temp%2===0)
    {
      menu.style.display='block';
    line1.style.transform=`rotate(-45deg) translate(-9px, 8px)`;
    line2.style.display='none';
    line3.style.transform=`rotate(45deg) translate(2px, 3px)`
    }else{
      menu.style.display='none';
      line1.style.transform=`none`;
      line2.style.display='block';
      line3.style.transform=`none`
      temp=1;
    }
  })
}

clickBar();




// OWL CAROUSEL NEXT ,PREV

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');

})