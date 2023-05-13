import React, { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "@/pages/api/axios";
import Swal from "sweetalert2";

const Menu_Navbar = () => {
    const [user, setuser] = useState([])
    useEffect(() => {
        const id = localStorage.jwt
        auth(id)
            .then((res) => setuser([res.data]))
            .catch((err) => console.log(err))
    }, [])
    const Menus = [{ nane: 'Oil Price', href: '/page/Oil_Price' }, { nane: 'Review', href: '/page/Review' }, { nane: 'Profile', href: '/page/User' }, { nane: 'Table', href: '/page/Table' }]
    const rout = useRouter()
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('jwt')
        rout.push('/')
        Swal.fire(
            'Log Out!',
            'Logout success!',
            'success'
          )
    }
    const [menu, setmenu] = useState(false);
    return (
        <div className=" relative">
            <div className="bg-blue-700 flex justify-between p-2">
                <div className="flex mx-4">
                    <img className="h-12 mr-2 " src='/svg/logo_bangchak.svg' />
                    <img className="h-12 hidden w-full lg:block lg:w-auto" src='/svg/100Xhappy.svg' />
                </div>
                <div className="flex items-center space-x-4 mx-4">
                    {Menus.map((menu, i) => (
                        <div className="hidden w-full xl:block xl:w-auto text-xl">
                            <Link key={i} href={menu.href}
                                className={`${menu.href === rout.pathname ? 'text-white bg-teal-600 p-2 rounded-full' : ' text-white hover:text-teal-600'}`}>
                                {menu.nane}
                            </Link>
                        </div>
                    ))}
                </div>
                {user.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 mx-4 text-xl">
                        <button onClick={() => setmenu(!menu)} className="xl:hidden">
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                        <img className="h-10 w-10 rounded-full " src={item.image} />
                        <div className="hidden w-full md:block md:w-auto text-white">{item.user_name}&nbsp;{item.user_lastname}</div>
                        <button onClick={logout} className=" bg-red-600 p-1 rounded-full text-white">
                            Logout
                        </button>
                    </div>
                ))}
            </div>
            {(menu) && (<div className="xl:hidden fixed">
                {Menus.map((item, i) => (
                    <Link key={i} href={item.href} className=" flex flex-row bg-black bg-opacity-40 justify-center w-screen">
                        <div className={`${menu.href === rout.pathname ? 'text-white bg-teal-600 p-2 rounded-full ' : 'text-white hover:text-teal-600'}`}>
                            {item.nane}
                        </div>
                    </Link>
                ))}
            </div>)}
        </div>

    )
}
export default Menu_Navbar