function trocarPosicao(inicial, final) {
    const lista =  ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    const novaLista = []
  
    for(let index = 0; index < lista.length; index++){
      if(index === inicial) {
        novaLista.push(lista[final])
        continue
      }
      if(index === final){
        novaLista.push(lista[inicial])
        continue
      }
      novaLista.push(lista[index])
    }
  
    console.log(novaLista)
  }
  
  trocarPosicao(2, 0)