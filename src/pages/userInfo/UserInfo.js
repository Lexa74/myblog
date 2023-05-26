import {useEffect, useState} from "react";
import {getPosts, getUser} from "../../services/api";
import {Link, useParams} from "react-router-dom";
import {Loader} from "../../components/icons/Loader";
import {Header} from "../../components/header/Header";
import {Post} from "../../components/post/Post";

export const UserInfo = () => {
    const {userID} = useParams();
    const [postsOfUser, setPostsOfUser] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            const userData = await getUser({id: userID});
            const resultFilterPost = posts.filter(post => post.userId === +userID)
            setTimeout(() => {
                setPostsOfUser(resultFilterPost)
                setUserInfo(userData)
            }, 500)
        }
        fetchData();
    },[userID])
    return (
        <>
            <Header/>
            <div className={'userInfo wrapper'}>
                <Link className={'link'} to={'/'}>Назад</Link>
                <h1>Информация о пользователе</h1>
                {postsOfUser.length !== 0 ? (
                    <>
                        <div className="personal-data">
                            <p><b>Имя:</b> {userInfo.name}</p>
                            <p><b>E-mail:</b> {userInfo.email}</p>
                            <p><b>Адрес:</b> {userInfo.address.city}, {userInfo.address.street}</p>
                        </div>
                        {postsOfUser.map((post) => (
                            <Post key={post.id} id={post.id} description={post.body} title={post.title} userId={post.userId}/>
                        ))}
                    </>
                ) : <Loader/>}
            </div>
        </>

    )
}