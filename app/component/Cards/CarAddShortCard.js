import Link from 'next/link'
import React from 'react'

const CarAddShortCard = ({Car_Ad}) => {
  return (
    < >
    <Link href={`/CarDetails`} className="car-Card hover:scale-105 duration-500 w-full mb-4 px-2 pb-4 rounded-md ">
        <div className="border border-[#e8e8e8] rounded-md overflow-hidden bg-[#fff]">
            <div className="card-image w-full h-[162px] overflow-hidden">
                <img className="w-full h-full object-cover " alt="img" src={Car_Ad.Images[0]} />
            </div>
            <div className="card-details py-2 px-3">
                <div className="title relative max-w-[80%] whitespace-nowrap  overflow-ellipsis">
                    <h3 className="text-sm leading-5 font-semibold overflow-hidden overflow-ellipsis flex-nowrap">
                        <span>{Car_Ad.Y_O_Manufacture} </span>
                        <span>{Car_Ad.Brand_Name} </span>
                        <span>{Car_Ad.Model} </span>
                        {/* <span>Asta 1.2 Kappa VTVF </span> */}
                    </h3>
                    <span className="Like-Heart cursor-pointer group  absolute top-0 -right-10 z-30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-[#881337] group-hover:stroke-[#881337]" width="24" height="24" viewBox="0 0 24 24" fill="#2e054e" strokeWidth="0">
                            <path d="M0 0h24v24H0V0z" className="group-hover:stroke-[#881337]" fill="none"></path>
                            <path className="group-hover:fill-[#881337] group-hover:stroke-[#881337]" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                        </svg>
                    </span>
                </div>
                <div className="my-2">
                    <ul className="flex gap-5 text-xs leading-5 font-light">
                        <li className="Km">{Car_Ad.KM_Driven} km</li>
                        <li className="Engin-type relative before:content-[''] before:absolute before:-left-3 before:bottom-2 before:w-[3px] before:h-[3px] before:bg-black">{Car_Ad.Fule_Type}</li>
                        <li className="Transmission relative before:content-[''] before:absolute before:-left-3 before:bottom-2 before:w-[3px] before:h-[3px] before:bg-black">{Car_Ad.Transmission}</li>
                    </ul>
                </div>
                <div className="my-2 pb-3 border-b border-[#e8e8e8]">
                    <ul className="flex flex-wrap justify-between items-end text-xs leading-5 font-light">
                        <li className="Price ">
                            {/* <div className="Discounted-Price line-through text-xs leading-5 text-[#888]">Rs {Car_Ad.Discounted_Price} Lakh</div> */}
                            <div className="Original-Price text-base leading-6 text-[#172554] font-semibold">Rs {Car_Ad.Price} Lakh</div>
                        </li>
                        <li className="EMI from">
                            <div className="text-xs leading-5 text-[#172554]">EMI from Rs{Car_Ad.EMI}/m</div>
                        </li>
                    </ul>
                </div>
                <div className="Test-Drive flex items-center gap-4 py">
                    <span>
                        <svg width="46" height="13" viewBox="0 0 46 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.1008 5.1393L13.1016 5.1401C13.4608 5.50184 13.6623 5.99102 13.6621 6.50082C13.6619 7.01062 13.4599 7.49962 13.1004 7.86104L13.0998 7.86164L8.52285 12.4384C8.16133 12.7981 7.67211 13.0001 7.16213 13.0001C6.65216 13.0001 6.16293 12.7981 5.80142 12.4384L5.80085 12.4379L1.224 7.86157L1.22331 7.86088C0.863865 7.49931 0.662109 7.01019 0.662109 6.50036C0.662109 5.99052 0.863865 5.50141 1.22331 5.13984L1.22399 5.13916L5.80135 0.561931L5.80202 0.56126C6.16359 0.201816 6.65271 6.10352e-05 7.16254 6.10352e-05C7.67238 6.10352e-05 8.16149 0.201816 8.52306 0.56126L8.52375 0.561942L13.1008 5.1393ZM8.0648 1.02223C7.82502 0.783859 7.50065 0.650061 7.16254 0.650061C6.82444 0.650061 6.50007 0.783859 6.26029 1.02223L1.68428 5.5981C1.44591 5.83788 1.31211 6.16225 1.31211 6.50036C1.31211 6.83846 1.44591 7.16283 1.68428 7.40261L6.25988 11.9777C6.49959 12.2162 6.82398 12.3501 7.16213 12.3501C7.50028 12.3501 7.82468 12.2162 8.06439 11.9777L12.6396 7.40261C12.878 7.16292 13.0119 6.83862 13.0121 6.50053C13.0123 6.16243 12.8786 5.83801 12.6404 5.5981L8.0648 1.02223Z" fill="#54008B"></path>
                            <path d="M7.71218 5.94612C7.16602 5.81135 6.81736 5.69468 6.66622 5.5961C6.5966 5.55548 6.53899 5.49713 6.49927 5.42699C6.45954 5.35686 6.43911 5.27745 6.44006 5.19684C6.43753 5.1198 6.45293 5.04323 6.48505 4.97316C6.51717 4.90309 6.56514 4.84144 6.62517 4.79308C6.77102 4.68497 6.9501 4.63131 7.13137 4.6414C7.66362 4.6414 8.17951 4.83087 8.67903 5.2098L9.40607 5.05403L9.33009 4.27229C9.03357 4.02392 8.69295 3.83359 8.32601 3.71125C7.95538 3.58208 7.56587 3.51534 7.17338 3.51373C6.58574 3.51373 6.09605 3.66187 5.70429 3.95814C5.31253 4.25442 5.11611 4.67568 5.11502 5.22194C5.11502 5.76757 5.27025 6.16824 5.58071 6.42395C5.89117 6.67967 6.38091 6.887 7.04993 7.04596C7.47279 7.15045 7.75565 7.2533 7.89851 7.35451C7.96597 7.39955 8.02092 7.46094 8.05825 7.53295C8.09557 7.60495 8.11406 7.68524 8.11199 7.76632C8.11467 7.84616 8.09772 7.92543 8.06261 7.99718C8.02751 8.06893 7.97533 8.13098 7.91065 8.17786C7.74691 8.28782 7.55172 8.34128 7.3548 8.33009C6.82827 8.33009 6.25537 8.05919 5.63609 7.51738L5.64018 8.29994L4.87549 8.45995C5.60344 9.13061 6.42188 9.46594 7.33079 9.46594C7.96153 9.46594 8.47078 9.30539 8.85854 8.98429C9.0456 8.83413 9.19534 8.64268 9.29602 8.42495C9.39669 8.20722 9.44557 7.96914 9.43881 7.72936C9.43881 7.2131 9.28781 6.82062 8.98581 6.5519C8.6838 6.28318 8.25926 6.08125 7.71218 5.94612Z" fill="#54008B"></path>
                            <path d="M5.63599 7.51689C6.25509 8.05852 6.82799 8.32942 7.3547 8.3296C7.55158 8.34077 7.74672 8.28732 7.91042 8.17737C7.97509 8.13048 8.02728 8.06844 8.0624 7.99669C8.09753 7.92494 8.11452 7.84567 8.11189 7.76583C8.11393 7.68474 8.09542 7.60445 8.05807 7.53245C8.02072 7.46044 7.96575 7.39906 7.89828 7.35402C7.75523 7.25299 7.47237 7.15014 7.0497 7.04547C6.37985 6.88633 5.89016 6.679 5.58061 6.42346C5.27106 6.16793 5.11578 5.76726 5.11478 5.22146C5.11478 4.67583 5.3112 4.25457 5.70405 3.95766C6.0969 3.66075 6.58664 3.51261 7.17328 3.51325C7.56596 3.51472 7.95567 3.58147 8.32646 3.71076C8.69348 3.83284 9.03427 4.02284 9.33109 4.27084L9.40584 5.0534L8.67879 5.20918C8.18037 4.83024 7.66462 4.64078 7.13154 4.64078C6.95026 4.63061 6.77115 4.68428 6.62534 4.79246C6.56533 4.84083 6.51738 4.90248 6.48528 4.97255C6.45318 5.04262 6.43781 5.11919 6.44037 5.19622C6.43936 5.27685 6.45977 5.3563 6.4995 5.42647C6.53923 5.49664 6.59687 5.55501 6.66653 5.59562C6.8174 5.69428 7.16605 5.81096 7.71249 5.94563C8.25894 6.08031 8.68293 6.28192 8.98448 6.55046C9.28639 6.81963 9.43739 7.21212 9.43748 7.72791C9.44425 7.96771 9.39536 8.20581 9.29466 8.42354C9.19396 8.64128 9.04418 8.83272 8.85708 8.98285C8.46977 9.30431 7.96053 9.46486 7.32933 9.4645C6.42059 9.4645 5.60216 9.12917 4.87402 8.4585L5.64103 8.2985L5.63599 7.51689Z" fill="#54008B"></path>
                            <path d="M20.9374 9.34356L20.2549 7.77381H17.4761L16.7644 9.34356H15.6919L18.9289 2.46006L22.0099 9.34356H20.9374ZM17.8856 6.83781H19.8551L18.8899 4.63431L17.8856 6.83781Z" fill="#54008B"></path>
                            <path d="M25.1616 5.85306L24.4498 6.32106C24.3523 6.16506 24.1671 5.97006 23.8648 5.97006C23.7283 5.97006 23.6308 6.01881 23.5723 6.07731C23.5236 6.12606 23.4846 6.20406 23.4846 6.29181C23.4846 6.39906 23.5333 6.46731 23.6211 6.52581C23.6796 6.56481 23.7381 6.58431 23.9428 6.69156L24.4303 6.93531C24.6448 7.04256 24.8496 7.14981 25.0056 7.31556C25.2298 7.53981 25.3078 7.79331 25.3078 8.07606C25.3078 8.44656 25.1713 8.76831 24.9471 9.01206C24.6253 9.36306 24.2256 9.47031 23.7966 9.47031C23.5333 9.47031 23.2018 9.43131 22.9093 9.20706C22.6753 9.03156 22.4803 8.74881 22.3828 8.45631L23.1628 8.08581C23.2116 8.22231 23.2993 8.39781 23.3871 8.47581C23.4456 8.53431 23.5821 8.63181 23.8063 8.63181C23.9526 8.63181 24.1086 8.58306 24.1963 8.49531C24.2743 8.41731 24.3328 8.29056 24.3328 8.17356C24.3328 8.05656 24.2938 7.95906 24.2061 7.86156C24.0891 7.74456 23.9526 7.67631 23.7966 7.60806L23.4456 7.44231C23.2603 7.35456 23.0361 7.24731 22.8801 7.09131C22.6656 6.88656 22.5876 6.66231 22.5876 6.39906C22.5876 6.06756 22.7143 5.74581 22.9288 5.52156C23.1141 5.32656 23.4261 5.13156 23.9331 5.13156C24.2256 5.13156 24.4596 5.19006 24.6936 5.34606C24.8301 5.43381 25.0153 5.58981 25.1616 5.85306Z" fill="#54008B"></path>
                            <path d="M28.675 5.85306L27.9633 6.32106C27.8658 6.16506 27.6805 5.97006 27.3783 5.97006C27.2418 5.97006 27.1443 6.01881 27.0858 6.07731C27.037 6.12606 26.998 6.20406 26.998 6.29181C26.998 6.39906 27.0468 6.46731 27.1345 6.52581C27.193 6.56481 27.2515 6.58431 27.4563 6.69156L27.9438 6.93531C28.1583 7.04256 28.363 7.14981 28.519 7.31556C28.7433 7.53981 28.8213 7.79331 28.8213 8.07606C28.8213 8.44656 28.6848 8.76831 28.4605 9.01206C28.1388 9.36306 27.739 9.47031 27.31 9.47031C27.0468 9.47031 26.7153 9.43131 26.4228 9.20706C26.1888 9.03156 25.9938 8.74881 25.8963 8.45631L26.6763 8.08581C26.725 8.22231 26.8128 8.39781 26.9005 8.47581C26.959 8.53431 27.0955 8.63181 27.3198 8.63181C27.466 8.63181 27.622 8.58306 27.7098 8.49531C27.7878 8.41731 27.8463 8.29056 27.8463 8.17356C27.8463 8.05656 27.8073 7.95906 27.7195 7.86156C27.6025 7.74456 27.466 7.67631 27.31 7.60806L26.959 7.44231C26.7738 7.35456 26.5495 7.24731 26.3935 7.09131C26.179 6.88656 26.101 6.66231 26.101 6.39906C26.101 6.06756 26.2278 5.74581 26.4423 5.52156C26.6275 5.32656 26.9395 5.13156 27.4465 5.13156C27.739 5.13156 27.973 5.19006 28.207 5.34606C28.3435 5.43381 28.5288 5.58981 28.675 5.85306Z" fill="#54008B"></path>
                            <path d="M29.6827 5.23881H30.6382V7.58856C30.6382 7.83231 30.6479 8.11506 30.8137 8.32956C30.9404 8.49531 31.1647 8.61231 31.4377 8.61231C31.7107 8.61231 31.9349 8.49531 32.0617 8.32956C32.2274 8.11506 32.2372 7.83231 32.2372 7.58856V5.23881H33.1927V7.61781C33.1927 8.14431 33.1342 8.58306 32.7539 8.96331C32.3834 9.33381 31.8764 9.47031 31.4182 9.47031C30.9989 9.47031 30.4919 9.34356 30.1214 8.96331C29.7412 8.58306 29.6827 8.14431 29.6827 7.61781V5.23881Z" fill="#54008B"></path>
                            <path d="M34.4053 9.34356V5.23881H35.3608V5.60931C35.4681 5.48256 35.6241 5.34606 35.7606 5.26806C35.9458 5.16081 36.1311 5.13156 36.3456 5.13156C36.5796 5.13156 36.8331 5.17056 37.0963 5.32656L36.7063 6.19431C36.4918 6.05781 36.3163 6.04806 36.2188 6.04806C36.0141 6.04806 35.8093 6.07731 35.6241 6.27231C35.3608 6.55506 35.3608 6.94506 35.3608 7.21806V9.34356H34.4053Z" fill="#54008B"></path>
                            <path d="M40.2142 7.95906L41.0137 8.40756C40.8382 8.71956 40.5847 8.99256 40.3214 9.15831C39.99 9.37281 39.5512 9.47031 39.1124 9.47031C38.5665 9.47031 38.118 9.33381 37.728 8.94381C37.338 8.55381 37.1235 7.98831 37.1235 7.37406C37.1235 6.74031 37.3477 6.12606 37.7767 5.68731C38.118 5.34606 38.5665 5.13156 39.1515 5.13156C39.8047 5.13156 40.2239 5.41431 40.4677 5.66781C40.9942 6.21381 41.0429 6.97431 41.0429 7.40331V7.52031H38.0985C38.118 7.81281 38.2447 8.14431 38.4494 8.34906C38.6737 8.57331 38.9467 8.61231 39.1807 8.61231C39.444 8.61231 39.639 8.55381 39.834 8.40756C39.9997 8.28081 40.1264 8.11506 40.2142 7.95906ZM38.1667 6.74031H40.0679C40.0289 6.51606 39.9217 6.32106 39.7754 6.18456C39.6487 6.06756 39.444 5.95056 39.132 5.95056C38.8004 5.95056 38.586 6.08706 38.4592 6.21381C38.3227 6.34056 38.2155 6.53556 38.1667 6.74031Z" fill="#54008B"></path>
                            <path d="M45.0446 5.71656V2.23581H46.0001V9.34356H45.0446V8.91456C44.6253 9.40206 44.1086 9.47031 43.8161 9.47031C42.5486 9.47031 41.8271 8.41731 41.8271 7.28631C41.8271 5.95056 42.7436 5.13156 43.8258 5.13156C44.1281 5.13156 44.6546 5.20956 45.0446 5.71656ZM43.9428 5.98956C43.2506 5.98956 42.8021 6.57456 42.8021 7.30581C42.8021 8.01756 43.2506 8.61231 43.9428 8.61231C44.5473 8.61231 45.1031 8.17356 45.1031 7.31556C45.1031 6.41856 44.5473 5.98956 43.9428 5.98956Z" fill="#54008B">
                            </path>
                        </svg>
                    </span>
                    <span className="text-[10px] text-[#555] relative before:content-[''] before:absolute before:-left-[8px] before:bottom-[5px] before:rounded-full before:w-[3px] before:h-[3px] before:bg-[#888]">
                        Spinny  Hub, {Car_Ad.T_D_Location}
                    </span>
                </div>
            </div>
        </div>
    </Link>
    </>
  )
}

export default CarAddShortCard