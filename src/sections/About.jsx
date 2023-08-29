 import profile from '../components/assets/profile.png'
 import cv from '../components/assets/CV.pdf'
 const About = (props) => {
  return (
    <section className={` relative  visible text-white poppins flex flex-col justify-center  ${props.change==1?'visible fadein-transition':'fadeout-transition hidden'}
    w-[90%] mx-auto flex 
    `}>
    {/* f6bd2e */}
        <section className="border-l-4 rounded-lg ml-32 max-sm:ml-6 border-[#f6bd2e] pl-[5rem] mt-[4rem] max-sm:pl-[1.8rem]">
          <p className="text-[3rem] max-sm:text-[2rem]">ABOUT ME</p>
          <p className="text-[1.3rem] max-sm:text-[1rem]">
            Frontend 
            <span className="text-[#f6bd2e]"> Web Developer</span>
          </p>
        </section>
        <section className="flex space-x-20 max-lg:space-x-0 max-lg:space-y-20 w-[80vw] mx-auto mt-[7rem] mb-[3rem] max-lg:flex-col max-lg:mx-auto ">
          <section className=' h-[150%] max-lg:m-auto'>
            <img
              className="avatar-wobble "
              src={profile}
              alt="profile"
            />
          </section>
          <section className='w-[100%]'>
            <p className="text-justify text-[22px] leading-[35px] max-lg:leading-[33px] max-lg:text-[18px] max-[400px]:text-[15px] mb-10">
              <span className='text-[35px] max-lg:text-[28px] max-[400px]:text-[20px]'>My name is <span className="text-[#f6bd2e]">Aman Bisht,  </span></span> I'm a self taught developer who started his coding journey on 2021 from learning <span className="text-[#f6bd2e]">HTML</span> because I was interested in building websites that can solve problems.
              <br/> Along with that I also started learning <span className="text-[#f6bd2e]">C</span> language which taught me very essential and deep concepts about programming and it also increased my interest in coding. 
              <br/>Then I learned about <span className="text-[#f6bd2e]">CSS</span> and designing principles and started <span className="text-[#f6bd2e]">JavaScript</span> along with that. I build multiple websites, designs, components of the websites, with the help of CSS and JS frameworks like <span className="text-[#f6bd2e]">Bootstrap</span> and <span className="text-[#f6bd2e]">jQuery</span>.
              <br/> Currently I'm learning <span className="text-[#f6bd2e]">React</span> and <span className="text-[#f6bd2e]">TailwindCSS</span>. I'm also learning <span className="text-[#f6bd2e]">C++</span> concepts to boost my <span className="text-[#f6bd2e]">problem solving</span> skills.
              The sources of my learnings are mostly official <span className="text-[#f6bd2e]">documentation and YouTube</span>.
              In free time I post my learning on <a href='https://twitter.com/@AmanBis68156523' className="text-[#f6bd2e] hover:text-[#d09500] text-[25px] max-lg:text-[21px] max-[400px]:text-[17px]">Twitter</a> and also write some blogs on Web Development and core programming concepts on <a href='https://amanbishtcoder.hashnode.dev/' className="text-[#f6bd2e] hover:text-[#d09500] text-[25px] max-lg:text-[21px] max-[400px]:text-[17px]">Hashnode</a> and <a href='https://medium.com/@amanbisht.dev' className="text-[#f6bd2e]  hover:text-[#d09500] text-[25px] max-lg:text-[21px] max-[400px]:text-[17px]">Medium</a>.
            </p>
            <a
              href={cv}
              download
              className='border border-[#f6bd2e] p-3 hover:bg-[#f6bd2e] hover:text-black'
            >
              <button>
                Download Resume
              </button>
            </a>
          </section>
        </section>
    </section>
  )
}

export default About