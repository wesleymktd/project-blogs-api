## 🧐 Sobre

Esse projeto se trata de uma API e um banco de dados para a produção de conteúdo para um blog. Onde foi aplicado conceitos de Arquitetura de Software, ORM e Autorização e autenticação utilizando o modelo Model Service Controler, Sequelize e JWebToken. Nessa API temos todo o fluxo de login e Cadastro junto com um CRUD (create Read Update e Delete) para as postagens. Além disso, Foi utilizado nesse projeto o Docker Compose.

# Nesse projeto eu:

- desenvolvi uma API RESTful e um banco de dados SQL para produzir conteúdo para um blog;
- desenvolvi uma aplicação em Node.js utilizando o pacote sequelize para fazer um CRUD dos posts:
  - Para fazer um post, precisa de um usuário e um login, logo, foi trabalhado a relação entre usuário e post, e usei o JWT para autentivcação de usuário;

## ⚒ Instalando 
<details>
 
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 


  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - Lembre-se de usar o prefixo `env $(cat .env)` ao rodar os comandos localmente para carregar as variáveis de ambiente do arquivo `.env`. Por exemplo:
  
    ```bash
    env $(cat .env) npm run dev
    ```
      - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
   <br/>
</details>

## Principais tecnologias utilizadas:

- Docker;
- JavaScript;
- Node.js;
- Express;
- MySql;
- Sequelize;
- JWT.

## Contribuição

Criei a pasta src e todo conteúdo dentro dela. Os outros arquivos foram feitos pela Trybe.
