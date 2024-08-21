
import logo from '../assets/logo.png';


export default function Header(){
    return (
        <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
                <img src={logo} alt='logo' className='mb-8 w-44 h-44 object-contain'></img>
                <h1 className=' text-xl md:text-3xl  font-semibold tracking-widest uppercase text-amber-800 font-title  '>ReactArt with Tailwind CSS</h1>
                <p className='text-stone-500'>A community of Artists and lovers.</p>
        </header>
    )
}