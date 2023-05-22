import {getPosts} from "../../services/api";
import {Post} from "./Post";
import {useEffect, useState} from "react";
import loading from '../../assets/images/Loading_icon.gif'

export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPosts();
            console.log(result)
            //Специальная задержка
            setInterval(() => {
                setPosts(result)
            }, 500)
        }
        fetchData();
    },[])

    return (
        <>
            <h1>My blog</h1>
            <div className={'posts'}>
                {posts.length !== 0 ? (
                    posts.map((post) => (
                        <Post id={post.id} description={post.body} title={post.title} userId={post.userId}/>
                    ))
                ) : (<img src={loading} alt=""/>)}

            </div>
        </>

    )
}