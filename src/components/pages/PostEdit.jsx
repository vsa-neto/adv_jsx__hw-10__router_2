import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './PostEdit.css';
import './NewPost.css';

export const PostEdit = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const onPostSave = () => {
        console.log(`сохранить пост пользователя с id: ${id}`);
        setTimeout(() => {
            navigate(-2);
        }, 1000);

    };

    return (
        <div className="card_wrp edit_wrp">

            <div className="edit_header">
                <p>Редактировать публикацию</p>    <Link className={'a  x'} to='/posts' />
            </div>
            <div className="edit_content">
                <img className="user_photo user_photo_new" src={`/src/assets/user_${id}.png`} alt="user photo" />
                <p>Пост относящийся к курсу React</p>
            </div>
            <div className="edit_links">

                <Link className={'a edit_link link_img photo'} to='#' onClick={(e) => e.preventDefault()} >
                    Фото/видео
                </Link>
                <Link className={'a edit_link link_img friends'} to='#' onClick={(e) => e.preventDefault()} >
                    Отметить друзей
                </Link>
                <Link className={'a edit_link link_img smile2'} to='#' onClick={(e) => e.preventDefault()} >
                    Чувства/действия
                </Link>
                <Link className={'a edit_link link_img location'} to='#' onClick={(e) => e.preventDefault()} >
                    Отметить посещение
                </Link>
                <Link className={'a edit_link link_img gif'} to='#' onClick={(e) => e.preventDefault()} >
                    GIF
                </Link>

            </div>
            <div className="footer">
                <button onClick={() => onPostSave()} className="click">Сохранить</button>
            </div>

        </div>
    )
}