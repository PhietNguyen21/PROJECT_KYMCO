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
  let name = document.custom_form.name;
  let email = document.custom_form.email;
  let tel = document.custom_form.phone;
  let tit = document.custom_form.title;
  let ques = document.custom_form.question;
  let loi = 0;
  if (!valid.kiemTraRong(name.value, "name")) {
    loi++;
    name.nextElementSibling.style.display = "block";
  } else {
    name.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(email.value, "email")) {
    loi++;
    email.nextElementSibling.style.display = "block";
  } else {
    email.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(tel.value, "phone")) {
    loi++;
    tel.nextElementSibling.style.display = "block";
  } else {
    tel.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(tit.value, "tit")) {
    loi++;
    tit.nextElementSibling.style.display = "block";
  } else {
    tit.nextElementSibling.style.display = "none";
  }

  if (!valid.kiemTraRong(ques.value, "ques")) {
    loi++;
    ques.nextElementSibling.style.display = "block";
  } else {
    ques.nextElementSibling.style.display = "none";
  }

//   Kiem tra email

  if(valid.kiemTraEmail(email.value)){
    email.style.borderColor='green';
    email.nextElementSibling.style.display = "none";
  }else{
    email.style.borderColor='red';
    email.nextElementSibling.style.display = "block";
    loi++;
  }


// Kiem tra Number
  if(valid.kiemTraNumber(tel.value)){
    tel.style.borderColor='green';
    tel.nextElementSibling.style.display = "none";
  }else{
    tel.style.borderColor='red';
    tel.nextElementSibling.style.display = "block";
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
