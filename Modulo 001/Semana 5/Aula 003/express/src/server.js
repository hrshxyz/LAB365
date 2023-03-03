const express = require('express');
const application = express();
application.use(express.json());
application.listen(3333);

application.get('/', (requisicao, resposta) => {
    resposta.send("teste da root")
})

application.get('/rota', (requisicao, resposta) => {
    resposta.send("teste da rota")
})