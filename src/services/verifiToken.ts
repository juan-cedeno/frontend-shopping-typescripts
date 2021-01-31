
import axios from 'axios'


const {token} = JSON.parse (localStorage.getItem('USER') || '[]')
console.log(token);


const verifiToken = axios.create({
     headers : {
         'x-token': token
     }
})

export default verifiToken