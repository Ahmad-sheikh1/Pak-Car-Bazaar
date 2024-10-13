import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ClcikBySection from "../component/Clickbysection/page"
import FAQs from "../component/Faq/Faq";
import ReadMore from "../component/ReadMore/ReadMore"

const Page = () => {
    const Cards = [1, 2, 3, 4];
    const secondcard = [1, 2, 3];
    return (
        <>
            <section className="flex justify-around p-28  bg-[url('/carinspection.jpg')] bg-cover h-[60vh] w-full">
                <div className="one w-2/5">
                    <h1 className="text-3xl font-bold text-white mb-4">Car Truth</h1>
                    <h2 className="font-bold text-3xl text-white">Buy Safe With Our Pre-delivery Inspection</h2>
                    <h3 className="text-lg text-white">Buy a car from anywhere, we ll inspect it for you.</h3>
                </div>
                <div className="two self-start bg-white rounded-lg shadow-lg p-6  w-96">
                    <h2 className="text-lg font-semibold mb-4">Choose your car type</h2>
                    <div className="border rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <input type="radio" name="carType" id="carType" className="" />
                                <label className="ml-2 font-semibold">Brand new new car</label>
                            </div>
                            <span className="font-semibold text-blue-600">₹999</span>
                        </div>
                        <div className="flex ">
                            <p className="text-gray-600 mb-2">Uncover engine and manufacturing defects</p>
                            <Image src="/SmallCar.png" alt="Brand new car image" width={60} height={40} className=" object-cover" />
                        </div>
                    </div>
                    <div className="border rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <input type="radio" name="carType" className="form-radio text-blue-600" />
                                <label className="ml-2 font-semibold">Used car</label>
                            </div>
                            <span className="font-semibold text-blue-600">₹999</span>
                        </div>
                        <div className="flex">
                            <p className="text-gray-600 mb-2">Uncover hidden accidents and cover-ups</p>
                            <Image src="/SmallCar.png" alt="Brand new car image" width={60} height={40} className=" object-cover" />
                        </div>
                    </div>
                    <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg w-full">Book inspection</button>
                </div>
            </section>

            <section className="two mt-28 p-28">
                <h1 className="font-bold text-3xl mb-8">75% of our pre-delivery inspections reveal issues</h1>
                <div className="cards flex-wrap gap-8 flex justify-around items-center">
                    {
                        Cards.map((ele, index) => {
                            return (
                                <>
                                    <div key={index} className="card flex gap-6 border-2 w-[40%] border-gray-300 p-4 rounded-xl justify-center items-center">
                                        <Image src="/cardins.png" width={80} height={80} alt="Card Image" />
                                        <div className="heading">
                                            <h1>Engine Defeat</h1>
                                            <p>20% cars inspected by CARS24 have engine defects</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </section>

            <section className="three ">
                <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681506824409-32c4eef0b973?q=80&w=1654&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative  z-10 text-center text-white py-24">
                        <div className="flex justify-center items-center mb-4">
                            <i className="fas fa-handshake fa-2x text-orange-500"></i>
                        </div>
                        <h2 className="text-xl font-semibold mb-8">Trusted by people across India</h2>
                        <div className="flex justify-center space-x-8">
                            <div className="text-center">
                                <div className="flex justify-center mb-2">
                                    <FontAwesomeIcon className="text-yellow-300 w-6 " icon={faStar} />
                                    <span className="text-2xl font-bold ml-2">4.5+</span>
                                </div>
                                <p>Average rating</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="fas fa-check-circle text-green-500"></i>
                                    <span className="text-2xl font-bold ml-2">1 cr+</span>
                                </div>
                                <p>Inspections completed</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="fas fa-city text-blue-500"></i>
                                    <span className="text-2xl font-bold ml-2">200+</span>
                                </div>
                                <p>Cities available</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="fas fa-briefcase text-purple-500"></i>
                                    <span className="text-2xl font-bold ml-2">10+</span>
                                </div>
                                <p>Years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="four p-28">
                <h1 className="font-bold text-2xl mb-6"><span className="text-blue-500 ">200+</span>  quality checks Get an inside-outside view with</h1>
                <ClcikBySection />
            </section>

            <section className="five bg-gray-100 py-12">
                <div className="Head flex justify-around w-full  ">
                    <div className="heading ">
                        <h1 className="font-bold text-2xl mb-2">Take a quick 3-step inspection</h1>
                        <p>This is John&apos;s car inspection report.</p>
                    </div>
                    <button className="rounded-lg font-bold text-white bg-orange-500 p-4">
                        Book Inspection
                    </button>
                </div>
                <div className="flex justify-center gap-8 items-center pt-8 ">
                    {
                        secondcard.map((ele, index) => {
                            return (
                                <>
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
                                        <div className="relative w-full h-48"> {/* Wrapping div with relative position */}
                                            <Image
                                                src="/SecondCard.png"
                                                layout="fill"
                                                alt="Hand holding a smartphone with a car in the background"
                                                className="rounded-t-lg object-cover" // object-cover ensures proper scaling
                                            />
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="text-4xl font-bold text-orange-500">01</div>
                                            <div className="ml-4">
                                                <h2 className="text-lg font-bold">Book your inspection</h2>
                                                <p className="text-gray-600">Share car details and schedule an inspection at home, or car location.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>

            <section className="six p-16">
                <h1 className="font-bold text-3xl mb-8">4 lakh+ happy owners</h1>
                {/* Card */}
                <div className="cards flex justify-around gap-8">
                    {
                        Cards.map((ele, index) => {
                            return (
                                <>
                                    <div key={index} className="card w-3/12 bg-blue-200 p-8 rounded-xl">
                                        <div className="one flex gap-8 mb-8">
                                            <div className="image relative w-12 h-12 ">
                                                <Image src='/Human.jpg' className="rounded-full" layout="fill" />
                                            </div>
                                            <div className="flex flex-col ">
                                                <h3>Github Copilot</h3>
                                                <h4>Car Buyer</h4>
                                            </div>
                                        </div>
                                        <div className="two mb-6">
                                            <p>The CARS24 pre-delivery Inspection report has been a game-</p>
                                        </div>
                                        <h3>1 May, 2024</h3>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>

            <section className="eight px-28">
                <ReadMore />
            </section>

            <section className="seven">
                <FAQs />
            </section>



        </>
    );
}

export default Page;
