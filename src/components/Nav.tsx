'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowRight, Menu, X } from 'lucide-react'
import { site } from '@/lib/site'
import { ease } from './anim'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{ background: 'rgba(248,244,235,0.92)' }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between gap-4 border-b" style={{ borderColor: 'var(--surface)' }}>
          <Link href="/" className="flex items-baseline gap-3 shrink-0">
            <span className="display text-2xl sm:text-3xl whitespace-nowrap" style={{ color: 'var(--p)' }}>{site.shortName}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
            {site.navLinks.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-[var(--p)] transition-colors whitespace-nowrap">{l.label}</Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <Link href="/contact" className="hidden xl:inline-flex pill-out !px-5 !py-2.5 !text-sm whitespace-nowrap">Get Quote <ArrowRight className="w-3.5 h-3.5" /></Link>
            <a href={`tel:${site.phoneRaw}`} className="inline-flex pill-fill !px-5 !py-2.5 !text-sm whitespace-nowrap">
              <Phone className="w-4 h-4" />{site.phone}
            </a>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{ color: 'var(--ink)' }}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Drawer rendered outside the header so backdrop-filter on the header
          doesn't trap its `position: fixed` containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-50 lg:hidden flex flex-col overflow-y-auto"
            style={{ background: '#F8F4EB' }}
          >
            <div className="flex items-center justify-between px-5 sm:px-8 py-5 border-b" style={{ borderColor: 'var(--surface)' }}>
              <Link href="/" onClick={() => setOpen(false)} className="display text-2xl" style={{ color: 'var(--p)' }}>
                {site.shortName}
              </Link>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full"
                style={{ color: 'var(--ink)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
              }}
              className="flex flex-col items-start gap-1 px-8 pt-10 flex-1"
            >
              {site.navLinks.map(l => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                  }}
                  className="w-full"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display text-[2.75rem] leading-[1.05] py-2 block"
                    style={{ color: 'var(--ink)' }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="px-8 pb-10 pt-6 border-t flex flex-col gap-3" style={{ borderColor: 'var(--surface)' }}>
              <a href={`tel:${site.phoneRaw}`} className="pill-fill justify-center !py-4">
                <Phone className="w-4 h-4" />{site.phone}
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="pill-out justify-center !py-4">
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
