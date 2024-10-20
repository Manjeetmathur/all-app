import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthLayout from "../components/AuthLayout";
import Signup from "../pages/Signup";
import Calculator from "../pages/Calculator/calculator";
import Todo from "../pages/to-do/Todo";

const router = createBrowserRouter([
       {
              path : "/",
              element : <App/>,
              children:[
                     {
                            path : "/about",
                            element : <About/>
                     },
                     {
                            path : "/",
                            element : <Home/>,
                            children:[
                                   {
                                          path : "/calculator",
                                          element : <Calculator/>
                                   },
                                   {
                                          path : "/todo",
                                          element :<Todo/>
                                   },
                            ]
                     },
                     {
                            path : "/login",
                            element : (
                                   <AuthLayout authentication={false}>
                                          <Login/>
                                   </AuthLayout>
                            )
                     },
                     {
                            path : "/signup",
                            element : (
                                   <AuthLayout authentication={false}>
                                          <Signup/>
                                   </AuthLayout>
                            )
                     },
              ]
       },
       
       
       
])
export default router