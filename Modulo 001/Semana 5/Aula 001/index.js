const chaves = ["teste", "casa", "valor", "acesso"];

const dados = {
    "teste": 1,
    "casa" : "Florianopolis",
    "valor": 200,
    "acesso": {
        "teste": 2
    }
}

chaves.map((key) => {
    if (key === 'acesso'){
        console.log(dados[key]['teste']);
        return;
    }
    console.log(dados[key])
});

/* chaves.forEach((id) => {
    dados[id] == chaves[3]
        ? console.log(dados[id].teste)
        : console.log(dados[id])
})
 */
