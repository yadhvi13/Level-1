//show real products

var products = [
   {name: "Cloud Chair", headline: "Soft like Cloud", price: "15,000", image: "https://i.pinimg.com/736x/00/71/11/0071110882356dcfe138a82494212e1f.jpg"},
   {name: "Shell jewels", headline: "Cowry shells jewellery", price: "550", image: "https://i.pinimg.com/736x/91/70/1f/91701f0ec44a0885ac5e8fd13a644c9a.jpg"},
   {name: "Perfumes", headline: "Smells like a dream", price: "2300", image: "https://i.pinimg.com/736x/b9/91/3a/b9913a337ba900baf5a5a4006a4e4f77.jpg"},
];

var popular = [
   {name: "Cloud Nine Chair", headline: "Soft and Cushiony", price: "17,500", image: "https://i.pinimg.com/736x/82/c1/13/82c11334fc8a877b5c320c6fa61a111f.jpg"},
   {name: "Cowry Jewels", headline: "Cowry Accessiors", price: "950", image: "https://i.pinimg.com/736x/6b/25/bd/6b25bdba23050f6809463d4ce2e9ff03.jpg"},
   {name: "Dream Perfume", headline: "Smells like Strawberry", price: "4700", image: "https://i.pinimg.com/736x/cd/a9/46/cda9461c70f19a176839317751be3d7d.jpg"},
];

var cart = [];

function addProduct(){
    var clutter = "";
products.forEach(function(product,index){
     clutter = clutter + ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                 <img class="w-full h-full object-cover overflow-hidden rounded-xl" src="${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight"> ${product.name} </h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2"> &#8377; ${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
})
document.querySelector(".products").innerHTML = clutter;
}


function addPopularProducts(){
    var blank = "";
    popular.forEach(function(product){
    blank = blank + ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                    </div>
                </div>`;
});
document.querySelector(".populars").innerHTML = blank;  
}

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        // alert("product added");
        if(details.target.classList.contains('add')){
            // console.log("added to cart");
            cart.push(products[details.target.dataset.index])
            // console.log(cart);
      
        }
        
    })
}

function showCart(){
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(prod, index){
            clutter = clutter + `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
              <img class="w-full h-full object-cover rounded" src="${prod.image}" />
            </div>
            <div>
               <h3 class="font-semibold">${prod.name}</h3>
               <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
            </div> 
           </div> `;
        })
        document.querySelector(".cartexpnd")
        .innerHTML = clutter;
    });
}

addProduct();
addPopularProducts();
addToCart();
showCart();

// show real popular products
//onclick of product add buuton add it to the cart