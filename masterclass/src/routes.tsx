import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./Pages/Timeline";
import { Status } from "./Pages/Status";
import { Default } from "./layout/Default";

export const router =   createBrowserRouter([
    {
    path:'/',
    element:<Default/>,
    children:[
    {
        path: '/',
        element: <Timeline/>
    },
    {
        path:'/Status',
        element: <Status/>
    }
],
},  
])