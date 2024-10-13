import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import NDetailParagraph18 from '../Typography/NDetailParagraph18'
import CardPartner from '../Footer/CardPartner'

const WhyPartnerswithUS = () => {
   let Partners_Cards=[
        {
            title:"20,000+ cars available for sale every month",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/inspected.png",
        },
        {
            title:"Verified Inspection Reports",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/verified.jpeg",
        },
        {
            title:"Payment after physical inspection",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/transparent-bidding.jpeg",
        },
        {
            title:"Transparent bidding process",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/assistance.jpeg",
        },
        {
            title:"Dedicated key account manager assistance",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/hassle-free.jpeg",
        },
        {
            title:"Hassle free delivery and payment",
            image:"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/payment.jpeg",
        },
    ]
  return (
    <section className="pb-10 pt-52">
        <Container>
            <Heading36 className={`py-5`}>Why Partner with Us</Heading36>
            <NDetailParagraph18 className={`w-3/4 m-auto text-center`}>Transparency, trust and experience lie at the heart of every deal on Spinny Partners so that our partners can make an informed and worry-free purchase.</NDetailParagraph18>
            <div className="flex flex-wrap justify-center py-10">
                {
                    Partners_Cards?.map((Card_data,indx)=>(
                        <div key={indx} className="w-full md:w-2/6 sm:w-1/2 px-5 py-5">
                            <CardPartner Card_data={Card_data}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}

export default WhyPartnerswithUS