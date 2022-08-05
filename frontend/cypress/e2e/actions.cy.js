/* eslint-disable quotes */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("Fill the name field", () => {
    cy.get("#cy-name")
      .type("Javier")
      .should("have.value", "Javier")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("Slow Name", { delay: 100 })
      .should("have.value", "Slow Name");
  });

  it("Fill email field", () => {
    cy.get("#cy-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com");
  });

  it("Fill password", () => {
    cy.get("#cy-password")
      .type("fakePassword")
      .should("have.value", "fakePassword")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("fakePasswordSlow", { delay: 100 })
      .should("have.value", "fakePasswordSlow");
  });

  it("Fill password confirmation", () => {
    cy.get("#cy-password-confirm")
      .type("fakePassword")
      .should("have.value", "fakePassword")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("fakePasswordSlow", { delay: 100 })
      .should("have.value", "fakePasswordSlow");
  });

  it(".submit() - submit registration form", () => {
    cy.get("#cy-name").type("Javier");
    cy.get("#cy-email").type("fake@email.com");
    cy.get("#cy-password").type("fakePassword");
    cy.get("#cy-password-confirm").type("fakePassword");

    cy.get("#cy-register-form").submit();

    cy.get("#success-message").should(
      "contain",
      "You have been registered successfully!"
    );
  });
});
