import git from '../components/assets/icons/git.svg'
import lin from '../components/assets/icons/lin.svg'
import insta from '../components/assets/icons/insta.svg'
import mail from '../components/assets/icons/mail.svg'
import x from '../components/assets/icons/x.svg'

export const Icons = () => {
    return (
        <section className=' flex justify-evenly flex-wrap  -mt-5 max-[688px]:mb-[30px]  w-[60%] max-[691px]:w-[80%] max-[523px]:w-[90%] mx-auto '>
            <a
        href='mailto:uk.amanbisht@gmail.com'
        target='_blank'
        rel="noreferrer"
        className="icons-a "
        >
            <img src={mail} alt='img' className=' icons-img max-[400px]:w-[30px] max-[400px]:h-[30px]  max-[400px]:scaling2 ' />
            
        </a>
        <a
        href='https://github.com/BishtAman'
        target='_blank'
        rel="noreferrer"
        className="icons-a"
        >
            <img src={git} alt='img'  className='icons-img max-[400px]:w-[30px] max-[400px]:h-[30px]  max-[400px]:scaling2'/>
            
        </a>
        <a
        href='https://twitter.com/@AmanBis68156523'
        target='_blank'
        rel="noreferrer"
        className="icons-a"
        >
            <img src={x} alt='img' className='icons-img max-[400px]:w-[30px] max-[400px]:h-[30px]  max-[400px]:scaling2'/> 
            
        </a>
        <a
        href='https://www.linkedin.com/in/aman-bisht-15b046239/'
        target='_blank'
        rel="noreferrer"
        className="icons-a"
        >
            <img src={lin} alt='img'  className='icons-img max-[400px]:w-[30px] max-[400px]:h-[30px]  max-[400px]:scaling2'/>
           
        </a>
        <a
        href='https://www.instagram.com/og.amanbisht/'
        target='_blank'
        rel="noreferrer"
        className="icons-a"
        >
            <img src={insta} alt='img' className='icons-img max-[400px]:w-[30px] max-[400px]:h-[30px]  max-[400px]:scaling2' />
            
        </a>
        </section>
    )
}
