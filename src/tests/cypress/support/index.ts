/* eslint-disable @typescript-eslint/no-namespace */

/* eslint-disable @typescript-eslint/naming-convention */
import './commands'

// custom commands types
declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<JQuery<Element>>
    }
  }
}
