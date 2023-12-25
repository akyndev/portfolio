"use client"
import { stylish } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import Magnetic from "./magnetic"
import Menu from "./menu"

const Nav = () => {
	return (
		<div className="text-gray-400">
			<div className={cn("text-4xl flex items-center gap-1 fixed top-4 left-8 z-40", stylish.className)}>
				<span>akyn</span>
				<span className="text-green-600 text-2xl z-40">
					<GoDotFill />
				</span>
			</div>

			<div className="fixed z-50 top-5 right-8">
				<Menu />
			</div>

			<div className=" fixed bottom-8 left-4 space-y-2 z-40">
				<Magnetic>
					<FaFacebookF />
				</Magnetic>
				<Magnetic>
					<FaInstagram />
				</Magnetic>
				<Magnetic>
					<FaGithub />
				</Magnetic>
				<Magnetic>
					<FaXTwitter />
				</Magnetic>
			</div>
		</div>
	)
}

export default Nav
