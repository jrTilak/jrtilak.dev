"use client"

import { analytics } from "@/config/firebase"
import { logEvent } from "firebase/analytics"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const GA = () => {

  const pathname = usePathname()

  useEffect(() => {
    const fn = async () => {
      const an = await analytics()
      if (!an) return
      logEvent(an, 'page_view', {
        page_location: window.location.href,
        page_path: pathname,
        page_title: document.title,
      })
    }

    fn()

  }, [pathname])

  return null
}
export default GA