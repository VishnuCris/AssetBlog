
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Image from 'next/image'

const LandingPage = () => {
	return(
		<>
			<main className="h-[100vh] relative">
				<Header/>
				<section className="pl-[2%] absolute mt-[50px]">
					<article>Blogs wih Benifits</article>
				</section>
			</main>
		</>
	)
}

export default LandingPage