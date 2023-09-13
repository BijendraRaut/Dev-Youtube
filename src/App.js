import Body from "./component/Body";
import Header from "./component/Header";
import MainContainer from "./component/MainContainer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./component/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
