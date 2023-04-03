# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

![p1](https://user-images.githubusercontent.com/62622905/224182901-3d247242-3c75-4638-873d-741e64e69b52.png)
![p2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-adote-animais/blob/main/docs/img/p2.PNG?raw=true)
![p3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-adote-animais/blob/main/docs/img/p3.PNG?raw=true)

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
>
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

## Histórias de usuários

| Eu como…  |              ..desejo...              |                     ...para...                     |
| :-------: | :-----------------------------------: | :------------------------------------------------: |
|  Débora   |      ter acesso a imagens do pet      |                ver como o animal é                 |
|  Débora   |    conhecer a história dos animais    |               conhecer melhor o pet                |
| Estephany |   conhecer sobre a saúde do animal    | ter um breve conhecimento de como devo cuidar dele |
|   Josué   | conhecer sobre o estado mental do pet |       conhecer sobre o estado mental do pet        |
|   Josué   | conhecer sobre o estado mental do pet |       conhecer sobre o estado mental do pet        |

> [Gerador com a ajuda do Tables Generator](https://www.tablesgenerator.com/markdown_tables)

## Modelagem do Processo de Negócio

O modelo de Processos foi feito baseado nos acessos do usuário dentro do WebSite
![new-bpmn-diagram](https://user-images.githubusercontent.com/103543979/229309288-b35673cd-fcdc-43e7-ba92-c327f99abbb1.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.  

|Indicador	|Objetivo	|Descrição	|Cálculo	|Fonte de Dados	|Perspectiva|
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|-----------------------------------|
|Taxa de Adoção	|Aumentar o número de animais adotados através da aplicação	|Porcentagem de animais adotados em relação ao número total de animais cadastrados na aplicação	|(Número de animais adotados / Número total de animais cadastrados) x 100	|Banco de dados da aplicação	|Cliente|
|Taxa de Retenção de Usuários	|Fidelizar usuários na aplicação	|Porcentagem de usuários ativos na aplicação após 90 dias da primeira utilização	|(Número de usuários ativos após 90 dias da primeira utilização / Número total de usuários cadastrados) x 100	|Banco de dados da aplicação	|Cliente|
|Tempo de Resposta ao Usuário	|Garantir a satisfação do usuário	|Tempo médio de resposta às dúvidas e solicitações dos usuários	|Soma do tempo de resposta às dúvidas e solicitações / Número total de dúvidas e solicitações	|Banco de dados da aplicação	|Cliente|
|Índice de Satisfação do Usuário	|Garantir a satisfação do usuário	|Porcentagem de usuários satisfeitos com a aplicação	|(Número de avaliações positivas / Número total de avaliações) x 100	|Banco de dados da aplicação	|Cliente|
|Taxa de Conversão	|Aumentar o número de downloads e cadastros na aplicação	|Porcentagem de usuários que realizam o download e cadastro na aplicação após visualizar informações sobre ela	|(Número de downloads e cadastros / Número total de visualizações de informações sobre a aplicação) x 100	|Ferramentas de análise de mercado e mídias sociais|	Interno|  
  

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori.

## Requisitos

Encontram-se abaixo os requisitos que compõem o projeto

### Requisitos Funcionais

- **RF - 01** : Tela de cadastro onde usuários poderão se cadastrar. - **_ALTA_**

- **RF - 02** : Tela de login de usuários. - **_ALTA_**

- **RF - 03** : A página inicial do usuário vai mostrar os cards com os pets cadastrados para adoção. - **_ALTA_**

- **RF - 04** : Dentro dos cards vai ter as listas com as informações com os animais para adoção - **_MÉDIA_**

- **RF - 05** : Os cadastros podem fazer edições em seus perfis. - **_MÉDIA_**

- **RF - 06** : Os cadastros podem excluir seus perfis seus perfis. - **_MÉDIA_**

### Requisitos não funcionais

- **RNF - 01** : A aplicação deve ser responsiva respeitando a maioria dos aparelhos - **_ALTA_**

- **RNF - 02** : O banco de dados deve ser armazenado dentro de um ambiente acessível publicamente na internet(Heroku ou AWS) - **_ALTA_**

- **RNF - 03** : O aplicativo deve ser compatível com os principais sistemas operacionais do mercado (android e IOS) - **_ALTA_**

- **RNF - 04** : O aplicativo deve ser compatível com os principais navegadores do mercado (Opera, Mozilla, Google Chrome, Firefox e Microsoft Edge) - **_ALTA_**

- **RNF - 05** : O aplicativo deve ter bom nível de contraste entre os elementos da tela em conformidade - MEDIA

- **RNF - 06** : O aplicativo irá contar com autenticação de login para reforçar a segurança dentro da nossa plataforma - **_BAIXA_**

- **RNF - 07** : O aplicativo deve ser publicado em um ambiente acessível publicamente na internet como site(GitHub ou Heroku) - **_BAIXA_**

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

![casosdeuso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-adote-animais/blob/main/docs/img/casosdeuso.PNG?raw=true)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.

![matrizderastrabilidade](https://user-images.githubusercontent.com/62622905/224183213-b88b64d6-2985-437c-aed2-6d0468b07194.png)

> **Links Úteis**:
>
> - [Matéria informativa do Estadão](https://www.estadao.com.br/emais/comportamento-animal/por-que-a-adocao-ainda-e-tao-dificil-no-brasil/) acesso em 23/02/2023

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
