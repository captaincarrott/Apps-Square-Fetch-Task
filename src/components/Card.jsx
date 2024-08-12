function Card(props) {
    return (
        <div className=" bg-white w-[calc(100%_-_16px)] min-h-10 p-4">
            <div className="flex items-center text-start cursor-pointer">
                
            <img className="min-w-12 max-w-28" src={props.image} alt='product image'/>

            <div className="pl-7">
            <h1 className="font-bold">
                {props.title}
            </h1>
            <h2>Category: {props.category}</h2>
            <h2>Price: {props.price}</h2>
            <h2>Rate: {props.rating}</h2>
            </div>
            </div>

            <div className="flex justify-center items-center">
                <button className="text-center text-sm  bg-[#1A61A7] w-[30%] text-white mt-4 p-2 rounded-[50px]">Add To Cart</button>
            </div>
        </div>
    )
}

export default Card;