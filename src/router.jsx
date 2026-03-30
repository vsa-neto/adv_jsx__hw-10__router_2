import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate";
// import { notFound } from "./components/MainTemplate";

import { DriftPage } from './components/pages/Pages';
import { ViewCards } from './components/pages/ViewCards';

// import { HomePage } from './components/pages/HomePage';

export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainTemplate />,
        children: [
            {
                path: "/",
                // exect: true,
                // element: <HomePage />,
                element: <ViewCards />,
            },
            {
                path: "/drift",
                // exect: true,
                element: <DriftPage />,
            }
        ]
    }
])