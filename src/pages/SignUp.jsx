/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import { EyeOutlined, EyeInvisibleOutlined, CheckOutlined } from "@ant-design/icons";

const nameRegex = /^[0-9A-Za-z]{6,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passRegex =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;


const SignUp = function() {
    const [inputType, setInputType] = useState(false);

    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passError, setPassError] = useState();
    const [file, setFile] = useState();
    const [success, setSuccess] = useState();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        image: null
    });

    const typeHandler = function() {
        setInputType(!inputType)
    }
    const handleValidation = function(e) {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }))
        
        if (name == 'username') {
            if (nameRegex.test(value) || value == '') {
                setNameError(false);
            }else if (!nameRegex.test(value)) {
                setNameError(true);
            }
        }
        
        if (name == 'password') {
            if (passRegex.test(value) || value == '') {
                setPassError(false);
            }else if (!passRegex.test(value)) {
                setPassError(true);
            }
        }
        
        if (name == 'email') {
            if (emailRegex.test(value) || value == '') {
                setEmailError(false)
            }else if (!emailRegex.test(value)) {
                setEmailError(true)
            }
        }
        
        if (name == 'image') {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleSubmit = function(e) {
        e.preventDefault()
        if (!nameError && !emailError && !passError && file) {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                app_id: '0JyYiOQXQQr5H9OEn21312'
            },
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                image: formData.image
            })
        })
        .then(res => res.json())
        .then(console.log);
        setSuccess(true);
    }
}
useEffect(() => {
    if (success) {
        const timer = setTimeout(() => {
            setSuccess(false);
        }, 3000);
        console.log(timer)
        return () => clearTimeout(timer);
    }
}, [success]);

    
    return (
        <>
        <Navbar />
    <div className="flex flex-col justify-center items-center bg-[url(/blurry-shot-interior-shopping-mall.jpg)] h-fit bg-center bg-cover">
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
            <label htmlFor="name" className="font-semibold text-sm">Name <span className="text-red-600">*</span></label>
            <input onChange={handleValidation} name="username" type="text" id="name" placeholder="Enter your name" required className="peer p-2 w-full border-2 border-[#E5E7EB] rounded-[5px] block placeholder:text-xs focus:outline-none"/>
            {nameError ? <span id="nameAlert" className="text-xs text-red-600">Username should be 6-16 characters and shouldn't include any special characters</span> : null}
            </div>

            <div>
            <label htmlFor="email" className="font-semibold text-sm">Email <span className="text-red-600">*</span></label>
            <input onChange={handleValidation} name="email" type="email" id="email" placeholder="Enter your email" required className="p-2 w-full border-2 border-[#E5E7EB] rounded-[5px] block placeholder:text-xs focus:outline-none"/>
            {emailError ? <span className="text-xs text-red-600">It should be a valid email address</span> : null}
            </div>

            <div className="relative">
            <label htmlFor="password" className="font-semibold text-sm">Password <span className="text-red-600">*</span></label>
            <input onChange={handleValidation} name="password" type={inputType ? 'text' : 'password'} id="password" placeholder="Enter password" required className="p-2 w-full border-2 border-[#E5E7EB] rounded-[5px] block placeholder:text-xs focus:outline-none"/>
            {inputType ? <EyeInvisibleOutlined className="absolute top-9 left-[calc(100%_-_32px)] text-xl" onClick={typeHandler}/> : <EyeOutlined className="absolute top-9 left-[calc(100%_-_32px)] text-xl" onClick={typeHandler}/>}
            {passError ? <span className="text-xs text-red-600">Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character</span> : null}
            </div>
        </div>

        <div className="flex flex-col justify-center items-center relative">
        <div className="mt-8 mb-4"> 
        <label htmlFor="image" className="w-32 block bg-[#E5E7EB] p-2 text-center rounded-[5px] cursor-pointer">Select image</label>  
        <div className="flex justify-center items-center mt-2 w-32">
        <input onInput={handleValidation} name="image" type="file" id="image" accept="image/*" className={`${file ? `block` : 'hidden'} overflow-hidden w-[88px] file:hidden text-xs`}/>
        {file && <img className=" w-10 h-10" src={file} alt="" />}
        </div> 
        </div>
        <input type="submit" value="Sign Up" className="text-white p-2 cursor-pointer rounded-[5px] w-32 bg-[#1C65A2]"/>
        </div>
        </form>

        <div className={`fixed top-[-20px] mx-auto p-2 bg-[#1C65A2] rounded-[5px] space-x-2 w-[80%] sm:max-w-[400px] text-base ${success ? 'animate-success' : 'hidden-success'}`}>
    <CheckOutlined className="text-white" />
    <p className="inline-block text-white">Success!</p>
</div>

    </div>

    </>
)}

export default SignUp;