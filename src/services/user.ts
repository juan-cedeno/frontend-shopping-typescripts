import axios from "axios";
import { User } from "../interfaces/user";

class userService {
  static url = process.env.REACT_APP_URL_API;
  static token = localStorage.getItem('TOKEN')
  
  
  static async loginUser(email : string , password : string) {
    try {
      const { data } = await axios.post<User>(`${userService.url}/login` , {email , password});
      return data;

    } catch (error) {
      console.log(error);
      return undefined;

    }
  }

  static async renewToken () {

    try {
      const {data} = await axios.get<User>(`${userService.url}/renew` , {
        headers : {
          'x-token' : userService.token
        }
      })

      return data

    } catch (error) {
      console.log(error);
      return undefined
    }
  }
}

export default userService;
