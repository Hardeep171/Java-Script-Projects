let containerClass = document.getElementById('products')

function createProductDiv(element) {

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

    cardDivImg.src = element.image
    cardTittleH5.innerText = `${element.title.slice(0,20)}...`
    cardTittleH3.innerText = `$${element.price}`
    cardTextP.innerText = `${element.description.slice(0,50)}...`
    ratingNumber.innerText = `(${element.rating.count})`
    btnA1.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>'
    btnA2.innerText = "Buy-Now"

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
    if(ratingCount == 1) {
        rating1.classList =  "fa fa-star checked"
        rating2.classList = "fa fa-star "
        rating3.classList = "fa fa-star "
        rating4.classList = "fa fa-star "
        rating5.classList = "fa fa-star "
    }else if(ratingCount == 2){
        rating1.classList =  "fa fa-star checked"
        rating2.classList = "fa fa-star checked"
        rating3.classList = "fa fa-star "
        rating4.classList = "fa fa-star "
        rating5.classList = "fa fa-star "
    }
    else if(ratingCount == 3){
        rating1.classList =  "fa fa-star checked"
        rating2.classList = "fa fa-star checked"
        rating3.classList = "fa fa-star checked"
        rating5.classList = "fa fa-star "
        rating4.classList = "fa fa-star "
    }
    else if(ratingCount == 4){
        rating1.classList =  "fa fa-star checked"
        rating2.classList = "fa fa-star checked"
        rating3.classList = "fa fa-star checked"
        rating4.classList = "fa fa-star checked"
        rating5.classList = "fa fa-star "
    }
    else if(ratingCount == 5){
        rating1.classList =  "fa fa-star checked"
        rating2.classList = "fa fa-star checked"
        rating3.classList = "fa fa-star checked"
        rating4.classList = "fa fa-star checked"
        rating5.classList = "fa fa-star checked"
    }
    outerBtnDiv.classList = "outer-btn"
    btnA1.classList = "btn btn-primary add-to-cart-btn "
    btnA2.classList = "btn btn-primary buy-btn "
    btnA1.id = 'btn1'
    btnA2.id = 'btn2'
    
    containerClass.appendChild(colDiv)

    let productId = element.id
    btnA1.addEventListener('click' , () => {
        addToCart(productId,element)
        btnA1.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    })
}