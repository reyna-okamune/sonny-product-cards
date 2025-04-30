
export default function ProductCard(props) {
    return (
        <>
            <div className="flex flex-col items-center content-center p-2 mb-10 w-full max-w-64 ">

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
                    <h3 className="text-stone-800 sm:text-lg md:text-xl font-bold">
                        {props.name}
                    </h3>
                    <p className="text-rose-600 text-xs font-semibold">
                        ${props.price}
                    </p>
                </div>

                <div className="pt-3">
                    <button className="w-full flex text-sm font-semibold gap-2 bg-white py-3 px-8 rounded-full border-2 border-rose-300 hover:border-rose-500">
                        <span className="material-symbols-outlined text-sm">
                            add_shopping_cart
                        </span>
                        Add to Cart
                    </button>
                </div>


            </div>
           
        </>
    )
} 