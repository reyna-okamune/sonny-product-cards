export default function Cart({items}) {
    

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
            <div className="bg-white rounded-md flex items-left w-full max-w-md mx-auto p-10 flex flex-col">
                <h2 className="font-bold text-2xl pb-4 text-rose-600 ">Your Cart ({items.length})</h2>

                <ul>
                    {uniqueItems.map((product, index) => {
                        return (
                            <li key={index} className="flex flex-col px-2 py-2 mb-2 border-b border-b-1 border-rose-200">

                                <div className="flex flex-row items-center justify-between">
                                    <div>
                                        <h2 className="font-semibold text-lg pb-1">{product.name}</h2>

                                        <div className="flex flex-row gap-4 text-base">
                                            <p className="font-semibold text-rose-600 pr-2">{product.count}x </p>
                                            <p className="text-stone-800 font-light">@ ${product.price} </p>
                                            <p className="text-stone-800 font-medium">${product.count * product.price}</p>
                                        </div>
                                    </div>

                                    <button>
                                        <span className="material-symbols-outlined cursor-pointer text-stone-800 hover:text-rose-600 hover:border-1 hover:border-white">
                                                cancel
                                        </span>
                                    </button>
                                </div>

                            </li>
                        )
                    })}
                </ul>

                <div className="flex flex-row justify-between items-center text-stone-800 pt-6">
                    <h2 className="font-light text-base">Order Total</h2>
                    <h2 className="font-bold text-2xl">{formattedTotal}</h2>
                </div>
            </div>
        </>
    )
}