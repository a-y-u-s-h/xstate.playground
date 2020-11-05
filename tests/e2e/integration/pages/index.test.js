/*
  ======================================
    This is where you write your e2e
    suites. You can checkout different
    kinds of context by learning more
    about Cypress. But by default 'Window'
    is provided, which is for Web UI automation.
  ======================================
*/

const suites = [
  {
    context: "Window",
    website: "",
    tests: [
      {
        message: "",
        function: () => {}
      }
    ]
  }
]

/*
  ======================================
    Code below takes the suites described
    above and creates a cypress compatible
    tests out of it. You don't need to write
    'context', 'beforeEach' and 'it' again
    and again. You can specify everything above
    and leave this code alone.

    This structure will also debug
    cookies. If you want to enable
    cookie debugging - you can do so here:
  ======================================
*/
suites.forEach(suite => {
  context(suite.context, () => {
    Cypress.Cookies.debug(false)
    beforeEach(() => cy.visit(suite.website).injectAxe())
    suite.tests.forEach(t => it(t.message, t.function))
  })
})
