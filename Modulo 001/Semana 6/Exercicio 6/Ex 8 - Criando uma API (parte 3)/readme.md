- Para rodar este exeecício deve ter node.js instalado.

- Para iniciar este projeto roda => npm install express

- Após instalar nodemon => npm install nodemon

- Finalmente rodar o serviço => npm start

- Para usar a aplicação:

1 - Faça um GET via postman ou browser em http://localhost:3333/users, você irá receber a lista de usuário cadastrados.
![image](https://user-images.githubusercontent.com/31933120/224489750-04142dcf-fc30-4c65-a296-62fd0a3e170b.png)


2 - Para adicionar um usuário, use o método POST, passando os dados em formato json, 
EX.: http://localhost:3333/user
```
{
  "nome":"Ciclano",
  "idade": 21,
  "cargo":"junior",
  "senha":"12345678"
}
```

![image](https://user-images.githubusercontent.com/31933120/224489996-6b6246df-a82a-49f6-8712-3d80da60d551.png)

3 - Para deletar um usuário, use o método DELETE, passando o id do usuário por query string, EX.: http://localhost:3333/user?id=IDdoUsuário

![image](https://user-images.githubusercontent.com/31933120/224489868-fb70aad8-d261-4593-b8fa-b0b5d38a5111.png)
