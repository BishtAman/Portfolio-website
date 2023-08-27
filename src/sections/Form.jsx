import React, { useState } from 'react'

export const Form = () => {
  const [response, setResponse] = useState({
    name: '',
    email: '',
    message: '',
  })
  function handleChange(e) {
    const { name, value } = e.target
    setResponse(preVal => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  return (

    <section className='  h-[55vh] text-black flex max-lg:flex-col mx-auto justify-evenly w-[100%]'>
    <h1 className=' text-white mt-[8rem] text-[45px] -m-[0px] max-lg:text-center max-lg:mt-[11rem] max-lg:text-[40px] max-[300px]:text-[30px]'>Contact <span className='text-[#f6bd2e]'>Me</span></h1>
      <form className=' flex flex-col  max-lg:mx-auto  w-[60%] max-[691px]:w-[80%] max-[523px]:w-[90%]:' 
      onSubmit={(e) => {
        alert('Thank You for reaching out!')
        setResponse({
          name: '',
          email: '',
          message: '',
        })
        e.preventDefault();
      }}
      >


        <input required className='max-sm:mt-[30px] w-[80%] max-lg:w-[100%]   max-lg:mt-[30px]  h-[6vh] bg-slate-700 outline-none text-[#f6bd2e] rounded-[3px] p-[10px] mt-[40px]' onChange={handleChange} name='name' type='text' value={response.name}  placeholder='Enter your name'/>


        <input required className='max-sm:mt-[30px] w-[80%] max-lg:w-[100%]   max-lg:mt-[30px]  h-[6vh] bg-slate-700 outline-none text-[#f6bd2e] rounded-[3px] p-[10px] mt-[40px]' onChange={handleChange} name='email' type='email' value={response.email}  placeholder='Enter your email'/>


        <textarea required className='max-sm:mt-[30px] w-[80%] max-lg:w-[100%]   max-lg:mt-[30px]  h-[17vh] bg-slate-700 outline-none text-[#f6bd2e] rounded-[3px] p-[10px] mt-[40px]' onChange={handleChange} name='message' value={response.message} placeholder='Your Message'>
        </textarea>

        <input className=' max-[639px]:m-auto max-[639px]:mt-[25px] bg-slate-600 w-[170px] text-slate-400 hover:text-[#f6bd2e] focus:bg-slate-400 focus:text-[#000] my-10 rounded-md p-[4px] text-[20px]' type='submit' />
      </form>
      <div className='mb-10px'></div>
 
    </section>
  )
}
