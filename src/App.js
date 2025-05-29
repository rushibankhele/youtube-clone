import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import WatchPage from "./Components/WatchPage";
import { Provider } from "react-redux";
import store from "./Components/Utils/appStore";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainContainer from "./Components/MainContainer";

function App() {
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
          path:'/watch',
          element: <WatchPage/>
        }
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
