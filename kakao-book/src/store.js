import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import bookSlice from './slices/BookSlice';




const store = configureStore({
  reducer: {
      'book': bookSlice, 
  },

  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    createLogger()
  ],
  devTools: true
});

export default store;
