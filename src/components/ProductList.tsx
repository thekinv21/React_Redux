import { useFetchProducts } from '@/hooks/useFetchProducts'
import type { TProduct } from '@/type'
import { ProductCard } from './ProductCard'

export function ProductList() {
	const { products } = useFetchProducts()

	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
	)
}
