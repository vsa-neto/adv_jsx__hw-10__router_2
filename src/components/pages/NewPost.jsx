import { NavLink } from 'react-router-dom';

import './NewPost.css';

export const NewPost = () => {
    return (
        <div className="card_wrp">
            <div className="new_card_header">

                <NavLink className={({ isActive }) => `a ${isActive ? "link-active" : "nav-link"}`} to='#' onClick={(e) => e.preventDefault()} >
                    🖍  Публикация 
                </NavLink>
                <NavLink className={({ isActive }) => `a ${isActive ? "link-active" : "nav-link"}`} to='#' onClick={(e) => e.preventDefault()} >
                    📷  Фото/видео 
                </NavLink>
                <NavLink className={({ isActive }) => `a ${isActive ? "link-active" : "nav-link"}`} to='#' onClick={(e) => e.preventDefault()} >
                    📹  Прямой эфир 
                </NavLink>
                <NavLink className={({ isActive }) => `a ${isActive ? "link-active" : "nav-link"}`} to='#' onClick={(e) => e.preventDefault()} >
                    📋  Еще 
                </NavLink>

            </div>
            <div className="card_content">

            </div>
        </div>
    )
}