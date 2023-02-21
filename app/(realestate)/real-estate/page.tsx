"use client"
import { CommandCombobox } from "@/ui/command-select"
import React from "react"
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
const RealEstatePage = () => {
  const [value, setValue] = React.useState("")
  return (
    <div className="flex h-24 flex-row items-center  justify-center bg-gray-100">
      <div className="align-center flex flex-row">
        <CommandCombobox
          value={value}
          setValue={setValue}
          frameworks={frameworks}
        />
        <CommandCombobox
          value={value}
          setValue={setValue}
          frameworks={frameworks}
        />
        <CommandCombobox
          value={value}
          setValue={setValue}
          frameworks={frameworks}
        />
      </div>
    </div>
  )
}

export default RealEstatePage
