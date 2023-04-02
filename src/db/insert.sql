INSERT INTO usuario
(nome_completo, email, telefone, cpf, complemento, cep, data_de_nascimento, login, senha)
VALUES('marcus', 'marcus@email.com', '21 99999-9999', '569.742.470-10',  'casa 2', '40310-230', '1996-03-07 18:22:17', 'LOGINTESTE', 'SENHATESTE');

INSERT INTO usuario
(nome_completo, email, telefone, cpf, complemento, cep, data_de_nascimento, login, senha)
VALUES('marcos paulo', 'mp@email.com', '21 99999-9999', '569.742.470-10',  'casa 1', '40310-230', '1996-03-07 18:22:17', 'LOGINTESTE', 'SENHATESTE');

INSERT INTO animal
(tipo, raca, genero, nome_completo, data_de_nascimento, flag_castrado, usuario_id)
VALUES('gato', 'persa', 'macho', 'batman', '2021-04-01 18:22:17', 0, 1 );

INSERT INTO animal
(tipo, raca, genero, nome_completo, data_de_nascimento, flag_castrado, usuario_id)
VALUES('gato', 'persa', 'femea', 'MM', '2021-04-01 18:22:17', 0, 1 );

INSERT INTO animal
(tipo, raca, genero, nome_completo, data_de_nascimento, flag_castrado, usuario_id)
VALUES('gato', 'persa', 'macho', 'robin', '2021-04-01 18:22:17', 1, 1 );

INSERT INTO animal
(tipo, raca, genero, nome_completo, data_de_nascimento, flag_castrado, usuario_id)
VALUES('cachorro', 'pitbull', 'macho', 'monster', '2021-04-01 18:22:17', 0, 2 );