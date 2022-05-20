// let orderId = document.getElementById('orderIdInput').value
let orderNumber = 0
let orderblock = document.getElementsByClassName('order-block')
let cardHeaders = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parentDiv')

function execute(){
    let orderId = document.getElementById('orderIdInput').value
    // if(orderId == '') return
      let colDiv = document.createElement('div')
      let cardDiv = document.createElement('div')

      let cardHeaderDiv = document.createElement('div')
      let cardHeaderDivText = document.createTextNode('Order ID: ')

      let cardBodyDiv = document.createElement('div')

      let cardTitleH5 = document.createElement('h5')
      let cardTitleH5text = document.createTextNode('Bill Amount')

      let cardP = document.createElement('p')
      let cardPtext  = document.createTextNode('Items:XYZ,ABC')

      let cardButtonA = document.createElement('a')
      let cardButtonAText = document.createTextNode('Cancel Order')

      
      let cardFooter = document.createElement('div')
      let cardFooterText = document.createTextNode('PIZZA BAKED')


     parentDiv.appendChild(colDiv)
     colDiv.appendChild(cardDiv)
     cardDiv.appendChild(cardHeaderDiv)
     cardDiv.appendChild(cardBodyDiv)
     cardDiv.appendChild(cardFooter)

     cardBodyDiv.appendChild(cardTitleH5)
     cardTitleH5.appendChild(cardTitleH5text)

     cardBodyDiv.appendChild(cardP)
     cardBodyDiv.appendChild(cardButtonA)
    
     cardHeaderDiv.appendChild(cardHeaderDivText)
     cardP.appendChild(cardPtext)
     cardButtonA.appendChild(cardButtonAText)
     cardFooter.appendChild(cardFooterText)
     cardHeaderDiv.innerHTML = 'ORDER ID: '+ orderId   //JSON.stringify(cardHeaderDivText) 
     //classList 

 colDiv.classList = 'col-md-4 col-xs-12 order-block'
 cardDiv.classList = 'card card-center'
 cardHeaderDiv.classList = 'card-header'
 cardBodyDiv.classList = 'cardBody'
 cardFooter.classList= 'card-footer'
 cardButtonA.classList = 'btn btn-danger'


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