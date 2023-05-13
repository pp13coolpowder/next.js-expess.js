import Navbar from "./src/component/Navbar"
import Layout from "./src/component/Layout"
import Footter from "./src/component/Footter"
import Image from "next/image"
import Logo from '/public/svg/logo_bangchak.svg';
import { useState } from "react"
import { useRouter } from "next/router";
import { login } from "./api/axios";
import Swal from "sweetalert2";

export default function Login() {
  const router = useRouter()
  const [LogIN, setLogIN] = useState({ email: '', password: '' })
  const handlechang = (e) => { setLogIN({ ...LogIN, [e.target.name]: e.target.value }) }
  const logins = (e) => {
    e.preventDefault()
    login(LogIN)
      .then(res => {
        if (res.data === 'not found user') {
          Swal.fire({
            icon: 'error',
            title: res.data,
          })
          router.reload(window.location.pathname)
        }
        else {
          if (res.data === 'wrong password') {
            Swal.fire({
              icon: 'error',
              title: res.data,
            })
            router.reload(window.location.pathname)

          }
          else {
            Swal.fire(
              'Login success!',
              'You clicked the button!',
              'success'
            )
            router.push('/page/Oil_Price'), localStorage.setItem('jwt', res.data.jwt)
          }
        }

      })
      .catch(err => alert(err))
  }
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="-center mt-20">
          <form onSubmit={logins} className="grid justify-items-center gap-y-4 bg-lime-200/75 rounded-lg w-60">
            <div className=" bg-white w-full flex items-center justify-center p-2 rounded-t-lg text-2xl text-blue-800">Employee</div>
            <Image src={Logo} alt='logo' width={70} />
            <input className="rounded-lg placeholder:text-center text-center"
              name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required placeholder="email" onChange={handlechang} />
            <input className="rounded-lg placeholder:text-center text-center"
              name="password" type="password" required placeholder="password" onChange={handlechang} />
            <button type="submit" className="m-4 bg-blue-800 text-white w-28 h-8 rounded-full">Login</button>
          </form>
        </div>
      </Layout>
      <Footter />
    </div>
  )
}
