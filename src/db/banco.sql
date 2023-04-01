CREATE TABLE `usuario` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome_completo` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `complemento` VARCHAR(100) NOT NULL,
  `cep` VARCHAR(30) NOT NULL,
  `data_de_nascimento` TIMESTAMP NOT NULL,
  `login` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `data_de_criacao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `animal` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(100) NOT NULL,
  `raca` VARCHAR(100) NOT NULL,
  `genero` VARCHAR(100) NOT NULL,
  `nome_completo` VARCHAR(255) NOT NULL,
  `data_de_nascimento` TIMESTAMP NOT NULL,
  `flag_castrado` SMALLINT NOT NULL,
  `usuario_id` INT NOT NULL,
  `data_de_criacao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `animal` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);