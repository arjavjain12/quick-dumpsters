import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { site, sizes } from '@/lib/site'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Dumpster Sizes',
  description: `Roll-off dumpster sizes from 10-yard to 30-yard. Flat-rate ${site.city} pricing, 7-day rentals, same-day drop-off.`,
}

export default function SizesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sizes"
        title="Four sizes."
        italic="One flat rate."
        subtitle={`Every ${site.name} container comes with a 7-day rental window, transparent flat-rate pricing, and a driver who'll place it where you actually want it.`}
      />

      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="space-y-20">
            {sizes.map((s, i) => (
              <article key={s.slug} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className={`md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-[28px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={s.photo} alt={`${s.yards}-yard ${s.nickname}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur" style={{ background: 'rgba(248,244,235,0.85)', color: 'var(--ink)' }}>
                    {s.yards} yards · {s.dimensions}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>{s.nickname}</div>
                  <h2 className="display text-[clamp(2.25rem,4vw,3.5rem)] mb-4" style={{ color: 'var(--ink)' }}>
                    {s.yards}-yard<br /><em>roll-off.</em>
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{s.longDescription}</p>
                  <div className="flex items-baseline gap-4 mb-5">
                    <div className="display text-3xl" style={{ color: 'var(--p)' }}>${s.priceLow}–${s.priceHigh}</div>
                    <div className="text-sm" style={{ color: 'var(--muted)' }}>{s.rentalDays}-day rental · {s.weightLimitTons} tons</div>
                  </div>
                  <Link href={`/sizes/${s.slug}`} className="pill-out">
                    See details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>At a glance</div>
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-12 max-w-3xl">Comparing the four<br /><em>side by side.</em></h2>
          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--surface)' }}>
                  <th className="text-left py-5 pr-6 text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--muted)' }}>Size</th>
                  <th className="text-left py-5 pr-6 text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--muted)' }}>Dimensions</th>
                  <th className="text-left py-5 pr-6 text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--muted)' }}>Holds</th>
                  <th className="text-left py-5 pr-6 text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--muted)' }}>Weight cap</th>
                  <th className="text-right py-5 text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--muted)' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map(s => (
                  <tr key={s.slug} style={{ borderBottom: '1px solid var(--surface)' }}>
                    <td className="py-6 pr-6">
                      <Link href={`/sizes/${s.slug}`} className="display text-2xl hover:opacity-70 transition-opacity" style={{ color: 'var(--ink)' }}>{s.yards} yard</Link>
                      <div className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{s.nickname}</div>
                    </td>
                    <td className="py-6 pr-6 text-base" style={{ color: 'var(--ink)' }}>{s.dimensions}</td>
                    <td className="py-6 pr-6 text-base" style={{ color: 'var(--ink)' }}>~{s.capacityPickups} pickup loads</td>
                    <td className="py-6 pr-6 text-base" style={{ color: 'var(--ink)' }}>{s.weightLimitTons} tons</td>
                    <td className="py-6 text-right display text-xl" style={{ color: 'var(--p)' }}>${s.priceLow}–${s.priceHigh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--muted)' }}>
            All rentals include drop-off, pickup, and dump fees in the price shown. Going over the weight cap is $65/ton — we'll let you know before we charge anything.
          </div>
        </div>
      </section>

      <CTABanner heading="Still not sure" italic="which size?" sub={`Call ${site.phone}. We've sized over ${site.jobsCompleted.toLocaleString()} ${site.city} jobs and we'll figure yours out in two minutes.`} />
    </>
  )
}
