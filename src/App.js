import React, {lazy , Suspense} from "react"; 
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Error from "./Components/Error";
import Main from "./Components/Main";
import RestaurentMenu from "./Components/RestaurentMenu";
import { lazy, Suspense } from "react";
import Shimmer2 from "./Components/Shimmer2";
import RestaurentMenu from "./Components/RestaurentMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const SwiggyApp = ()=>(
    <>
    <Provider store={appStore}>
    <NavBar/>
     <Outlet/>
    </Provider>
    </>
);

// const RestaurentMenu = lazy(() => import("./Components/RestaurentMenu"))

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <SwiggyApp/>,
        children:[
            {
                path: "/",
                element: <Main/>
            },
            {
                path: "/Signin",
                element:<SignIn />
            },{
                path: "/restaurent/:resId",
                element: <RestaurentMenu/>
            },{
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement : <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/>);

//<Suspense fallback={<><h1>loading!!!!!!!!!!!1</h1><Shimmer2/></>}>   </Suspense>