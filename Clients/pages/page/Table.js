import Navbar from "../src/component/Navbar"
import Menu_Navbar from "../src/component/Menu_Navbar"
import Layout from "../src/component/Layout"
import Footter from "../src/component/Footter"
import { useState,useEffect } from "react"
import { GetUserTable } from "../api/axios"

export default function Table() {
    const [table,settable]=useState([])
    useEffect(()=>{
        GetUserTable()
        .then((res)=>{settable(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    return (
        <div>
            <Menu_Navbar />
            <Layout>
                <div className="mt-5">
                    <div className="relative overflow-x-auto rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400 border-b-2 ">
                                <tr>
                                <th scope="col" className="px-6 py-3">
                                        number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        name lastname
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        id user
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    image
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.map((item,i)=>(
                                     <tr key={i} className={`${i%2 ==0 ?' bg-slate-200':' bg-white'}`}>
                                     <th scope="row" className="px-6 py-2 ">
                                     {1+i}
                                     </th>
                                     <th scope="row" className="px-6 py-2 ">
                                     {item.first_name} {item.last_name}
                                     </th>
                                     <td className="px-6 py-2">
                                     {item.email}
                                     </td>
                                     <td className="px-6 py-2">
                                     {item._id}
                                     </td>
                                     <td className="px-6 py-2">
                                     <img className="w-[50px] h-[50px] rounded-full " src={item.image} />
                                     </td>
                                 </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
            <Footter />
        </div>
    )
}
