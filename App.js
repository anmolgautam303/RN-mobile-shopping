import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FlashMessage from "react-native-flash-message";
import { store, persistor } from "./src/store";
import Main from "./src";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
        <FlashMessage position="bottom" />
      </PersistGate>
    </Provider>
  );
};

export default App;
