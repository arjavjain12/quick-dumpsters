'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowRight, Menu, X } from 'lucide-react'
import { site } from '@/lib/site'
import { ease } from './anim'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease, delay: 0.1 }}
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{ background: 'rgba(248,244,235,0.92)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between gap-4 border-b" style={{ borderColor: 'var(--surface)' }}>
        <Link href="/" className="flex items-baseline gap-3 shrink-0">
          <span className="display text-2xl sm:text-3xl" style={{ color: 'var(--p)' }}>{site.shortName}</span>
          <span className="hidden md:inline-block text-[11px] uppercase tracking-[0.22em]" style={{ color: 'var(--muted)' }}>{site.city}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {site.navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--p)] transition-colors">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="hidden md:inline-flex pill-out !px-5 !py-2.5 !text-sm">Get Quote <ArrowRight className="w-3.5 h-3.5" /></Link>
          <a href={`tel:${site.phoneRaw}`} className="inline-flex pill-fill !px-5 !py-2.5 !text-sm">
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
            style={{ background: 'var(--paper)' }}
          >
            <div className="flex justify-end p-5">
              <button aria-label="Close" onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-6 px-8 pt-6">
              {site.navLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="display text-4xl">{l.label}</Link>
              ))}
              <a href={`tel:${site.phoneRaw}`} className="pill-fill mt-6">
                <Phone className="w-4 h-4" />{site.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
