// Types
import React from "react"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl mx-auto my-24">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl text-slate-800">
          Oğulcan Türk
        </h1>
        <h2 className="font-normal text-md text-slate-800">
          I'm a software developer from Türkiye making useful things for the internet and exploring the world.
        </h2>
      </div>
      {children}
    </div>
  )
}
