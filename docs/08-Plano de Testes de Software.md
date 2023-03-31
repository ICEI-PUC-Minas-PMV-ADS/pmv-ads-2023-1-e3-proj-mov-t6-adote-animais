# Plano de Testes de Software

> Uma descrição mais aprofundada está inclusa na documentação oficial do Plano de Teste

# Temos alguns tipos notáveis de testes a serem implementados

## Testes de integridade do banco de dados

O banco de dados deve seguir princípios ACID, onde temos:

- **Atomicity (Atomicidade)** - Todas as transações ou terão sucesso por completo, ou não acontecerão

- **Consistency (Consistência)** - Todos os dados deverão ser consistentes e íntegros. Todos os dados devem ser válidos de acordo com as regras definidas

- **Isolation (Isolamento)** - Todas as transações devem ser executadas de forma isolada, sem afetarem umas às outras

- **Durability (Durabilidade)** - A integridade das transações não pode ser violada em caso de falha do sistema e/ou de perda de dados. O estado deve ser preservado

## Testes de função

Os testes de função estão relacionados com o teste de métodos e funções síncronas e assíncronas do sistema. Aqui temos:

## Testes de entrada e saída de dados

Testar com a entrada de múltiplos dados diferentes, esperados e não esperados para garantir que a saída será adequada. Aqui pode ser muito interessante a utilização de testes unitários para automatização do processo de input com dados variados

## Testes de desempenho e segurança

Testes relacionados tanto ao tempo de resposta de aplicações, como para responder perguntas, tais quais:

1. Como o sistema responde sob pressão?
2. O quão rápido o sistema responde?
3. É rápido o suficiente?
4. Como podemos melhorar o desempenho?
5. Como o sistema responde em diversos aparelhos diferentes?
6. O sistema é seguro? Consegue lidar bem com métodos de invasão variados?
7. Quais vulnerabilidades o sistema pode apresentar?
8. O usuário é quem diz ser?
9. O usuário está devidamente autorizado a acessar esses dados?


### Testes de tempo de resposta

Interessante aqui testar como funcionaria o sistema em caso de throttling, slow 3G, fast 3G, offline, etc. Podemos testar também como ele funciona e responde em equipamentos de diferentes custos

### Testes de estresse

Testar como o sistema funciona em caso de situações ‘extremas’, onde temos menos controle e ferramentas. Podemos considerar aqui, também, a utilização de técnicas de pentesting, como, XSS, SQL injection, CSRF, etc

### Testes de carga

Testar como o servidor lida em caso de muitas pessoas usando o sistema ao mesmo tempo. Verificar também, como o aplicativo como um todo, reage ao uso em grande escala, tanto na parte do banco de dados, quanto em caso de envios constantes de formulários

### Testes de autenticação e autorização

Aqui visamos garantir que a verificação de identidade do usuário está de acordo com o que esperamos dela. Garantir também, que um usuário com as permissões adequadas, tenha acesso àquilo que diz respeito a ele. Outro ponto importante, é garantir que não tenhamos violação de integridade de constraints, em caso de usuários com email e/ou nome de usuário já presentes na base de dados, tentando um segundo registro sem exclusão do anterior. Interessante considerar a autenticação em dois fatores e recuperação de senhas também. Por fim, é fundamental a utilização da criptografia em caso de dados sensíveis do usuário no banco de dados

## Testes extra

### Testes de build e deploy

Aqui, eu proponho testar como o sistema funciona quando já hospedado, tanto na parte client side, quanto server side e data layer

### Testes de verificação e validação

 Verificar e validar o sistema (se possível a cada sprint ou ciclo), para garantir que o produto está de acordo com a documentação (DER, Wireframes, etc)

### Links importantes

[Exemplo de teste](https://www.cin.ufpe.br/~gta/rup-vc/extend.formal_resources/guidances/examples/resources/test_plan_v1.htm#_Toc449511158)

[ACID](https://database.guide/what-is-acid-in-databases/)