import { ProductCard } from './components/ProductCard'
import { useReduxSelector } from './hooks'
import type { TProduct } from './type'

export const App = () => {
	const { favorites } = useReduxSelector(s => s)

	return (
		<div className='h-screen w-full m-5'>
			<h3>All Products from Redux Store</h3>

			<ul className=''>
				{Array.isArray(favorites) && favorites?.length ? (
					<>
						{favorites?.map((product: TProduct) => (
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
