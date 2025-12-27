import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, Heart,  ArrowUpRight } from 'lucide-react';
import footerLogo from '../../assets/whiteLogo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-20 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-black text-white">
      {/* Decorative blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={footerLogo}
                alt="Sabaysis Sports & Infra"
                className="h-14 w-14 object-contain"
              />
              <div>
                <h2 className="text-lg font-bold tracking-tight text-white">
                  Sabaysis
                </h2>
                <p className="text-xs text-emerald-400 font-semibold">Sports & Infra</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Premium artificial grass, sports infrastructure, and maintenance solutions engineered for performance and safety.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-400"></span>
              Quick Links
            </h3>
            <nav className="space-y-3">
              <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group text-sm">
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group text-sm">
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>About Us</span>
              </Link>
              <Link to="/services" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group text-sm">
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Services</span>
              </Link>
              <Link to="/products" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group text-sm">
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Products</span>
              </Link>
              <Link to="/maintenance" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group text-sm">
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Maintenance</span>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-blue-400"></span>
              Contact
            </h3>
            <div className="space-y-4">
              <a href="tel:+919897053591" className="flex items-start gap-3 group hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">+91 98970 53591</span>
              </a>
              <a href="mailto:ajarenterprisesmeerut@gmail.com" className="flex items-start gap-3 group hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300 break-all">ajarenterprisesmeerut@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  Tiwari Quarters, Phase 2,<br />
                  Kesharganj, Meerut<br />
                  Uttar Pradesh 250001
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Hours</span>
                <span className="text-sm text-slate-300">9 AM - 9 PM</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-green-400"></span>
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://api.whatsapp.com/send/?phone=919897053591&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-green-600/20 border border-slate-700 hover:border-green-500/50 transition-all group"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-slate-300 group-hover:text-green-300">WhatsApp</span>
              </a>
              <a
                href="tel:+919897053591"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500/50 transition-all group"
              >
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-300 group-hover:text-blue-300">Call Us</span>
              </a>
              <a
                href="mailto:ajarenterprisesmeerut@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-slate-300 group-hover:text-cyan-300">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 text-xs text-slate-400 sm:flex-row">
          <p className="flex items-center gap-1">
            © {currentYear} Sabaysis Sports &amp; Infra. Built with{' '}
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />{' '}
            by{' '}
            <a
              href="https://www.justcharge.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              Just Charge
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


