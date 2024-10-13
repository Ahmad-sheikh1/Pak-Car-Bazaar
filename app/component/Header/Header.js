"use client"
import Logo from '../../Assets/trace2.png'
import handburger from '../../Assets/handburger.svg'
import downarrow from '../../Assets/downarrow.svg'
import userSVG from '../../Assets/maleicon.svg'
import Container from '../Container/Container'
import Image from 'next/image'
import React, { useState } from 'react';
import LocationModal from '../Modal/LocationModal'
import Link from 'next/link'

const Header = () => {

  let nav_Itms = [
    {
      name: "Buy used cars",
      // slug:"buyusedCars",
      active: true,
    },
    {
      name: "Sell Cars",
      slug: "SellCars",
      active: true,
    },
    {
      name: "Car Inspection",
      slug:"CarInspection",
      active: true,
    },
    {
      name: "Pay Challan",
      slug: "PayChallan",
      active: true,
    },
    {
      name: "Become Our Partner",
      slug: "Partners",
      active: true,
    },
  ];

  let [modal, setModal] = useState(false)
  return (
    <>
      <section className='w-full bg-[#172554]'>
        <Container>
          <div className={`flex items-center gap-5 justify-between`}>
            <div className="Logo&Location flex gap-5 items-center">
              <Link href="/" className="">
                <Image src={Logo} alt="image" height="20" width="170" className="h-32 mix-blend-lighten object-cover" />
              </Link>
              <div className="flex items-center px-3 font-bold py-2 bg-[#fafafa] rounded-xl cursor-pointer ">
                <span className="sm:mr-2 mr-1">
                  <Image width="20" height="20" alt="image" src="https://assets.cars24.com/production/c2b-website/241005155755/js/362fd7a6cf19fda7c2f68ebd21c06a09.svg" />
                </span>
                <span className="text-[#002441] leading-6 sm:mr-5 mr-2 sm:text-sm text-xs">Faisalabad</span>
                <span>
                  <Image width="20" height="20" alt="image" src="https://assets.cars24.com/production/c2b-website/241005155755/js/bf6340572e7389b8b545ad752218ee5c.svg" />
                </span>
              </div>
            </div>
            <nav className="NavLinks lg:flex hidden">
              <ul className="flex xl:gap-6 lg:gap-4 list-image-none">
                {
                  nav_Itms?.map((nav, indx) => (                    
                    <li
                    key={indx}
                      onClick={() => {
                        indx == 0 ? setModal(!modal) : ""
                      }}
                      className="hover:text-[#f59e0b] duration-200 hover:rounded flex xl:gap-3 gap-1 items-center xl:text-base lg:text-sm font-normal cursor-pointer text-[#fff]">
                      <Link href={`/${nav.slug ? nav.slug :""}`} >
                        <span>{nav.name}</span>
                      </Link>
                      <Image src={downarrow} alt="imager" />
                    </li>
                  ))
                }
              </ul>
            </nav>
            <Link href="/accounts" className="UserLogin hidden cursor-pointer lg:flex gap-2 items-center">
              <span>
                <Image width="24" height="24" className="h-6 w-6" src={userSVG} alt="image" />
              </span>
              <div className="flex flex-col gap-y-1">
                <span className="text-xs font-normal leading-4 text-[#fff] ">Hello, Sign in</span>
                <span className="text-base font-bold leading-6 text-[#fff]">Account</span>
              </div>
            </Link>
            <div className="HandBurgerMenu lg:hidden flex">
              <Image src={handburger} width="40" height="40" alt="image" className="w-[40px] h-[40px] cursor-pointer" />
            </div>
          </div>
        </Container>
      </section>
      {
        modal ?
          <LocationModal setModal={setModal} />
          : ""
      }
    </>
  )
}

export default Header