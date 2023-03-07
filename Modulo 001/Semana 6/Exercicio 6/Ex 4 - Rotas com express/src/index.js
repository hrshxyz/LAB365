const express = require('express');
const application = express();
application.use(express.json());
application.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

application.get('/', (requisicao, resposta) => {
    resposta.send("Ex 4 - Rotas com express! Para enviar um nome entre com a rota /enviar utliza um app para fazer post.")
})

application.post('/enviar/:nome', (requisicao, resposta) => {
    const { nome } = requisicao.params;
   
    console.log(`Rota(/enviar) da API criada pelo(a): ${nome}`);
    resposta.send(`Nome enviado! ${nome}`)
})