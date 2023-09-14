
import {useState} from 'react'

const Header = () => {

	const [name,setName] = useState('Asseter')
	
	return(
		<div className="flex w-full pl-[2%] pr-[2%] bg-[#5bbeab] h-[15vh]">
			<div className='w-2/6 self-center text-[2rem]'>{name}</div>
			<div className="w-4/6 flex flex-row-reverse gap-[5%] items-center">
				<div>Membership</div>
				<div>Membership</div>
				<div>Membership</div>
				<div>Membership</div>
			</div>
		</div>
	)
}

export default Header