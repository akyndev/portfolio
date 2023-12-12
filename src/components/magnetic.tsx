"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { PropsWithChildren, useRef } from "react"

const Magnetic = ({ children }: { children: React.ReactNode }) => {
	const magnetRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		const xTo = gsap.quickTo(magnetRef.current, "x", { duration: 0.3, ease: "none" })
		const yTo = gsap.quickTo(magnetRef.current, "y", { duration: 0.3, ease: "none" })

		const onMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e
			if (magnetRef.current && magnetRef.current.getBoundingClientRect) {
				const { width, left, top, height } = magnetRef.current?.getBoundingClientRect()
				const x = clientX - (left + width / 2)
				const y = clientY - (top + height / 2)
				xTo(x)
				yTo(y)
			}
		}
		const onMouseLeave = (e: MouseEvent) => {
			xTo(0)
			yTo(0)
		}
		magnetRef.current?.addEventListener("mousemove", onMouseMove)
		magnetRef.current?.addEventListener("mouseleave", onMouseLeave)
		return () => {
			magnetRef.current?.removeEventListener("mousemove", onMouseMove)
			magnetRef.current?.removeEventListener("mouseleave", onMouseLeave)
		}
	}, [])

	return (
		<div ref={magnetRef} className="cursor-pointer p-4">
			{children}
		</div>
	)
}

export default Magnetic
