'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'
import { fadeUp } from './anim'

export default function CTABanner({ heading = 'Need a dumpster', italic = 'this week?', sub = "Call us. We'll quote you in under a minute and have a bin on your driveway today or tomorrow." }: { heading?: string; italic?: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--ink)' }}>
      <img src={site.ctaBannerPhoto} alt={`${site.shortName} fleet at golden hour`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 50%, rgba(45,90,61,0.8) 100%)' }} />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-32 sm:py-44 text-white">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 items-end">
          <h2 className="md:col-span-7 display text-[clamp(3rem,7.5vw,6.5rem)]" style={{ color: '#fff' }}>
            {heading}<br /><span style={{ opacity: 0.85, fontStyle: 'italic' }}>{italic}</span>
          </h2>
          <div className="md:col-span-5 md:pb-3">
            <p className="text-lg sm:text-xl opacity-90 mb-7 leading-relaxed">{sub}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold bg-white transition-transform hover:-translate-y-0.5" style={{ color: 'var(--p)' }}>
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold border-2 border-white text-white transition-transform hover:-translate-y-0.5">
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
