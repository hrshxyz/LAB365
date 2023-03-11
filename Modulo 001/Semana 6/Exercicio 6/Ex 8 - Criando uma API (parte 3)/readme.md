- Para rodar este exeecício deve ter node.js instalado.

- Para iniciar este projeto roda => npm install express

- Após instalar nodemon => npm install nodemon

- Finalmente rodar o serviço => npm start

- Para usar a aplicação:

1 - Faça um GET via postman ou browser em http://localhost:3333/users, você irá receber a lista de usuário cadastrados.
![image](https://user-images.githubusercontent.com/31933120/224490828-6f91d9b0-b7d1-488e-8370-a26ef31884d8.png)


2 - Para adicionar um usuário, use o método POST, passando os dados em formato json, 
EX.: http://localhost:3333/user
```
{
  "nome":"Ciclano",
  "idade": 21,
  "cargo":"Líder",
  "senha":"12345678"
}
```

![image](https://user-images.githubusercontent.com/31933120/224490858-0177d567-e6ef-4e95-89cc-56bab7852aed.png)

Obs.: Caso o cargo enviando no json não for igual a Líder, o usuário não será cadastrado !

![image](https://user-images.githubusercontent.com/31933120/224490926-0745da9a-a80d-4794-a11c-81e4574568d3.png)

3 - Para deletar um usuário, use o método DELETE, passando o id do usuário por query string, EX.: http://localhost:3333/user?id=IDdoUsuário

![image](https://user-images.githubusercontent.com/31933120/224489868-fb70aad8-d261-4593-b8fa-b0b5d38a5111.png)
