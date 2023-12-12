"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const texts = [
	["b", "u", "i", "l", "d", "i", "n", "g"],
	["y", "o", "u", "r"],
	["d", "r", "e", "a", "m"],
	["w", "e", "b", "s", "i", "t", "e"]
]

const Hero = () => {

	useGSAP(() => {
		const chars = document.querySelectorAll(".char")

		gsap.to(chars, {
			y: 0,
			stagger: 0.08,
		})
	}, [])

	return (
		<>
			<section className="relative">
				<video
					autoPlay
					loop
					className="w-full h-screen object-cover"
					src={
						"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NrM0QFs3gilniuv44/videoblocks-man-coding-html-and-programming-on-two-screen-monitors-development-web-developer_sktjlfttl__7d6166d5e3b7b6b5754dd03ab206add9__P360.mp4"
					}
				/>
				<div className="absolute top-0 bottom-0 left-0 right-0 bg-black/80" />
				<div className="absolute top-0 bottom-0 left-0 font-bold text-white right-0 z-10 flex flex-col items-center justify-center uppercase">
					<h6 className="my-2"> - - - - - - - - - - - Joseph Akinlade - - - - - - - - - - - -</h6>
					<div id="view">
						{texts.map((text, i) => (
							<div
								key={i}
								style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
								className="text-[4rem] lg:text-8xl  xl:text-8xl tracking-tight leading-[84%]  mx-auto flex items-center justify-center"
							>
								{text.map((l, j) => (
									<h1 className="char translate-y-full" key={j}>
										{l}
									</h1>
								))}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
