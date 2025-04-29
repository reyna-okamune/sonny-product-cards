
export default function ProductCard(props) {
    return (
        <>
            <div className="border-red-500 border-1 bg-white flex flex-col items-center py-5">
                
                <img src={props.image} alt="Sonny Icon" className="w-full max-w-[20vw] h-auto object-cover border-red-500 border-1"/>
                
                {/* details of product */}
                <div className="border-red-500 border-1 w-full max-w-[20vw] h-auto">
                    <p>{props.category}</p>
                    <h3>{props.name}</h3>
                    <p>{props.price}</p>
                </div>
            </div>
           
        </>
    )
} 