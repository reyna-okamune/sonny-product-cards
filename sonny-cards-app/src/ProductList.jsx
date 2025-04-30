import products from './data.js'
import ProductCard from './ProductCard';

export default function ProductList({onAddToCart}) {

    

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
                                onAddToCart={() => onAddToCart(item)}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}