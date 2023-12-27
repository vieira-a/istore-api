<h1 align="center">iStore</h1>

<p align="center">Backend para um sistema de gerenciamento de loja</p>

<p align="center">Status: em desenvolvimento</p>

<p align="center">
  <a href="#Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como utilizar">Como utilizar</a>
  <a href="#Desenvolvimento">Desenvolvimento</a>
  <a href="#Autor">Autor</a>
</p>

<br>

# Projeto

O objetivo desse projeto é prover uma API para gerenciamento de produtos.

## Recursos

> Cadastro de produtos

- Realiza cadastro de produtos de acordo com dados pré estabelecidos;

> Listagem de produtos

- Possui endpoint para listar todos os produtos;
- Possui suporte a paginação a otimizar o retorno de informações.
- Possui possibilidade de filtrar produtos por nome e categoria através dos parâmetros `name` e `category`

> Listar produto por ID

- Possui endpoint para listar produto por ID;

> Atualização de produtos

- Possui endpoint para atualizar produto;
- Realiza atualização das informações do produto de acordo com dados pré estabelecidos;

> Remoção de produtos

- Possui endpoint para atualizar produto;
- Realiza atualização das informações do produto de acordo com dados pré estabelecidos;

> Testes

- Possui testes unitários e de integração para serviços e controladores utilizando a biblioteca Jest.

# Tecnologias

- Node.js
- Nest.js
- TypeScript
- PostgreSQL
- Docker
- Jest

# Funcionalidades

> Transformação de dados

- Utilização de `mappers` e `DTOs` para adequar transformação de dados

> Tratamento de erros

- Lida com erros de forma apropriada, evitando encerramento inesperado e mau funcionamento da aplicação

> Documentação

- Utiliza a biblioteca `@nestjs/swagger` para criar uma documentação concisa e auto explicativa;
- Utiliza a prática de `Conventional Commits` que busca padronizar mensagens de commits no repositório;
- Utiliza a prática de `Small Commits` que busca detalhar as atividades desenvolvidas e permitir maior controle sobre as alterações realizadas.

> Organização do projeto

- Organiza arquivos do projeto por módulos, que contém suas respectivas funcionalidades;
- Organiza recursos compartilhados em diretórios separados, buscando facilitar a identificação dos recursos.

> Arquitetura do projeto

- Utiliza os princípios arquiteturais oferecidos pelo Nest.js, fazendo uso apropriado de `Decorators`, `Dependency injection`, `Repositories`, juntamente com princípios de SOLID.

# Como utilizar

**1. Requisitos**

Certifique-se de possuir os itens abaixo instalados:

- [Node.js](https://nodejs.org/en/download)
- [NPM](https://docs.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com)

**2. Clone este repositório**

```
git clone git@github.com:vieira-a/istore-api.git
```

**3. Configure variáveis de ambiente**

- Crie um arquivo `.env` na raiz do projeto de acordo com o arquivo `.env.example`:

```
DB_HOST=
DB_PORT=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_ADMIN_EMAIL=
```
Esses dados serão utilizados para criar o container do banco de dados **PostgreSQL** e da interface de gerenciamento do banco de dados, o **pgAdmin**.

Além disso, será criada uma instância de banco de dados com o nome de acordo com a variável de ambiente `DB_NAME`

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

- API: http://localhost:3000/api/v1
- Documentação: http://localhost:3000/api/v1/doc

# Desenvolvimento

Para visualizar todas as tarefas que foram executadas durante o desenvolvimento deste projeto, veja o arquivo `TODO.md`

# Autor

[Anderson Vieira](https://www.linkedin.com/in/vieira-a)