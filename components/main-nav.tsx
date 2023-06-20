import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Navbar } from "@/components/Navbar/navbar"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">

      <Link href="/" className="flex items-center space-x-2">
      <Image
                      src="/public/images/Logo.svg"

                      width={20}
                      height={20}
                      alt="Logo"
                    />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <Navbar />
    </div>
  )
}
