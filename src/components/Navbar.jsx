import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Navbar = function() {
    return (
        <div className="bg-gray-200 flex justify-center items-center">
            <div className="bg-white mb-[16px] justify-between flex w-full p-[25px] ">
                <div>
                    <h1 className="font-bold text-xl text-[#606362] cursor-pointer"><span className="text-[#1C65A2]">E</span>square²</h1>
                </div>

                <div className="hidden text-[#1A61A7] font-bold sm:block">
                    <ul className="flex space-x-4">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer">Our Products</li>
                    </ul>
                </div>

                <div className="space-x-5 flex justify-center items-center">
                    <SearchOutlined className="text-xl cursor-pointer"/>
                    <ShoppingCartOutlined className="text-xl cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
