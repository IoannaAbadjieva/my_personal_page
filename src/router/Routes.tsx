import { createBrowserRouter, type RouteObject } from "react-router-dom"
import AboutMe from "../features/AboutMe"
import MyInterests from "../features/MyInterests"
import Contacts from "../features/Contacts"
import App from "../layout/App"
import HomePage from "../features/home/HomePage"


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'about', element: <AboutMe /> },
            { path: 'interests', element: <MyInterests /> },
            { path: 'contacts', element: <Contacts /> },
        ]
    }
]
export const router = createBrowserRouter(routes)