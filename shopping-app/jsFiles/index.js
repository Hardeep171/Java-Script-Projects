
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
}
// const fetchProductDetails =  () => {
//     resolve  =  fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

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