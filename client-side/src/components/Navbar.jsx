import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="border-black border-b grid p-1 max-w-5xl min-w-[1024px] place-items-center bg-white">
            <ul className="flex text-slate-800 p-1 justify-between w-full">

                <li className='nav-item'>
                    <NavLink to="/"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Home
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/web"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Web
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/seo"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Seo
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/render"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Renderização
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/media"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Mídia
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar