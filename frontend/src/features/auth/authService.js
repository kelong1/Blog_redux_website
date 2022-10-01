import axios from "axios";

const URL="http://loacalhost:6000/app/users/"

const register=async(userData)=>{
    const response=await axios.post(URL+"register",userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}
const login=async(userData)=>{
    const response=await axios.post(URL+"login",userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}


const authService={
    register,
    login
}
export default  authService