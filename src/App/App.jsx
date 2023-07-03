import {
  Router,
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  HashRouter,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavLayout from "../SharedLayout/NavLayout";
import Home from "../Pages/HomePage/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <HashRouter base="/">
      <RouterProvider router={router}></RouterProvider>
    </HashRouter>
  );
};

export default App;
