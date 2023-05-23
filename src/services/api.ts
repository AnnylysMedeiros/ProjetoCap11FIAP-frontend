import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://projetocap11fiap-backend-production.up.railway.app/'
})
 
export default api;