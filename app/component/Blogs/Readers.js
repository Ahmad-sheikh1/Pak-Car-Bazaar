import React from 'react'
import Container from '../Container/Container'

const Readers = () => {
  return (
    <section className="py-10">
        <Container>
            <h6 className="text-6xl font-bold text-center mb-5 text-[#172554] ">5,000,000+ Readers</h6>
            <p className="text-3xl font-semibold text-center text-[#172554]">We&apos;re ❤️ne big family!</p>
            <p className="text-lg font-normal px-5 my-5 text-center text-[#172554]">Fllow us for accurate, impartial & up-to-date information around everything related to cars - Latest news & developments, best options for every budget & lifestyle, ownership tips, buying & selling advice and a lot more on Spinny Post.</p>
            <div className="flex justify-center py-10s">
                <div className="w-[200px] h-14 ">
                    <img className="w-full h-full object-contain" src="https://www.spinny.com/blog/wp-content/uploads/2024/03/google-news-icon-full-resolution.svg" alt='Iamge wo dekh' />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Readers