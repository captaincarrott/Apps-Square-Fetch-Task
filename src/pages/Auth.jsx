import SignUp from "../components/SignUp";
import Navbar from "../components/Navbar";
import axios from "axios";

const Auth = function() {
    axios.get('https://dummyjson.com/users')
    .then((res) => {
        console.log(res.data)
    })
    axios.post('https://dummyjson.com/auth/login', {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30 // optional, defaults to 60
    })
    .then((res) => {
        console.log(res.data); // handle success response
    })
    
    return (
        <>
        <Navbar />
        <SignUp />
        </>
    )
}

export default Auth;