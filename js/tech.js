let valid = new Validation();

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

// VALIDATION FORM
function validation(e) {
  let name = document.getElementById('ten');
  let mail = document.getElementById('mail');
  let phone = document.getElementById('sdt');
  let tit = document.getElementById('title');
  let ques = document.getElementById('question');

  console.log(name.nextElementSibling.style);
  console.log(mail.value);
  console.log(phone.value);
  let loi = 0;
  if (!valid.kiemTraRong(name.value, "ten")) {
    loi++;
    name.nextElementSibling.style.display = "block";
  } else {
    name.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(mail.value, "mail")) {
    loi++;
    mail.nextElementSibling.style.display = "block";
  } else {
    mail.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(phone.value, "sdt")) {
    loi++;
    phone.nextElementSibling.style.display = "block";
  } else {
    phone.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(tit.value, "title")) {
    loi++;
    tit.nextElementSibling.style.display = "block";
  } else {
    tit.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(ques.value, "question")) {
    loi++;
    ques.nextElementSibling.style.display = "block";
  } else {
    ques.nextElementSibling.style.display = "none";
  }

//   Kiem tra email

  if(valid.kiemTraEmail(mail.value)){
    mail.style.borderBottom='2px solid green';
    mail.nextElementSibling.style.display = "none";
  }else{
    mail.style.borderBottom='2px solid red';
    mail.nextElementSibling.style.display = "block";
    loi++;
  }


// Kiem tra Number
  if(valid.kiemTraNumber(phone.value)){
    phone.style.borderBottom='2px solid green';
    phone.nextElementSibling.style.display = "none";
  }else{
    phone.style.borderBottom='2px solid red';
    phone.nextElementSibling.style.display = "block";
    loi++;
  }
  if(loi!=0)
  {
    return false;
  }
}


function SUBMIT(e){
    if(validation(e)===false){
        e.preventDefault();
    }
}


// BAR CLICK


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
