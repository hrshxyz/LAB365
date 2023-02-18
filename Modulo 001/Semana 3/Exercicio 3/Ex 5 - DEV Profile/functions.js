/* let fetchRes = fetch("https://api.github.com/users/hrshxyz", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
});

fetchRes.then(res =>
    res.json()).then(d => {
    return JSON.stringify(d);
})

 console.log(fetchRes) 

let apiResponse = fetch("https://api.github.com/users/hrshxyz").then(res => res.json()).then((data) => {
    return data;
});

console.log(apiResponse)


let Res = fetch('https://api.github.com/users/hrshxyz', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))

console.log(`teste ${Res}`) */


let variable = document.getElementById("profile");
let nameuser = document.getElementById("name");
async function buscaDados() {
  try {
    const response = await fetch("https://api.github.com/users/hrshxyz");
    const dados = await response.json()
    console.log(dados);
    nameuser.innerHTML = dados?.name;
    document.getElementById("image").src = dados?.avatar_url;
    document.getElementById("idgit").innerHTML = `ID: ${dados?.id}`;
    
  } 
  catch (e) {} 
  finally {
  }
}

buscaDados();