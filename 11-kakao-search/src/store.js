import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    
  },

  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    createLogger()
  ],
  devTools: true
});

export default store;
