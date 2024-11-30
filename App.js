import { Provider } from "react-redux";
import store from "./context/store";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />;
    </Provider>
  );
}
