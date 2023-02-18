/* console.log("executando uma promessa")

const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a + b == 4) {
                resolve(a + b);
            } else {
                reject('soma deu errado');
            }
        }, 2000)
    })
}


const total = somaDoisNumeros(3, 1).then((soma) => console.log(soma))
 
const total = somaDoisNumeros(5, 1).then((soma) => { if (soma < 5) { console.log('é menor') } }).catch(() => { console.log('deu erro') }).finally(() => { console.log('terminou') })
 */

/* Asyn await */

/* async function login(use, password) {
    try{
        const verifcaUser = new Promise((resolve)=>setTimeout(()=> {}))
    }
    catch{

    }
} */


async function buscarDados() {
    try {
        const response = await fetch('https://api.github.com/users/walberson')
        const dados = await response.json()
        /* console.log(dados) */
        return dados
        /* console.log(dados?.name) */
    }
    catch (e) {

    }
    finally {

    }
}

let teste = buscarDados()

console.log(teste?.name)