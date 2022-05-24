
    const chiefRecive = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'order recived'
                resolve(orderNumber)
            }, 2000)
        })
    }

    const firstLayerOfChesseAdded = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'first layer of cheeze added'
                resolve(orderNumber)
            }, 3000)
        })
    }

    const toppingsAdded = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'toppings added'
                resolve(orderNumber)
            }, 4000)
        })
    }

    const secondLayerOfChesseAdded = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'Second layer of cheeze added'
                resolve(orderNumber)
            }, 4000)
        })
    }

    const pizzaSouceAdded = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'pizzaSouceAdded'
                resolve(orderNumber)
            }, 3000)
        })
    }
    
    const pizzaBaked = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'Pizza baked!'
                resolve(orderNumber)
            }, 4000)
        })
    }
    const oreganoAdded = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'Oregano added'
                resolve(orderNumber)
            }, 4000)
        })
    }
    const packageRecivedAtCounter = (orderNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderNumber).innerText = 'order Ready'
                resolve(orderNumber)
            }, 3000)
        })
    }
