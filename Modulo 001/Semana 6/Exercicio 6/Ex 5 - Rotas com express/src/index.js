const express = require('express');
const router = express();
const port = 3000;
router.use(express.json());

router.get('/', (req, res) => {
    res.send(`Olá, para enviar um json no body, entre com a root /envia. Ex.: localhost:${port}/envia , usar o método post`)
})

router.post('/envia', (req, res) => {
    const dados = req.body;
    console.log(dados)
    res.json(dados)
  })

router.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
