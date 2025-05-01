import { motion } from 'motion/react'

export default function ConfirmationModal({items, onExit}) {
    console.log(`pop up modal opened!`)

    // count items quantity
    const itemCounts = items.reduce((acc, item) => {
        const key = item.id;

        if(!acc[key]) {
            acc[key] = {...item, count: 1};
        } else {
            acc[key].count += 1;
        }

        return acc;

    }, {});

    // turn object into array
    const uniqueItems = Object.values(itemCounts);

    const cartTotal = uniqueItems.reduce((acc, item) => {

        return acc + (item.count * item.price);

    }, 0);

    const formattedTotal = cartTotal.toFixed(2);


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                <div className="bg-my-pink w-full min-w-[15rem] max-w-xs sm:max-w-md min-h-[300px] rounded-lg shadow-lg flex flex-col">
                
                    {/* order information */}
                    {uniqueItems.length > 0 &&
                        (
                            <div className="p-10">
                                <div>
                                <span class="material-symbols-outlined text-green-600 text-4xl pb-3">
                                    check_circle
                                </span>
                                    <p className="text-stone-800 text-2xl font-bold text-left">Order Confirmed</p>
                                    <p className="text-stone-800 text-xs pt-1 pb-5">We hope you enjoy it!</p>
                                </div>


                                <ul className="p-5 bg-white rounded-md ">
                                    {uniqueItems.map((product, index) => {
                                        return (
                                            <li key={index} className="flex flex-col items-left p-2 mb-2">

                                                <div className="flex flex-row items-center justify-between">
                                                    <div>
                                                        <h2 className="font-semibold font-stone-800 text-base sm:text-lg pb-1">{product.name}</h2>

                                                        <div className="flex flex-row gap-2 sm:gap-4  text-xs sm:text-base">
                                                            <p className="font-semibold text-rose-600 sm:pr-2">{product.count}x </p>
                                                            <p className="text-stone-800 font-light">@ ${product.price} </p>
                                                            <p className="text-stone-800 font-medium">${(product.count * product.price).toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>


                                <div className="flex flex-row justify-between items-center text-stone-800 pt-6">
                                    <h2 className="font-light text-sm sm:text-base">Order Total</h2>
                                    <h2 className="font-bold text-xl sm:text-2xl">${formattedTotal}</h2>
                                </div>


                                <motion.button 
                                    className={`flex mt-8 mb-2 bg-rose-500 text-white justify-center text-lg font-bold w-1/2 sm:w-3/5 mx-auto py-2 px-5 rounded-full hover:bg-rose-600 hover:border-rose-600 focus:border-rose-600 focus:outline-none`}
                                    onClick={onExit}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onHoverStart={() => console.log('hover started!')}
                                >
                                    Start New Order
                                </motion.button>

                                    
                            
                            </div>
                        )
                    }

                </div>


            </div>
        </>
    )
}