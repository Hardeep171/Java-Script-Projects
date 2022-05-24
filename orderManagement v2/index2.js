// let orderId = document.getElementById('orderIdInput').value
let orderNumber = 1
let orderblock = document.getElementsByClassName('order-block')
let cardHeaders = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parentDiv')
let emptyOrderGif = document.getElementById('empty-order-box')

const createNewOrder =  (orderIdInput) => {
      let colDiv = document.createElement('div')
      let cardDiv = document.createElement('div')

      let cardHeaderDiv = document.createElement('div')
      let cardHeaderDivText = document.createTextNode('Order ID: ')

      let cardBodyDiv = document.createElement('div')

      let cardTitleH5 = document.createElement('h5')
      let cardTitleH5text = document.createTextNode('Bill Amount:$152')

      let cardP = document.createElement('p')
      let cardPtext  = document.createTextNode('The 4 Cheese Pizza')

      let cardButtonA = document.createElement('a')
      let cardButtonAText = document.createTextNode('Cancel Order')

      
      let cardFooter = document.createElement('div')
      let cardFooterText = document.createTextNode('Order')
      
      

     parentDiv.appendChild(colDiv)
     colDiv.appendChild(cardDiv)
     cardDiv.appendChild(cardHeaderDiv)
     cardDiv.appendChild(cardBodyDiv)
     cardDiv.appendChild(cardButtonA)

     cardBodyDiv.appendChild(cardTitleH5)
     cardTitleH5.appendChild(cardTitleH5text)

     cardBodyDiv.appendChild(cardP)
     cardBodyDiv.appendChild(cardFooter)
    
     cardHeaderDiv.appendChild(cardHeaderDivText)
     cardP.appendChild(cardPtext)
     cardButtonA.appendChild(cardButtonAText)
     cardFooter.appendChild(cardFooterText)

     cardHeaderDiv.innerHTML = 'ORDER ID: '+ orderIdInput  //JSON.stringify(cardHeaderDivText) 
    
     //classList 

 colDiv.classList = 'col-md-4 col-xs-12 order-block'
 cardDiv.classList = 'card card-center'
 cardHeaderDiv.classList = 'card-header'
 cardBodyDiv.classList = 'cardBody'
 cardFooter.classList= 'card-footer order-status badge bg-success'
 cardButtonA.classList = 'btn btn-danger btnClass'
 cardFooter.id = orderIdInput

 cardButtonA.addEventListener("click", ()=>{
    colDiv.style.display = 'none'
})
//  cardButtonA.addEventListener('click', () => {
//     // parentDiv.removeChild(colDiv)
//     colDiv.style.display = 'none'
// })
}

const executeOrder = () => {
    emptyOrderGif.style.display = 'none'
    let orderId = document.getElementById('orderIdInput').value
    if(!orderId.length){
    alert('please enter the order Id')
    return
    }
    createNewOrder(orderId)
            console.log(orderId +': order placed')
            chiefRecive(orderId)
                .then(firstLayerOfChesseAdded)
                .then(toppingsAdded)
                .then(secondLayerOfChesseAdded)
                .then(pizzaSouceAdded)
                .then(pizzaBaked)
                .then(oreganoAdded)
                .then(packageRecivedAtCounter)
                .then(() => {
                document.getElementById(orderId).innerText = 'ORDER Picked  By Zomato Guy!'
                }).catch((err) => {
                    console.log(err)
                })
}
/* <div class="col-md-4 col-xs-12 order-block">
            <div class="card card-center">
                <div class="card-header">
                    Order ID: 2022052222
                </div>
                <div class="card-body">
                    <h5 class="card-title">Bill Amount: </h5>
					<p class="card-text">Items: XYZ, ABC, ASD</p>
					<a href="#" class="btn btn-danger">Cancel Order</a>
                </div>
                <div class="card-footer">
                    PIZZA BAKED
                </div>
            </div>
        </div> */
//---------------------------------creating things--------------------------------
// let orderId = document.getElementById('orderIdInput').value

//       let colDiv = document.createElement('div')
//       let cardDiv = document.createElement('div')
//       let cardHeaderDiv = document.createElement('div')
//       let cardBodyDiv = document.createElement('div')
//       let cardTitleDiv = document.createElement('div')

//       let newh5 = document.createElement('h5')
//       let newH5Text = document.createTextNode('Bill Amount')

//      newh5.appendChild(newH5Text)
//      newDiv.appendChild(newh5)
//      parentDiv.appendChild(newDiv)
        
     //--------------------------------------------------------------------
// const orderIdInfo = document.getElementById('order-id-info')
// let statusBlocks = document.getElementsByClassName('status-block')

// const addDoneClass = (index) => statusBlocks[index].classList.add('done')

// const executeOrder = (callback) => {
// 	const orderId = document.getElementById('order-id-input').value
// 	orderIdInfo.innerText = 'Status for Order ID: ' + orderId
// 	let x = 0
// 	addDoneClass(x++)

// 	setTimeout(() => {
// 		addDoneClass(x++)

// 		setTimeout(() => {
// 			addDoneClass(x++)

// 			setTimeout(() => {
// 				addDoneClass(x++)

// 				setTimeout(() => {
// 					addDoneClass(x++)

// 					setTimeout(() => {
// 						addDoneClass(x++)
						
// 						setTimeout(() => {
// 							addDoneClass(x++)

// 							setTimeout(() => {
// 								addDoneClass(x++)

// 								setTimeout(() => {
// 									addDoneClass(x++)
// 									callback()
// 								}, 2000)

// 							}, 8000)

// 						}, 15000)

// 					}, 5000)

// 				}, 12000)

// 			}, 5000)

// 		}, 10000)
		
// 	}, 2000)
// }