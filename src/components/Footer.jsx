import React from 'react'
import figma from './assets/footer/figma.png'
import react from './assets/footer/react.png'
import vercel from './assets/footer/vercel.png'
import vscode from './assets/footer/vscode.png'
 const Footer = () => {
  return (
    <section className='opacity-[0.4] flex justify-center items-center space-x-6 h-20 '>
        <span className='text-[20px] text-white'>
            Powered By
        </span>
        <img
            src={react}
            alt='footer-icons'
            className='h-10 w-10 invert'
        />
        <img
            src={vercel}
            alt='footer-icons'
            className='h-6 w-24 invert'
        />
        <img
            src={vscode}
            alt='footer-icons'
            className='h-10 w-10 invert'
        />
        <img
            src={figma}
            alt='footer-icons'
            className='h-10 w-10 invert'
        />
    </section>
  )
}
export default Footer