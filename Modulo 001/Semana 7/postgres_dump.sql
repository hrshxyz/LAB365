CREATE DATABASE lab365;

CREATE TABLE IF NOT EXISTS cliente(
	id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
	rg VARCHAR(10) NOT NULL,
	cpf CHAR(11) NOT NULL
)

ALTER TABLE cliente 
	ALTER COLUMN rg TYPE CHAR(10);
	

SELECT * FROM cliente;

CREATE TABLE IF NOT EXISTS e_mail(
	id serial PRIMARY KEY,
	e_mail_principal  VARCHAR(50) NOT NULL,
	e_mail_secundario VARCHAR(50) NOT NULL,
	id_cliente INT NOT NULL,
	FOREIGN KEY (id_cliente) REFERENCES cliente(id)
)

ALTER TABLE e_mail 
	ALTER COLUMN e_mail_principal TYPE VARCHAR(100),
	ALTER COLUMN e_mail_secundario TYPE VARCHAR(100),
	ADD COLUMN e_mail_rec_senha VARCHAR(100) NOT NULL;
	
SELECT * FROM e_mail;

CREATE TABLE IF NOT EXISTS produto_pedido(
	id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	descricao VARCHAR(150) NOT NULL,
    quantidade INT NOT NULL
)

ALTER TABLE produto_pedido 
	ADD COLUMN codigo_de_barra INT NOT NULL;
	
SELECT * FROM produto_pedido;

CREATE TABLE IF NOT EXISTS pedido(
	id serial PRIMARY KEY,
	id_cliente INT NOT NULL,
	FOREIGN KEY (id_cliente) REFERENCES cliente(id),
	id_produto_pedido INT NOT NULL,
	FOREIGN KEY (id_produto_pedido) REFERENCES produto_pedido(id)
)

SELECT * FROM pedido;

CREATE TABLE IF NOT EXISTS teste(
	id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

DROP TABLE teste;