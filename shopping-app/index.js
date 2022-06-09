let containerClass = document.getElementById('products')

const createProductDiv = (element) => {

    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardDivImg = document.createElement('img')
    let cardBodyDiv = document.createElement('div')
    let productsHeaderDiv = document.createElement('div')
    let cardTittleH5 = document.createElement('h6')
    let cardTittleH3 = document.createElement('h5')
    let cardTextP = document.createElement('p')
    let rating1 = document.createElement('span')
    let rating2 = document.createElement('span')
    let rating3 = document.createElement('span')
    let rating4 = document.createElement('span')
    let rating5 = document.createElement('span')
    let ratingNumber = document.createElement('span')
    let outerBtnDiv = document.createElement('div')
    let btnA1 = document.createElement('a')
    let btnA2 = document.createElement('a')

    
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardDivImg)
    cardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(productsHeaderDiv)
    productsHeaderDiv.appendChild(cardTittleH5)
    productsHeaderDiv.appendChild(cardTittleH3)
    cardBodyDiv.appendChild(cardTextP)
    cardBodyDiv.appendChild(rating1)
    cardBodyDiv.appendChild(rating2)
    cardBodyDiv.appendChild(rating3)
    cardBodyDiv.appendChild(rating4)
    cardBodyDiv.appendChild(rating5)
    cardBodyDiv.appendChild(ratingNumber)
    cardBodyDiv.appendChild(outerBtnDiv)
    outerBtnDiv.appendChild(btnA1)
    outerBtnDiv.appendChild(btnA2)


{/* <div class="row">
            <div class="col-md-3">
                <div class="card" >
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="products-header">
                            <h5 class="card-title">Card title</h5>
                            <h3 class="card-tittle product-price">$350</h3>
                        </div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span>102</span>
                        <div class="outer-btn">
                            <a href="#" class="btn btn-primary">Add to cart</a>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div> 
</div> */}
//     category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, F
    cardDivImg.src = element.image
    cardTittleH5.innerText = `${element.title.slice(0,20)}...`
    cardTittleH3.innerText = `$${element.price}`
    cardTextP.innerText = `${element.description.slice(0,50)}...`
    ratingNumber.innerText = element.rating.count
    btnA1.innerText = "Add To Cart"
    btnA2.innerText = "Buy Now"

    colDiv.id  = `product-${element.id}`
    colDiv.classList = "col-md-3"
    cardDiv.classList = "card"
    cardDivImg.classList = "card-img-top"
    cardBodyDiv.classList = "card-body"
    productsHeaderDiv.classList = "products-header"
    cardTittleH5.classList = "card-titlle"
    cardTittleH3.classList = "card-tittle product-price"
    cardTextP.classList = "card-text"
    let ratingCount = Math.ceil(element.rating.rate)
    rating1.classList = "fa fa-star checked"
    rating2.classList = "fa fa-star checked"
    rating3.classList = "fa fa-star checked"
    rating4.classList = "fa fa-star checked"
    rating5.classList = "fa fa-star "
    outerBtnDiv.classList = "outer-btn"
    btnA1.classList = "btn btn-primary"
    btnA2.classList = "btn btn-primary"
    
    containerClass.appendChild(colDiv)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let spinner = document.getElementById('products-spinner')
const fetchProductDetails = async () => { 
    try{
       const res = await fetch('https://fakestoreapi.com/products')
       const data = await res.json()
       data.forEach(element => createProductDiv(element))
       spinner.style.display = 'none'
    }
    catch(err){
        console.log(err)
    }
    // console.log('hello')
}
// const fetchProductDetails =  () => {
//     resolve  =  fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
