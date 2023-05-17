import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://projetocap11backend.herokuapp.com/'
})
 
export default api;