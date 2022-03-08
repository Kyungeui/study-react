import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import allSlice from "./slices/AllSlice";
import nowSlice from "./slices/NowSlice";

const store = configureStore({
  reducer: {
    all: allSlice,
    now: nowSlice,
  },

  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    createLogger(),
  ],
  devTools: true,
});

export default store;
