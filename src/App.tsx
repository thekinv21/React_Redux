import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

export const App = () => {
	return (
		<div className='h-screen m-5'>
			<Header />
			<ProductList />
		</div>
	)
}
