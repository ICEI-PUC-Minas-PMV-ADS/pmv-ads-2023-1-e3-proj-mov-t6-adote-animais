-- Listagem de usuarios
SELECT * FROM usuario u ;

-- Listagem de animais
SELECT * FROM animal a ;

-- listagem de animais pelo nome do usuario
SELECT a.nome_completo, a.tipo, a.genero FROM usuario u 
INNER JOIN animal a ON u.id = a.usuario_id WHERE u.nome_completo = 'marcus';

SELECT a.nome_completo, a.tipo, a.genero FROM usuario u 
INNER JOIN animal a ON u.id = a.usuario_id WHERE u.nome_completo = 'marcos paulo';