
import SignUp from '@/app/component/Accounts/SignUp';
import SignUpImage from '../../Assets/SignUp.svg'
import Link from 'next/link';


const page = () => {  
    
    
  return (
    <>
    <section className=' py-20 w-full  bg-[#f7f7f7]'>
        <div className='max-w-screen-xl lg:px-[90px] sm:px-24 px-4 m-auto '>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='sm:w-1/2 w-full'>
                    <img className='w-full' src={SignUpImage.src} alt="login" />
                </div>
                <div className='sm:w-[41%] w-full'>
                    <div className='login-text'>
                        <h1 className='font-bold text-[54px] text-[#191C29]'>Sign Up as Dealer</h1>
                        <p className='mt-3 font-normal text-base text-[#667986]'>Lorem ipsum dolor sit amet adipiscing elit.</p>
                    </div>
                    <SignUp/>
                    <div className='mt-4 gap-2 justify-center flex font-medium text-sm leading-5 text-[#191C29]'>
                        <p>Have account? </p>
                        <Link href="/accounts/Login" 
                            
                            className='text-[#172554]'
                        >
                            Sign In Here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </> 
  )
}

export default page