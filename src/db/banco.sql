CREATE TABLE `usuario` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `complemento` varchar(100) NOT NULL,
  `cep` varchar(30) NOT NULL,
  `data_de_nascimento` timestamp NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_de_criacao` timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `animal` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  `raca` varchar(100) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `nome_completo` varchar(255) NOT NULL,
  `data_de_nascimento` timestamp NOT NULL,
  `flag_castrado` smallint NOT NULL,
  `usuario_id` int NOT NULL,
  `data_de_criacao` timestamp DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `animal` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);