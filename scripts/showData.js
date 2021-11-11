//getData()
//append()

// For Home Page index.html
async function getData(url){

    let res = await fetch (url)
    let data = await res.json()

    return data

}


function append(products){

    products.forEach(function(product){
        let div = document.createElement('div')

        let img = document.createElement('img')

        img.src = product.image;

        let name = document.createElement('p')

        name.innerText = product.title;

        let price = document.createElement('p')

        price.textContent = `₹ ${product.price}`;

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";
        
        btn.onclick = function() {
          addToCart(product);

        }
        let btndetails = document.createElement("button");
        btndetails.innerText = "View Details";
        
        btndetails.onclick = function() {
          addToCart(product);

        }

        div.append(img, name, price, btn,btndetails);

        container.append(div);

    })

}

if (localStorage.getItem("cart") == null){
    localStorage.setItem("cart", JSON.stringify([]));

  }

  function addToCart(p){
    
    let cart_data = JSON.parse(localStorage.getItem("cart"));//got it in array formate

    cart_data.push(p);

    localStorage.setItem("cart", JSON.stringify(cart_data));



  }


export {getData,append,addToCart}