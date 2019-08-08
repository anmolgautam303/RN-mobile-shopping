import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

const persistor = persistStore(store);

export { store, persistor };
