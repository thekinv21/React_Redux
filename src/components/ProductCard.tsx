import { useReduxDispatch, useReduxSelector } from '@/hooks'
import type { TProduct } from '@/type'
import { Heart } from 'lucide-react'

type TProductCard = {
	product: TProduct
}

export function ProductCard({ product }: TProductCard) {
	const { toggleFavorite } = useReduxDispatch()

	const { favorites } = useReduxSelector(s => s)
	const isExist: boolean = favorites?.some((p: TProduct) => p.id === product.id)

	return (
		<li
			key={product.id}
			className='my-3 border flex flex-row justify-between items-center border-gray-200 p-3 max-w-xs rounded-sm transition-all ease-in-out duration-400'
		>
			<span>{product.title}</span>

			<button
				className='cursor-pointer'
				onClick={() => toggleFavorite(product)}
			>
				<Heart size={16} className={isExist ? 'text-red-600' : 'text-black'} />
			</button>
		</li>
	)
}
