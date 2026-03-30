import { Outlet } from "react-router-dom";
import { Navigate } from "./navigate/Navigate";

import './MainTemplate.css'

export const MainTemplate = () => {
    return (
        <div className="wrp">
            <header>
                <Navigate />
            </header>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
};