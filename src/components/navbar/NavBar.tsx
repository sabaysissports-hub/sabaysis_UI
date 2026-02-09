"use client"

import { Link as RouterLink, useLocation } from "react-router-dom"
import { ChevronDown, Send, Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import ajarLogo from "../../assets/ajarlogo.png"
import { API_ENDPOINTS } from "@/config/api"
import { GoogleTranslateSelector } from "@/components/google-translate-selector"
import { MobileNav } from "./MobileNav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

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
  { label: "Marketing", href: "/services/marketing-brand-launch" },
  {
    label: "Products",
    description: "Turf • Nets • Equipment",
    basePath: "/products",
    items: [],
  },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Contact Us", href: "/contact-us" },
]

export function NavBar() {
  const location = useLocation()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const lockScroll = isMobileOpen;
    if (lockScroll) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
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

          // Manually add Polyurethane if not present
          if (!categories.includes('Polyurethane (PU)')) {
             categoryNavItems.push({
                title: 'Polyurethane (PU)',
                body: 'Explore our PU Binders, Sealers, and Adhesives',
                slug: '?category=Polyurethane (PU)', // Point directly to the catalog with query
                category: 'Polyurethane (PU)'
             });
          }

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

          // Manually add Marketing & Brand Launch if not present
          if (!srvNavItems.some(s => s.slug === 'marketing-brand-launch')) {
            srvNavItems.push({
              title: 'Marketing & Brand Launch',
              body: 'Start strong and grow smart with our expertise',
              slug: 'marketing-brand-launch'
            });
          }

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-emerald-200/40 bg-white/95 backdrop-blur-xl shadow-sm font-(--font-gotham) dark:border-emerald-900/40 dark:bg-slate-950/95 transition-all duration-300">
      <div className="mx-auto flex h-16 sm:h-20 max-w-full items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        <RouterLink to="/" className="flex items-center shrink-0 group transition-all duration-300">
          <img
            src={ajarLogo || "/placeholder.svg"}
            alt="Sabaysis Sports & Infrastructure"
            className="h-12 w-32 sm:h-14 sm:w-40 object-contain transition-all duration-300 group-hover:scale-105"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
            }}
          />
        </RouterLink>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center px-3 md:px-6">
          {navItems.map((item) => {
            const isDropdown = "items" in item

            return isDropdown ? (
              <DropdownMenu
                key={item.label}
                open={activeMenu === item.label}
                onOpenChange={(open) => !open && handleMouseLeave()}
                modal={false}
              >
                <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`group inline-flex items-center gap-1 px-2 md:px-3.5 py-2 md:py-2.5 font-(--font-montreal) text-xs uppercase tracking-wider rounded-lg min-h-10 transition-all duration-200 relative cursor-pointer
                        ${isDropdownActive(item as any)
                          ? "bg-linear-to-r from-emerald-600/15 to-teal-600/15 text-emerald-700 border border-emerald-200/50 dark:bg-linear-to-r dark:from-emerald-600/20 dark:to-teal-600/20 dark:text-emerald-300 dark:border-emerald-900/50"
                          : "text-slate-700 hover:bg-linear-to-r hover:from-emerald-600/10 hover:to-teal-600/10 hover:text-emerald-700 hover:border hover:border-emerald-200/30 dark:text-slate-300 dark:hover:bg-linear-to-r dark:hover:from-emerald-600/15 dark:hover:to-teal-600/15 dark:hover:text-emerald-300 dark:hover:border-emerald-900/50"
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
                  onWheel={(e) => e.stopPropagation()}
                  className="w-[calc(100vw-40px)] max-w-2xl max-h-[80vh] overflow-y-auto overscroll-contain rounded-2xl border border-emerald-200/50 bg-white shadow-2xl animate-in fade-in zoom-in-95 dark:border-emerald-900/50 dark:bg-slate-900 font-(--font-gotham) pointer-events-auto"
                >
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col">
                    <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 mb-5 flex items-center justify-between border-b border-emerald-200/40 dark:border-emerald-900/40 pb-4">
                      <DropdownMenuLabel className="font-(--font-montreal) text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                        {item.label}
                      </DropdownMenuLabel>
                      <span className="text-xs font-montreal font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-linear-to-r from-emerald-100 to-teal-100 dark:from-emerald-600/30 dark:to-teal-600/30 px-3 py-1.5 rounded-full">
                        {(item as any).description}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {(item as any).items.map((subItem: any) => (
                        <DropdownMenuItem key={subItem.slug} asChild>
                          <RouterLink
                            to={
                              item.label === "Products"
                                ? `${(item as any).basePath}?category=${encodeURIComponent(subItem.category || subItem.title)}`
                                : subItem.slug === "padel-courts"
                                  ? "/padel-courts"
                                  : `${(item as any).basePath}/${subItem.slug}`
                            }
                            className="group rounded-xl border border-emerald-200/40 bg-linear-to-br from-white to-emerald-50/20 p-4 transition-all duration-200 hover:border-emerald-400/60 hover:bg-linear-to-br hover:from-emerald-50 hover:to-teal-50/30 hover:shadow-lg min-h-[85px] flex flex-col justify-start dark:border-emerald-900/40 dark:bg-linear-to-br dark:from-slate-800/40 dark:to-emerald-950/20 dark:hover:border-emerald-600/60 dark:hover:bg-linear-to-br dark:hover:from-emerald-950/40 dark:hover:to-emerald-900/30 cursor-pointer"
                          >
                            <p className="font-(--font-montreal) text-xs text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300 mb-2 transition-colors duration-200">
                              {subItem.title}
                            </p>
                            <p className="text-xs font-gotham text-slate-600 line-clamp-2 leading-relaxed dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200">
                              {subItem.body}
                            </p>
                          </RouterLink>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <RouterLink
                key={item.label}
                to={(item as any).href}
                className={`px-3.5 py-2.5 font-(--font-montreal) text-xs uppercase tracking-wider rounded-lg min-h-10 inline-flex items-center transition-all duration-200 ${isLinkActive((item as any).href)
                  ? "bg-linear-to-r from-emerald-600/15 to-teal-600/15 text-emerald-700 border border-emerald-200/50 dark:bg-linear-to-r dark:from-emerald-600/20 dark:to-teal-600/20 dark:text-emerald-300 dark:border-emerald-900/50"
                  : "text-slate-700 hover:bg-linear-to-r hover:from-emerald-600/10 hover:to-teal-600/10 hover:text-emerald-700 hover:border hover:border-emerald-200/30 dark:text-slate-300 dark:hover:bg-linear-to-r dark:hover:from-emerald-600/15 dark:hover:to-teal-600/15 dark:hover:text-emerald-300 dark:hover:border-emerald-900/50"
                  }`}
              >
                {item.label}
              </RouterLink>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 md:gap-3 shrink-0">
          <GoogleTranslateSelector />
          <RouterLink
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-xs uppercase tracking-wider text-white transition-all duration-200 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg shadow-md min-h-10 whitespace-nowrap dark:bg-linear-to-r dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 font-(--font-montreal)"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </RouterLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 bg-white hover:bg-slate-50 lg:hidden shrink-0 transition-colors duration-200 dark:border-slate-800/80 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white"
          onClick={() => setIsMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5 text-emerald-600" /> : <Menu className="h-5 w-5 text-emerald-600" />}
        </button>
      </div>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} navItems={navItems} />    </header>
  )
}