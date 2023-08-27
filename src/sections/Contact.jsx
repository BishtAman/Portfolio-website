import { Form } from "./Form"
import { Icons } from "./Icons"

const Contact = (props) => {
    return (
      <section className={` visible text-white poppins  flex flex-col ${props.change==4?'visible fadein-transition':'fadeout-transition hidden'}`}>
          <h1 className="self-center text-[60px] mt-[50px] mb-[25px] max-lg:text-[45px] max-[400px]:text-[40px] max-[300px]:text-[30px] max-[400px]:m-auto">
            GET IN <span className="text-[#f6bd2e]">TOUCH</span>
          </h1>
          <section className="flex flex-col space-y-[20px]"> 
            <Icons/>
            <hr className="w-[90%] self-center border-[#f6bd2e]"/>
            <Form/>
          </section>
      </section>
    )
  }
  
  export default Contact