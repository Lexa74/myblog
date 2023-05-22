import avatar from '../../assets/images/avatar.png'
import './post.scss'
import {useState} from "react";
import {getComments} from "../../services/api";
import loading from '../../assets/images/Loading_icon.gif'

export const Post = ({id, title, description, userId}) => {
    const [comments, setComments] = useState([]);
    const [isOpenComments, setIsOpenComments] = useState(false)

    const clickHandlerComments = (id) => {
        setIsOpenComments(!isOpenComments);

        const fetchData = async () => {
            const result = await getComments({id});
            setInterval(() => {
                setComments(result)
            }, 500)
        }
        fetchData()
    }

    return (
        <div className={'post'} key={id}>
            <h3 className="title">{title}</h3>
            <div className="post-content">
                <a href={'#'} className="wrapper-image">
                    <img src={avatar} alt=""/>
                </a>
                <div className="description">{description}</div>
            </div>
            <p
                className={'comments'}
                onClick={() => clickHandlerComments(userId)}
            >
                {!isOpenComments ? 'Коментарии' : 'Скрыть'}
            </p>
            {isOpenComments && (
                comments.length !== 0 ? (
                    comments.map((comment) => (
                        <div className={'comment'}>
                            <span className={'comment-email'}>{comment.email}</span>
                            <p className={'comment-description'}>{comment.body}</p>
                            <p className={'line'}> - </p>
                        </div>
                    ))
                    ) : <img src={loading} alt=""/>
            )}
        </div>
    )
}