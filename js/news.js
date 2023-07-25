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