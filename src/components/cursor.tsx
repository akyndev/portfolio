"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import React, { MouseEventHandler } from "react"

const Cursor = () => {
	useGSAP((context, contextSafe) => {
		gsap.set("#custom-cursor", {
			xPercent: -50,
			yPercent: -50
		})
		const views = document.querySelectorAll("#view")
		const menu = document.getElementById("menu") as HTMLDivElement

		const menuState = Flip.getState(menu, { 
			props:"backgroundColor,color"
		})

		const onMouseMove =
			typeof contextSafe !== "undefined"
				? (contextSafe((e: MouseEvent) => {
						gsap.to("#custom-cursor", {
							x: e.clientX,
							y: e.clientY,
							duration: 0.3,
							ease: "none"
						})
				  }) as any)
				: null

		const onMouseEnter =
			typeof contextSafe !== "undefined"
				? (contextSafe(() => {
						gsap.to("#custom-cursor", {
							scale: 7,
							duration: 0.2
						})
				  }) as MouseEventHandler)
				: null

		const onMouseLeave =
			typeof contextSafe !== "undefined"
				? (contextSafe(() => {
						gsap.to("#custom-cursor", {
							scale: 1,
							duration: 0.2
						})
				  }) as MouseEventHandler)
				: null

		const onMouseEnterMenu: any =
			typeof contextSafe !== "undefined"
				? (contextSafe(() => {
						gsap.to("#custom-cursor", {
							scale: 0,
							duration: 0.3
						})
						gsap.to(menu, {
							background: "black",
							color: "white",
							duration: 0.3
						})
				  }) as MouseEventHandler)
				: null

		const onMouseLeaveMenu: any =
			typeof contextSafe !== "undefined"
				? contextSafe(() => {
						gsap.to("#custom-cursor", {
							scale: 1,
							duration: 0.3
						})
						gsap.to(menu, {
							background: "white",
							color: "black",
							duration: .3
						})
				  })
				: null

		views.forEach((element: any) => {
			element.addEventListener("mouseenter", onMouseEnter)
			element.addEventListener("mouseleave", onMouseLeave)
		})
		menu.addEventListener("mouseenter", onMouseEnterMenu)
		menu.addEventListener("mouseleave", onMouseLeaveMenu)
		document.addEventListener("mousemove", onMouseMove)

		return () => {
			document.removeEventListener("mousemove", onMouseMove)
			menu.removeEventListener("mouseenter", onMouseEnterMenu)
			menu.removeEventListener("mouseleave", onMouseLeaveMenu)

			views.forEach((element: any) => {
				element.removeEventListener("mouseenter", onMouseEnter)
				element.removeEventListener("mouseleave", onMouseLeave)
			})
		}
	}, [])

	return (
		<div
			id="custom-cursor"
			className="z-50 pointer-events-none bg-white p-5 flex items-center justify-center mix-blend-difference 
			-top-0 -left-0 scale-0 fixed w-6 h-6 rounded-full"
		>
			{/* <span className="text-xl font-semibold">View</span> */}
		</div>
	)
}

export default Cursor
