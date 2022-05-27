import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paginationReducer from "./reducers/pagination.reducer";
import paginationStockReducer from "./reducers/pagination.stock.reducer";
import paginationPriceReducer from "./reducers/pagination.price.reducer";
import productIdReducer from "./reducers/product-id.reducer";
import transactionValueReducer from "./reducers/transaction-value.reducer";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	pagination: paginationReducer,
	paginationStock: paginationStockReducer,
	paginationPrice: paginationPriceReducer,
	productId: productIdReducer,
	transactionValue: transactionValueReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
