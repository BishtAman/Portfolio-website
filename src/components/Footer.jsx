import React from 'react'
import figma from './assets/footer/figma.png'
import react from './assets/footer/react.png'
import vercel from './assets/footer/vercel.png'
import vscode from './assets/footer/vscode.png'
 const Footer = () => {
  return (
    <section className='opacity-[0.4] flex justify-center items-center space-x-6 h-20 '>
        <span className='text-[20px] text-white max-sm:text-[18px] max-[500px]:text-[14px]'>
            Powered By
        </span>
        <img
            src={react}
            alt='footer-icons'
            className='h-10 w-10 invert max-sm:h-6 max-sm:w-6 max-[500px]:h-4 max-[500px]:w-4'
        />
        <img
            src={vercel}
            alt='footer-icons'
            className='h-6 w-24 invert max-sm:h-4 max-sm:w-20 max-[500px]:h-4 max-[500px]:w-16'
        />
        <img
            src={vscode}
            alt='footer-icons'
            className='h-10 w-10 invert max-sm:h-6 max-sm:w-6 max-[500px]:h-4 max-[500px]:w-4'
        />
        <img
            src={figma}
            alt='footer-icons'
            className='h-10 w-10 invert max-sm:h-6 max-sm:w-6 max-[500px]:h-4 max-[500px]:w-4'
        />
    </section>
  )
}
export default Footer