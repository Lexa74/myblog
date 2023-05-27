import avatar from '../../assets/images/avatar.png'
import './post.scss'
import {useState} from "react";
import {getComments} from "../../services/api";
import {Link} from "react-router-dom";
import {Loader} from "../icons/Loader";

export const Post = ({id, title, description, userId}) => {
    const [comments, setComments] = useState([]);
    const [isOpenComments, setIsOpenComments] = useState(false)

    const getCommentsUserId = (id) => {
        setIsOpenComments(!isOpenComments);

        const fetchData = async () => {
            const result = await getComments({id});
            setTimeout(() => {
                setComments(result)
            }, 500)
        }
        fetchData()
    }

    return (
        <div className={'post'} key={id}>
            <h3 className="title">{title}</h3>
            <div className="post-content">
                <Link className={'wrapper-image'} to={`userInfo/${userId}`}>
                    <img src={avatar} alt=""/>
                </Link>
                <div className="description">{description}</div>
            </div>
            <p
                className={'comments'}
                onClick={() => getCommentsUserId(userId)}
            >
                {!isOpenComments ? 'Коментарии' : 'Скрыть'}
            </p>
            {isOpenComments && (
                comments.length !== 0 ? (
                    comments.map((comment) => (
                        <div className={'comment'} key={comment.id}>
                            <span className={'comment-email'}>{comment.email}</span>
                            <p className={'comment-description'}>{comment.body}</p>
                            <p className={'line'}> - </p>
                        </div>
                    ))
                    ) : <Loader />
            )}
        </div>
    )
}