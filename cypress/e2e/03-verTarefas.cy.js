describe('Validar Tarefas Feitas', () => {
    beforeEach('Deve fazer login corretamente', () => {
        cy.login();
    });
    it('Deve validar campos de uma anotação específica', () => {
        cy.acessarVerTarefas();
        cy.acessarDetalhesTarefa('1027');
      });
    });


