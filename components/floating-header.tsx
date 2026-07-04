"use client"

import React from 'react';
import { MenuIcon, Terminal } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(id: string) {
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50',
        'w-full rounded-none shadow',
        'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-1.5 py-0.5 max-w-6xl">
        <div
          className="hover:bg-accent flex cursor-pointer items-center gap-1 rounded-md px-1 py-0.5 transition-colors duration-100"
          onClick={() => scrollTo('#hero')}
        >
          <Terminal className="size-4" />
          <p className="font-mono text-sm font-bold">Mael</p>
        </div>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-0.5 text-sm font-medium hover:bg-accent transition-colors"
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden h-7 w-7"
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
                    {link.label}
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
