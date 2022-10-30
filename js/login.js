let userEl = document.getElementById('user')
let passEl = document.getElementById('pass')
let btnEl = document.getElementById('btn')


async function getLogin(user){
  let res =  await fetch('https://pressa-exem.herokuapp.com/login',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(user)
    })
  let  response = await res.json()
  console.log(response)
    if(response.token && response.token != null){
      window.localStorage.setItem('token',response.token)
      window.location.replace('./index.html')
    }
}

btnEl.addEventListener('click',()=>{
    const user ={
        username:userEl.value,
        password:passEl.value 
    }
    getLogin(user)
})