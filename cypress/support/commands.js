const url = Cypress.config('url')
Cypress.Commands.add('login', () => {
    const user = Cypress.config('user');
    const password = Cypress.config('password');
    

    cy.visit(`${url}/login_page.php`);
    cy.get('input[name="username"]').type(user, { log: false });
    cy.get('.width-40').click();
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('.width-40').click();
    cy.wait(5000);
    cy.url().should('eq', `${url}/my_view_page.php`);
    cy.get('a[href="/my_view_page.php"]', { timeout: 10000 }).contains('.menu-text', 'Minha Visão').should('be.visible');
    cy.get('a[href="/account_page.php"]').contains(`${user}`).should('be.visible');
});
Cypress.Commands.add('userIncorreto', () => {

    cy.visit(`${url}/login_page.php`);
    cy.get('input[name="username"]').type('Não');
    cy.get('.width-40').click();
    cy.get('.alert.alert-danger').should('contain', 'Sua conta pode estar desativada ou bloqueada');

});
Cypress.Commands.add('senhaIncorreta', () => {
    const user = Cypress.config('user');

    cy.visit(`${url}/login_page.php`);
    cy.get('input[name="username"]').type(user, { log: false });
    cy.get('.width-40').click();
    cy.get('input[name="password"]').type('123456', { log: false });
    cy.get('.width-40').click();
    cy.get('.alert.alert-danger').should('contain', 'Sua conta pode estar desativada ou bloqueada');


});
Cypress.Commands.add('criarTarefa', () => {
    const resumo = 'Validar Criar tarefa';
    const descricao = 'Automação criada para validar a criação de tarefas, verificando campos obrigatórios e mensagens de confirmação.';
    const passosParaReproduzir = 'Acesse o sistema Mantis, crie uma nova tarefa preenchendo corretamente os campos obrigatórios (resumo e descrição). Após a submissão, verifique se a confirmação da criação é exibida corretamente.';
    const informacoesAdicionais = 'Automação em Cypress';
    const mensagemSucesso = 'Operação realizada com sucesso.';


    cy.get('i.menu-icon.fa.fa-edit').click();
    cy.get('h4.widget-title.lighter').should('be.visible').and('contain.text', 'Digite os Detalhes do Relatório');


    cy.get('select#category_id').select('[Todos os Projetos] categoria teste');
    cy.get('select#severity').select('pequeno');
    cy.get('select#reproducibility').select('às vezes');
    cy.get('select#priority').select('imediato');
    cy.get('input#summary').type(resumo, { force: true });
    cy.get('textarea#description').type(descricao, { force: true });
    cy.get('#steps_to_reproduce').type(passosParaReproduzir, { force: true }).should('have.value', passosParaReproduzir);
    cy.get('#additional_info').type(informacoesAdicionais, { force: true }).should('have.value', informacoesAdicionais);
    cy.get('#tag_select').select('Atividade');
    cy.fixture('teste.txt').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'teste.txt',
            mimeType: 'text/plain'
        });
        cy.get('a.dz-remove[data-dz-remove]').should('be.visible');
        cy.get('input[tabindex="18"]').click();
        cy.get('p.bold.bigger-110').should('be.visible').and('contain.text', mensagemSucesso);
    });
});
Cypress.Commands.add('criarTarefaNegativo', () => {

    cy.get('i.menu-icon.fa.fa-edit').click();
    cy.get('h4.widget-title.lighter').should('be.visible').and('contain.text', 'Digite os Detalhes do Relatório');
    cy.get('select#category_id').select('[Todos os Projetos] categoria teste');
    cy.get('select#severity').select('pequeno');
    cy.get('select#reproducibility').select('às vezes');
    cy.get('select#priority').select('imediato');
    cy.get('input[tabindex="18"]').click();
    cy.get('h4.widget-title.lighter').should('be.visible').and('contain.text', 'Digite os Detalhes do Relatório');


});
Cypress.Commands.add('acessarVerTarefas', () => {
  cy.contains('span.menu-text', 'Ver Tarefas').click();
  cy.url().should('eq', `${url}/view_all_bug_page.php`);
  cy.get('h4.widget-title.lighter').should('be.visible').and('contain', 'Visualizando Tarefas');
});
Cypress.Commands.add('acessarDetalhesTarefa', (idTarefa) => {
  cy.get('td.column-id a').contains(idTarefa).click();
  cy.url().should('eq', `${url}/view.php?id=${idTarefa}`);
  cy.get('h4.widget-title.lighter').contains('Ver Detalhes da Tarefa').should('be.visible');
  cy.get('h4.widget-title.lighter').contains('Atividades').should('be.visible');
});


