// Types
import React from "react"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl mx-auto my-24">
      <span className="">Home Layout</span>
      {children}
    </div>
  )
}
