import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='bg-scroll bg-Rectangle_96 fixed w-full h-full overflow-auto -z-50'>
      <Link href='/'>NotFound</Link>
    </div>
  )
}
