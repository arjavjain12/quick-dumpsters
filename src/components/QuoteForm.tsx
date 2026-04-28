'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { sizes } from '@/lib/site'
import { ease } from './anim'

export default function QuoteForm({ heading = 'Get a flat-rate quote.', sub = "60 seconds. No credit card. We'll call you back." }: { heading?: string; sub?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ zip: '', size: sizes[2].yards.toString(), date: '', name: '', phone: '' })

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="p-8 rounded-[28px]"
          style={{ background: 'var(--surface)', color: 'var(--ink)' }}
        >
          <div className="display text-2xl mb-2">Got it, {form.name || 'we'}'ll call you.</div>
          <div className="text-base mb-1" style={{ color: 'var(--muted)' }}>We'll ring you within 15 minutes during business hours.</div>
          <div className="text-sm" style={{ color: 'var(--muted)' }}>If it's after hours, first thing in the morning.</div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          className="p-7 sm:p-8 rounded-[28px]"
          style={{ background: 'var(--surface)' }}
        >
          <div className="display text-2xl mb-1.5" style={{ color: 'var(--ink)' }}>{heading}</div>
          <div className="text-sm mb-6" style={{ color: 'var(--muted)' }}>{sub}</div>
          <div className="space-y-3">
            <Field label="Your name">
              <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Sarah K." className="w-full px-4 py-3.5 rounded-2xl border outline-none focus:border-current text-base transition-colors" style={{ borderColor: 'rgba(107,107,98,0.2)', background: 'var(--paper)', color: 'var(--ink)' }} />
            </Field>
            <Field label="Zip code">
              <input type="text" inputMode="numeric" required value={form.zip} onChange={e => setForm({ ...form, zip: e.target.value })} placeholder="29405" className="w-full px-4 py-3.5 rounded-2xl border outline-none focus:border-current text-base" style={{ borderColor: 'rgba(107,107,98,0.2)', background: 'var(--paper)', color: 'var(--ink)' }} />
            </Field>
            <Field label="Size">
              <select value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} className="w-full px-4 py-3.5 rounded-2xl border outline-none focus:border-current appearance-none pr-10 text-base" style={{ borderColor: 'rgba(107,107,98,0.2)', backgroundColor: 'var(--paper)', color: 'var(--ink)', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1l5 5 5-5' stroke='%236B6B62' stroke-width='1.5' stroke-linecap='round'/></svg>")`, backgroundPosition: 'right 1.1rem center', backgroundRepeat: 'no-repeat' }}>
                {sizes.map(s => <option key={s.yards} value={s.yards}>{s.yards} yd — {s.nickname}</option>)}
              </select>
            </Field>
            <Field label="Drop-off date">
              <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3.5 rounded-2xl border outline-none focus:border-current text-base" style={{ borderColor: 'rgba(107,107,98,0.2)', background: 'var(--paper)', color: 'var(--ink)' }} />
            </Field>
            <Field label="Phone">
              <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(843) 555-0100" className="w-full px-4 py-3.5 rounded-2xl border outline-none focus:border-current text-base" style={{ borderColor: 'rgba(107,107,98,0.2)', background: 'var(--paper)', color: 'var(--ink)' }} />
            </Field>
          </div>
          <button type="submit" className="mt-5 w-full pill-fill justify-center !py-4 !text-base">
            Get my quote <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold tracking-[0.22em] uppercase mb-1.5 opacity-70">{label}</span>
      {children}
    </label>
  )
}
