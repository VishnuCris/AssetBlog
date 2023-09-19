
import {useState} from 'react'
import Link from 'next/link'

const Header = () => {

	const [name,setName] = useState('Asseter')
	
	return(
		<header className="flex w-full pl-[4%] pr-[4%] fixed h-[15%] z-10 pt-[1%]">
			<h1 className='w-2/6 self-center'>{name}</h1>
			<nav className="w-4/6 flex flex-row-reverse gap-[5%] items-center text-[0.8rem]">
				<Link href="/blog">Start</Link>
				<Link href="/">Sign Up</Link>
				<Link href="/">Membership</Link>
				<Link href="/">Write</Link>
			</nav>
		</header>
	)
}

export default Header