const express = require('express');
const application = express();
application.listen(3000);

application.get('/', (requisicao, resposta) => {
    resposta.send("Mensagem do Ex 3 - Iniciando um servidor node!")
})