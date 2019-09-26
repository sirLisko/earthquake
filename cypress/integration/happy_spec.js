describe('The Web App', function() {
  it('successfully get events', function() {
    cy.visit('http://localhost:3000');
    cy.get('table');

    cy.get('input[type="text"]')
      .first()
      .type('1.1');
    cy.get('form')
      .first()
      .submit();
    cy.get('tbody tr')
      .first()
      .contains('1.1');
  });

  it('show not found if no events are present', function() {
    cy.visit('http://localhost:3000');
    cy.get('table');

    cy.get('input[type="text"]')
      .first()
      .type('asd');
    cy.get('form')
      .first()
      .submit();
    cy.contains('Not found!');

    cy.get('div > button:nth-child(3)').click();
    cy.get('table');
  });
});
