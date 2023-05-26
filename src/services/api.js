import axios from 'axios'

const URL = ' https://jsonplaceholder.typicode.com'

export const getPosts = () => {
    return axios.get(`${URL}/posts`)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}

export const getPostsPage = (page) => {
    return axios.get(`${URL}/posts?_page=${page}`)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}

export const getComments = ({id}) => {
    return axios.get(`${URL}/comments?postId=${id}`)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}

export const getUser = ({id}) => {
    return axios.get(`${URL}/users/${id}`)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}