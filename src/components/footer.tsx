"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const Footer = () => {
	const trigger = useRef<HTMLDivElement | null>(null)
	const target = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		gsap.to(target.current, {
			scrollTrigger: {
				trigger: trigger.current,
				start: "top bottom",
                scrub: true,
			},
			marginLeft: 56,
			marginRight: 56,
			borderRadius: 99,
			ease: "none"
		})
	}, [])

	return (
		<>
			<div className="">
				<div ref={target} className="h-screen bg-blue-400"></div>
			</div>
			<div ref={trigger} className="h-96 w-full"></div>
		</>
	)
}

export default Footer
