import products from "./data";

export default function Cart({items, onRemoveFromCart}) {
    

    const itemCounts = items.reduce((acc,item) => {
        const key = item.id;

        if (!acc[key]) {
            acc[key] = {...item, count: 1};
        } else {
            acc[key].count += 1;
        }

        return acc;

    }, {});

    const uniqueItems = Object.values(itemCounts); // turn into array

    const totalPrice = uniqueItems.reduce((acc, item) => {
        return acc + (item.price * item.count)
    }, 0);

    const formattedTotal = totalPrice.toFixed(2)

    
    return (
        <>
            <div className="bg-white rounded-md flex flex-col w-full min-w-[20rem] max-w-md min-h-[300px] mx-auto p-10">
                <h2 className="font-bold text-2xl pb-4 text-rose-600 text-center sm:text-left">Your Cart ({items.length})</h2>


                {uniqueItems.length > 0 ? (
                    <ul>
                    {uniqueItems.map((product, index) => {
                        return (
                            <li key={index} className="flex flex-col items-left px-2 py-2 mb-2 border-b border-b-1 border-rose-200">

                                <div className="flex flex-row items-center justify-between">
                                    <div>
                                        <h2 className="font-semibold  text-base sm:text-lg pb-1">{product.name}</h2>

                                        <div className="flex flex-row gap-2 sm:gap-4  text-xs sm:text-base">
                                            <p className="font-semibold text-rose-600 sm:pr-2">{product.count}x </p>
                                            <p className="text-stone-800 font-light">@ ${product.price} </p>
                                            <p className="text-stone-800 font-medium">${(product.count * product.price).toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onRemoveFromCart(product)}
                                        className="hover:border-none hover:outline-none focus:border-none focus:outline-none"
                                    >
                                        <span className="material-symbols-outlined cursor-pointer text-stone-800 text-base sm:text-lg hover:text-rose-600">
                                                cancel
                                        </span>
                                    </button>
                                </div>

                            </li>
                        )
                    })}
                    </ul>
                    ) 
                    :
                    (
                        <div className="">
                            <p className="font-normal text-base text-left text-stone-800 py-2 mb-2 border-b border-b-1 border-rose-200">Empty Cart</p>

                            <div className="flex flex-row justify-between items-center text-stone-800 pt-6">
                                <h2 className="font-light text-sm sm:text-base">Order Total</h2>
                                <h2 className="font-bold  text-xl sm:text-2xl">$0.00</h2>
                            </div>
                        </div>
                    )
                }

                {uniqueItems.length > 0 && (
                    <div className="flex flex-row justify-between items-center text-stone-800 pt-6">
                        <h2 className="font-light text-sm sm:text-base">Order Total</h2>
                        <h2 className="font-bold text-xl sm:text-2xl">${formattedTotal}</h2>
                    </div>

                )}
            </div>


        </>
    )
}