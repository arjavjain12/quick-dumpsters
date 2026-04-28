'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { ease } from './anim'

export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="border-b" style={{ borderColor: 'var(--surface)' }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left flex items-center justify-between gap-6 py-6"
            >
              <span className="display text-xl sm:text-2xl">{it.q}</span>
              <motion.span
                animate={{ background: isOpen ? 'var(--p)' : 'var(--surface)' }}
                transition={{ duration: 0.25, ease }}
                className="shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center"
                style={{ color: isOpen ? '#fff' : 'var(--ink)' }}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pr-12 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
