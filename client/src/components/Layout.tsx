import { MainNav } from "./navigation/MainNav"
import { ThemeToggle } from "./ui/theme-toggle"
import { Logo } from "./Logo"
import { Footer } from "./Footer"
import { Outlet, useOutlet } from "react-router-dom"
import { useScrollTop } from "@/hooks/useScrollTop"

export function Layout() {
  useScrollTop()

  console.log("Layout rendering, Outlet props:", useOutlet())

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Logo />
          <div className="ml-8 hidden md:block">
            <MainNav />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}