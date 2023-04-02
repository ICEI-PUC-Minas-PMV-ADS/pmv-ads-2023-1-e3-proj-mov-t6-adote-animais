# Plano de Testes de Software

|   Caso de teste   |                                                      CT-01 - Tela de cadastro                                                       |
| :---------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|       RF-01       |                                        Tela de cadastro onde usuários poderão se cadastrar.                                         |
| Objetivo do teste |                                                Verificar funcionalidade de cadastro                                                 |
|      Passos       | 1 - Abrir tela de início; 2 - Clicar em "cadastre-se"; 3 - Inserir dados de cadastro; 4 - Verificar dados salvos no banco de dados; |
| Critério de êxito |                                           Dados cadastrados com sucesso no banco de dados                                           |
| Critério de êxito |                             Se for digitado um email já cadastrado, exibir mensagem informando o mesmo                              |

|   Caso de teste   |                                     CT-02 - Login                                      |
| :---------------: | :------------------------------------------------------------------------------------: |
|       RF-01       |                  Tela de cadastro onde usuários poderão se cadastrar.                  |
| Objetivo do teste |                           Verificar funcionalidade de login                            |
|      Passos       | 1 - Abrir tela de início; 2 - Inserir dados de login; 3 - Verificar no banco de dados; |
| Critério de êxito |       Se cadastrado, o usuário deve ser devidamente autenticado e redirecionado        |
| Critério de êxito |      Se for digitado um email não cadastrado, exibir mensagem informando o mesmo       |
| Critério de êxito |          Se os dados informados estiverem incorretos, retornar erro adequado           |

|   Caso de teste   |                                                           CT-03 - Cards com os pets                                                           |
| :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|       RF-03       |                                         A página inicial do usuário vai mostrar os cards com os pets                                          |
|       RF-04       |                               Dentro dos cards vai ter as listas com as informações com os animais para adoção                                |
| Objetivo do teste |                                                      Verificar listagem do card de pets                                                       |
|      Passos       | 1 - Abrir tela de início; 2 - Fazer login ou cadastro caso ainda não tenha; 3 - Verificar a listagem dos cards e as informações dentro deles; |
| Critério de êxito |                                             Os cards aparecem adequadamente na página de usuário                                              |
| Critério de êxito |           Os cards aparecem com as informações certas cadastradas no banco, relativas aos dados registrados pelo usuário em questão           |

|   Caso de teste   |                                                                                            CT-04 - Edições de cadastro                                                                                            |
| :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       RF-05       |                                                                                 Os cadastros podem fazer edições em seus perfis.                                                                                  |
|       RF-06       |                                                                             Os cadastros podem fazer excluir seus perfis seus perfis.                                                                             |
| Objetivo do teste |                                                                                      Verificar edição de usuário cadastrado                                                                                       |
|      Passos       | 1 - Abrir tela de início; 2 - Fazer login ou cadastro caso ainda não tenha; 3 - Clicar no ícone superior direito; 4 - Editar ou excluir os dados de usuário; 5 - Verificar dados alterados ou excluídos no banco; |
| Critério de êxito |                                                                          O usuário é alterado e/ou excluído do banco de dados, com êxito                                                                          |
