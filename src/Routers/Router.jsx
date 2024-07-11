import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Login/Login/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Terms from "../Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:"/",
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/terms",
        element:<Terms></Terms>
      },
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children:[
      {
        path:":id",
        element:<Category></Category>,
        loader:({params}) =>fetch(`http://localhost:3000/categories/${params.id}`)
      },
    ]
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children: [{
      path:":id",
      element:<PrivateRoute><News></News></PrivateRoute>,
      loader:({params}) =>fetch(`http://localhost:3000/news/${params.id}`)
    }]
  }
]);
export default router;