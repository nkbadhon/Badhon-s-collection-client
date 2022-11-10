import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import Main from "../../Layout/Main";
import EachDetails from "../../Pages/EachDetails/EachDetails";
import Home from "../../Pages/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices/AllServices";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Registration from "../../Pages/Registration/Registration";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/eachdetails/:id',
                element: <PrivetRoute><EachDetails></EachDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myrev',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/aaddservices',
                element: <AddService></AddService>
            }

        ]

    }


])