import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userApi'
import { thirdPartyApi } from './api/thirdPartyApi'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [thirdPartyApi.reducerPath] : thirdPartyApi.reducer,
  },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,thirdPartyApi.middleware),
})