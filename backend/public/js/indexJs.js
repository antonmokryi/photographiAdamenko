let btnPrice = document.querySelectorAll(".btnPrice");
let btnContact = document.querySelectorAll(".btnContact");
let Price = document.querySelector(".work-style");
let Contact = document.querySelector(".footer");


document.querySelector('.header__burger').addEventListener('click', ()=>{
     document.querySelector('.burger__menu').classList.toggle('active')
})


//BTN scroll
for (let i = 0; i < btnPrice.length; i++){
btnPrice[i].addEventListener("click", function () {
  return Price.scrollIntoView({ block: "start", behavior: "smooth" });
});
}


for (let i = 0; i < btnContact.length; i++){
btnContact[i].addEventListener("click", function () {
  Contact.scrollIntoView({ block: "start", behavior: "smooth" });
});
}

///

/// script swiper
const swiper = new Swiper(".swiper", {
     // Optional parameters
     autoplay: {
       delay: 2000,
       disableOnInteraction: false,
     },
     loop: true,
   });
/////