-- Listagem de usuarios
SELECT * FROM usuario u ;

-- Listagem de animais
SELECT * FROM animal a ;

-- listagem de animais pela ligação chave primaria e chave estrangeira para usuarios

-- usuario marcus
SELECT a.nome_completo, a.tipo, a.genero FROM usuario u 
INNER JOIN animal a ON u.id = a.usuario_id WHERE u.id = 1;

-- usuario marcos paulo
SELECT a.nome_completo, a.tipo, a.genero FROM usuario u 
INNER JOIN animal a ON u.id = a.usuario_id WHERE u.id = 2;