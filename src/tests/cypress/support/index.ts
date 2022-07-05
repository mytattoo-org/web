/* eslint-disable @typescript-eslint/no-namespace */

/* eslint-disable @typescript-eslint/naming-convention */
import './commands'

import 'cypress-plugin-tab'

// custom commands types
declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<JQuery<Element>>
      signIn(): void
      tab(): void
    }
  }
}
