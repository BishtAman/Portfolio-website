
export default function BlogCard({thumbnail, name, calender, date, link}) {
    console.log({thumbnail, name, calender, date, link})
  return (
    // f6bd2e
    <main
    className="bg-white mx-[20px] my-[30px] w-[31rem] max-sm:w-[27rem] h-[23rem] max-sm:h-[20rem] max-[550px]:w-[21rem] max-[550px]:h-[15rem]  text-black"
    >
        <section>
            <img
                className="h-[17rem] max-sm:w-[27rem] max-sm:h-[14rem] max-[550px]:w-[21rem] max-[550px]:h-[10rem]"
                src={thumbnail}
                alt="thumbnail"
            />
        </section>
        <section className="flex flex-col justify-around  p-2 h-24 max-[550px]:">
            <p className="text-[22px] max-[550px]:text-[18px]">
                {name}
            </p>
            <section className="flex justify-between  max-[550px]:mb-3">
                <section className="flex max-[550px]:text-[15px]">
                    <img
                        className="h-[1.3rem] mr-3 max-[550px]:h-[1rem]"
                        src={calender}
                        alt="calender"
                    />
                    <span className="">
                        {date}
                    </span>
                </section>
                <p className="text-blue-500">
                    <a
                    href={link}
                    >
                        Read More...
                    </a>
                </p>
            </section>
        </section>
    </main>
  )
}
