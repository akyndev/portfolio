import { josh } from "@/lib/images"
import Image from "next/image"
import React from "react"

const About = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center gap-8 bg-black text-white">
			<div className="w-full lg:w-6/12">
				<Image
					src={josh}
					alt="akyn"
					width={800}
					height={1200}
					className="h-[34rem] opacity-60 w-full object-cover"
				/>
			</div>
			<div className="text-2xl w-6/12 space-y-20"></div>
		</div>
	)
}

export default About
