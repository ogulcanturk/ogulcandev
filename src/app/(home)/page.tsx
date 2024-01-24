// Components
import { Button } from "@/components/ui/button"

// Types
import React from "react"

export default function Home() : React.ReactNode {

  const posts = [{
    id: 1,
    date: "Jan 24, 2024",
    url: "/blog/example-blog-1",
    title: "Example blog #1"
  }, {
    id: 2,
    date: "Jan 24, 2024",
    slog: "/blog/example-blog-2",
    title: "Example blog #2"
  }]

  return (
    <div className="flex gap-2 mt-10">
      {posts.map((item, index) => {
        return (
          <div className="grid grid-row gap-2">
            <a href={item.slug} className="flex">
              <span className="">{item.date}</span>
              <span className="">{item.title}</span>
              <span className="">1</span>
            </a>
          </div>
        )
      })}
    </div>
    )
}
