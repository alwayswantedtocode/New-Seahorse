import {
  Router,
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavLayout from "../SharedLayout/NavLayout";
import Home from "../Pages/HomePage/HomePage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    // <>
    //   <RouterProvider router={router}></RouterProvider>
    // </>
    <>
      <RouterProvider router={router}>
        <Router>
          <Navbar />
          <Routes>{/* Add your routes here */}</Routes>
        </Router>
      </RouterProvider>
    </>
  );
};

export default App;
