"use client"

import React from 'react';
import { MenuIcon, House, BookOpen, Code2, Wrench, Mail, Copy, ExternalLink, FileDown } from 'lucide-react';
import { Button } from '@heroui/react';
import { Sheet, SheetContent } from '@/components/sheet';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

const links = [
  { label: 'Home', href: '#hero', icon: House },
  { label: 'Education', href: '#education', icon: BookOpen },
  { label: 'Projects', href: '#projects', icon: Code2 },
  { label: 'Skills', href: '#skills', icon: Wrench },
];

interface ContactItem {
  label: string
  icon: React.ElementType
  href?: string
  action?: () => void
}

const contactItems: ContactItem[] = [
  { label: 'Email', icon: Copy, href: 'mailto:mael.boutsoque@gmail.com' },
  { label: 'GitHub', icon: ExternalLink, href: 'https://github.com/mael-boutsoque' },
  { label: 'LinkedIn', icon: ExternalLink, href: 'https://linkedin.com/in/mael-boutsoque' },
  { label: 'Download CV', icon: FileDown, href: '/CV_EN_complet.pdf' },
];

function isHomePage() {
  return window.location.pathname === '/' || window.location.pathname === '';
}

function scrollTo(id: string) {
  if (!isHomePage()) {
    window.location.assign('/' + id);
    return;
  }
  const el = document.getElementById(id.replace('#', ''));
  if (!el) return;
  const target = el.getBoundingClientRect().top + window.scrollY;
  const start = window.scrollY;
  const diff = target - start;
  const duration = 600;
  let startTime: number | null = null;
  function step(time: number) {
    if (startTime === null) startTime = time;
    const t = Math.min((time - startTime) / duration, 1);
    const ease = 1 - (1 - t) ** 3;
    window.scrollTo(0, start + diff * ease);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('#hero');

  React.useEffect(() => {
    const id = window.location.hash;
    if (id && id !== '#hero') {
      setTimeout(() => scrollTo(id), 200);
    }
  }, []);

  React.useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex items-center justify-center px-4 py-2 max-w-7xl">
        <div
          className="absolute left-4 flex cursor-pointer items-center justify-center size-11 rounded-full bg-background transition-opacity hover:opacity-80"
          onClick={() => scrollTo('#hero')}
        >
          <svg viewBox="0 0 900 900" className="size-8" fill="currentColor">
            <g transform="translate(0,900) scale(0.1,-0.1)">
              <path d="M3020 6065 c-191 -36 -334 -97 -482 -207 -234 -174 -393 -430 -443 -715 -23 -132 -23 -1475 0 -1530 52 -123 182 -182 316 -141 53 16 113 69 141 126 l23 47 5 720 c5 717 5 720 28 788 31 92 113 210 194 277 121 102 252 150 408 150 227 0 413 -104 541 -303 53 -82 79 -171 89 -297 8 -117 25 -163 82 -217 45 -44 96 -63 168 -63 131 0 219 77 249 218 6 29 11 71 11 94 0 106 66 257 155 356 229 253 604 284 870 72 109 -86 180 -198 216 -338 18 -71 19 -116 19 -762 0 -575 2 -694 15 -736 39 -132 179 -203 319 -162 55 16 138 99 154 154 9 31 12 222 12 746 0 763 -2 796 -55 955 -62 183 -141 310 -279 449 -134 134 -251 209 -414 268 -417 149 -881 43 -1193 -275 l-75 -77 -66 68 c-139 145 -317 253 -503 306 -151 44 -365 56 -505 29z" />
              <path d="M4862 5194 c-160 -80 -187 -285 -54 -406 120 -109 313 -72 386 74 49 99 31 204 -49 283 -80 80 -184 98 -283 49z" />
              <path d="M3099 5170 c-20 -11 -51 -33 -68 -51 -53 -53 -66 -86 -66 -174 0 -89 12 -121 67 -175 63 -63 163 -86 259 -60 47 13 114 72 141 124 30 57 30 165 0 222 -24 47 -81 100 -128 120 -49 21 -161 17 -205 -6z" />
              <path d="M2200 3208 c-37 -22 -64 -49 -85 -82 -27 -44 -30 -58 -30 -131 0 -73 3 -87 30 -131 101 -163 352 -150 436 23 27 56 30 149 7 204 -41 95 -126 149 -236 149 -59 0 -75 -4 -122 -32z" />
              <path d="M5764 3226 c-46 -20 -102 -74 -126 -120 -30 -57 -30 -165 0 -222 27 -52 94 -111 141 -124 96 -26 196 -3 259 60 55 54 67 86 67 175 0 88 -13 121 -66 174 -51 52 -99 71 -176 71 -37 -1 -82 -7 -99 -14z" />
            </g>
          </svg>
        </div>

        <div className="hidden lg:flex items-center rounded-full bg-background px-2 py-1">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={cn(
                      'inline-flex items-center gap-1.5 text-sm font-light tracking-wide',
                      active === link.href ? 'opacity-100' : 'opacity-40',
                    )}
                  >
                    <link.icon className="size-4" />
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="inline-flex items-center gap-1.5 text-sm font-light tracking-wide opacity-40 data-open:opacity-100">
                  <Mail className="size-4" />
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-40">
                  {contactItems.map((item) => (
                    <NavigationMenuLink
                      key={item.label}
                      href={item.href ?? '#'}
                      onClick={(e) => {
                        if (item.action) {
                          e.preventDefault()
                          item.action()
                        } else if (item.href && !item.href.startsWith('http') && !item.href.startsWith('/') && !item.href.startsWith('mailto:')) {
                          e.preventDefault()
                        }
                      }}
                      target={item.href?.startsWith('http') || item.href?.startsWith('/') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <item.icon className="size-4" />
                      {item.label}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="absolute right-4 flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="ghost"
              isIconOnly
              size="sm"
              onPress={() => setOpen(!open)}
            >
              <MenuIcon className="size-3.5" />
            </Button>
            <SheetContent
              className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
              showClose={false}
              side="left"
            >
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                {links.map((link) => (
                  <a
                    key={link.href}
                    className="inline-flex items-center justify-start whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); setOpen(false); scrollTo(link.href); }}
                  >
                    <link.icon className="mr-2 size-4" />
                    {link.label}
                  </a>
                ))}
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    className="inline-flex items-center justify-start whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
                    href={item.href ?? '#'}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault()
                        item.action()
                      }
                      setOpen(false)
                    }}
                    target={item.href?.startsWith('http') || item.href?.startsWith('/') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <item.icon className="mr-2 size-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
