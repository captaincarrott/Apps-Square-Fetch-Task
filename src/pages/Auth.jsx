import Navbar from "../components/Navbar";
// import axios from "axios";
import SignIn from "../components/SignIn";

const Auth = function() {

    // axios.post('https://backend.profferdeals.com/api/admin/login', {
    //     header: 'Accept: application/json',
    //     // email:"admin@proffer.com",
    //     // password: "123456"
    // })
    // .then((res) => {
    //     console.log(res.data);
    // })
    
    return (
        <>
        <Navbar />
        <SignIn />
        </>
    )
}

export default Auth;