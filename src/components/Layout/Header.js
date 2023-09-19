
import {useState} from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = ({bgColor,textColor}) => {

	const [name,setName] = useState('Asseter')
	
	return(
		<header className={`flex w-full pl-[4%] pr-[4%] fixed z-10 pt-[1%] bg-[${bgColor}] text-[${textColor}]`}>
			<h1 className='w-2/6 self-center text-[2rem]'>{name}</h1>
			<nav className="w-4/6 flex flex-row-reverse gap-[5%] items-center text-[0.8rem]">
				<Link href="/login">Get Started</Link>
				<Link href="/signup">Sign In</Link>
				<Link href="/">Membership</Link>
				<Link href="/about">About</Link>
				<Link href="/">Home</Link>
			</nav>
		</header>
	)
}

export default Header