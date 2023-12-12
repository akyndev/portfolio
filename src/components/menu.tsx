"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { useRef, useState } from "react"
import { HiDotsVertical } from "react-icons/hi"

const Menu = () => {
	const [open, setOpen] = useState(false)
	const navRef = useRef<HTMLDivElement | null>(null)

	const { contextSafe } = useGSAP(() => {
		const state = Flip.getState(navRef.current)
		if (open) {
			navRef.current?.classList.remove("h-0")
			navRef.current?.classList.add("h-max")
		}
		if (!open) {
			navRef.current?.classList.remove("h-max")
			navRef.current?.classList.add("h-0")
		}

		Flip.from(state, {
			targets: navRef.current,
			scale: true,
			absolute: true,
			duration: 0.3,
			ease: "none"
		})
	}, [open])

	const menuToggler = contextSafe(() => {
		setOpen(!open)
	})

	return (
		<div className="relative w-max">
			<div
				id="menu"
				onClick={() => menuToggler()}
				className="rounded-full cursor-pointer border-2 border-white bg-white px-4 py-2 text-black font-semibold uppercase flex items-center"
			>
				<span className="inline-block">Menu</span>
				<span className="mx-1">
					<HiDotsVertical />
				</span>
				<span className="inline-block">About</span>
			</div>
			{/* <div
				id="nav"
				ref={navRef}
				className="bg-white absolute top-12 h-0 overflow-hidden w-48 right-0 rounded-xl font-bold text-sm text-[#706969] uppercase"
			>
				<ul className="p-4 text-xl space-y-4">
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</div> */}
		</div>
	)
}

export default Menu
