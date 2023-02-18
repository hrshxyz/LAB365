import './style.css'
import { setupCounter } from './counter.js'

import users from './database/users.json'
console.log(users)

  
let userList = users.map((user)=>`<li>${user.username}</li>`)

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Hello devSearch</h1>
  <ul>
    ${userList}
  </ul>
  <input id="search" placeholder='busque seu usuario'></input>
  <button onclick={handleSearch()} type="button" >Buscar</button>
  </div>
`

let search = document.querySelector('#search')

window.handleSearch = () => {
  let users = users.filter((user)=>{
    if ( user == search.value ) {
      return user.name;
    }
  })
  console.log(users)
}