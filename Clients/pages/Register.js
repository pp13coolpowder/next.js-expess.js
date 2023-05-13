import Swal from "sweetalert2"
import Navbar from "./src/component/Navbar"
import Layout from "./src/component/Layout"
import Footter from "./src/component/Footter"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios";
export default function Register() {
  const [Register, setregister] = useState({ first_name: '', last_name: '', email: '', password: '', image: '' })
  const handlechang = (e) => { setregister({ ...Register, [e.target.name]: e.target.value }) }
  const router = useRouter()
  const Submit = async (e) => {
    e.preventDefault()
    const regis = await axios.post('http://localhost:4040/register', Register)
    if (regis.data === 'Register succeed') { Swal.fire(
      regis.data,
      'You clicked the button!',
      'success'
    ), router.push('/Login') }
    if (regis.data === 'User Trite') { Swal.fire(
      regis.data,
      'You clicked the button!',
      'success'
    ) }
  }
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="flex items-center mt-20">
          <form onSubmit={Submit} className="grid justify-items-center gap-y-4 bg-lime-200/75 rounded-lg w-60">
            <div className=" bg-white w-full flex items-center justify-center p-2 rounded-t-lg text-2xl text-blue-800">Register</div>
            <img className="mr-2 w-[50px] h-[50px] rounded-full " src="https://mpics.mgronline.com/pics/Images/563000010049101.JPEG" />
            <input className="rounded-lg placeholder:text-center text-center"
              placeholder="Name" name="first_name" onChange={handlechang} type="text" required />
            <input className="rounded-lg placeholder:text-center text-center"
              placeholder="Lastname" name="last_name" onChange={handlechang} type="text" required />
            <input className="rounded-lg placeholder:text-center text-center"
              placeholder="Link Image" name="image" onChange={handlechang} type="text" required />
            <input className="rounded-lg placeholder:text-center text-center"
              placeholder="Email" name="email" onChange={handlechang} type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            <input className="rounded-lg placeholder:text-center text-center"
              placeholder="Password" name="password" onChange={handlechang} type="password" required />
            <button type="submit" className="m-4 bg-blue-800 text-white w-28 h-8 rounded-full">Submit</button>
          </form>
        </div>
      </Layout>
      <Footter />
    </div>
  )
}
