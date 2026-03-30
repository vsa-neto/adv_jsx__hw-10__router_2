
import './HomePage.css';

const cardsData = [
    {
        id: 1,
        name: 'Tom',
        status: 'Основатель группы',
        time: '4 мин.',
        content: 'Пост, относящийса к курсу React'
    },
    {
        id: 2,
        name: 'Michael',
        status: 'участник группы',
        time: '30 мин.',
        content: 'Другой пост'
    },
    {
        id: 3,
        name: 'Rebecca',
        status: 'участникгруппы',
        time: '35 мин.',
        content: 'Другой пост'
    },
]

const ViewCard = (id, name, status, time, content) => {
// const photoUser = "../../../src/assets/user_"+${id}+".png";

    return (
        <div className="card_wrp">
            <div className="card_header">
                
                <img src={`../../../src/assets/user_${id}.png`} alt="user photo" />
                <div className="user">
                    <h3 className="card_name">{name}</h3>
                    <p className="card_status">{status}<span> · {time}</span></p>
                </div>
            </div>
            <div className="card_content"> {content}</div>
            <div className="card_like_comment">
                <a href='#' className="card_like"> Нравится </a>
                <a href='#' className="card_comment"> Комментировать </a>
            </div>

            <div className="card_footer">
                <img src="../../../src/assets/user_1.png" alt="user photo" className="card_photo_2" />
                <form action="/submit-path" method="POST">
                    <input className="write_comments" type="text" id={id} name={name} placeholder='Напишите комментарий...' required />
                </form>
            </div>
        </div>
    )
}

export const HomePage = () => {
  return (
    <>
    <div className="cards_header">
        <button>Создать пост</button>
    </div>
    <ViewCards/>
    </>
  )
};


const ViewCards = () => {
    return (
        cardsData.map((item) => {
            console.log(`${item.id} + ${item.name}, ${item.status}, ${item.time}, ${item.content}`);
            return (ViewCard(item.id, item.name, item.status, item.time, item.content));
        })
    );
}