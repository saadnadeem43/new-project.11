import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/saad.1.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        &ldquo;Hey, I&apos;m Saad Nadeem, a student in FSc Part 2.
              I&apos;m interested in pursuing further studies in AI
              because of the increasing digitalization of the world.
              It&apos;s exciting to be part of this transformative field!&rdquo;
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Saad Nadeem
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Pakistan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page