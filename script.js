const menu = [
  {
    id: 1,
    title: " Shahi paneer",
    price: 23,
    img: "./images/2-2-food-png-hd.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "breakfast",
    total: 23
  },

  {
    id: 2,
    title: "Upma",
    price: 73,
    img: "images/138829-barbecue-chicken-serving-free-transparent-image-hq.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "lunch",
    total: 73
  },
  {
    id: 3,
    title: "Tabakh Maaz",
    price: 03,
    img: "images/food-13559.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "breakfast",
    total:03
  },
  {
    id: 4,
    title: " Mysore Pak",
    price: 13,
    img: "images/5a38bc13c36c77.5672144515136676038005.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "lunch",
    total:13
  },
  {
    id: 5,
    title: "Bhaghare Baingan",
    price: 67,
    img: "images/kisspng-caesar-salad-wrap-vinaigrette-greek-salad-salad-png-file-5a74c77f87a262.6065439315176026875556.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "lunch",
    total:67
  },
  {
    id: 6,
    title: "Chicken Tikka",
    price: 07,
    img: "images/kisspng-feijoada-churrasco-caipirinha-farofa-meat-transparent-5b0427865d2ee3.9374600215269989183817.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "dinner",
    total:07
  },
  {
    id: 7,
    title: "Bise bele baath",
    price: 09,
    img: "images/kisspng-pupusa-naan-food-indian-cuisine-paratha-victory-clipart-5ad909a752c411.578681131524173223339.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "dinner",
    total:09
  },
  {
    id: 8,
    title: " Puliyodharai",
    price: 45,
    img: "images/kisspng-tandoori-chicken-roast-chicken-barbecue-chicken-fr-tasty-roast-chicken-5a83c1bfea3e88.1641812515185842559595.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "lunch",
    total:45
  },
  {
    id: 9,
    title: " Paturi",
    price: 07,
    img: "images/kisspng-pizza-take-out-pasta-restaurant-food-pastas-5ad80099c25ac2.0240888315241053697961.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "dinner",
    total:07
  },
  {
    id: 10,
    title: "Kaju Katli",
    price: 07,
    img: "images/kisspng-jamaican-cuisine-fried-fish-escabeche-seafood-fried-fish-5abdd5f5b0ad46.8075501615223905177237.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "lunch",
    total:07
  },
  {
    id: 11,
    title: "Hyderabadi Biryani",
    price: 07,
    img: "images/kisspng-hyderabadi-biryani-hyderabadi-cuisine-indian-cuisi-biryani-5abedc2f1bfb68.2886862815224576471146.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "dinner",
    total:07
  },
  {
    id: 12,
    title: " Masala Dosa",
    price: 07,
    img: "images/kisspng-idli-vada-sambar-south-indian-cuisine-dosa-5afff4c78a6163.1384201615267237835668.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt itaque libero illum eius earum quisquam.",
    category: "breakfast",
    total:07
  }
]
const sectionCenter = document.querySelector(".foodMenu");
const btns = document.querySelectorAll(".menuButton");

//loading page
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayPopularItem(popularDishes);
});

//  //Popular DishesARRAY
const popularDishes = [
  {
    title: "Chicken tagine makful",
    price: 30,
    img: "./images/food-13549.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:13
  },
  {
    title: "Chinese chicken salad",
    price: 33,
    img: "./images/food-13528.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:14
  },
  {
    title: "Spring carbonara",
    price: 55,
    img: "./images/food-13563.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:15
  },
  {
    title: "Ravioli Di Erbette",
    price: 75,
    img: "./images/food-13619.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:16
  },
  {
    title: "Seafood and chicken",
    price: 65,
    img: "./images/food-13621.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:17
  },
  {
    title: "Combo",
    price: 49,
    img: "./images/food-13646.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:18
  },
  {
    title: "Forest mushrooms ",
    price: 44,
    img: "./images/food-13627.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:19
  },
  {
    title: "Lemon Chicken Breast",
    price: 39,
    img: "./images/food-13642.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...",
    id:20
  }
]

function displayPopularItem(popularDishes) {
  popularFood = popularDishes.map(function (popularItem) {
    return `<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12  col-lg-55 secCard">
  <div class="cartContainer">
  <div class="addTOCard" onclick="pishesAddtoCart(${popularItem.id})">
    <span class="cart"><i class="fas fa-cart-plus"></i> <p>Add <br>To Cart</p></span>
  </div>
  <img class="seccardImg" src="${popularItem.img}">
  <label>${popularItem.title}</label>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere...</p>
<h2>${popularItem.price}</h2>
  </div></div>`
  });
  let result = popularFood.join("");
  document.querySelector(".displayPopularDeshes").innerHTML = result;
}



//button click filter menu
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnType = e.currentTarget.dataset.cate;

    const foods = menu.filter(function (food) {
      if (food.category === btnType) {
        return food;
      }
    });
    if (btnType === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(foods);
    }
  });
});


//menu item
function displayMenuItems(menu) {
  const result = menu.map(function (item) {
    // console.log(item);
    return `<div class="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-12 ">
    <div class="card  menuItem  mx-2 my-2">
<div class="row g-0">
  <div class="col-md-4 d-flex align-items-center justify-content-center">
    <img src="${item.img}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <p class="card-text menuPrice text-danger">${item.price}</p>
      <button class="menuAddtoCart" onclick="addtoCart(${item.id})">Add to Cart</button>
    </div>
  </div>
</div>
</div>
</div>`
  });


  let menuItemJoin = result.join("");
  document.querySelector(".foodMenu").innerHTML = menuItemJoin;
};

//ADD TO CSART



const card = [];
// POPULAR DISHES ITEMS FOR CARD
function pishesAddtoCart(id) {
  if(card.some(item=> item.id === id)){
alert("this item already in card`")
  }else{
      popularDishes.find(function(dish){
        if (dish.id == id) {
          card.push({
            ...dish,
            quentity: 3,
          });
        }
      })
    }
  render();
  priceRender();
};
//MENU ITEMS FOR CARD
function addtoCart(id) {
  if (card.some(car => car.id === id)) {
    alert("already  in card")
  } else {
    menu.find(function (menuItem) {
      if (menuItem.id == id) {
        card.push({
          ...menuItem,
          quentity: 3,
        });
     
      }
    })
  }
  render();
  priceRender();
  
};

// REMOVE ITEM FROM CART
function removeItem(id) {
  card.map(item=>{
    if (item.id === id) {
      let ind = card.indexOf(item);
      card.splice( ind, 1); 
    }
  });
  render();
  priceRender();
}

 /// IN CARD DIV RENDER 
function render() {
  document.querySelector(".cardes").innerHTML = '';
  card.forEach((ite) => {
    document.querySelector(".cardes").innerHTML += `
  <div class="col-12 col-xl-5 col-lg-5 col-md-9 col-sm-10 addtoCard d-flex justify-content-between" >
  <div class="remove" onclick="removeItem(${ite.id})"> 
    <img class="" src="${ite.img}" alt="">
  </div>
    <div>
    <h5>${ite.title}</h5>
  </div>
<div class="priceBar">
  <p>${ite.price}</p>

   </div> </div>`
  });
}

//TOTAL CART ITEMS PRICES AND TOTAL ITEMS   count
function priceRender() {
 let totalPrice= document.querySelector(".totalPrice");
const ins= card.reduce((accumulator,item)=>{
return accumulator+item.price;
}, 0);
totalPrice.innerHTML = `(${ins})`;
let item = card.length;
document.querySelector('.cartDivHeading').innerHTML=`Total items (${item})`;
document.querySelector('.cartNumber').value=item;
}

//OPEN ADD TO CARD DIV /
document.querySelector('.mainCart').addEventListener('click', ()=>{
  document.querySelector('.popCard').classList.add("addPOPclass");
});
// /* CLOSE/CROSS ICON CART DIV */
document.querySelector('.fa-times-circle').addEventListener('click', ()=>{
  document.querySelector('.popCard').classList.remove("addPOPclass");
});

// LOG IN PAGE
window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(function(){
    document.querySelector('.wind').style.display ="block";
    }, 3000)
})
// clOSE LOG IN PAGE
document.querySelector('.fa-times').addEventListener('click', ()=>{
  document.querySelector('.wind').style.display ="none";
});