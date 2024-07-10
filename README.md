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

---

## 03-verTarefas.cy.js

**Descrição:**
Este arquivo contém testes relacionados à visualização de tarefas no sistema.

**Specs:**

- **Validar Tarefas Feitas - Caminho Feliz**
  - **Descrição:** Verifica os campos de uma anotação específica após acessar os detalhes de uma tarefa.
  - **Teste:** Veja o código para os detalhes completos.

---

## 04-minhaVisao.cy.js

**Descrição:**
Este arquivo contém testes relacionados à validação da página principal do sistema após o login.

**Specs:**

- **Validar Página Principal**
  - **Descrição:** Valida diversos campos e funcionalidades disponíveis na página principal.
  - **Teste:** Veja o código para os detalhes completos.
