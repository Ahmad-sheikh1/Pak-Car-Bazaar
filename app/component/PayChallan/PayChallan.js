import { faArrowUp, faCheck, faCircleCheck, faGreaterThan, faStar, faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Page from '../Faq/Faq';
import Container from '../Container/Container';
import BannerPaychallan from './BannerPaychallan';

const PayChallan = () => {
    const cardData = [1, 2, 3];
    const cards = [1, 2, 3, 4, 5, 6];
    const review = [1, 2, 3, 4];
    const totalStars = 5;
    const rating = 4;
    const temp = [1, 2];
    return (
        <>
            <BannerPaychallan/>

            <section className='2 p-28'>
                <h1 className='font-bold text-2xl mb-4'>How to Check & Pay Traffic Challan ?</h1>
                <div className="cards flex justify-around items-center gap-12">
                    {cardData?.map((card, index) => {
                        return (
                            <div key={index} className="card relative">
                                <div className='h-[300px]'>
                                    <img className='w-full h-full rounded-xl object-cover' src="https://assets.cars24.com/production/c2b-website/241009162609/js/9b2e26f1612ed31291234353037b0fa1.jpg" alt="Card Image" />
                                </div>
                                <div className="one absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4">
                                    <div className='flex  justify-center items-center  gap-8'>
                                        <h1 className='text-5xl font-bold '>0{index + 1}</h1>
                                        <div className="heading flex flex-col gap-2">
                                            <h1 className='text-xl font-bold'>Search</h1>
                                            <h3>Enter Car <br />Registration Number</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className='3 p-28 '>
                <div className="banner flex gap-8 justify-center items-center bg-[#f1f8ff] p-4 rounded-xl">
                    <img className='bg-white rounded-xl' src="https://assets.cars24.com/production/c2b-website/241009162609/js/b5f46b62379b35ce940afa0b49fb5934.svg" alt="Image" />
                    <div className="heading">
                        <h1 className='text-3xl font-bold mb-4'>What is traffic eChallan ?</h1>
                        <p>
                            A traffic eChallan is a digital traffic violation challan that is issued by the traffic police, traffic cameras or transport authorities in India.As opposed to offline methods of traffic eChallan payment, online payment is convenient, time- saving, and can be done using multiple payment methods including NetBanking, UPI, Credit Card, Debit Card, or a digital wallet.It is also more transparent and gives you an electronic record of the payment you have made.
                        </p>
                    </div>
                </div>
            </section>

            <section className='4 px-28 py-8'>
                <h1 className='text-3xl font-bold mb-8'>What are the common reasons for which you can be issued a challan ?</h1>
                <div className='cards flex flex-wrap gap-6 justify-around'>
                    {
                        cards.map(((card, index) => {
                            return (
                                <div key={index} className="card drop-shadow-2xl bg-white rounded-xl  p-8 flex justify-center items-center gap-8">
                                    <FontAwesomeIcon className='w-10 h-10 bg-black text-white p-2 rounded-full text-2xl' icon={faTrafficLight} />
                                    <h2 className='font-bold text-lg w-3/4'>Violation of traffic rules</h2>
                                </div>
                            );
                        }))
                    }
                </div>
            </section>

            <section className='4 px-28 py-8'>
                <h1 className='font-bold text-2xl mb-16'>Why pay challans with CARS24 ?</h1>
                <div className="cards flex justify-around items-center">
                    {
                        cardData.map((card, index) => {
                            return (
                                <div key={index} className='card relative bg-[#fafafa] p-8 rounded-xl'>
                                    <FontAwesomeIcon className='w-5 h-5 absolute bottom-[125px] font-bold text-3xl' icon={faCircleCheck} />
                                    <h1 className='font-bold text-xl mb-2'>Accurate challan details</h1>
                                    <h3 className='mb-4'>Stay up to date with any pending challans</h3>
                                </div>
                            );
                        })
                    }
                </div>
            </section>

            <section className='5 px-28 py-8'>
                <h1 className='font-bold text-2xl mb-8'>Our happy customers</h1>
                <div className="cards flex justify-around gap-6">
                    {
                        review.map((card, index) => {
                            return (
                                <div key={index} className="card drop-shadow-lg bg-white p-4">
                                    <div className="one flex  items-center gap-4">
                                        <img className='w-12 h-12 rounded-full' src="https://media.cars24.com/cars24/testimonials/1718041826_10510179123.jpg" alt="Image" />
                                        <div className="heading mb-4 flex flex-col ">
                                            <h2 className='font-bold'>Sumit</h2>
                                            <h3 className='mb-2'>Lucknow</h3>
                                            <div className="flex space-x-1">
                                                {[...Array(totalStars)].map((_, index) => (
                                                    <span key={index} className="inline-block">
                                                        {index < rating ? (
                                                            <img
                                                                src="https://assets.cars24.com/production/c2b-website/241009162609/js/676743fe01850a5ebd63521e87363c38.svg"
                                                                alt="full star"
                                                                className="w-4 h-4"
                                                            />
                                                        ) : (
                                                            <img
                                                                src="https://assets.cars24.com/production/c2b-website/241009162609/js/8f38748d61cc41f42a027cfea16667f5.svg"
                                                                alt="empty star"
                                                                className="w-4 h-4"
                                                            />
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="two">
                                        <p>Paying my challan on the government website was time-consuming. CARS24 saved me a lot of time with their efficient process.</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>

            <section className='6 px-28 py-8'>
                <Page/>
            </section>

            <section className='7 px-28 py-8'>  
                <h1 className='text-3xl font-bold mb-6'>Buy and sell with CARS24</h1>
                <div className="cards flex justify-around items-center bg-white p-12 gap-12 rounded-xl">
                    {
                        temp.map((cards, index) => {
                            return (
                                <div key={index} className="card flex bg-white drop-shadow-xl rounded-lg p-6 justify-center items-center gap-12">
                                    <img className='w-44 h-32 rounded-xl' src="https://assets.cars24.com/production/c2b-website/241009162609/js/74bef8b36c3ec4f793df1b55953f99ce.jpg" alt="Image" />
                                    <div className="heading">
                                        <h1 className='font-bold text-2xl mb-1'>Want to buy a car ?</h1>
                                        <h3 className='mb-4 '>why choose pak car bazaar for your next vehicle</h3>
                                        <ul className='float-left'>
                                            <li className='flex justify-center gap-4 items-center'><FontAwesomeIcon className='w-4 h-4 text-green-500' icon={faCheck} />140- Quality Checks</li>
                                            <li className='flex justify-center gap-4 items-center'><FontAwesomeIcon className='w-4 h-4 text-green-500' icon={faCheck} />140- Quality Checks</li>
                                            <li className='flex justify-center gap-4 items-center'><FontAwesomeIcon className='w-4 h-4 text-green-500' icon={faCheck} />140- Quality Checks</li>
                                        </ul>
                                        <button className='float-right mt-2 text-[#ef6e0b] font-bold text-lg flex justify-center items-center gap-4'>But Used Cars<FontAwesomeIcon className='w-4 h-4' icon={faGreaterThan} /></button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <button className="mx-auto flex justify-center items-center gap-2 bg-[#fafafa] p-4 rounded-lg">Back to Top<FontAwesomeIcon className='w-4 h-6' icon={faArrowUp} /></button>
            </section>
        </>
    );
};

export default PayChallan;
