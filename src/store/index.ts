import { user } from './user'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: { user: user.reducer } })

export { store }
