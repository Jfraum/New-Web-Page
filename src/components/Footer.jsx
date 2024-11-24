import { Link } from "react-router-dom";


export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className=" py-10 xl:mx-auto">
				<div className="flex flex-row justify-center">
					<Link href="https://www.instagram.com/_fraum_/">
						<a href="https://www.instagram.com/_fraum_/" className="relative">
							<img className="w-10"src="/Icono de Instagram.png" layout="fill" alt="instagram"/>
						</a>
					</Link>
				</div>
				<div className="text-center mt-2 lg:text-lg">
					<small className="font-medium text-white">
						&copy; {currentYear} All rights reserved, Fraum
					</small>
				</div>
			</footer>
		</>
	)
}
