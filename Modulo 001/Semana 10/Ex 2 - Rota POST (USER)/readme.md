- Para rodar este exeecício deve ter node.js instalado.
- Iniciar este projeto => npm init -y
- Instalar Sequelize e modulos do postgres: npm install --save sequelize pg pg-hstore
- Finalmente rodar o serviço => node index

Com isto irá executar a aplicação que escutará na porta 3333.

- Para cadastrar um usuário, deve-ser fazer um post no endereço localhost:3333/users, com o body abaixo;

```
{
 "name": "teste teste 10",
 "email": "teste10@teste.com",
 "username": "teste10",
 "password": "12312312"
}
```

- Para alterar um endereço, faça um put no endereço localhost:3333/places/id .
- Substitua o id, por um id de um endereço cadastrado.

- No body passe o json abaixo com as informações que deseja alterar.
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
-- Campos name e telefone são obrigatórios, demais campos caso não deseje alterar podem ser omitidos.

Ex.: Para alterar somente name, telefone e descrição passe o json abaixo.
```
{
 "name": "Casa 3",
 "telefone": "(51) 99999-8888",
 "description": "Academia"
}
```