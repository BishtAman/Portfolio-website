import BlogCard from '../components/BlogCard'
import images from '../constants/images.js'
const Blogs = (props) => {
  return (
    <section className={`visible text-white poppins h-[88vh] flex flex-wrap justify-center  ${props.change == 3 ? 'visible fadein-transition' : 'fadeout-transition hidden'}`}>
      <section className="border-x-4 rounded-lg  max-sm:ml-6 border-[#f6bd2e] px-[2rem] my-[4rem] max-sm:pl-[1.8rem]">
          <p className="text-[3rem] max-sm:text-[2rem]">BLOGS</p>
        </section>
      <section className='flex flex-wrap justify-center mt-10'>
      {images.map((items, index) => {
        return (
          <BlogCard thumbnail={items.thumbnail} name={items.name} calender={items.calender} date={items.date} link={items.link} />
        )
      })}
      </section>
    </section>
  )
}

export default Blogs