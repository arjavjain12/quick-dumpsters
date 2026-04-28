'use client'

import { motion } from 'framer-motion'
import { ease } from './anim'

// Smaller hero pattern used on inner pages (about, contact, sizes overview, residential, etc).
// Eyebrow + huge serif headline (with optional italic accent) + subhead. No form.
export default function PageHero({ eyebrow, title, italic, subtitle }: { eyebrow: string; title: string; italic?: string; subtitle?: string }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.24em] uppercase mb-7" style={{ color: 'var(--muted)' }}>
          <span className="inline-block w-7 h-px" style={{ background: 'var(--muted)' }} />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="display text-[clamp(2.6rem,7vw,5.75rem)] max-w-4xl"
          style={{ color: 'var(--ink)' }}
        >
          {title}{italic && (<><br /><em>{italic}</em></>)}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="text-lg sm:text-xl mt-7 max-w-2xl leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
