
describe('Teste Criar Tarefa', () => {
  beforeEach('Deve fazer login corretamente', () => {
    cy.login();
  });
  it('Criar Tarefa - Caminho Feliz', () => {
    cy.criarTarefa();
  });
  it('Criar Tarefa - Caminho Negativo', () => {
    cy.criarTarefaNegativo();
  });
});
