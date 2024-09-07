import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/contact.1.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
               Here are my contact details
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Phone
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          03047487843
        </div>
        <div className="text-sky-500 dark:text-sky-400">
          Email
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          saadnadeem439922@gmail.com
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page