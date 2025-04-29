import products from './data.js'
import ProductCard from './ProductCard';

export default function ProductList() {

    /* DEBUGGING */
    products.forEach((item) => {
        console.log(`${item.name}`)
    })

    return(
        <>
            <div>
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
        </>
    )
}