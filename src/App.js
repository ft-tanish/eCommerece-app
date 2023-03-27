import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from './components/AllProducts';
import Layout from './components/Layout';
import SingleProduct from './components/SingleProduct';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AllProducts />
      },
      {
        path: "/products/:id",
        element: <SingleProduct />
      },
    ]
  }
]);
