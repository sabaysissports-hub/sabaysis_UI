import { Link as RouterLink, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import { Send } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { GoogleTranslateSelector } from "@/components/google-translate-selector"

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

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  if (!isOpen) return null

  return (
    <div className="border-t border-emerald-200/40 bg-linear-to-b from-white to-emerald-50/30 lg:hidden dark:border-emerald-900/40 dark:bg-linear-to-b dark:from-slate-950 dark:to-slate-900/95 font-(--font-gotham)">
      <nav className="p-4 sm:p-5 space-y-2">
        <Accordion type="multiple" className="space-y-1">
          {navItems.map((item) => {
            const labelLower = item.label.toLowerCase()
            const targetId = labelLower === "contact us" ? "contact" : labelLower === "maintenance" ? "maintenance" : labelLower === "products" ? "products" : labelLower === "services" ? "services" : labelLower === "about" ? "about" : null
            const useScroll = isHomePage && targetId

            return "items" in item ? (
              <AccordionItem key={item.label} value={item.label} className="border-0">
                <AccordionTrigger className="rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 hover:no-underline dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="space-y-1 rounded-lg bg-slate-50/60 dark:bg-slate-800/40 p-2 mt-2">
                    {item.items.map((sub) => (
                      <RouterLink
                        key={sub.slug}
                        to={
                          item.label === "Products"
                            ? `${item.basePath}?category=${encodeURIComponent(sub.category || sub.title)}`
                            : sub.slug === "padel-courts"
                              ? "/padel-courts"
                              : `${item.basePath}/${sub.slug}`
                        }
                        onClick={onClose}
                        className="flex rounded-lg px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 min-h-10 items-center dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200"
                      >
                        {sub.title}
                      </RouterLink>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : useScroll ? (
              <ScrollLink
                key={item.label}
                to={targetId}
                spy={true}
                smooth={false}
                offset={-80}
                activeClass="active"
                onClick={onClose}
                className="flex rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 min-h-10 items-center dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.label}
                to={item.href}
                onClick={onClose}
                className="flex rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-emerald-600/10 hover:text-emerald-700 min-h-10 items-center dark:text-slate-300 dark:hover:bg-emerald-600/20 dark:hover:text-emerald-300 transition-colors duration-200"
              >
                {item.label}
              </RouterLink>
            )
          })}
        </Accordion>
        <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
          <GoogleTranslateSelector />
          <RouterLink
            to="/contact-us"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-xs uppercase tracking-wider text-white shadow-md min-h-10 hover:bg-emerald-700 transition-colors duration-200 font-(--font-montreal)"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </RouterLink>
        </div>
      </nav>
    </div>
  )
}
