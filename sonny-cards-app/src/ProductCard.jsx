import { motion } from "motion/react"


export default function ProductCard(props) {
    return (
        <>
            <motion.div 
                className="flex flex-col items-center content-center p-2 mb-10 w-full max-w-xs"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
            >

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
                    <motion.button 
                        className="w-full flex items-center justify-center text-sm font-semibold text-stone-800 gap-1 bg-white py-3 px-4 rounded-full border-2 border-rose-500 hover:border-rose-500 hover:bg-rose-500 hover:text-white focus:bg-rose-500 focus:outline-rose-500 focus:text-white"
                        onClick={props.onAddToCart}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')}
                    >
                        <span className="material-symbols-outlined text-sm">
                            add_shopping_cart
                        </span>
                        Add to Cart
                    </motion.button>
                </div>


            </motion.div>
           
        </>
    )
} 