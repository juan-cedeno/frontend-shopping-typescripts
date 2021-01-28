
import axios from 'axios'


const token = localStorage.getItem('TOKEN')

const verifiAxios = axios.create({
     headers : {
          'x-token' : token
     }
})

export default verifiAxios