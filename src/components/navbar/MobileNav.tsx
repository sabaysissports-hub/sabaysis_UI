import { Link } from "react-router-dom"
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
  if (!isOpen) return null

  return (
    <div className="border-t border-emerald-200/40 bg-gradient-to-b from-white to-emerald-50/30 lg:hidden dark:border-emerald-900/40 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900/95 font-[var(--font-gotham)]">
      <nav className="p-4 sm:p-5 space-y-2">
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
                        onClick={onClose}
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
                onClick={onClose}
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
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md min-h-10 hover:bg-emerald-700 transition-colors duration-200 font-[var(--font-montreal)]"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </Link>
        </div>
      </nav>
    </div>
  )
}
