import { MessageCircle, Instagram, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function FloatingSocialLinks() {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send/?phone=919897053591&text&type=phone_number&app_absent=0',
      icon: MessageCircle,
      color: 'hover:bg-green-500',
      label: 'Chat on WhatsApp'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram,
      color: 'hover:bg-pink-500',
      label: 'Follow on Instagram'
    },
    {
      name: 'Phone',
      url: 'tel:+919897053591',
      icon: Phone,
      color: 'hover:bg-blue-600',
      label: 'Call us'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: Twitter,
      color: 'hover:bg-blue-400',
      label: 'Follow on Twitter'
    }
  ];

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-center gap-3">
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white transition-all duration-300 ${link.color}`}
              title={link.label}
            >
              <Icon className="w-6 h-6" />
                            <span className="absolute right-16 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {link.label}
              </span>
            </a>
          );
        })}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
        title="Toggle social links"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
