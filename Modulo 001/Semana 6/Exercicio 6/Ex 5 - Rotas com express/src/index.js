const express = require('express');
const application = express();
application.use(express.json());
application.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

application.post('/enviarobjeto', (requisicao, resposta) => {
    const objeto = requisicao.body;
    console.log(objeto);
    resposta.json(objeto);
})