import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate";
// import { notFound } from "./components/MainTemplate";

import { ViewCards, ViewCard } from './components/pages/Posts';
import { NewPost } from './components/pages/NewPost';


export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainTemplate />,
        children: [
            {
                path: "/",
                element: < Navigate to="/posts" replace />
            },
            {
                path: "/posts",
                element: <ViewCards />,

            },
            {
                path: "/card/:id",
                element: <ViewCard />,
            },
            {
                path: "/posts/new",
                element: <NewPost />,
            },

        ]
    }
])