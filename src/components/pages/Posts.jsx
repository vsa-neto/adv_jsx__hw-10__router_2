import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import data from '/api/data.json';
import './Posts.css';



const Comments = (props) => {
    const { data } = props;
    return (
        <>
            <img className="user_photo_2" src={`/src/assets/user_${data.id}.png`} alt="user photo" />
            <form action="/submit-path" method="POST">
                <input className="write_comments" type="text" id={data.id} name={data.name}
                    maxlength="30"
                    placeholder='Напишите комментарий...' required />
            </form>
        </>
    )
}

const ChangeDelete = (props) => {
    const { data } = props;
    const { id } = useParams();
    const navigate = useNavigate();

    const onDelete = async () => {
        console.log(` удалить пост с идентификатором ${id}`);
        const status = {
            id: 0,
            delete: 1,
        };

        try {
            const response = await fetch('http://localhost:8000/api/index.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(status),
            })
            const result = await response.json()
                .then(navigate('/posts'));
            console.log(result);
        } catch (error) {
            console.error('Ошибка:', error);
        }

    }



    return (
        <>
            <div className="cards_button">
                <Link to={`/post/${data.id}/edit`}>
                    <button className="click on_change">Изменить</button>
                </Link>
                <button onClick={() => onDelete()} className="click on_delete">Удалить</button>
            </div>
        </>
    )
}


const Card = (props) => {
    const { data, children } = props;

    return (
        <div className="card_wrp">
            <Link to={`/post/${data.id}`}>
                <div className="card_header">
                    <img className="user_photo" src={`/src/assets/user_${data.id}.png`} alt="user photo" />
                    <div className="user">
                        <h3 className="card_name">{data.name}</h3>
                        <p className="card_status">{data.status}<span> · {data.time}</span></p>
                    </div>
                </div>
                <div className="card_content"> {data.content}</div>
            </Link>
            <div className="card_like_comment">
                <a href='#' className="card_like"> Нравится </a>
                <a href='#' className="card_comment"> Комментировать </a>
            </div>

            <div className="card_footer">
                {children}
            </div>
        </div>
    )
}

export const Post = () => {
    const { id } = useParams();
    console.log(id);
    // Находим объект в массиве
    const item = data.find((card) => card.id == id);
    console.log(item);
    return (
        <Card data={item}>
            <ChangeDelete data={item} />
        </Card>

    );

}

export const ViewCards = () => {
    return (
        <>
            <Link to="/post/new">
                <div className="cards_button">
                    <button className='click'>Создать пост</button>
                </div>
            </Link>

            {data.map((item) => {
                return (
                    <Card data={item}>
                        <Comments data={item} />
                    </Card>
                );
            })
            }
        </>
    );
}