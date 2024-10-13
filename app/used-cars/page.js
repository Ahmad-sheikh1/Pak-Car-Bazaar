import React from 'react'
import Sidebar from '../component/sidebar/sidebar'
import Container from '../component/Container/Container'
import RightBoard from '../component/RightBoard/RightBoard'

const page = ({ parms }) => {
  return (
    <>
      <section className="cars-add-filteration-page w-full bg-[#fafafa]">
        <Container>
          <div className="w-full flex my-5">
            <Sidebar/>
            <RightBoard/>            
          </div>
        </Container>

      </section>
    </>
  )
}

export default page