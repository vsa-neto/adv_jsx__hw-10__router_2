import { Link, useNavigate } from 'react-router-dom';
import './NewPost.css';

export const NewPost = () => {

    const navigate = useNavigate();

    const sendData = async () => {
        const user = {
            id: 0,
            content: "То, что введено в поле ввода",
        };
        // console.log(user);
        // localStorage.setItem('user', JSON.stringify(user));
        try {
            // const response = await fetch('/api/index.php', { 
            const response = await fetch('http://localhost:8000/api/index.php', { 
        
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // 'X-Requested-With': 'XMLHttpRequest',
                body: JSON.stringify({key: "123"}),
            })
            const result = await response.json()
            .then(navigate('/posts'));
            // console.log(result);
        } catch (error) {
            console.error('Ошибка:', error);
        }

    };



    return (
        <div className="card_wrp">
            <div className="new_card_header">

                <Link className={'a link_img publication'} to='#' onClick={(e) => e.preventDefault()} >
                    Публикация
                </Link>
                <Link className={'a link_img photo'} to='#' onClick={(e) => e.preventDefault()} >
                    Фото/видео
                </Link>
                <Link className={'a link_img broadcast'} to='#' onClick={(e) => e.preventDefault()} >
                    Прямой эфир
                </Link>
                <Link className={'a link_img more'} to='#' onClick={(e) => e.preventDefault()} >
                    Еще
                </Link>
                <Link className={'a  x'} to='/posts' />

            </div>
            <div className="new_card_content">
                <img className="user_photo user_photo_new" src={"/src/assets/user_0.png"} alt="user photo" />
                <p>Пост относящийся к курсу React</p>
            </div>
            <div className="footer">
                <button onClick={() => sendData()} className="click">Опубликовать</button>
            </div>

        </div>
    )
}