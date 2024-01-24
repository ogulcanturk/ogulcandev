// Components
import {Button} from "@/components/ui/button"

// Types
import React from "react"

export default function Home(): React.ReactNode {

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
      <ul role="list" className="w-full divide-y divide-gray-100">
        {posts.map((item: any, index: number) => {
          return (
            <li key={index} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-2 sm:flex-nowrap">
              <div className="flex items-end gap-2">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href="#" className="hover:underline">{item.title}</a>
                </p>
                <p className="text-xs leading-5 text-gray-500">
                  <time>2d ago</time>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
