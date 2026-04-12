import { Outlet } from "react-router-dom";
import './MainTemplate.css'

export const MainTemplate = () => {
    return (
        <div className="wrp">
            <header>
            </header>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
};