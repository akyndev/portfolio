import About from "@/components/about"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Parallax from "@/components/parallax"
import Projects from "@/components/projects"

const Page = () => {
  return (
    <main className="">
      <Hero />
      <About />
      {/* <Projects /> */}
      <Parallax />
      <Footer />
    </main>
  )
}

export default Page
