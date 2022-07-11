import { postStore } from './posts'
import { userStore } from './user'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { userStore: userStore.reducer, postsStore: postStore.reducer }
})

export { store }
