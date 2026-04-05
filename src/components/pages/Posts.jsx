import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  data from '../data.json';
import './Posts.css';

// const cardsData = [
//     {
//         id: 1,
//         name: 'Tom',
//         status: 'Основатель группы',
//         time: '4 мин.',
//         content: 'Пост, относящийса к курсу React'
//     },
//     {
//         id: 2,
//         name: 'Michael',
//         status: 'участник группы',
//         time: '30 мин.',
//         content: 'Другой пост'
//     },
//     {
//         id: 3,
//         name: 'Rebecca',
//         status: 'участникгруппы',
//         time: '35 мин.',
//         content: 'Другой пост'
//     },
// ];

const Comments = (props) => {
    const { data } = props;
    return (
        <>
            <img src={`/src/assets/user_${data.id}.png`} alt="user photo" className="card_photo_2" />
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
    return (
        <>
            <div className="cards_button">
                <button className="click on_change">Изменить</button>
                <button  className="click on_delete">Удалить</button>
            </div>
        </>
    )
}


const Card = (props) => {
    const { data, children } = props;

    return (
        <div className="card_wrp">
            <Link to={`/card/${data.id}`}>
                <div className="card_header">
                    <img src={`/src/assets/user_${data.id}.png`} alt="user photo" />
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


export const ViewCard = () => {
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

        // console.log(data);
    return (
        <>
        <Link to="/posts/new">
            <div className="cards_button">
                <button className='click'>Создать пост</button>
            </div>
         </Link>

            {data.map((item) => {
                // console.log(`${item.id} + ${item.name}, ${item.status}, ${item.time}, ${item.content}`);
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