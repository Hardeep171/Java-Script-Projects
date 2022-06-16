let cartItems = []
let cartItemsLength = document.getElementById('cart-items-length')
let containerClasss = document.getElementById('productss')
let modalImg = document.getElementById('cart-items-body')
const addToCart = (id, element) => {
    cartItems.push(id)
    modalImg.style.display = 'none'
    cartItemsLength.innerText = cartItems.length
    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardDivImg = document.createElement('img')
    let cardBodyDiv = document.createElement('div')
    let productsHeaderDiv = document.createElement('div')
    let cardTittleH5 = document.createElement('h6')
    let cardTittleH3 = document.createElement('h5')
    let cardTextP = document.createElement('p')

    let outerBtnDiv = document.createElement('div')
    let btnA1 = document.createElement('a')

    let rating1 = document.createElement('span')
    let rating2 = document.createElement('span')
    let rating3 = document.createElement('span')
    let rating4 = document.createElement('span')
    let rating5 = document.createElement('span')
    let ratingNumber = document.createElement('span')

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
    

    cardDivImg.src = element.image
    cardTittleH5.innerText = `${element.title.slice(0, 20)}...`
    cardTittleH3.innerText = `$${element.price}`
    cardTextP.innerText = `${element.description.slice(0, 50)}...`
    ratingNumber.innerText = `(${element.rating.count})`
    btnA1.innerText = "Remove"
    colDiv.id = `product-${element.id}`

    btnA1.classList = "btn btn-danger  "
    colDiv.classList = "col-md-6"
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

    containerClasss.appendChild(colDiv)

    btnA1.addEventListener('click', function () {
		// Remove productDiv from cart
		containerClasss.removeChild(colDiv)

		// Update cart items count
		cartItems = cartItems.filter(cartItemId => cartItemId != element.id)
		cartItemsLength.innerText = cartItems.length

        

		// Show the empty cart image when cart items count is 0
		if(cartItems.length === 0)
        modalImg.style.display  = 'inline-block'
		
		// Change the selected icon back to 'add to cart' icon for all products removed from the cart
		let productColDiv = document.getElementById(`product-${element.id}`)
		let requiredAddToCartButton = productColDiv.getElementsByClassName('add-to-cart-btn')[0]
		requiredAddToCartButton.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>'
		requiredAddToCartButton.classList.remove('disabled')
	})
    
}