import React from 'react';
import CardPartner from '../Footer/CardPartner';
import Heading36 from '../Typography/Heading36';
import NDetailParagraph18 from '../Typography/NDetailParagraph18';
import Container from '../Container/Container';
import CardPartner2 from '../Cards/CardPartner2';

const HPartnersWorks = () => {
    let Partners_Cards = [
        {
            image: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/place-your-bid.svg?q=85&w=320&dpr=1.3",
            title: "Place your bid",
            desc: "Choose from our wide variety of quality cars.",
        },
        {
            image: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/close-the-deal.svg?q=85&w=320&dpr=1.3",
            title: "Close The Deal",
            desc: "We'll negotiate your offer with sellers and ensure you get your car at the best price",
        },
        {
            image: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Auction/assets/payment.svg?q=85&w=320&dpr=1.3",
            title: "Payment & Delivery",
            desc: "Pay online & get doorstep delivery of the car along with complete documentation",
        },
    ];

    return (
        <section className="pt-5 pb-10">
            <Container>
                <Heading36 className={`py-5`}>How It Works</Heading36>
                <NDetailParagraph18 className={`w-3/4 m-auto text-center`}>
                    Our process is designed to make car-buying easy and convenient. Here&apos;s how it works:
                </NDetailParagraph18>
                <div className="flex flex-wrap justify-center py-10 px-20">
                    {
                        Partners_Cards?.map((Card, indx) => (
                            <div key={indx} className="w-full lg:w-2/6 sm:w-1/2 px-5 py-5">
                                <CardPartner2 Card_Data={Card} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}

export default HPartnersWorks;
