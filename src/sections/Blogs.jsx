const Blogs = (props) => {
    return (
      <section className={`overflow-hidden relative  visible text-white poppins h-[88vh] flex flex-col justify-center pl-[20px] ${props.change==3?'visible fadein-transition':'fadeout-transition hidden'}`}>
          Blogs
      </section>
    )
  }
  
  export default Blogs