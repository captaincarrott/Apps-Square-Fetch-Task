/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined, CheckOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/auth/userSlice";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

const SignIn = function() {
    const [inputType, setInputType] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        emailError: '',
        passError: '',
        success: '',
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'email') {
            if (emailRegex.test(e.target.value) || e.target.value === '') {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    emailError: false,
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    emailError: true,
                }));
            }
        }

        if (e.target.name === 'password') {
            if (e.target.value || e.target.value === '') {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    passError: false,
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    passError: true,
                }));
            }
        }
    };

    const typeHandler = function() {
        setInputType(!inputType);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            const response = await axios.post('https://backend.profferdeals.com/api/admin/login', {
                email: formData.email, 
                password: formData.password,
            });
    
            console.log(response.data);
            console.log(formData)
            const { token, data: { email } } = response.data;
            console.log(email)
            
            if (token) {
                    console.log('Token exists:', token);
                dispatch(loginSuccess({ email, token }));
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    success: true,
                }));
                navigate('/Apps-Square-Fetch-Task/DashPage')
            }

    };
    
    

    useEffect(() => {
        if (errors.success) {
            const timer = setTimeout(() => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    success: false,
                }));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errors.success]);

    return (
        <>
        <div className="flex flex-col justify-center items-center bg-[url(/blurry-shot-interior-shopping-mall.jpg)] h-screen bg-center bg-cover">
            <form onSubmit={handleSubmit} className="my-8 flex flex-col rounded-[5px] bg-white p-4 sm:p-8 w-[90%] max-w-[576px] border-l-4 border-[#1C65A2]">
                <div>
                    <h1 className="font-bold text-5xl text-[#606362]"><span className="text-[#1C65A2]">E</span>square²</h1>
                    <div className="my-8">
                        <h1 className="text-3xl font-bold">Welcome</h1>
                        <p className="text-[#606362]">Enter to get access to our products and services</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="email" className="font-semibold text-sm">Email <span className="text-red-600">*</span></label>
                    <input onChange={handleChange} name="email" type="email" id="email" placeholder="Enter your email" required className="p-2 w-full border-2 border-[#E5E7EB] rounded-[5px] block placeholder:text-xs focus:outline-none"/>
                    {errors.emailError ? <span className="text-xs text-red-600">It should be a valid email address</span> : null}
                </div>
                    <div className="relative">
                        <label htmlFor="password" className="font-semibold text-sm">Password <span className="text-red-600">*</span></label>
                        <input onChange={handleChange} name="password" type={inputType ? 'text' : 'password'} id="password" placeholder="Enter password" required className="p-2 w-full border-2 border-[#E5E7EB] rounded-[5px] block placeholder:text-xs focus:outline-none"/>
                        {inputType ? <EyeInvisibleOutlined className="absolute top-9 left-[calc(100%_-_32px)] text-xl" onClick={typeHandler}/> : <EyeOutlined className="absolute top-9 left-[calc(100%_-_32px)] text-xl" onClick={typeHandler}/>}
                        {errors.passError ? <span className="text-xs text-red-600">Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character</span> : null}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <div className="mt-8 mb-4"> 
                        <input type="submit" value="Sign In" className="text-white p-2 cursor-pointer rounded-[5px] w-32 bg-[#1C65A2]"/>
                    </div>
                </div>
            </form>
            {!errors.emailError && !errors.passError ?
                <div className={`fixed top-[-20px] mx-auto p-2 bg-[#1C65A2] rounded-[5px] space-x-2 w-[80%] sm:max-w-[400px] text-base ${errors.success ? 'animate-success' : 'hidden-success'}`}>
                    <CheckOutlined className="text-white" />
                    <p className="inline-block text-white">Success!</p>
                </div>
            : null}
        </div>
        </>
    );
};

export default SignIn;
