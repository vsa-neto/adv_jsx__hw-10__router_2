import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate";
import { ViewCards, Post } from './components/pages/Posts';
import { NewPost } from './components/pages/NewPost';
import { PostEdit } from './components/pages/PostEdit';

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
                path: "/post/:id",
                element: <Post />,
            },
            {
                path: "/post/new",
                element: <NewPost />,
            },
            {
                path: "/post/:id/edit",
                element: <PostEdit />,
            },

        ]
    }
])