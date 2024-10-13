import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import BasicButton from '../Buttons/BasicButton'

const BestCarNews = () => {
  return (
    <section className="py-10">
        <Container>
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-2/5">
                    <Heading36 className={`!text-left leading-snug`}>
                        Best Car Khareedo <span className="text-[#f59e0b]">Spinny Partners</span> ke saath!
                    </Heading36>
                </div>
                <BasicButton className="flex gap-4 items-center justify-center py-4 px-12">
                    <span>Register with us</span>
                    <span className="-rotate-180"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" ><path fill="#fff" d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"></path></svg></span>
                </BasicButton>
            </div>
        </Container>
    </section>
  )
}

export default BestCarNews