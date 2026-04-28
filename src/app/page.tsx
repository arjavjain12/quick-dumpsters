'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Phone, Star, Check, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { site, sizes, faq, reviews } from '@/lib/site'
import { fadeUp, stagger, ease } from '@/components/anim'
import { Mark } from '@/components/Marks'
import QuoteForm from '@/components/QuoteForm'
import CTABanner from '@/components/CTABanner'
import FaqList from '@/components/FaqList'

export default function Home() {
  const reduce = !!useReducedMotion()
  const minPrice = Math.min(...sizes.map(s => s.priceLow))

  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.06, 1, 1.04])

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-14 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.24em] uppercase mb-7" style={{ color: 'var(--muted)' }}>
                <span className="inline-block w-7 h-px" style={{ background: 'var(--muted)' }} />
                {site.city}, {site.state} • Locally Owned
              </motion.div>
              <h1 className="display text-[clamp(3rem,7.4vw,6.5rem)]" style={{ color: 'var(--ink)' }}>
                <motion.span initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.15 }} className="block">Same-day dumpsters</motion.span>
                <motion.span initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.27 }} className="block" style={{ color: 'var(--p)', fontStyle: 'italic' }}>in {site.city} from ${minPrice}.</motion.span>
              </h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.45 }} className="text-lg sm:text-xl mt-8 max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
                {site.description}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.55 }} className="mt-9 flex items-center gap-4 flex-wrap">
                <a href={`tel:${site.phoneRaw}`} className="pill-fill"><Phone className="w-4 h-4" /> Call {site.phone} <ArrowRight className="w-4 h-4" /></a>
                <Link href="/contact" className="pill-out">Get a free quote <ArrowRight className="w-4 h-4" /></Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, ease, delay: 0.7 }} className="mt-7 flex items-center gap-2 text-sm">
                <div className="flex" style={{ color: 'var(--p)' }}>{[0, 1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <span className="font-semibold">{site.rating.toFixed(1)}</span>
                <span style={{ color: 'var(--muted)' }}>· {site.reviewCount} Google reviews</span>
              </motion.div>
            </div>

            <motion.div id="quote" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }} className="lg:col-span-5">
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHOTO BAND */}
      <section className="px-5 sm:px-8 pb-14 sm:pb-20">
        <motion.div ref={photoRef} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease }} className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/7] rounded-[36px] overflow-hidden" style={{ background: 'var(--ink)' }}>
            <motion.img src={site.heroPhoto} alt={`${site.name} truck delivering a dumpster on a Charleston driveway`} style={{ y, scale }} className="absolute inset-0 w-full h-full object-cover will-change-transform" loading="eager" />
            <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)' }} />
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.55)' }}>
              <Star className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--p)' }} />
              {site.rating.toFixed(1)} on Google · {site.reviewCount} reviews
            </div>
          </div>
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y" style={{ borderColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8 text-[15px]">
          {['Same-day delivery', '7-day rental included', 'No hidden fees — flat rate', 'Locally owned & operated'].map((t, i) => (
            <motion.div key={t} {...stagger(i * 0.08)} className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex w-5 h-5 rounded-full items-center justify-center shrink-0" style={{ background: 'var(--soft)', color: 'var(--p)' }}><Check className="w-3 h-3" strokeWidth={3} /></span>
              <span className="font-medium">{t}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIZES */}
      <section className="grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-12 mb-16">
            <h2 className="md:col-span-8 display text-[clamp(2.5rem,5.5vw,4.75rem)]"><em>Sizes</em> for every<br /><em>kind of</em> mess.</h2>
            <p className="md:col-span-4 text-lg leading-relaxed self-end" style={{ color: 'var(--muted)' }}>
              Flat-rate by size. Drop-off, pickup, dump fees, and 7 days included. Everything but the heavy lifting.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sizes.map((s, i) => (
              <motion.div key={s.yards} {...stagger(i * 0.1)} whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25, ease } }}>
                <Link href={`/sizes/${s.slug}`} className="group relative rounded-t-[36px] rounded-b-[8px] overflow-hidden flex flex-col will-change-transform" style={{ boxShadow: '0 30px 60px -25px rgba(0,0,0,0.35)' }}>
                  <div className="relative aspect-square overflow-hidden" style={{ background: 'var(--ink)' }}>
                    <img src={s.photo} alt={`${s.yards}-yard moss-green roll-off dumpster`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" loading="lazy" />
                    <div className="absolute top-4 left-4 inline-flex items-baseline gap-1 px-3 py-1.5 rounded-full text-white backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.55)' }}>
                      <span className="display text-xl">{s.yards}</span><span className="text-[10px] uppercase tracking-widest opacity-80">yd</span>
                    </div>
                  </div>
                  <div className="relative p-6 flex-1 flex flex-col justify-between" style={{ background: i % 2 === 0 ? 'linear-gradient(160deg, var(--p) 0%, var(--pd) 100%)' : 'linear-gradient(170deg, var(--ink) 0%, #000 100%)', color: '#fff' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[11px] font-semibold tracking-[0.24em] uppercase opacity-85">{s.nickname}</div>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold opacity-85 group-hover:opacity-100 transition-opacity">Details <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
                    </div>
                    <div className="text-sm opacity-85 leading-relaxed mb-4">{s.goodFor}</div>
                    <div className="pt-3 border-t flex items-end justify-between" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest opacity-70">From</div>
                        <div className="text-2xl font-bold">${s.priceLow}</div>
                      </div>
                      <div className="text-[11px] opacity-60 text-right max-w-[8rem]">{s.dimensions}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-28">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 mb-12 items-end">
            <h2 className="md:col-span-8 display text-[clamp(2.5rem,5.5vw,4.5rem)]">Dropping bins across<br /><em>{site.city}</em> & beyond.</h2>
            <p className="md:col-span-4 text-lg" style={{ color: 'var(--muted)' }}>Don't see your town? Call {site.phone} — chances are we cover it.</p>
          </motion.div>
          <div className="flex flex-wrap gap-2.5">
            {[site.city, ...site.nearbyAreas].map((area, i) => (
              <motion.span key={area} {...stagger(i * 0.05)} whileHover={reduce ? undefined : { y: -2 }} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium will-change-transform" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--p)' }} />{area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <motion.h2 {...fadeUp} className="display text-[clamp(2.5rem,5.5vw,4.75rem)] mb-16 max-w-3xl">One call. <em>Three steps.</em><br />Done.</motion.h2>
          <ol className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {[
              { n: '01', t: 'Call or quote',     d: `Tell us what you're hauling and where to drop it. Quote in under a minute, flat-rate, no run-around.` },
              { n: '02', t: 'We deliver',         d: `Same-day if you call before noon. We text 30 minutes before we arrive and place the bin where you want it.` },
              { n: '03', t: 'You fill, we haul',  d: `Take 7 days. When you're ready, one text and we're back to pick it up. No back-end fees, no upsells.` },
            ].map((step, i) => (
              <motion.li key={step.n} {...stagger(i * 0.12)}>
                <div className="display text-[clamp(4.5rem,7vw,6rem)] mb-6" style={{ color: 'var(--p)', lineHeight: 0.9 }}>{step.n}</div>
                <div className="display text-3xl mb-3">{step.t}</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{step.d}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 mb-16 items-end">
            <h2 className="md:col-span-8 display text-[clamp(2.5rem,5.5vw,4.75rem)]">Why {site.city.split(' ')[0]} keeps<br />calling <em>{site.shortName.split(' ')[0]}.</em></h2>
            <div className="md:col-span-4 md:pb-2">
              <a href={`tel:${site.phoneRaw}`} className="pill-fill">Call {site.phone} <ArrowRight className="w-4 h-4" /></a>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {[
              { mark: 'circle',   t: 'Flat-rate pricing',         d: "You hear the number once and that's the number. No surprise dump fees at pickup." },
              { mark: 'half',     t: 'Same-day delivery',         d: 'Most jobs called in before noon are dropped that afternoon. We staff for it.' },
              { mark: 'triangle', t: 'Locally owned',             d: 'We answer the phone ourselves. No call centers, no automated trees.' },
              { mark: 'dots',     t: 'Driveway-safe placement',    d: "Boards under every container. Tight alleys and narrow drives — we've worked them." },
            ].map((item, i) => (
              <motion.div key={item.t} {...stagger(i * 0.1)} className="flex flex-col">
                <Mark kind={item.mark as 'circle' | 'half' | 'triangle' | 'dots'} primary="#2D5A3D" ink="#1A1A18" />
                <div className="display text-2xl mt-7 mb-2.5">{item.t}</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{item.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <h2 className="md:col-span-8 display text-[clamp(2.5rem,5.5vw,4.75rem)]">On the <em>job.</em><br />Real {site.city.toLowerCase()}.</h2>
            <p className="md:col-span-4 text-lg" style={{ color: 'var(--muted)' }}>Bins dropped this month across {site.city} and the surrounding areas.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {site.galleryPhotos.map((p, i) => (
              <motion.figure key={p.src} {...stagger(i * 0.12)} whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.3, ease } }} className="relative aspect-[4/5] rounded-t-[36px] rounded-b-[8px] overflow-hidden will-change-transform" style={{ background: 'var(--ink)', boxShadow: '0 30px 60px -25px rgba(0,0,0,0.35)' }}>
                <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]" loading="lazy" />
                <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.62) 100%)' }} />
                <figcaption className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/80 mb-1.5">{p.category}</div>
                  <div className="display text-3xl text-white">{p.alt.split(' ').slice(0, 5).join(' ')}.</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <motion.h2 {...fadeUp} className="display text-[clamp(2.5rem,5.5vw,4.75rem)] mb-16 max-w-3xl">Don't take our<br /><em>word for it.</em></motion.h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r, i) => (
              <motion.figure key={i} {...stagger(i * 0.12)} whileHover={reduce ? undefined : { y: -4 }} className="p-8 rounded-[28px] will-change-transform" style={{ background: 'var(--paper)' }}>
                <div className="flex mb-5" style={{ color: 'var(--p)' }}>{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
                <blockquote className="text-lg leading-relaxed mb-6 display" style={{ lineHeight: 1.4 }}>"{r.text}"</blockquote>
                <figcaption className="text-sm font-semibold">{r.author}<span className="font-normal" style={{ color: 'var(--muted)' }}> · {r.source}</span></figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.h2 {...fadeUp} className="md:col-span-5 display text-[clamp(2.5rem,5.5vw,4.5rem)] sticky top-24 self-start">Asked <em>often.</em><br />Answered <em>fast.</em></motion.h2>
            <div className="md:col-span-7"><FaqList items={faq} /></div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
