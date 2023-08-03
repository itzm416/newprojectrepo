import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../features/userSlice';

import { setupListeners } from '@reduxjs/toolkit/query'
import { webappapi } from '../services/webappapi';

export const store = configureStore({
  
  reducer: {
    auth : userSlice,
    [webappapi.reducerPath]: webappapi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(webappapi.middleware)

});

setupListeners(store.dispatch)