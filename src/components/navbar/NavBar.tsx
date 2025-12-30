import { Link } from 'react-router-dom';
import { ChevronDown, Send, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ajarLogo from '../../assets/ajarlogo.png';
import { API_ENDPOINTS } from '@/config/api';
import { GoogleTranslateSelector } from '@/components/google-translate-selector';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

// Services will be fetched from backend

type NavSubItem = {
  title: string;
  body: string;
  slug: string;
  category?: string;
};

type NavItem =
  | {
      label: string;
      href: string;
    }
  | {
      label: string;
      description: string;
      basePath: string;
      items: NavSubItem[];
    };


const serviceNavItems: NavSubItem[] = [];

const initialNavItems: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    description: 'Sports • Infrastructure',
    basePath: '/services',
    items: serviceNavItems,
  },
  {
    label: 'Products',
    description: 'Turf • Nets • Equipment',
    basePath: '/products',
    items: [],
  },
  { label: 'Maintenance', href: '/maintenance' },
  { label: 'Contact', href: '/contact-us' },
];

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.PRODUCTS);
        if (res.ok) {
          const data = await res.json();
          
          const categories = Array.from(new Set(data.map((p: { category: string }) => p.category))) as string[];
          
          const categoryNavItems: NavSubItem[] = categories.map((category) => ({
            title: category,
            body: `Explore our ${category} collection`,
            slug: category.toLowerCase().replace(/\s+/g, '-'),
            category: category,
          }));

          setNavItems(prev => prev.map(item => {
            if (item.label === 'Products' && 'items' in item) {
              return { ...item, items: categoryNavItems };
            }
            return item;
          }));
        }
      } catch (error) {
        console.error("Failed to fetch products for navigation", error);
      }
    };

    const fetchServices = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.SERVICES);
        if (res.ok) {
          const data = await res.json();
          const srvNavItems: NavSubItem[] = data.map((s: { title: string; body: string; slug: string }) => ({
            title: s.title,
            body: s.body,
            slug: s.slug,
          }));
          setNavItems(prev => prev.map(item => {
            if (item.label === 'Services' && 'items' in item) {
              return { ...item, items: srvNavItems };
            }
            return item;
          }));
        }
      } catch (error) {
        console.error('Failed to fetch services for navigation', error);
      }
    };

    fetchProducts();
    fetchServices();
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">

        <Link to="/" className="flex items-center gap-2 ml-3 lg:ml-5">
          <img
            src={ajarLogo}
            alt="AJAR"
            className="h-28 w-36 object-contain sm:w-40 lg:h-28 lg:w-44"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) =>
            'items' in item ? (
              <DropdownMenu
                key={item.label}
                open={activeMenu === item.label}
                onOpenChange={(open) => !open && handleMouseLeave()}
                modal={false}
              >
                <div
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="group inline-flex items-center gap-2 px-5 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide text-slate-700 transition hover:text-emerald-600 min-h-11 dark:text-slate-200 dark:hover:text-emerald-400">
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                </div>

                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  className="w-[640px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl animate-in fade-in zoom-in-95 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                    <DropdownMenuLabel className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {item.label}
                    </DropdownMenuLabel>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.slug} asChild>
                        <Link
                          to={item.label === 'Products' 
                            ? `${item.basePath}?category=${encodeURIComponent(subItem.category || subItem.title)}`
                            : `${item.basePath}/${subItem.slug}`}
                          className="group rounded-xl p-5 transition hover:bg-emerald-50 min-h-20 flex flex-col justify-center dark:hover:bg-emerald-950/40"
                        >
                          <p className="font-heading text-sm font-semibold text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                            {subItem.title}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-2 mt-1 dark:text-slate-300">
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
                className="px-5 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide text-slate-700 transition hover:text-emerald-600 min-h-11 inline-flex items-center dark:text-slate-200 dark:hover:text-emerald-400"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <GoogleTranslateSelector />
          <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-emerald-700 min-h-11 min-w-[140px] justify-center dark:bg-emerald-500 dark:hover:bg-emerald-600">
            <Send className="h-4 w-4" />
            Get In Touch
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 lg:hidden min-h-11 min-w-11 dark:border-slate-700 dark:text-white"
          onClick={() => setIsMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-900">
          <nav className="p-5">
            <Accordion type="multiple" className="space-y-2">
              {navItems.map((item) =>
                'items' in item ? (
                  <AccordionItem key={item.label} value={item.label} className="border-0">
                    <AccordionTrigger className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-50 hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="space-y-1 rounded-xl bg-slate-50 p-2 mt-2">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={item.label === 'Products' ? `${item.basePath}?category=${encodeURIComponent(sub.category || sub.title)}` : `${item.basePath}/${sub.slug}`}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex rounded-lg px-4 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white min-h-11 items-center dark:text-slate-100 dark:hover:bg-slate-800"
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
                    className="flex rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-50 min-h-11 items-center dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </Accordion>
            <div className="mt-6 flex items-center justify-between gap-3">
              <GoogleTranslateSelector />
              <Link to="/contact-us" onClick={() => setIsMobileOpen(false)} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg min-h-11">
                <Send className="h-4 w-4" />
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
