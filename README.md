# Processo Seletivo Base2

## 01-login.cy.js

**Descrição:**
Este arquivo contém testes relacionados ao processo de login no sistema.

**Specs:**

- **Deve fazer login - Caminho Feliz**
  - **Descrição:** Verifica se é possível fazer login com credenciais válidas.
  - **Teste:** `cy.login();`

- **login Usuario Incorreto - Caminho Negativo**
  - **Descrição:** Verifica o comportamento quando um usuário incorreto tenta fazer login.
  - **Teste:** `cy.userIncorreto();`

- **login Senha Incorreta - Caminho Negativo**
  - **Descrição:** Verifica o comportamento quando uma senha incorreta é utilizada no login.
  - **Teste:** `cy.senhaIncorreta();`

  Todos os comandos estão definidos no arquivo `commands.js` do Cypress.

---

## 02-criarTarefa.cy.js

**Descrição:**
Este arquivo contém testes relacionados à criação de tarefas no sistema, após o login.

**Specs:**

- **Deve fazer login corretamente**
  - **Descrição:** Garante que o login seja feito corretamente antes de cada teste de criação de tarefa.
  - **Teste:** `cy.login();`

- **Criar Tarefa - Caminho Feliz**
  - **Descrição:** Testa a funcionalidade de criação de tarefa com dados válidos.
  - **Teste:** `cy.criarTarefa();`

- **Criar Tarefa - Caminho Negativo**
  - **Descrição:** Testa a criação de tarefa com dados inválidos para verificar o comportamento do sistema.
  - **Teste:** `cy.criarTarefaNegativo();`

- **Validar Tarefas Feitas**
  - **Descrição:** Testa a validação de tarefas criadas anteriormente.
  - **Teste:** `cy.acessarVerTarefas(); cy.acessarDetalhesTarefa('1027');`

  Todos os comandos estão definidos no arquivo `commands.js` do Cypress.

---

## 03-verTarefas.cy.js



  Todos os comandos estão definidos no arquivo `commands.js` do Cypress.
