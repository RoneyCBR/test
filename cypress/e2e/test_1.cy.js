describe('Sample test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')  
    cy.contains('a', 'Ledddarddfn Reac t')
  })
})
