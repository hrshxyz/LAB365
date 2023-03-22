select * from funcionario;

select distinct nome from funcionario;


ALTER TABLE funcionario ADD comissao decimal(11,2);

UPDATE funcionario SET comissao=1000 WHERE id=1;
UPDATE funcionario SET comissao=2000 WHERE id=2;
UPDATE funcionario SET comissao=3000 WHERE id=3;
UPDATE funcionario SET comissao=4000 WHERE id=4;
UPDATE funcionario SET comissao=5000 WHERE id=5;

select salario+comissao from funcionario;

select (salario*20/100)+salario from funcionario;

SELECT *,salario*1.05 FROM funcionario;

SELECT nome,salario FROM funcionario WHERE salario>1000;

SELECT nome,salario FROM funcionario WHERE salario<=1300;

SELECT nome,salario FROM funcionario WHERE comissao<3000;

SELECT nome,salario FROM funcionario WHERE comissao<3000;

SELECT nome,salario FROM funcionario WHERE comissao<>4000;

SELECT nome FROM funcionario WHERE nome LIKE '%r';

SELECT nome FROM funcionario WHERE nome LIKE 'H%';

SELECT nome FROM funcionario;

SELECT nome FROM funcionario WHERE nome LIKE '_r%';

SELECT nome,salario FROM funcionario WHERE salario>=1000 AND id=1;

SELECT nome,salario FROM funcionario WHERE salario>=1000 OR id=1;

SELECT nome,cpf FROM funcionario ORDER BY nome DESC;

SELECT nome,cpf FROM funcionario ORDER BY id DESC;

SELECT nome,cpf FROM funcionario ORDER BY id DESC;

SELECT nome,cpf FROM funcionario WHERE salario = NULL;

SELECT nome,cpf FROM funcionario WHERE NOT(salario>2000 AND id=2);

SELECT LOWER(nome) FROM funcionario;

SELECT UPPER(nome) FROM funcionario;

SELECT SUBSTRING(nome,1,1) FROM funcionario;

SELECT LENGTH(nome) FROM funcionario;



