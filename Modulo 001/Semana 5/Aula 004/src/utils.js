const sistemaDeArquivos = require('fs') //fileSystem

function criarPasta(nomeDaPasta){
  if(sistemaDeArquivos.existsSync(nomeDaPasta)) { //Verificar se a pasta com o nome enviado já existe, se existir, não deve criar outra pasta com o mesmo nome.
    return true
  }
  sistemaDeArquivos.mkdirSync(nomeDaPasta)
  return false
}

function criarArquivo(caminhoRelativo, nomeDoArquivo, dados) {
  if(sistemaDeArquivos.lstatSync(caminhoRelativo + nomeDoArquivo).isFile()){
    return true
  }
  sistemaDeArquivos.writeFileSync(caminhoRelativo + nomeDoArquivo, JSON.stringify(dados))
  return false
}

module.exports = {
  criarPasta,
  criarArquivo
}