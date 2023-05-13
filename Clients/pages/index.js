import Logo from '../public/svg/logo_bangchak.svg';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
   <main className="bg-cover bg-bottom bg-Slide3_2 fixed w-full h-full overflow-auto -z-50 flex items-center justify-center">
    <div className='grid justify-items-center gap-y-4'>
    <Image src={Logo} alt='logo'/>
    <div className='justify-self-center text-2xl text-blue-800'>Wellcom</div>
    <div className='grid justify-items-center gap-6 p-6 bg-lime-200/75 rounded-lg'>
      <Link href='Login'><button className='bg-emerald-600 text-white w-56 h-10 rounded-full'>Login</button></Link>
      <Link href='Register'> <button className='bg-emerald-600  text-white w-56 h-10 rounded-full'>Register</button></Link>
    </div>
    </div>
   </main>
  )
}
