import type { Metadata } from "next"
import "./globals.css"
import { asap, commissioner } from "./fonts"
import LenisProvider from "@/providers/lenis"
import { cn } from "@/lib/utils"
import Nav from "@/components/nav"
import Cursor from "@/components/cursor"

export const metadata: Metadata = {
	title: "Akinlade Joseph | web Developer",
	authors: {
		name: "Akinlade Joseph",
		url: "https://www.akyn.dev"
	},
	metadataBase: new URL("https://www.akyn.dev"),
	description:
		"Experienced Full-Stack Developer specializing in Shopify theme development, WooCommerce, and E-commerce solutions. Proficient in Next.js, React, TypeScript, JavaScript, Prisma, Tailwind CSS, MongoDB, PostgreSQL, and Shadcn for creating innovative and visually appealing web and mobile applications. Let's turn your ideas into extraordinary online experiences.",
	keywords:
		"Full - Stack Developer, Shopify Theme Development, WooCommerce, E- commerce, Next.js, React, TypeScript, JavaScript, Prisma, Tailwind CSS, MongoDB, PostgreSQL, Shadcn, Web Development, Mobile Development",
	openGraph: {
		title: "AcAkinlade Joseph | web Developerme",
		description:
			"Experienced Full-Stack Developer specializing in Shopify theme development, WooCommerce, and E-commerce solutions. Proficient in Next.js, React, TypeScript, JavaScript, Prisma, Tailwind CSS, MongoDB, PostgreSQL, and Shadcn for creating innovative and visually appealing web and mobile applications. Let's turn your ideas into extraordinary online experiences.",
		url: "https://www.akyn.dev"
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<LenisProvider>
				<body className={cn("relative overflow-x-hidden bg-gray-900 text-white", asap.className)}>
					<Nav />
					{children}
					<Cursor />
				</body>
			</LenisProvider>
		</html>
	)
}
