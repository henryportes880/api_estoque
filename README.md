# 📦 Sistema de Controle de Estoque

API REST para gerenciamento de estoque desenvolvida durante o curso **Técnico em Informática** da **Lions Startups**.

O sistema permite o gerenciamento de usuários, produtos e movimentações de estoque, utilizando autenticação JWT, controle de permissões e atualização automática do estoque.

---

# ✨ Funcionalidades

- 🔐 Autenticação com JWT
- 👥 Cadastro e consulta de usuários
- 📦 Cadastro e gerenciamento de produtos
- 🔍 Consulta de produtos por ID
- 📥 Entrada de estoque
- 📤 Saída de estoque
- 📊 Atualização automática do estoque
- 📜 Histórico de movimentações
- 🛡 Controle de permissões (ADMIN e READER)
- ⚠ Validação de estoque insuficiente

---

# 🛠 Tecnologias Utilizadas

## Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Nodemon

## Frontend

- Angular
- TypeScript
- SCSS

---

# 📁 Estrutura do Projeto

```text
api-almoxarifado-main/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── README.md
│
└── frontend/
    └── guardiao-frontend/
        ├── src/
        ├── public/
        ├── package.json
        └── README.md
```

---

# 🔒 Segurança

- Autenticação utilizando JWT.
- Controle de acesso por perfis (ADMIN e READER).
- Validação dos dados recebidos pela API.
- Tratamento centralizado de erros.
- Atualização automática do estoque após movimentações.

---

# ⚡ Como Executar

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend/guardiao-frontend
npm install
ng serve
```

---

# 🌐 Endpoints

## 🔐 Autenticação

| Método | Endpoint |
|---------|----------|
| POST | `/api/auth/login` |

## 👥 Usuários

| Método | Endpoint |
|---------|----------|
| POST | `/api/users` |
| GET | `/api/users` |
| GET | `/api/users/:id` |

## 📦 Produtos

| Método | Endpoint |
|---------|----------|
| POST | `/api/products` |
| GET | `/api/products` |
| GET | `/api/products/:id` |

## 📋 Movimentações

| Método | Endpoint |
|---------|----------|
| POST | `/api/stock-movements` |
| GET | `/api/stock-movements` |

---

# ✅ Testes

Todos os endpoints da API foram testados utilizando o **Postman**.

### Casos de teste realizados

- ✅ Login
- ✅ Cadastro de usuários
- ✅ Cadastro de produtos
- ✅ Listagem de produtos
- ✅ Consulta de produtos por ID
- ✅ Entrada de estoque
- ✅ Saída de estoque
- ✅ Atualização automática do estoque
- ✅ Histórico de movimentações
- ✅ Validação de estoque insuficiente
- ✅ Produto inexistente

---

# 🧑‍💻 Autor

**Henry Rafael Ribeiro Portes**

Projeto acadêmico desenvolvido em **2026** durante o curso **Técnico em Informática** da **Lions Startups**, com ênfase em desenvolvimento de aplicações utilizando **Node.js** (Turma da Noite).
