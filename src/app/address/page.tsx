import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/house.1.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          I am from Rahim Yar Khan which is a city of Pakistan
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          My Address
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Gulshan Iqbal Rahim Yar Khan 
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page