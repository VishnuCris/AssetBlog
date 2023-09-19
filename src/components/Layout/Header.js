
import {useState} from 'react'
import Link from 'next/link'

const Header = () => {

	const [name,setName] = useState('Asseter')
	
	return(
		<header className="flex w-full bg-[#d15e83] pl-[2%] pr-[2%] fixed h-[50px] z-10">
			<h1 className='w-2/6 self-center'>{name}</h1>
			<nav className="w-4/6 flex flex-row-reverse gap-[5%] items-center">
				<Link href="/blog">Start</Link>
				<Link href="/">Sign Up</Link>
				<Link href="/">Membership</Link>
				<Link href="/">Write</Link>
			</nav>
		</header>
	)
}

export default Header