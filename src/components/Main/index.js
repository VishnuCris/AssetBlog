
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Image from 'next/image'

const LandingPage = () => {
	return(
		<>
			<main className="relative bg-[#312e81] text-textNormal h-[50%]">
				<Header/>
				<section className="pl-[4%] absolute mt-[7%] flex w-full">
					<article className="w-1/2">
						<header>
							<h2 className="text-[4rem] leading-[4rem]">Share Knowlegde with Profit</h2>
						</header>
						<br/>
						<p className="text-[0.8rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</article>
					<article className="w-1/2">
						<figure>
							<Image></Image>
						</figure>
					</article>
				</section>
			</main>
		</>
	)
}

export default LandingPage