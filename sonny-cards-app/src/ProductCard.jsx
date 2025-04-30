
export default function ProductCard(props) {
    return (
        <>
            <div className="flex flex-col items-center content-center p-2 w-full max-w-64 ">
                
                <img 
                    src={props.image} 
                    alt="Sonny Icon" 
                    className="bg-white w-full h-auto object-cover mb-4 rounded-md"
                />
                
                {/* details of product */}
                <div className="text-left w-full">
                    <p className="text-stone-500 text-xs">
                        {props.category}
                    </p>
                    <h3 className="text-stone-800 lg:text-xl md:text-lg font-bold">
                        {props.name}
                    </h3>
                    <p className="text-rose-600 text-xs font-semibold">
                        ${props.price}
                    </p>
                </div>


            </div>
           
        </>
    )
} 