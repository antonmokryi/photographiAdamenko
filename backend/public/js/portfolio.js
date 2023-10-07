
for (
  let i = 0;
  i < document.querySelectorAll(".portfolio-item").length;
  i++
) {
  document
    .querySelectorAll(".portfolio-item")
    [i].addEventListener("click", (e) => {
     if (!e.target.classList.contains('swiper-close_btn')) {
      document
        .querySelectorAll(".portfolio-item")
        [i].querySelector(".swiper-item").style.display = "flex";
     }
      
      
    
    });
}




for (let i = 0; i < document.querySelectorAll('.swiper-close').length; i++){
  alert(1)
document.querySelectorAll('.swiper-close')[i].addEventListener('click', ()=>{
  // nada sdelat for()
  document.querySelectorAll('.swiper-item')[i].style.display = "none"
})
}

// let category = document.querySelectorAll(".category");
// // let data_category = document.querySelectorAll('[data-category]');
// for (let i = 0; i < category.length; i++) {
//   category[i].addEventListener("click", () => {
//     let portfolio_item = document.querySelectorAll(".portfolio-item");
//     for (let i = 0; i < portfolio_item.length; i++) {
//       portfolio_item[i].style.display = "none";
//     }
//     let activeCategory = category[i].dataset.category;
//     for (let i = 0; i < portfolio_item.length; i++) {
//       if (portfolio_item[i].dataset.category == activeCategory) {
//         portfolio_item[i].style.display = "flex";
//       } else if (portfolio_item[5].dataset.category == activeCategory) {
//         portfolio_item[i].style.display = "flex";
//       }
//     }
//   });
// }

document.querySelector(".all").addEventListener("click", () => {
  let portfolio_item = document.querySelectorAll(".portfolio-item");
  for (let i = 0; i < portfolio_item.length; i++) {
    portfolio_item[i].style.display = "flex";
  }
});

// let category_item = document.querySelectorAll(".category-item");
// for (i = 0; i < category_item.length; i++) {
//   category_item[i].addEventListener("click", (e) => {
//     for (j = 0; j < category_item.length; j++) {
//       category_item[j].classList.remove("category-item_active");
//     }
//     e.target.classList.add("category-item_active");
//   });
// }








console.log(
  document.querySelectorAll(".portfolio-item")
)


const swiper = new Swiper(".swiper-item", {
  // Optional parameters
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

for (let i = 0; i < document.querySelectorAll(".portfolio-item").length; i++) {
  document
    .querySelectorAll(".portfolio-item")
    [i].addEventListener("click", () => {
      
      document.querySelectorAll(".portfolio-item")[i].querySelector(".swiper-item").style.display = "flex";
    });
}

let category = document.querySelectorAll(".category");
// let data_category = document.querySelectorAll('[data-category]');
for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", () => {
    let portfolio_item = document.querySelectorAll(".portfolio-item");
    for (let i = 0; i < portfolio_item.length; i++) {
      portfolio_item[i].style.display = "none";
    }
    let activeCategory = category[i].dataset.category;
    for (let i = 0; i < portfolio_item.length; i++) {
      if (portfolio_item[i].dataset.category == activeCategory) {
        portfolio_item[i].style.display = "flex";
      } else if (portfolio_item[i].dataset.category == activeCategory) {
        portfolio_item[i].style.display = "flex";
      }
    }
  });
}

document.querySelector(".all").addEventListener("click", () => {
  let portfolio_item = document.querySelectorAll(".portfolio-item");
  for (let i = 0; i < portfolio_item.length; i++) {
    portfolio_item[i].style.display = "flex";
  }
});

let category_item = document.querySelectorAll(".category-item");
for (i = 0; i < category_item.length; i++) {
  category_item[i].addEventListener("click", (e) => {
    for (j = 0; j < category_item.length; j++) {
      category_item[j].classList.remove("category-item_active");
    }
    e.target.classList.add("category-item_active");
  });
}

// document.querySelectorAll(".header__burger").addEventListener("click", () => {
//   document.querySelectorAll(".burger__menu").classList.toggle("active");
// });



