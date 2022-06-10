 let cartItems = []
 let cartItemsLength = document.getElementById('cart-items-length')
 const addToCart = (id) => {
    cartItems.push(id)
    cartItemsLength.innerText = cartItems.length
}