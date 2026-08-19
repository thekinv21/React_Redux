import type { TProduct } from '@/type'
import { useEffect, useState } from 'react'

export const useFetchProducts = () => {
	const [products, setProducts] = useState<TProduct[]>([])

	const fetchProducts = async () => {
		try {
			await fetch('http://localhost:8080/products')
				.then(res => res.json())
				.then(data => setProducts(data))
		} catch (error) {
			console.log('Error to fetch products', error)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return {
		products,
	}
}
