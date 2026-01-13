"use client"

import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Send, Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import ajarLogo from "../../assets/ajarlogo.png"
import { API_ENDPOINTS } from "@/config/api"
import { GoogleTranslateSelector } from "@/components/google-translate-selector"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

type NavSubItem = {
  title: string
  body: string
  slug: string
  category?: string
}

type NavItem =
  | {
    label: string
    href: string
  }
  | {
    label: string
    description: string
    basePath: string
    items: NavSubItem[]
  }

const serviceNavItems: NavSubItem[] = []

const initialNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    description: "Sports • Infrastructure",
    basePath: "/services",
    items: serviceNavItems,
  },
  {
    label: "Products",
    description: "Turf • Nets • Equipment",
    basePath: "/products",
    items: [],
  },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Contact", href: "/contact-us" },
]

export function NavBar() {
  const location = useLocation()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (activeMenu) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [activeMenu])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.PRODUCTS)
        if (res.ok) {
          const data = await res.json()
          const categories = Array.from(new Set(data.map((p: { category: string }) => p.category))) as string[]
          const categoryNavItems: NavSubItem[] = categories.map((category) => ({
            title: category,
            body: `Explore our ${category} collection`,
            slug: category.toLowerCase().replace(/\s+/g, "-"),
            category: category,
          }))
          setNavItems((prev) =>
            prev.map((item) => {
              if (item.label === "Products" && "items" in item) {
                return { ...item, items: categoryNavItems }
              }
              return item
            }),
          )
        }
      } catch (error) {
        console.error("Failed to fetch products for navigation", error)
      }
    }

    const fetchServices = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.SERVICES)
        if (res.ok) {
          const data = await res.json()
          const srvNavItems: NavSubItem[] = data.map((s: { title: string; body: string; slug: string }) => ({
            title: s.title,
            body: s.body,
            slug: s.slug,
          }))
          setNavItems((prev) =>
            prev.map((item) => {
              if (item.label === "Services" && "items" in item) {
                return { ...item, items: srvNavItems }
              }
              return item
            }),
          )
        }
      } catch (error) {
        console.error("Failed to fetch services for navigation", error)
      }
    }

    fetchProducts()
    fetchServices()
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 120)
  }

  const currentPath = location.pathname

  const isLinkActive = (href: string) => {
    if (href === "/") return currentPath === "/"
    return currentPath.startsWith(href)
  }

  const isDropdownActive = (item: Extract<NavItem, { basePath: string }>) => {
    return currentPath.startsWith(item.basePath)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-emerald-200/40 bg-white/95 backdrop-blur-xl shadow-sm font-[var(--font-gotham)] dark:border-emerald-900/40 dark:bg-slate-950/95 transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center shrink-0 group transition-all duration-300">
          <img
            src={ajarLogo || "/placeholder.svg"}
            alt="Sabaysis Sports & Infrastructure"
            className="h-14 w-40 object-contain sm:h-14 sm:w-40 md:h-14 md:w-32 lg:h-14 lg:w-40 transition-all duration-300 group-hover:scale-105"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
            }}
          />
        </Link>

        {/* Desktop Navigation - Improved spacing and visual hierarchy */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center px-6">
          {navItems.map((item) =>
            "items" in item ? (
              <DropdownMenu
                key={item.label}
                open={activeMenu === item.label}
                onOpenChange={(open) => !open && handleMouseLeave()}
                modal={false}
              >
                <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`group inline-flex items-center gap-1.5 px-3.5 py-2.5 font-[var(--font-montreal)] text-xs font-bold uppercase tracking-wider rounded-lg min-h-10 transition-all duration-200 relative
                        ${isDropdownActive(item)
                          ? "bg-gradient-to-r from-emerald-600/15 to-teal-600/15 text-emerald-700 border border-emerald-200/50 dark:bg-gradient-to-r dark:from-emerald-600/20 dark:to-teal-600/20 dark:text-emerald-300 dark:border-emerald-900/50"
                          : "text-slate-700 hover:bg-gradient-to-r hover:from-emerald-600/10 hover:to-teal-600/10 hover:text-emerald-700 hover:border hover:border-emerald-200/30 dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-emerald-600/15 dark:hover:to-teal-600/15 dark:hover:text-emerald-300 dark:hover:border-emerald-900/50"
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                </div>

                <DropdownMenuContent
                  align="center"
                  sideOffset={12}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  onWheel={(e) => {
                    e.stopPropagation()
                  }}
                  onScroll={(e) => {
                    e.stopPropagation()
                  }}
                  className="w-[700px] max-h-[65vh] overflow-y-auto rounded-2xl border border-emerald-200/50 bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 dark:border-emerald-900/50 dark:bg-slate-900 font-[var(--font-gotham)] scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent"
                  style={{ overscrollBehavior: "contain" }}
                >
                  <div className="mb-5 flex items-center justify-between border-b border-emerald-200/40 dark:border-emerald-900/40 pb-4">
                    <DropdownMenuLabel className="font-[var(--font-montreal)] text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {item.label}
                    </DropdownMenuLabel>
                    <span className="text-xs font-montreal font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-600/30 dark:to-teal-600/30 px-3 py-1.5 rounded-full">
                      {item.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.slug} asChild>
                        <Link
                          to={
                            item.label === "Products"
                              ? `${item.basePath}?category=${encodeURIComponent(subItem.category || subItem.title)}`
                              : subItem.slug === "padel-courts"
                                ? "/padel-courts"
                                : `${item.basePath}/${subItem.slug}`
                          }
                          className="group rounded-xl border border-emerald-200/40 bg-gradient-to-br from-white to-emerald-50/20 p-4 transition-all duration-200 hover:border-emerald-400/60 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50/30 hover:shadow-lg min-h-[85px] flex flex-col justify-start dark:border-emerald-900/40 dark:bg-gradient-to-br dark:from-slate-800/40 dark:to-emerald-950/20 dark:hover:border-emerald-600/60 dark:hover:bg-gradient-to-br dark:hover:from-emerald-950/40 dark:hover:to-emerald-900/30 cursor-pointer"
                        >
                          <p className="font-[var(--font-montreal)] text-xs font-bold text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300 mb-2 transition-colors duration-200">
                            {subItem.title}
                          </p>
                          <p className="text-xs font-gotham text-slate-600 line-clamp-2 leading-relaxed dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200">
                            {subItem.body}
                          </p>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3.5 py-2.5 font-[var(--font-montreal)] text-xs font-bold uppercase tracking-wider rounded-lg min-h-10 inline-flex items-center transition-all duration-200 ${isLinkActive(item.href)
                  ? "bg-gradient-to-r from-emerald-600/15 to-teal-600/15 text-emerald-700 border border-emerald-200/50 dark:bg-gradient-to-r dark:from-emerald-600/20 dark:to-teal-600/20 dark:text-emerald-300 dark:border-emerald-900/50"
                  : "text-slate-700 hover:bg-gradient-to-r hover:from-emerald-600/10 hover:to-teal-600/10 hover:text-emerald-700 hover:border hover:border-emerald-200/30 dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-emerald-600/15 dark:hover:to-teal-600/15 dark:hover:text-emerald-300 dark:hover:border-emerald-900/50"
                  }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right Side Actions - Refined button and action styling */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <GoogleTranslateSelector />
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg shadow-md min-h-10 whitespace-nowrap dark:bg-gradient-to-r dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 font-[var(--font-montreal)]"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 bg-white hover:bg-slate-50 lg:hidden shrink-0 transition-colors duration-200 dark:border-slate-800/80 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white"
          onClick={() => setIsMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5 text-emerald-600" /> : <Menu className="h-5 w-5 text-emerald-600" />}
        </button>
      </div>

      {/* Mobile Menu - Improved mobile menu styling with better visual separation */}
      {isMobileOpen && (
        <div className="border-t border-emerald-200/40 bg-gradient-to-b from-white to-emerald-50/30 lg:hidden dark:border-emerald-900/40 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900/95 font-[var(--font-gotham)]">
          <nav className="p-5 space-y-2">
            <Accordion type="multiple" className="space-y-1">
              {navItems.map((item) =>
                "items" in item ? (
                  <AccordionItem key={item.label} value={item.label} className="border-0">
                    <AccordionTrigger className="rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 hover:no-underline dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="space-y-1 rounded-lg bg-slate-50/60 dark:bg-slate-800/40 p-2 mt-2">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={
                              item.label === "Products"
                                ? `${item.basePath}?category=${encodeURIComponent(sub.category || sub.title)}`
                                : sub.slug === "padel-courts"
                                  ? "/padel-courts"
                                  : `${item.basePath}/${sub.slug}`
                            }
                            onClick={() => setIsMobileOpen(false)}
                            className="flex rounded-lg px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 min-h-10 items-center dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 min-h-10 items-center dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </Accordion>
            <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <GoogleTranslateSelector />
              <Link
                to="/contact-us"
                onClick={() => setIsMobileOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md min-h-10 hover:bg-emerald-700 transition-colors duration-200 font-[var(--font-montreal)]"
              >
                <Send className="h-4 w-4" />
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
