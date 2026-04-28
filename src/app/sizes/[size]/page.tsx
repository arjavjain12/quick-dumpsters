import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { site, sizes } from '@/lib/site'
import QuoteForm from '@/components/QuoteForm'
import CTABanner from '@/components/CTABanner'
import FaqList from '@/components/FaqList'

export function generateStaticParams() {
  return sizes.map(s => ({ size: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ size: string }> }): Promise<Metadata> {
  const { size: slug } = await params
  const s = sizes.find(x => x.slug === slug)
  if (!s) return {}
  return {
    title: `${s.yards}-Yard Dumpster Rental in ${site.city}`,
    description: `${s.yards}-yard roll-off dumpster — ${s.goodFor} Flat-rate $${s.priceLow}–$${s.priceHigh}, ${s.rentalDays}-day rental, same-day drop-off in ${site.city}.`,
  }
}

export default async function SizePage({ params }: { params: Promise<{ size: string }> }) {
  const { size: slug } = await params
  const s = sizes.find(x => x.slug === slug)
  if (!s) notFound()

  const idx = sizes.findIndex(x => x.slug === slug)
  const prev = idx > 0 ? sizes[idx - 1] : null
  const next = idx < sizes.length - 1 ? sizes[idx + 1] : null

  const sizeFaq = [
    { q: `What does a ${s.yards}-yard dumpster fit?`, a: `Roughly ${s.capacityPickups} standard pickup-truck loads of debris. ${s.goodFor} Weight limit is ${s.weightLimitTons} tons before overage fees kick in at $65/ton.` },
    { q: `How much does the ${s.yards}-yard cost in ${site.city}?`, a: `Flat rate of $${s.priceLow}–$${s.priceHigh} depending on your zip code and dump site. That includes drop-off, ${s.rentalDays} days of rental, pickup, and dump fees. No surprises.` },
    { q: `What are the dimensions?`, a: `${s.dimensions}. Most ${site.city} driveways fit it without trouble — if yours is tight, mention it on the call and we'll measure it before sending the truck.` },
    { q: `What can't I put in it?`, a: `No hazardous waste — paint, oil, batteries, tires, propane, asbestos, refrigerants. Otherwise, drywall, lumber, shingles, flooring, furniture and most general debris are all fine.` },
    { q: `How fast can you deliver?`, a: `Same-day if you call before noon. Otherwise next-day. We text you a 30-minute heads-up before the truck arrives.` },
  ]

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Link href="/sizes" className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] uppercase mb-7 hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>
                <span className="inline-block w-7 h-px" style={{ background: 'var(--muted)' }} />
                All sizes
              </Link>
              <h1 className="display text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.95] mb-5" style={{ color: 'var(--ink)' }}>
                The {s.yards}-yard.<br /><em>{s.nickname}.</em>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--muted)' }}>
                {s.longDescription}
              </p>

              <div className="rounded-[28px] overflow-hidden mb-10">
                <img src={s.photo} alt={`${s.yards}-yard ${s.nickname} dumpster`} className="w-full h-auto block" />
              </div>

              {/* Spec grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-6 py-8 border-y" style={{ borderColor: 'var(--surface)' }}>
                <Spec label="Price" value={`$${s.priceLow}–${s.priceHigh}`} highlight />
                <Spec label="Rental" value={`${s.rentalDays} days`} />
                <Spec label="Dimensions" value={s.dimensions} />
                <Spec label="Weight cap" value={`${s.weightLimitTons} tons`} />
              </div>

              {/* Best for */}
              <div className="mt-12">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--muted)' }}>Best for</div>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {s.bestFor.map(item => (
                    <li key={item} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center" style={{ background: 'var(--p)', color: '#fff' }}>
                        <Check className="w-3 h-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it holds */}
              <div className="mt-14">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--muted)' }}>What fits</div>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
                  Roughly <strong>{s.capacityPickups} standard pickup-truck loads</strong> of debris before you hit the rim. Translation: a typical {s.nickname.toLowerCase()} job ({s.bestFor[0].toLowerCase()}) fills it about three-quarters full with room to spare.
                </p>
              </div>

              {/* FAQ */}
              <div className="mt-16">
                <h2 className="display text-[clamp(1.75rem,3.5vw,2.5rem)] mb-6" style={{ color: 'var(--ink)' }}>Common questions.</h2>
                <FaqList items={sizeFaq} />
              </div>
            </div>

            {/* Sticky form */}
            <aside className="lg:col-span-5 lg:sticky lg:top-24">
              <QuoteForm
                heading={`Quote the ${s.yards}-yard.`}
                sub={`Flat rate $${s.priceLow}–$${s.priceHigh}. We'll confirm pricing for your zip in fifteen minutes.`}
              />
              <div className="mt-6 px-7 py-6 rounded-[28px]" style={{ background: 'var(--ink)', color: '#fff' }}>
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>Or just call</div>
                <a href={`tel:${site.phoneRaw}`} className="display text-2xl hover:opacity-80 transition-opacity" style={{ color: '#fff' }}>{site.phone}</a>
                <div className="text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Mostly Bobby. Sometimes Cassie.</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {prev ? (
              <Link href={`/sizes/${prev.slug}`} className="group p-7 rounded-[28px] flex items-center justify-between gap-5 transition-colors" style={{ background: 'var(--paper)' }}>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--muted)' }}>← Smaller</div>
                  <div className="display text-2xl" style={{ color: 'var(--ink)' }}>{prev.yards}-yard</div>
                  <div className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{prev.nickname}</div>
                </div>
                <span className="display text-3xl" style={{ color: 'var(--p)' }}>${prev.priceLow}+</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/sizes/${next.slug}`} className="group p-7 rounded-[28px] flex items-center justify-between gap-5 transition-colors" style={{ background: 'var(--paper)' }}>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--muted)' }}>Bigger →</div>
                  <div className="display text-2xl" style={{ color: 'var(--ink)' }}>{next.yards}-yard</div>
                  <div className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{next.nickname}</div>
                </div>
                <span className="display text-3xl" style={{ color: 'var(--p)' }}>${next.priceLow}+</span>
              </Link>
            ) : <div />}
          </div>
          <div className="mt-10 text-center">
            <Link href="/sizes" className="pill-out">
              View all sizes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner heading={`Ready for the`} italic={`${s.yards}-yard?`} sub={`Call ${site.phone} or grab a quote — drop-off as soon as today.`} />
    </>
  )
}

function Spec({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-1.5" style={{ color: 'var(--muted)' }}>{label}</div>
      <div className={highlight ? 'display text-2xl' : 'text-lg'} style={{ color: highlight ? 'var(--p)' : 'var(--ink)' }}>{value}</div>
    </div>
  )
}
