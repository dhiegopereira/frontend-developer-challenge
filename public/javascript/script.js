const url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page='
const products = new Array()

localStorage.clear
localStorage.setItem('page', 1)

const showProducts = () => {
    let html = '';
    document.getElementById('card-content').innerHTML = html;

    for(let i = 0; i < products.length; i++) {
        products[i].map((product) => {
            html += `
                    <div class="card-item">
                        <div class="card-img">
                            <img class="product-img" src="${product.image}" alt="">
                        </div>
                        <div class="card-product">
                            <p class="product-name">${product.name}</p>
                            <p class="product-description">${product.description}</p>
                            <p class="product-oldPrice">De: R$${product.oldPrice}</p>
                            <p class="product-price">Por: R$${product.price}</p>
                            <p class="product-double">ou ${product.installments.count}x de R$${product.installments.value}</p>
                        </div>
                        <div class="card-btn">Comprar</div>
                    </div>  
                    `
        }) 
    }
    console.log(html)
    document.getElementById('card-content').innerHTML = html;
}

const moreProducts = () => {   
    let load = `<center><img src='/image/giphy.gif'></center>`
    document.getElementById('control-btn').innerHTML = load;
    axios.get(url+localStorage.getItem('page'))
    .then(response => {
        localStorage.setItem('page', response.data.nextPage[response.data.nextPage.length-1])
        products.push(response.data.products)  
        showProducts()
        let btn = `<button id="btn-more" onclick="moreProducts()">Ainda mais produtos aqui!</button>` 
        document.getElementById('control-btn').innerHTML = btn;
    })
    .catch(error => {
        console.log(error)
    })  
}
moreProducts()

const sendEmail = () => {
    alert('E-mail enviado com sucesso!')
}

