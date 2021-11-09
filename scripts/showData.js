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

        price.innerText = product.price;

        div.append(img, name, price);

        container.append(div);

    })

}

export {getData,append}