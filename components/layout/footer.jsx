import Link from 'next/link';
import { NAVIGATION_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              {SITE_CONFIG.description}. Revolutionizing how you experience mobile applications.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = LucideIcons[link.icon];

                if (Icon) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                }
                return null; // In case the icon is not found, return nothing
              })}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm rounded-md bg-slate-800 border border-slate-700 placeholder:text-slate-500"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className='mt-1'>Made By ❤️ <a href="https://kunalportfolio45.netlify.app/" target="_blank" rel="noopener noreferrer">Kunal Sharma</a></p>
        </div>
      </div>
    </footer>
  );
}
