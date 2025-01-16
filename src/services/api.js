import axios from "axios"

const api= axios.create({
  baseURL:'https://api-usuarios-2t8c.onrender.com'
})

export default api 