import { useState, useRef, useEffect } from "react"

import logoTwo from '../assets/Artboard2.png'
import DropdownButton from "../components/dropdown"
import LanguageDropdown from "../components/selectDropdown"
import { SignedOut, SignedIn, useUser } from "@clerk/clerk-react"
import { Link, NavLink} from "react-router-dom"

// Profile Dropdown
const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const { user } = useUser()
    
    const LogOut = () => {
        localStorage.clear()
        window.location.href = window.location.origin
    }

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <>
        <SignedIn>
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={user?.imageUrl}
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">{user?.fullName}</span>
                    <span className="block text-sm text-gray-500">{user?.emailAddresses[0].emailAddress}</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                        <li>
                            <Link className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" to="/profile">
                                Setting
                            </Link>
                        </li>
                        <li>
                        <p className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" onClick={LogOut} to="/">
                            Log out
                        </p>
                        </li>
            </ul>
        </div>
        </SignedIn>
        <SignedOut >
            <div className={`relative ${props.class}`}>
                <a href="/sign-in" className="flex  items-center justify-center w-40 text-white bg-primaryColor p-2">Login / Register</a>
            </div>
        </SignedOut>
        </>
    )
}

export const Header = () => {

    const [menuState, setMenuState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "About", path: "/about-us" },
      { title: "Contact", path: "/contact" },
  ]
    return (
        <nav className="bg-white border-b-[2px] w-full fixed -top-1  md:top-0 z-50">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/">
                        <img
                            src={logoTwo}
                            width={120} 
                            height={50}
                            alt="Agbo logo"
                        />
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            <li>
                                <p><DropdownButton  name="Category" /></p>
                            </li>
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 transition-colors duration-150 ease-in-out hover:text-primaryColor">
                                        <NavLink to={item.path}  style={({ isActive }) => {
                                                    return isActive ? { color: "#17C788" } : {};
                                                    }}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <LanguageDropdown />

                        <ProfileDropDown 
                            class="hidden z-40 lg:block"
                        />
                        <button 
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}