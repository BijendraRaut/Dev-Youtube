import Body from "./component/Body";
import Header from "./component/Header";
import "./App.css";
import { Provider } from "react-redux";
import store from "./component/utils/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
