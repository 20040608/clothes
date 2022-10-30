if(!window.localStorage.getItem('token')){
    window.location.replace('./login.html')
  }

  let logBtn = document.getElementById('logout')

  logBtn.addEventListener('click',() =>{
      window.localStorage.clear()
      window.location.replace('./login.html')
  })

let URL = 'https://fakestoreapi.com/products';

let ListEl = document.querySelector('.container');

var user = [];

async function dom(){
	let res = await fetch(URL)
	let one = await res.json()
	user = one 
	render(ListEl, user)
}
dom()

function render(list, data) {
	ListEl.innerHTML = '';

	data.forEach((el) => {
		let blokEL = document.createElement('div');
		blokEL.className = 'blok';

		let imgEl = document.createElement('img');
		imgEl.className = 'card-img';
		imgEl.src = el.image;

		let titleEl = document.createElement('h3');
		titleEl.textContent = el.title;

		let nameEl = document.createElement('h3');
		nameEl.textContent = el.price;

		let btnEl = document.createElement('button');
		btnEl.setAttribute("id", el.id)
		btnEl.className = 'shop'
		btnEl.textContent = 'Buy';

		blokEL.append(imgEl, titleEl, nameEl, btnEl);
		list.append(blokEL);
	});
}

let searchInput = document.getElementById('search-input');
let searchBtn = document.getElementById('search-btn');

searchInput.addEventListener('input', () => {
	let newInput = [];
	newArray = searchInput.value;
	user.filter((e) => {
		if (e.title.includes(newArray)) {
			newInput.push(e);
			render(ListEl, newInput);
		}
	});
});

let mclothesBtn = document.getElementById("men's clothing");

mclothesBtn.addEventListener('click', () => {
  let arr = []
  user.filter((e) => {
	if(e.category == "men's clothing"){
		arr.push(e)
	} else {
		console.log(arr);
	}
  })
  render(ListEl, arr)
});

let wclothesBtn = document.getElementById("women's clothing");

wclothesBtn.addEventListener('click', () => {
  let arr = []
  user.filter((e) => {
	if(e.category == "women's clothing"){
		arr.push(e)
	} else {
		console.log(arr);
	}
  })
  render(ListEl, arr)
});


let electrBtn = document.getElementById('electr')

electrBtn.addEventListener('click', () => {
	let arr = []
	user.filter((e) => {
	  if(e.category == "electronics"){
		  arr.push(e)
	  } else {
		  console.log(arr);
	  }
	})
	render(ListEl, arr)
  });

let jewelryBtn = document.getElementById('jewelry')

jewelryBtn.addEventListener('click', () => {
	let arr = []
	user.filter((e) => {
	  if(e.category == "jewelery"){
		  arr.push(e)
	  } else {
		  console.log(arr);
	  }
	})
	render(ListEl, arr)
  });

  let btnShop = document.querySelector('#btnshop')
  let toShop = document.querySelector('.toshop')

  btnShop.addEventListener('click', () => {
	if(toShop.style.display === 'none'){
        toShop.style.display = 'flex'
    }else{
        toShop.style.display = 'none'
		console.log(toShop);
    }
  })

  function rasvo(data) {
	let toshop = document.querySelector('.toshop')
	data.forEach((el) => {
		let blokEL = document.createElement('div');
		blokEL.className = 'blok';

		let imgEl = document.createElement('img');
		imgEl.className = 'card-img';
		imgEl.src = el.image;

		let titleEl = document.createElement('h3');
		titleEl.textContent = el.title;

		let nameEl = document.createElement('h3');
		nameEl.textContent = el.price;

		let btnEl = document.createElement('button');
		btnEl.setAttribute("id", el.id)
		btnEl.className = 'shop'
		btnEl.textContent = 'Buy';

		blokEL.append(imgEl, titleEl, nameEl, btnEl);
		toshop.append(blokEL);
	});

  }


ListEl.addEventListener('click', (evt) => {
	let arr = []
	user.filter((e) => {
	if(e.id == evt.target.id){
		arr.push(e)
		rasvo(arr)
	}
	})


})


