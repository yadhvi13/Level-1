// var home = document.querySelector("#home");
// home.style.color = "red";
// // home.innerHTML = "<i>Hey kaise ho <i/>"
// // home.textContent = "achhhaaa";

// home.addEventListener('mouseenter', function(){
//     home.style.color = "blue";
// })

// home.addEventListener('mouseleave', function(){
//     home.style.color = "red";
// })

var arr = [
    {name: "petals of roses", image: "https://i.pinimg.com/736x/57/03/6b/57036bd208563a11b5a593fc53b3af98.jpg"},
    {name: "animals of town", image: "https://i.pinimg.com/736x/71/f3/7b/71f37bb4683a455344814e34e4ee169f.jpg"},
    {name: "the crowd of city", image: "https://i.pinimg.com/736x/82/a7/f4/82a7f41cd22ec7c9aa32e4e3a92b2478.jpg"},
    {name: "fruits of planet", image: "https://i.pinimg.com/736x/44/41/58/4441584c95a505aa32af278fbd1ccec2.jpg"},
    {name: "orange peeled", image: "https://i.pinimg.com/736x/41/f8/15/41f8155d4d97610df942aa79d87cd0cf.jpg"},
    {name: "web design", image: "https://i.pinimg.com/736x/b3/6d/da/b36dda1fae3bd7b52f38a0a2a7dd2f05.jpg"},
    {name: "apple juice", image: "https://i.pinimg.com/736x/6e/c4/55/6ec45520adbe08cc446d588d5708ef5f.jpg"},
    {name: "crochet", image: "https://i.pinimg.com/736x/2e/26/3c/2e263cb2b6afa5ec3e716dad277bdbd8.jpg"},
    {name: "vogue", image: "https://i.pinimg.com/736x/94/cc/78/94cc7873c8bec348390f5c5239c4d264.jpg"},
    {name: "jewels", image: "https://i.pinimg.com/736x/32/8e/97/328e973e684d1fe27faaab2c15bf9b47.jpg"},
    {name: "pasta", image: "https://i.pinimg.com/736x/5a/ae/9c/5aae9cfd9ce8336498112334c5c59650.jpg"},
    {name: "rabit", image: "https://i.pinimg.com/736x/5c/7e/aa/5c7eaa83e3ff71331ea580a094c4bad0.jpg"},
    {name: "nails", image: "https://i.pinimg.com/736x/ba/1e/b7/ba1eb7dd504655cb72c1b96efc284487.jpg"},
    {name: "cute dogs", image: "https://i.pinimg.com/736x/13/02/1b/13021bd22d0ae2ab4ddfa2ccec0064be.jpg"},
    {name: "skincare", image: "https://i.pinimg.com/736x/81/76/de/8176deb50d94cc43493d21149c15961f.jpg"},
    {name: "kiwis", image: "https://i.pinimg.com/736x/8f/d5/16/8fd516a6fd2c88e74c9625b932df6f71.jpg"},
    {name: "Asthetic Cardigans", image: "https://i.pinimg.com/736x/3e/c6/23/3ec623c2195c185968d1eec895ca457f.jpg"},
    {name: "crossiants", image: "https://i.pinimg.com/736x/f3/3e/ce/f33ece09d66e18e0f1863e88e3897e09.jpg"},
    {name: "sea", image: "https://i.pinimg.com/736x/eb/1d/be/eb1dbe3b0ec1a7b79ea9dc31be7d9c70.jpg"},
    {name: "Red rose", image: "https://i.pinimg.com/736x/c2/53/30/c253306b9dceae446cbaab0f62b5a8d4.jpg"},
    {name: "asthetic", image: "https://i.pinimg.com/736x/21/80/31/2180312dfdd3f1d062ee57c2d2c59a2b.jpg"}
]


// var clutter = "";
function showTheCards(){
  var clutter = "";  
  arr.forEach(function(obj){
       clutter = clutter + `<div class="box">
       <img class="cursor-pointer" src="${obj.image}" />
       <div class="caption">lorem ipsum</div>
       </div>`;
  })
//   console.log(clutter);
document.querySelector(".container").innerHTML = clutter;
  
}

function handleSearchFunctionality(){
   var input = document.querySelector("#searchinput");
   
 input.addEventListener("focus", function(){
 document.querySelector(".overlay").style.display = "block";
 })

 input.addEventListener("blur", function(){
 document.querySelector(".overlay").style.display = "none";
 })

 input.addEventListener("input", function(){
    // if(input.value === '');
    // console.log(input.value);
  const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
//   console.log(filterdArray);
  var blank = '';
  filteredArray.forEach(function(obj){
   blank = blank + `<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.name}</h3>
   </div>`
  })

  document.querySelector(".searchdata").style.display= "block";
  document.querySelector(".searchdata").innerHTML = blank;
 })



//   document.querySelector("#searchinput").addEventListener("focus", function(){
//     // console.log('hey');
//     document.querySelector(".overlay").style.display = "block";
    
//   })

//   document.querySelector("#searchinput").addEventListener("blur", function(){
//     document.querySelector(".overlay").style.display = "none";
    
//   })

//   document.querySelector("#searchinput").addEventListener("input", function(){
//     console.log("hello aa gya mai");
    
//   })
}
showTheCards();
handleSearchFunctionality();