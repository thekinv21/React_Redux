import { ProductCard } from './components/ProductCard'
import { products } from './mock'
import type { TProduct } from './type'

export const App = () => {
	return (
		<div className='h-screen w-full m-5'>
			<h3>All Products from Redux Store</h3>

			<ul className=''>
				{Array.isArray(products) && products?.length ? (
					<>
						{products?.map((product: TProduct) => (
							<ProductCard key={product.id} product={product} />
						))}
					</>
				) : (
					<li>Favorites is not found</li>
				)}
			</ul>
		</div>
	)
}
