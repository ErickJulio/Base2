describe('Validar Tarefas Feitas', () => {
    beforeEach('Deve fazer login corretamente', () => {
        cy.login();
    });
    it('Deve validar campos de uma anotação específica -  Caminho Feliz', () => {
        cy.acessarVerTarefas();
        cy.acessarDetalhesTarefa('1027');
        cy.verificarAnotacao();
        cy.verificarHistorico();
      }); 
    });


