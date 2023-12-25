"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"
import Projects from "./projects"

type Props = {
	children?: React.ReactNode
}

const Parallax = ({ children }: Props) => {
	let getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight)
	const mainRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		if (mainRef.current) {
			gsap.fromTo(
				".parallax",
				{
					backgroundPosition: `50% ${-window.innerHeight * getRatio(mainRef.current)}px`
				},
				{
					backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(mainRef.current))}px`,
					ease: "none",
					scrollTrigger: {
						trigger: "#parallax-trigger",
						start: "top bottom",
						end: "bottom top",
						scrub: true,
						invalidateOnRefresh: true // to make it responsive
					}
				}
			)
		}
	})
	return (
		<div
			ref={mainRef}
			id="parallax-trigger"
			className="relative h-max bg-black/60"
		>
			<Projects />
			<div className="parallax absolute top-0 bottom-0 -z-10 bg-cover bg-no-repeat bg-center h-full w-full bg-[url(https://picsum.photos/1600/800?random=0)]" />
		</div>
	)
}

export default Parallax
