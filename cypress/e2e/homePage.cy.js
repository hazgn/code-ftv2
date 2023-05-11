describe("Navigation", () => {
  it("should navigate to the users list page", () => {
    // start from the index page
    cy.visit("/");

    // check homepage title
    cy.get("h1").contains("Wellcome");

    // Find a link with an href attribute containing "users" and click it
    cy.get('a[href*="users"]').first();
  });
});
