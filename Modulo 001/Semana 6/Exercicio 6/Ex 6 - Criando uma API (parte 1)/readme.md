- Para rodar este exeecício deve ter node.js instalado.

- Para iniciar este projeto roda => npm install express

- Após instalar nodemon => npm install nodemon

- Finalmente rodar o serviço => npm start

- Para usar a aplicação:

1 - Faça um get via postman http://localhost:3333/users
- Você irá receber a lista de usuário cadastrados.
![image](https://user-images.githubusercontent.com/31933120/224310255-e5ecc0a6-aade-4323-969c-d8e570277a4f.png)

2 - Para adicionar um usuário, use o método PATCH, passando o id e nome do usuário na uri, EX.: http://localhost:3333/users/IDNumérico/NomeDoUsuario

![image](https://user-images.githubusercontent.com/31933120/224310480-e7b4742b-e4e8-4298-ba11-e766e4ace234.png)

3 - Para deletar um usupario, use o método DELETE, passando o id do usuário na uri,  EX.: http://localhost:3333/users/IDNumérico
![image](https://user-images.githubusercontent.com/31933120/224311070-4964cd67-3d5c-4834-acdf-01b412806102.png)
