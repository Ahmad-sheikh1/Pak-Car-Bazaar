import Image from "next/image"
import search from "../../Assets/Search.svg"
import Container from '../Container/Container'

const Banner = () => {
  return (
    <section className="Blogs-Banner h-[560px] flex  w-full bg-center bg-cover  bg-[url('https://d2m3nfprmhqjvd.cloudfront.net/blog/20240513160802/Spinny-Post-Home-jpg.webp')]">
        <Container>
            <div className="">
                <h1 className="md:text-[80px] sm:text-6xl font-bold text-5xl text-[#FFFFFF]">Spinny Post</h1>
                <p className="text-2xl font-semibold py-5 text-[#FFFFFF]">Your go-to place for Everything Cars</p>
                <div className="relative w-full rounded-3xl overflow-hidden">
                    <input type="text" className="w-full rounded-3xl cursor-pointer py-3 px-5 outline-none text-base font-normal text-[#172554] bg-[#ededed]" placeholder="Search Something"/>
                    <span className="bg-[#f59e0b] flex justify-center items-center cursor-pointer w-20 h-full absolute top-0 right-0">
                        <Image width={40} height={40} className={`w-1/2  h-1/2`} src="https://www.svgrepo.com/show/532555/search.svg"/>
                    </span>
                </div>
            </div>   
        </Container>
    </section >
  )
}

export default Banner