import { useDispatch } from 'react-redux';
import { logout } from '../store/auth/userSlice';
import { useSelector } from 'react-redux';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = function() {

      const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)

  const token = localStorage.getItem('token');
  const email = JSON.parse(localStorage.getItem('email'));

  const handleLogOut = function() {
    dispatch(logout({ email, token }));
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  }

    return (
        <div className="bg-gray-200 flex justify-center items-center">
            <div className="bg-white justify-between flex w-full p-[25px] ">
                <div>
                    <Link to="/Apps-Square-Fetch-Task">
                    <h1 className="font-bold text-2xl text-[#606362] cursor-pointer"><span className="text-[#1C65A2]">E</span>square²</h1>
                    </Link>
                </div>

                <div className="hidden text-[#1A61A7] font-bold sm:block">
                    <ul className="flex space-x-4 leading-loose">
                        <li className="cursor-pointer">
                            <Link to="/Apps-Square-Fetch-Task">Home</Link>
                        </li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer">Our Products</li>
                    </ul>
                </div>

                <div className="space-x-5 flex justify-center items-center">
                    <SearchOutlined className="text-xl cursor-pointer"/>
                    
                        {/* <Link to="/Apps-Square-Fetch-Task/Auth"><UserOutlined className="text-xl cursor-pointer"/></Link> */}
                    <ShoppingCartOutlined className="text-xl cursor-pointer"/>
                    {isAuthenticated ? <button onClick={handleLogOut}>Log out</button> : null}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
