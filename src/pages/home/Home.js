import {getPosts} from "../../services/api";
import {Post} from "../../components/post/Post";
import {useEffect, useState} from "react";
import {Loader} from "../../components/icons/Loader";

export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPosts();
            //Специальная задержка
            setInterval(() => {
                setPosts(result)
            }, 500)
        }
        fetchData();
    },[])

    return (
        <>
            <h1>Мой блог</h1>
            <div className={'posts'}>
                {posts.length !== 0 ? (
                    posts.map((post) => (
                        <Post key={post.id} id={post.id} description={post.body} title={post.title} userId={post.userId}/>
                    ))
                ) : <Loader/>}
            </div>
        </>

    )
}