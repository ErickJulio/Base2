describe('Validar Pagina principal', () => {
    beforeEach('Deve fazer login corretamente', () => {
        cy.login();
    });
    it('Valida Campos Minha Visão', () => {
       cy.validaCampos();  
    });
});