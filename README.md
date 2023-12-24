<h1 align="center">iStore</h1>

<p align="center">Backend para um sistema de gerenciamento de loja</p>

<p align="center">Status: em desenvolvimento</p>

<p align="center">
  <a href="#Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como utilizar">Como utilizar</a>
</p>

<br>

# Projeto

## Recursos

- Cadastro de produtos

- Listagem de produtos

- Atualização de produtos

- Remoção de produtos

# Tecnologias

- Node.js
- Nest.js
- TypeScript
- PostgreSQL
- Redis
- Docker

# Funcionalidades

# Como utilizar

**1. Requisitos**

Certifique-se de possuir os itens abaixo instalados:

- [Node.js](https://nodejs.org/en/download)
- [NPM](https://docs.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com)

**2. Clone este repositório**

**3. Configure variáveis de ambiente**

- Crie um arquivo `.env` na raiz do projeto de acordo com o arquivo `.env.example`:

```
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_ADMIN_EMAIL=
```
Esses dados serão utilizados para criar o container do banco de dados **PostgreSQL** e da interface de gerenciamento do banco de dados, o **pgAdmin**

**4. Crie e execute os containers necessários**

`docker-compose up -d`

**5. Instale as dependências do projeto**

`npm install`

**6. Realize a migração dos modelos de dados**

`npm run migration:generate -- db/migrations/create-database-tables`

Este comando criará um arquivo com as configurações das migrações que serão realizadas no diretório `db/migrations`

**7. Execute as migrações**

`npm run migration:run`

**8. Inicialize a aplicação**

`npm run start:dev`

**9. Acesso**

- API: http://localhost:3000/api/v2
- Documentação: http://localhost:3000/api/v2/docs
