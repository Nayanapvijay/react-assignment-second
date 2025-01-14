import { createBrowserRouter } from "react-router-dom";
import productdetails from "../components/Productdetails";
import Productcard from "../components/Productcard";
import App from "../App";
import Productdetails from "../components/Productdetails";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path:'productdetails/:id',
        element: <Productdetails/>
    }
  ]);