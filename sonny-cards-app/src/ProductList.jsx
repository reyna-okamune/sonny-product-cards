import products from './data.js'
import ProductCard from './ProductCard';

export default function ProductList() {

    /* DEBUGGING */
    products.forEach((item) => {
        console.log(`${item.name}`)
    })

    return(
        <>
            <div className="w-full flex justify-center">
                <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-3 w-full justify-items-center'>
                    {products.map((item) => {
                        return (
                            <ProductCard
                            key={item.id}
                            name={item.name}
                            category={item.category}
                            price={item.price}
                            image={item.image}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}