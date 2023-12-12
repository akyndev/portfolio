"use client"

import { ReactLenis, useLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import React, { PropsWithChildren, useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Flip } from "gsap/Flip"

gsap.registerPlugin(ScrollTrigger, Flip)


const LenisProvider = (props: PropsWithChildren) => {
	const lenisRef = useRef<any | null>(null)
	const lenis = useLenis((parameters) => {
		ScrollTrigger.update()
	})

	useEffect(() => {
	
		function update(time: number) {
			lenisRef.current?.raf(time * 1000)
		}
		gsap.ticker.lagSmoothing(0)

		gsap.ticker.add(update)

		return () => gsap.ticker.remove(update)
	})

	return (
		<ReactLenis ref={lenisRef} autoRaf={false} root>
			{props.children}
		</ReactLenis>
	)
}

export default LenisProvider
