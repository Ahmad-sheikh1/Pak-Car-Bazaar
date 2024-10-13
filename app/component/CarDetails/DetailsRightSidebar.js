import React from 'react'

const DetailsRightSidebar = () => {
    return (
        <>
            <div className="banner-add mb-3 h-[46px] w-full rounded-lg overflow-hidden">
                <img src={"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/Listing/assets/dussheraPDPBanner1_round.png?q=85&w=400&dpr=0.6"} className="w-full h-full object-cover" />
            </div>
            <div className="buying-details w-full  rounded-md p-2 border border-[#e8e8e8]">
                <div className="Engin-details border-b pb-4 border-[#e8e8e8]">
                    <h3 className=" text-xl font-bold leading-6 w-[80%] text-[#2E054E] ">2022 Jeep Compass Model S O 1.4 Petrol DCT</h3>
                    <div className="Engin-Condition mt-1 text-xs leading-5">
                        <ul className="flex gap-3 items-center">
                            <li>23K</li>
                            <li className="relative before:content-[''] before:absolute before:-left-[8px] before:bottom-[8px] before:rounded-full before:w-[3px] before:h-[3px] before:bg-[#888] ">Petrol</li>
                            <li className="relative before:content-[''] before:absolute before:-left-[8px] before:bottom-[8px] before:rounded-full before:w-[3px] before:h-[3px] before:bg-[#888] ">Automatic</li>
                        </ul>
                    </div>
                    <div className="text-sm flex gap-1 items-center leading-5 mt-2 text-[#555]">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 12 12" className=""><path opacity="1" d="M12.336 5.618L6.69.177a.645.645 0 00-.888 0L.157 5.618a.37.37 0 00-.137.413c.03.074.12.2.382.2h.636v4.836a.946.946 0 00.925.929h2.861V8.722h2.769V12h2.937a.935.935 0 00.906-.929V6.239h.655c.263 0 .352-.129.382-.2a.37.37 0 00-.137-.421z" fill="#888"></path></svg></span>
                        <span>Home Test Drive: Available</span>
                    </div>
                    <div className="text-sm flex gap-1 items-center leading-5 mt-2 text-[#555]">
                        <span><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M4.99998 0.166672C2.54998 0.166672 0.333313 2.04501 0.333313 4.95001C0.333313 6.80501 1.76248 8.98667 4.61498 11.5008C4.83665 11.6933 5.16915 11.6933 5.39081 11.5008C8.23748 8.98667 9.66665 6.80501 9.66665 4.95001C9.66665 2.04501 7.44998 0.166672 4.99998 0.166672ZM4.99998 6.00001C4.35831 6.00001 3.83331 5.47501 3.83331 4.83334C3.83331 4.19167 4.35831 3.66667 4.99998 3.66667C5.64165 3.66667 6.16665 4.19167 6.16665 4.83334C6.16665 5.47501 5.64165 6.00001 4.99998 6.00001Z" fill="#888"></path></svg></span>
                        <span>Max hub @ Faridabad</span>
                    </div>
                    <div className="mt-2 w-3/4 items-center rounded-3xl border border-[border-[#e8e8e8]] flex gap-1">
                        <span className="py-2 px-[9px] rounded-3xl  bg-[#fde9ed]">
                            <svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.7056 12.2113L20.1259 3.20273L23.4035 10.4053L26.7434 3.18816L28.0742 12.2092H27.1031L26.2918 6.27395L23.3873 12.5694L20.5208 6.27395L19.6763 12.2113H18.7056Z" fill="#E7133F"></path>
                                <path d="M35.8404 9.80591H32.2063L31.1825 12.2115H30.1333L34.0616 3.26893L37.8874 12.2115H36.8382L35.8404 9.80591ZM35.4693 8.91003L34.036 5.49364L32.5773 8.91003H35.4693Z" fill="#E7133F"></path>
                                <path d="M42.4348 7.79719L40.1445 3.67713H41.2193L42.9851 6.88877L44.802 3.67713H45.8767L43.535 7.79719L46.0033 12.2118H44.9286L42.9706 8.70561L40.9878 12.2118H39.9131L42.4348 7.79719Z" fill="#E7133F"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.3092 6.32521L15.3102 6.3262C15.7523 6.77142 16.0003 7.37349 16 8.00094C15.9997 8.62838 15.7512 9.23022 15.3087 9.67505L15.3079 9.67579L9.67476 15.3088C9.22982 15.7515 8.62769 16 8.00003 16C7.37237 16 6.77025 15.7515 6.3253 15.3088L6.32461 15.3081L0.691554 9.6757L0.690706 9.67485C0.248315 9.22984 0 8.62785 0 8.00037C0 7.37288 0.248315 6.77089 0.690706 6.32588L0.691541 6.32504L6.32522 0.691533L6.32605 0.690706C6.77106 0.248314 7.37305 0 8.00054 0C8.62802 0 9.23001 0.248314 9.67502 0.690706L9.67587 0.691545L15.3092 6.32521ZM9.11101 1.25806C8.81589 0.964675 8.41667 0.8 8.00054 0.8C7.5844 0.8 7.18518 0.964675 6.89007 1.25806L1.25806 6.8899C0.964675 7.18501 0.8 7.58423 0.8 8.00037C0.8 8.4165 0.964675 8.81572 1.25806 9.11084L6.88956 14.7417C7.18459 15.0352 7.58385 15.2 8.00003 15.2C8.41622 15.2 8.81547 15.0352 9.1105 14.7417L14.7415 9.11084C15.035 8.81583 15.1998 8.41669 15.2 8.00057C15.2002 7.58446 15.0357 7.18517 14.7425 6.8899L9.11101 1.25806Z" fill="#E7133F"></path>
                                <path d="M8.67687 7.31898C8.00466 7.15311 7.57555 7.00951 7.38953 6.88819C7.30384 6.83819 7.23294 6.76637 7.18404 6.68005C7.13515 6.59373 7.11 6.49599 7.11118 6.39679C7.10806 6.30197 7.12701 6.20772 7.16655 6.12148C7.20608 6.03524 7.26512 5.95937 7.339 5.89985C7.51851 5.76679 7.73892 5.70075 7.96202 5.71317C8.6171 5.71317 9.25204 5.94636 9.86683 6.41274L10.7617 6.22101L10.6681 5.25887C10.3032 4.95319 9.88396 4.71894 9.43235 4.56836C8.97618 4.40939 8.49679 4.32724 8.01372 4.32527C7.29048 4.32527 6.68777 4.50759 6.20561 4.87223C5.72345 5.23688 5.48169 5.75536 5.48035 6.42768C5.48035 7.09922 5.6714 7.59235 6.05351 7.90708C6.43561 8.2218 7.03837 8.47699 7.86179 8.67263C8.38223 8.80123 8.73037 8.92781 8.9062 9.05238C8.98921 9.10782 9.05685 9.18337 9.10279 9.27199C9.14873 9.36062 9.17149 9.45943 9.16894 9.55922C9.17223 9.65748 9.15137 9.75505 9.10816 9.84336C9.06496 9.93167 9.00074 10.008 8.92114 10.0657C8.71961 10.2011 8.47938 10.2669 8.23701 10.2531C7.58898 10.2531 6.88386 9.91967 6.12167 9.25283L6.12671 10.216L5.18555 10.4129C6.08149 11.2383 7.08879 11.6511 8.20746 11.6511C8.98376 11.6511 9.61053 11.4535 10.0878 11.0583C10.318 10.8734 10.5023 10.6378 10.6262 10.3698C10.7501 10.1019 10.8103 9.80884 10.8019 9.51373C10.8019 8.87834 10.6161 8.39528 10.2444 8.06455C9.87271 7.73382 9.35019 7.48529 8.67687 7.31898Z" fill="#E7133F"></path>
                                <path d="M6.11993 9.25244C6.8819 9.91906 7.58701 10.2525 8.23527 10.2527C8.47758 10.2664 8.71775 10.2007 8.91923 10.0653C8.99883 10.0076 9.06305 9.93127 9.10629 9.84297C9.14952 9.75466 9.17043 9.6571 9.16719 9.55883C9.16971 9.45903 9.14692 9.36021 9.10095 9.27159C9.05498 9.18296 8.98732 9.10742 8.90429 9.05199C8.72823 8.92764 8.3801 8.80106 7.85988 8.67224C7.03546 8.47637 6.43275 8.22119 6.05177 7.90669C5.67078 7.59218 5.47967 7.09905 5.47844 6.42729C5.47844 5.75575 5.7202 5.23727 6.2037 4.87184C6.68721 4.50642 7.28997 4.32409 8.01198 4.32488C8.49528 4.32669 8.97492 4.40884 9.43128 4.56797C9.88299 4.71823 10.3024 4.95207 10.6677 5.25731L10.7597 6.22046L9.86492 6.41218C9.25147 5.9458 8.6167 5.71261 7.96061 5.71261C7.7375 5.70009 7.51706 5.76615 7.33759 5.89929C7.26374 5.95882 7.20473 6.0347 7.16522 6.12094C7.12571 6.20718 7.10679 6.30142 7.10994 6.39623C7.1087 6.49547 7.13382 6.59325 7.18272 6.67961C7.23162 6.76597 7.30256 6.83781 7.38829 6.8878C7.57397 7.00923 8.00309 7.15283 8.67563 7.31859C9.34817 7.48434 9.87001 7.73248 10.2411 8.06299C10.6127 8.39428 10.7986 8.87734 10.7987 9.51216C10.807 9.8073 10.7468 10.1003 10.6229 10.3683C10.499 10.6363 10.3146 10.8719 10.0843 11.0567C9.60767 11.4523 8.9809 11.6499 8.20404 11.6495C7.0856 11.6495 6.07829 11.2368 5.18213 10.4113L6.12614 10.2144L6.11993 9.25244Z" fill="#E7133F"></path>
                            </svg>
                        </span>
                        <span className="leading-5 flex items-center gap-1 text-xs text-[#888]">
                            High quality, luxary cars
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#888"></path></svg>
                        </span>
                    </div>
                </div>
                <div className="Pricing-details pt-4">
                    <div className="flex justify-between items-center">
                        <h3 className=" text-2xl font-bold pb-2 leading-[28px] text-[#2E054E] ">Rs 21.97 Lakh</h3>
                        <span className="text-sm font-semibold leading-5">Rs 39,156/m</span>
                    </div>
                    <p className="text-xs leading-4 text-[#888]">Fixed on road priceGet extended Warranty at ₹ 36,000</p>
                </div>
                <div className="Buying-buttons w-full flex items-stretch justify-center  md:flex-nowrap flex-wrap py-6">
                    <button className="button-1 w-1/2 mr-3 rounded-md flex p-2 flex-col items-center justify-center gap- bg-[#172554] text-[#fff]">
                        <span className="uppercase font-bold text-xs">Book Now</span>
                        <span className="text-[10px]  ">Book Now</span>
                    </button>
                    <button className="button-2 w-1/2 ml-3 rounded-md flex p-2 flex-col items-center justify-center bg-[#f59e0b] text-[#fff]">
                        <span className="uppercase font-bold text-xs">Free Test Drive</span>
                    </button>
                </div>
            </div>
            <div className="my-5 overflow-hidden w-full  rounded-lg">
                <div className="w-full h-[125px]">
                    <img className="w-full h-full object-cover" src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/SpinnyMarketingBanner/assets/desktop_hub_test_drive_max.jpg?q=85" />
                </div>
            </div>
            <div className="share-links-friends flex flex-wrap justify-center items-center">
                <span className="text-base text-[#172554]">Share with a friend:</span>
                <span className="px-4"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 21.85 21.85"><path d="M837.992,276.108h-15.45a3.2,3.2,0,0,0-3.2,3.2v15.45a3.2,3.2,0,0,0,3.2,3.2h6.445v-7.724h-2.561v-3.841h2.561v-2.6a3.845,3.845,0,0,1,3.841-3.841h3.884v3.838h-3.884v2.6h3.884l-.64,3.841h-3.244v7.725h5.164a3.2,3.2,0,0,0,3.2-3.2h0V279.308a3.2,3.2,0,0,0-3.2-3.2Z" transform="translate(-819.342 -276.108)" fill="#172554"></path></svg></span>
                <span className="px-4 border-x border-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 24 24" fill="none"><path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z" fill="#172554"></path></svg></span>
                <span className="px-4 "><svg xmlns="http://www.w3.org/2000/svg" width="23px" height="20px" viewBox="0 0 21.382 17.105"><path id="ic_markunread_24px" d="M21.243,4H4.138A2.135,2.135,0,0,0,2.011,6.138L2,18.967a2.144,2.144,0,0,0,2.138,2.138H21.243a2.144,2.144,0,0,0,2.138-2.138V6.138A2.144,2.144,0,0,0,21.243,4Zm0,4.276-8.553,5.345L4.138,8.276V6.138l8.553,5.345,8.553-5.345Z" fill="#172554"></path></svg></span>
            </div>
        </>
    )
}

export default DetailsRightSidebar