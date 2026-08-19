import { useReduxDispatch, useReduxSelector } from '@/hooks'
import { Bookmark } from 'lucide-react'

export const Header = () => {
	const { favorites } = useReduxSelector(s => s)
	const { user, isLoading } = useReduxSelector(s => s.user)

	const { getUserById } = useReduxDispatch()

	return (
		<div className='flex flex-row justify-between m-5'>
			<button
				onClick={() => getUserById(1)}
				className='p-2 bg-red-500 rounded-2xl border-red-400 cursor-pointer text-white text-sm'
			>
				Get User
			</button>

			<div>{isLoading ? 'Loading' : `User: ${user?.fullName}`}</div>

			<div className='relative'>
				<Bookmark size={30} />

				<p className='absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white'>
					{Array.isArray(favorites) ? favorites.length : 0}
				</p>
			</div>
		</div>
	)
}
