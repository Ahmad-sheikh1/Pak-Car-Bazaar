import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import FAQs from "../component/Faq/Faq";

const page = () => {
    const card = [1, 2, 3];
    let secondcard = [1, 2, 3, 4];
    let happycoustomer = [1, 2, 3];
    let cities = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <section className="one">
                <div className={`banner flex justify-around items-center bg-[url('/bannerSellCar.jpg')] object-cover w-full h-full`}>
                    <div className="heading ">
                        <h1 className="font-bold text-4xl uppercase text-white mb-4 ">Sell your car in minutes</h1>
                        <p className="font-bold w-1/2 text-xl text-white">Get doorstep pick up and instant payment</p>
                    </div>
                    <div className="card mt-40 flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                            <h1 className="text-center text-xl font-bold mb-4">Enter your car number</h1>
                            <div className="flex items-center border rounded-lg p-2 mb-4">
                                <div className="flex items-center justify-center w-12 h-12 border-r">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="58" viewBox="0 0 26 60" fill="none">
                                        <g clip-path="url(#clip0_16172_90068)">
                                            <path d="M0 8C0 3.58172 3.58172 0 8 0H26V60H8C3.58172 60 0 56.4183 0 52V8Z" fill="#F5F5F5"></path>
                                            <circle cx="13.125" cy="22.75" r="0.875" fill="#0059A3"></circle>
                                            <circle cx="13.125" cy="22.75" r="4.6875" stroke="#0059A3" stroke-width="0.625"></circle>
                                            <circle cx="12.5539" cy="18.4118" r="0.25" transform="rotate(-7.5 12.5539 18.4118)" fill="#0059A3"></circle>
                                            <circle cx="13.6965" cy="27.0869" r="0.25" transform="rotate(-7.5 13.6965 27.0869)" fill="#0059A3"></circle>
                                            <circle cx="17.1675" cy="24.4236" r="0.25" transform="rotate(112.5 17.1675 24.4236)" fill="#0059A3"></circle>
                                            <circle cx="9.08352" cy="21.0751" r="0.25" transform="rotate(112.5 9.08352 21.0751)" fill="#0059A3"></circle>
                                            <circle cx="16.5964" cy="20.086" r="0.25" transform="rotate(52.5 16.5964 20.086)" fill="#0059A3"></circle>
                                            <circle cx="9.65307" cy="25.4127" r="0.25" transform="rotate(52.5 9.65307 25.4127)" fill="#0059A3"></circle>
                                            <circle cx="15.7883" cy="19.2784" r="0.25" transform="rotate(37.5 15.7883 19.2784)" fill="#0059A3"></circle>
                                            <circle cx="10.4622" cy="26.2202" r="0.25" transform="rotate(37.5 10.4622 26.2202)" fill="#0059A3"></circle>
                                            <circle cx="14.7984" cy="26.7913" r="0.25" transform="rotate(157.5 14.7984 26.7913)" fill="#0059A3"></circle>
                                            <circle cx="11.4507" cy="18.7074" r="0.25" transform="rotate(157.5 11.4507 18.7074)" fill="#0059A3"></circle>
                                            <circle cx="17.4617" cy="23.3203" r="0.25" transform="rotate(97.5 17.4617 23.3203)" fill="#0059A3"></circle>
                                            <circle cx="8.78787" cy="22.1782" r="0.25" transform="rotate(97.5 8.78787 22.1782)" fill="#0059A3"></circle>
                                            <circle cx="14.7994" cy="18.7074" r="0.25" transform="rotate(22.5 14.7994 18.7074)" fill="#0059A3"></circle>
                                            <circle cx="11.4498" cy="26.7914" r="0.25" transform="rotate(22.5 11.4498 26.7914)" fill="#0059A3"></circle>
                                            <circle cx="15.7881" cy="26.2202" r="0.25" transform="rotate(142.5 15.7881 26.2202)" fill="#0059A3"></circle>
                                            <circle cx="10.462" cy="19.2784" r="0.25" transform="rotate(142.5 10.462 19.2784)" fill="#0059A3"></circle>
                                            <circle cx="17.4625" cy="22.1783" r="0.25" transform="rotate(82.5 17.4625 22.1783)" fill="#0059A3"></circle>
                                            <circle cx="8.78672" cy="23.3204" r="0.25" transform="rotate(82.5 8.78672 23.3204)" fill="#0059A3"></circle>
                                            <circle cx="13.6957" cy="18.4117" r="0.25" transform="rotate(7.5 13.6957 18.4117)" fill="#0059A3"></circle>
                                            <circle cx="12.5531" cy="27.0869" r="0.25" transform="rotate(7.5 12.5531 27.0869)" fill="#0059A3"></circle>
                                            <circle cx="16.5948" cy="25.4126" r="0.25" transform="rotate(127.5 16.5948 25.4126)" fill="#0059A3"></circle>
                                            <circle cx="9.65338" cy="20.0859" r="0.25" transform="rotate(127.5 9.65338 20.0859)" fill="#0059A3"></circle>
                                            <circle cx="17.1674" cy="21.0751" r="0.25" transform="rotate(67.5 17.1674 21.0751)" fill="#0059A3"></circle>
                                            <circle cx="9.08345" cy="24.4236" r="0.25" transform="rotate(67.5 9.08345 24.4236)" fill="#0059A3"></circle>
                                            <g clip-path="url(#clip1_16172_90068)">
                                                <path d="M12.9555 27.106L12.8055 24.481L12.9555 23.231L13.1055 24.481L12.9555 27.106Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip2_16172_90068)">
                                                <path d="M13.0055 18.356L13.1555 20.981L13.0055 22.231L12.8555 20.981L13.0055 18.356Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip3_16172_90068)">
                                                <path d="M9.20353 20.522L11.5518 21.7045L12.5594 22.4595L11.4018 21.9644L9.20353 20.522Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip4_16172_90068)">
                                                <path d="M16.7574 24.9402L14.4091 23.7576L13.4016 23.0027L14.5591 23.4978L16.7574 24.9402Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip5_16172_90068)">
                                                <path d="M9.17853 24.897L11.3768 23.4545L12.5344 22.9595L11.5268 23.7144L9.17853 24.897Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip6_16172_90068)">
                                                <path d="M16.7824 20.5652L14.5841 22.0076L13.4266 22.5027L14.4341 21.7478L16.7824 20.5652Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip7_16172_90068)">
                                                <path d="M9.86874 25.8069L11.6188 23.8447L12.6088 23.0669L11.831 24.0569L9.86874 25.8069Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip8_16172_90068)">
                                                <path d="M16.0922 19.6551L14.3421 21.6173L13.3522 22.3951L14.13 21.4052L16.0922 19.6551Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip9_16172_90068)">
                                                <path d="M11.8724 18.4986L12.6967 20.9953L12.8754 22.2416L12.4069 21.073L11.8724 18.4986Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip10_16172_90068)">
                                                <path d="M14.0885 26.9634L13.2642 24.4667L13.0856 23.2205L13.554 24.389L14.0885 26.9634Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip11_16172_90068)">
                                                <path d="M8.7607 21.5745L11.3351 22.109L12.5037 22.5774L11.2574 22.3988L8.7607 21.5745Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip12_16172_90068)">
                                                <path d="M17.2002 23.8874L14.6259 23.3529L13.4573 22.8845L14.7035 23.0631L17.2002 23.8874Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip13_16172_90068)">
                                                <path d="M10.7705 26.5075L11.9531 24.1592L12.708 23.1517L12.2129 24.3092L10.7705 26.5075Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip14_16172_90068)">
                                                <path d="M15.1905 18.9547L14.0079 21.3031L13.253 22.3106L13.748 21.1531L15.1905 18.9547Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip15_16172_90068)">
                                                <path d="M10.8135 18.9296L12.2559 21.1279L12.751 22.2855L11.9961 21.2779L10.8135 18.9296Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip16_16172_90068)">
                                                <path d="M15.1455 26.5323L13.7031 24.334L13.208 23.1764L13.9629 24.184L15.1455 26.5323Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip17_16172_90068)">
                                                <path d="M8.60547 22.706L11.2305 22.556L12.4805 22.706L11.2305 22.856L8.60547 22.706Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip18_16172_90068)">
                                                <path d="M17.3555 22.756L14.7305 22.906L13.4805 22.756L14.7305 22.606L17.3555 22.756Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip19_16172_90068)">
                                                <path d="M11.8248 26.9505L12.3594 24.3761L12.8278 23.2075L12.6491 24.4537L11.8248 26.9505Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip20_16172_90068)">
                                                <path d="M14.1361 18.5116L13.6016 21.0859L13.1332 22.2545L13.3118 21.0083L14.1361 18.5116Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip21_16172_90068)">
                                                <path d="M9.90509 19.6197L11.8673 21.3698L12.6451 22.3598L11.6552 21.5819L9.90509 19.6197Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip22_16172_90068)">
                                                <path d="M16.0558 25.8423L14.0936 24.0922L13.3158 23.1023L14.3058 23.8801L16.0558 25.8423Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip23_16172_90068)">
                                                <path d="M8.74751 23.8391L11.2442 23.0148L12.4905 22.8362L11.3219 23.3046L8.74751 23.8391Z" fill="#0059A3"></path>
                                            </g>
                                            <g clip-path="url(#clip24_16172_90068)">
                                                <path d="M17.2134 21.6228L14.7167 22.4471L13.4705 22.6257L14.639 22.1573L17.2134 21.6228Z" fill="#0059A3"></path>
                                            </g>
                                            <path d="M7.23766 34.02V41H5.83766V34.02H7.23766ZM14.7909 41H13.3909L10.2209 36.21V41H8.82086V34.01H10.2209L13.3909 38.81V34.01H14.7909V41ZM18.8144 34.02C19.5477 34.02 20.191 34.1633 20.7444 34.45C21.3044 34.7367 21.7344 35.1467 22.0344 35.68C22.341 36.2067 22.4944 36.82 22.4944 37.52C22.4944 38.22 22.341 38.8333 22.0344 39.36C21.7344 39.88 21.3044 40.2833 20.7444 40.57C20.191 40.8567 19.5477 41 18.8144 41H16.3744V34.02H18.8144ZM18.7644 39.81C19.4977 39.81 20.0644 39.61 20.4644 39.21C20.8644 38.81 21.0644 38.2467 21.0644 37.52C21.0644 36.7933 20.8644 36.2267 20.4644 35.82C20.0644 35.4067 19.4977 35.2 18.7644 35.2H17.7744V39.81H18.7644Z" fill="#0059A3"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_16172_90068">
                                                <path d="M0 8C0 3.58172 3.58172 0 8 0H26V60H8C3.58172 60 0 56.4183 0 52V8Z" fill="white"></path>
                                            </clipPath>
                                            <clipPath id="clip1_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-1 0 0 1 13.7305 23.1685)"></rect>
                                            </clipPath>
                                            <clipPath id="clip2_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(1 0 0 -1 12.2305 22.2935)"></rect>
                                            </clipPath>
                                            <clipPath id="clip3_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.5 -0.866025 -0.866025 -0.5 12.2266 23.1619)"></rect>
                                            </clipPath>
                                            <clipPath id="clip4_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.5 0.866025 0.866025 0.5 13.7344 22.3003)"></rect>
                                            </clipPath>
                                            <clipPath id="clip5_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.5 -0.866025 -0.866025 0.5 12.9766 23.5994)"></rect>
                                            </clipPath>
                                            <clipPath id="clip6_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.5 0.866025 0.866025 -0.5 12.9844 21.8628)"></rect>
                                            </clipPath>
                                            <clipPath id="clip7_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 13.2012 23.5707)"></rect>
                                            </clipPath>
                                            <clipPath id="clip8_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.7598 21.8914)"></rect>
                                            </clipPath>
                                            <clipPath id="clip9_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 12.1426 22.5026)"></rect>
                                            </clipPath>
                                            <clipPath id="clip10_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.965926 0.258819 0.258819 0.965926 13.8184 22.9595)"></rect>
                                            </clipPath>
                                            <clipPath id="clip11_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.258819 -0.965926 -0.965926 -0.258819 12.3633 23.3422)"></rect>
                                            </clipPath>
                                            <clipPath id="clip12_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.258819 0.965926 0.965926 0.258819 13.5977 22.1198)"></rect>
                                            </clipPath>
                                            <clipPath id="clip13_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.866025 -0.5 -0.5 0.866025 13.4121 23.485)"></rect>
                                            </clipPath>
                                            <clipPath id="clip14_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.866025 0.5 0.5 -0.866025 12.5488 21.9772)"></rect>
                                            </clipPath>
                                            <clipPath id="clip15_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.866025 -0.5 -0.5 -0.866025 12.1113 22.7271)"></rect>
                                            </clipPath>
                                            <clipPath id="clip16_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.866025 0.5 0.5 0.866025 13.8477 22.7349)"></rect>
                                            </clipPath>
                                            <clipPath id="clip17_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(3.69127e-08 -1 -1 -3.69127e-08 12.543 23.481)"></rect>
                                            </clipPath>
                                            <clipPath id="clip18_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-3.69127e-08 1 1 3.69127e-08 13.418 21.981)"></rect>
                                            </clipPath>
                                            <clipPath id="clip19_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 13.5918 23.3478)"></rect>
                                            </clipPath>
                                            <clipPath id="clip20_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.965926 0.258819 0.258819 -0.965926 12.3691 22.1143)"></rect>
                                            </clipPath>
                                            <clipPath id="clip21_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 12.1406 22.952)"></rect>
                                            </clipPath>
                                            <clipPath id="clip22_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.707107 0.707107 0.707107 0.707107 13.8203 22.5101)"></rect>
                                            </clipPath>
                                            <clipPath id="clip23_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(-0.258819 -0.965926 -0.965926 0.258819 12.752 23.5686)"></rect>
                                            </clipPath>
                                            <clipPath id="clip24_16172_90068">
                                                <rect width="1.5" height="4" fill="white" transform="matrix(0.258819 0.965926 0.965926 -0.258819 13.209 21.8933)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <input type="text" value="DL 01 AB12XX" className="w-full p-2 text-center text-lg font-bold" readOnly />
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">GET CAR PRICE</button>
                            <div className="flex items-center mb-4">
                                <hr className="flex-grow border-t" />
                                <span className="mx-2 text-gray-500">Or</span>
                                <hr className="flex-grow border-t" />
                            </div>
                            <h2 className="text-center text-gray-500 mb-4">Start with your car brand</h2>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Maruti Suzuki" />
                                </div>
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Mahindra" />
                                </div>
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Honda" />
                                </div>
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Ford" />
                                </div>
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Hyundai" />
                                </div>
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Tata" />
                                </div>
                                <div className="flex items-center justify-center p-2 border rounded-lg">
                                    <img src="/brand.webp" alt="Toyota" />
                                </div>
                            </div>
                            <div className="text-center">
                                <a href="#" className="text-orange-500">View All <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="two px-28 py-10">
                <h1 className="font-bold text-4xl mb-6">Process of selling used car</h1>
                <div className="cards flex justify-center gap-8 items-center pt-8">
                    {
                        card.map((ele, index) => {
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                                    <div className="relative w-full h-64"> {/* Wrapping div with relative position */}
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
                            )
                        })
                    }
                </div>
            </section>

            <section className="three px-28 py-10 bg-white">
                <h1 className="mb-10 font-bold text-3xl">Why sell car to CARS24?</h1>
                <p className="text-gray-400 mb-4">CARS24 provides instant valuation of your car online, has a large selling network of dealers and provides a hassle-free experience. CARS24 does free inspection for your car and has a very transparent process. Selling used cars through classifieds can be challenging due to privacy concerns, fake profiles, excessive calls. As a solution, selling cars online offers convenience, wider reach, cost savings, and a streamlined process.</p>
                <div className="cards flex justify-center   gap-8 items-center pt-8">
                    {
                        secondcard.map((ele, index) => {
                            return (
                                <div key={index} className="flex  items-center justify-center  ">
                                    <div className="bg-[#fafafa] rounded-lg  p-6  w-64">
                                        <div className=" mb-4">
                                            <img src="/great.svg" alt="Great Deal Badge with a currency symbol in the center and stars on either side" className="w-16 h-16" />
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 w-1/4">Great price</h2>
                                        <p className="text-gray-600">Largest dealer network + Smart AI Pricing Engine = great deal for your car</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="six px-28 py-10">
                <h1 className="font-bold text-3xl mb-6 ">6 Lakh+ happy customers</h1>
                <div className="cards flex justify-center gap-8 items-center pt-8">
                    {
                        happycoustomer.map((ele, index) => {
                            return (
                                <div key={index} className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                                    <img className="w-full h-48 object-cover" src="/happycoustomer.webp" alt="Family standing in front of a car" />
                                    <div className="p-4">
                                        <p className="text-gray-500 text-sm mb-2">25 Sep, 2024</p>
                                        <h2 className="text-xl font-bold mb-2 text-gray-900 mt-2">Professional and Courteous Staff</h2>
                                        <p className="text-gray-700 mt-2 mb-2">The staff at CARS24 were incredibly polite and professional throughout the entire process. I got a fair price, and the whole transaction was…</p>
                                        <p className="text-gray-900 font-bold mb-2 mt-4">Anuj Barsaley</p>
                                        <p className="text-gray-500 ">Sold Maruti Suzuki BREZZA, Pune</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="seven  py-20 px-28  bg-[#f5f5f5]">
                <div className=" flex justify-center items-center gap-14">
                    <div className="flex items-center justify-center  ">
                        <div className="bg-white p-6 rounded-lg shadow-md w-80">
                            <h1 className="text-xl font-bold text-gray-800 mb-4">Documents required to sell used cars online?</h1>
                            <div className="flex justify-center">
                                <img src="/seven.webp" alt="Illustration of a person holding a document next to a car" className="w-32 h-24" />
                            </div>
                        </div>
                    </div>
                    <div className="heading">
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> The RC is the most important document required to sell a used car. It is a legal document that proves ownership of the car.</p>
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> The RC is the most important document required to sell a used car. It is a legal document that proves ownership of the car.</p>
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> The RC is the most important document required to sell a used car. It is a legal document that proves ownership of the car.</p>
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> The RC is the most important document required to sell a used car. It is a legal document that proves ownership of the car.</p>
                        <button className="font-bold text-orange-500 flex gap-4">Get Car Price<FontAwesomeIcon className="w-6 h-6" icon={faArrowRight} /></button>
                    </div>
                </div>
            </section>

            <section className="eight  py-20 px-28  ">
                <div className=" flex justify-center items-center gap-14">
                    <div className="flex items-center justify-center  ">
                        <div className="bg-white p-6 rounded-lg shadow-md w-80">
                            <h1 className="text-xl font-bold text-gray-800 mb-4">Tips to Sell Used Car</h1>
                            <div className="flex justify-center">
                                <img src="/seven.webp" alt="Illustration of a person holding a document next to a car" className="w-32 h-24" />
                            </div>
                        </div>
                    </div>
                    <div className="heading">
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> Gather all necessary paperwork related to your car, such as the Registration Certificate (RC), insurance policy, Pollution Under Control (PUC) certificate, invoice, service history, and maintenance receipts. Keep them well-organised and easily accessible. Having a comprehensive documentation package will give potential buyers confidence in the car history and condition</p>
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> The RC is the most important document required to sell a used car. It is a legal document that proves ownership of the car.</p>
                        <p className="mb-6"><span className="font-bold text-black">Registration Certificate (RC) :</span> The RC is the most important document required to sell a used car. It is a legal document that proves ownership of the car.</p>
                        <button className="font-bold text-orange-500 flex gap-4">Sell Car Now<FontAwesomeIcon className="w-6 h-6" icon={faArrowRight} /></button>
                    </div>
                </div>
            </section>

            <section className="nine py-10 px-28">
                <h1 className="font-bold text-3xl mb-6">Popular cities to sell your car</h1>
                <div className="flex justify-between flex-wrap items-center gap-8 mt-10">
                    {cities.map((city, index) => (
                        <div key={index} className="bg-gray-100 rounded-md py-4 px-16">
                            <a href="#" className="text-blue-800 underline">Sell car in {city}</a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ten py-10 px-28">
                <FAQs />
            </section>

        </>
    )
}

export default page
