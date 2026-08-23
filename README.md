# TCC Lions — Back-end Oficina

Descrição
- API REST para gerenciamento de oficina (usuários, veículos, manutenções e workshops).
- Projeto do TCC com estrutura modularizada (models, repositories, middleware).

Tecnologias
- Node.js
- Express
- Banco de dados (configuração em `src/config/db.js`)

Pré-requisitos
- Node.js >= 14
- npm ou yarn
- Banco de dados configurado (ex.: PostgreSQL/MySQL)

Instalação
1. Clone o repositório
   ```bash
   git clone <repo-url>
   cd Back-end-Oficina-TCC
   ```
2. Instale dependências
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Configure variáveis de ambiente (exemplos):
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASS`
   - `DB_NAME`
   - `PORT` (padrão: 3000)
   - `JWT_SECRET`

Execução
- Iniciar em produção:
  ```bash
  npm start
  ```
- Iniciar em modo de desenvolvimento (se houver script):
  ```bash
  npm run dev
  ```

Scripts úteis
- `npm start` — inicia a aplicação
- `npm test` — executa testes (ver `test/`)

Estrutura do projeto (resumo)
- `src/index.js` — ponto de entrada
- `src/config/` — configuração do banco de dados
- `db/` — modelos (Admin, Maintenance, User, Veiculo, Workshop)
- `middleware/` — `auth.js`, `role.js`
- `repository/` — repositórios por entidade (create/read/update/delete)
- `utils/validators.js` — validadores de entrada
- `test/validation.test.js` — testes de validação

Endpoints principais (visão geral)
- Autenticação: `/auth` (login, logout, refresh)
- Usuários: `/users` (criar, atualizar, remover, listar)
- Veículos: `/veiculos` (CRUD de veículos)
- Manutenções: `/maintenance` (agendar, atualizar, listar)
- Workshops: `/workshops` (criar, listar, atualizar)
- Administração: `/admin` (rotas administrativas)

Autenticação e autorização
- Rotas protegidas usam `middleware/auth.js`.
- Controle de acesso por função via `middleware/role.js`.
- JWT usado para autenticação (configurar `JWT_SECRET`).

Testes
- Execute `npm test` para rodar a suíte de testes.
- Testes estão em `test/`.

Contribuição
- Abra issues ou pull requests com mudanças propostas.
- Verifique padrões de código e escreva testes para novas funcionalidades.

Licença
- Adicione a licença desejada (ex.: MIT) no repositório.

Contato
- Para dúvidas sobre o projeto, abra uma issue ou contacte o autor do repositório.
