import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice/cartSlice";
import buildSlice from "./buildPartsSlice/buildSlice";

const persistConfig = {
  key: "root",
  storage,
};

const myCartReducer = persistReducer(persistConfig, cartSlice);
const builderSlice = persistReducer(persistConfig, buildSlice);

export const store = configureStore({
  reducer: {
    cart: myCartReducer,
    builderState: builderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
});

export const persistor = persistStore(store);
