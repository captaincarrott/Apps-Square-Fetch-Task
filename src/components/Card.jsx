function Card(props) {
    return (
        <div className="bg-white max-w-xs mx-4 p-4 text-center mb-12 cursor-pointer">
            <div>
            <h1 className="bebas-neue-regular">
                {props.title}
            </h1>
            <h2>Category: {props.category}</h2>
            <h2>Price: {props.price}</h2>
            <h2>Rate: {props.rating}</h2>
            </div>
            <img className="w-1/2 mx-auto mt-10" src={props.image} alt="" />
        </div>
    )
}

export default Card;