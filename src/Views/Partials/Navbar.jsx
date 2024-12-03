import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
    
     <nav className="container w-100vh px-3 py-3  bg-slate-950">
            <div className="flex flex-wrap  items-center justify-between ">
                <div className="text-white font-bold text-xl">
                    <Link to={'/'}> Logo</Link>
                </div>
                <div >
                    <ul className="flex  flex-wrap items-center space-x-8">
                        <li className='text-white'><Link to={'/'}>Inicio</Link></li>
                        <li className='text-white'><Link to={'/nosotros'}>Nosotros</Link></li>
                        <li className='text-white'><Link to={'/contactanos'}>Contactos</Link></li>
                        <li className='text-white'><Link to={'/catalogo'} >Catalogo</Link></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button className="outline-none mobile-menu-button">
                        <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="mobile-menu hidden md:hidden">
                <ul className="mt-4 space-y-4">
                    <li className='text-white'><Link to={'/'}>Inicio</Link></li>
                    <li className='text-white'><Link to={'/nosotros'}>Nosotros</Link></li>
                    <li className='text-white'><Link to={'/contactanos'}>Contactos</Link></li>
                    <li className='text-white'><Link to={'/catalogo'} >Catalogo</Link></li>
                </ul>
            </div>
        </nav>
    
    );
}
export default Navbar;