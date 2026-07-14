# Guardião do Almoxarifado - Backend

API REST desenvolvida em Node.js para gerenciamento de estoque de produtos e movimentações de entrada e saída.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Nodemon

---

## Funcionalidades

### Autenticação
- Login de usuários
- Autenticação via JWT
- Controle de permissões por perfil (ADMIN e READER)

### Usuários
- Cadastro
- Listagem
- Busca por ID

### Produtos
- Cadastro
- Listagem
- Busca por ID
- Controle automático de estoque

### Movimentações
- Entrada de estoque
- Saída de estoque
- Histórico de movimentações
- Validação de estoque insuficiente

---

## Estrutura do Projeto

```
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── app.js
└── server.js
```

---

## Instalação

Clone o projeto

```bash
git clone <url-do-repositorio>
```

Entre na pasta

```bash
cd api-almoxarifado
```

Instale as dependências

```bash
npm install
```

Crie um arquivo `.env`

```env
PORT=3000

DB_URI=mongodb://localhost:27017/guardiao-almoxarifado

JWT_SECRET=sua_chave_secreta

APP_NAME=Guardião do Almoxarifado
```

Execute o projeto

```bash
npm run dev
```

---

## Endpoints

### Autenticação

| Método | Endpoint |
|---------|----------|
| POST | /api/auth/login |

---

### Usuários

| Método | Endpoint |
|---------|----------|
| POST | /api/users |
| GET | /api/users |
| GET | /api/users/:id |

---

### Produtos

| Método | Endpoint |
|---------|----------|
| POST | /api/products |
| GET | /api/products |
| GET | /api/products/:id |

---

### Movimentações

| Método | Endpoint |
|---------|----------|
| POST | /api/stock-movements |
| GET | /api/stock-movements |

---

## Regras de Negócio

- Apenas usuários ADMIN podem cadastrar produtos.
- Apenas usuários ADMIN podem realizar movimentações.
- Usuários READER possuem acesso somente para consulta.
- Não é permitido retirar mais itens do que o disponível em estoque.
- O estoque é atualizado automaticamente após cada movimentação.

---

## Testes

Todas as rotas foram testadas utilizando o Postman.

Foram validados:

- Login
- Cadastro de usuários
- Cadastro de produtos
- Listagem de produtos
- Consulta por ID
- Entrada de estoque
- Saída de estoque
- Atualização automática do estoque
- Histórico de movimentações
- Tratamento de erros

---

## Autor

Henry Rafael Ribeiro Portes

Lions