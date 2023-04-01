- Para rodar este exeecício deve ter node.js instalado.
- Iniciar este projeto => npm init -y
- Instalar Sequelize e modulos do postgres: npm install --save sequelize pg pg-hstore
- Finalmente rodar o serviço => node index

Com isto irá executar a aplicação que escutará na porta 3333.

- Para teste, faça um post com o body abaixo no endereço localhost:3333/places.

```
{
 "name": "Casa 3",
 "telefone": "(51) 99999-8888",
 "openinghours": "Segunda a Quinta: 6hs às 19hs",
 "description": "Academia",
 "latitude": -23.5505,
 "longitude": 46.6333
}
```