
export default function ProductCard(props) {
    return (
        <>
            <div className="border-red-500 border-1 flex flex-col items-center content-center p-2 sm:w-[40vw] md:w-[20vw] lg:w-[18vw] max-w-[220px]">
                
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
                    <h3 className="text-stone-800 text-xl font-bold">
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