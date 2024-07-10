
describe('Teste Criar Tarefa',  () => {
    it('Deve fazer login - Caminho Feliz', () => {
        cy.login();
    });
    it('login Usuario Incorreto - Caminho Negativo', () => {
        cy.userIncorreto();
    });
    it('login Senha Incorreta - Caminho Negativo', () => {
        cy.senhaIncorreta();
    });
})
