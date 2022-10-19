
let URL = 'https://fakestoreapi.com/products'

let ListEl = document.querySelector('.container')

function render(list){

    ListEl.innerHTML = ''
    fetch(URL)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
       data.map((e)=>{
        let blokEL = document.createElement('div')
        blokEL.className = 'block'

        let imgEl = document.createElement('img')
        imgEl.className = 'card-img'
        imgEl.src = e.image

        let titleEl = document.createElement('h3')
        titleEl.className = 'card-title'
        titleEl.textContent = e.title

        let nameEl = document.createElement('h3')
        nameEl.className = 'card-name'
        nameEl.textContent =e.price

        let btnEl = document.createElement('button')
        btnEl.className = 'card-btn'
        btnEl.textContent = 'Buy'

        list.append(blokEL)
        blokEL.append(imgEl, titleEl, nameEl, btnEl)

       })
    })
     
}

render(ListEl)
