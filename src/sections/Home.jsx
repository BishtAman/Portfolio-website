import React from 'react'
import frame1 from '../components/assets/frame1.png'
import frame2 from '../components/assets/frame2.png'
 const Home = (props) => {
  return (
    <section className={` relative  visible text-white poppins h-[88vh] flex flex-col justify-center pl-[20px] ${props.change==0?'visible fadein-transition':'fadeout-transition hidden'}`}>
        <h1 className='text-[14vh] mx-[175px] max-[928px]:mx-[80px] max-[420px]:mx-[40px] max-lg:text-[10vh] max-[550px]:text-[5vh]'>Hello there<span className='animate-pulse text-[#f6bd2e]'>.</span><span className='animate-pulse text-[#f6bd2e]'>.</span><span className='animate-pulse text-[#f6bd2e]'>.</span> </h1>
        <h3 className='text-[7vh] mx-[175px] max-[928px]:mx-[80px] max-[420px]:mx-[40px] max-lg:text-[5vh] max-[550px]:text-[2vh]'>I'm  <span className='text-[11vh] max-lg:text-[7vh] max-[550px]:text-[3vh] text-[#f6bd2e]'>Aman Bisht,</span></h3>
        <h3 className='text-[7vh] mx-[175px] max-[928px]:mx-[80px] max-[420px]:mx-[40px] max-lg:text-[5vh] max-[550px]:text-[3vh] max-[440px]:text-[2.5vh] mt-3'>Frontend Web Developer</h3>
        <img
            src={frame1}
            className='absolute top-[20px] left-[20px] h-[20vh] max-sm:h-[10vh]'
            alt='frame1'
        />
        <img
            src={frame2}
            className='absolute bottom-[20px] right-[20px] h-[20vh] max-sm:h-[10vh]'
            alt='frame2'
        />
    </section>
  )
}

export default Home