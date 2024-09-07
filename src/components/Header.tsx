import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-5 p-6 bg-slate-500'>
        <Link href="\">About</Link>
        <Link href="\contact">Contact page</Link>
        <Link href="\address">Address page</Link>
    </div>
  )
}

export default Header