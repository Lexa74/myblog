import {useEffect, useState} from "react";
import {getPosts, getUser} from "../../services/api";
import {useParams} from "react-router-dom";
import {Loader} from "../../components/icons/Loader";
import './userInfo.scss'

export const UserInfo = () => {
    const {userID} = useParams();
    const [postsOfUser, setPostsOfUser] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            const userData = await getUser({id: userID});
            const resultFilterPost = posts.filter(post => post.userId === +userID)
            setInterval(() => {
                setPostsOfUser(resultFilterPost)
                setUserInfo(userData)
            }, 500)
        }
        fetchData();
    },[])
    return (
        <div className={'userInfo'}>
            <h1>Информация о пользователе</h1>
            {postsOfUser.length !== 0 ? (
                <>
                    <div className="personal-data">
                        <p><b>Имя:</b> {userInfo.name}</p>
                        <p><b>E-mail:</b> {userInfo.email}</p>
                        <p><b>Адрес:</b> {userInfo.address.city}, {userInfo.address.street}</p>
                    </div>
                    <p><b>Список постов:</b> </p>
                    {postsOfUser.map((post) => (
                        <div className={'user-post-content'} key={post.id}>
                            <b className={'title'}>{post.title}</b>
                            <div>{post.body}</div>
                            <p className={'line'}> - </p>
                        </div>

                    ))}
                </>
            ) : <Loader/>}
        </div>
    )
}