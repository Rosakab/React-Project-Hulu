import axios from "axios";

export const login= async ({email, password})=>{
    const {data} = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {email,password})
    return data;
}
