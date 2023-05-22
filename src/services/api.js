import axios from 'axios'

const URL = ' https://jsonplaceholder.typicode.com'

// export const sendMessage = (body) => {
//     axios.post(`${URL}/waInstance${localStorage.getItem('id')}/SendMessage/${localStorage.getItem('token')}`, body)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

export const getPosts = () => {
    return axios.get(`${URL}/posts`)
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