import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Hammer, TreePine, Trash2 } from 'lucide-react'
import { site, sizes } from '@/lib/site'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import FaqList from '@/components/FaqList'
import { Mark } from '@/components/Marks'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental',
  description: `Home cleanouts, renovations, and yard projects in ${site.city}. Driveway-friendly dumpsters from ${site.name} — ${site.yearsInBusiness} years of careful drops.`,
}

const useCases = [
  { icon: <Home className="w-6 h-6" />, t: 'Home cleanouts', d: 'Decades of stuff. One driveway. We size it right and haul it once.', size: '20-yard' },
  { icon: <Hammer className="w-6 h-6" />, t: 'Renovations', d: 'Kitchen demos, bath gut-jobs, full additions. Most fit a 15 or 20.', size: '15-yard' },
  { icon: <TreePine className="w-6 h-6" />, t: 'Yard waste', d: 'Storm cleanups, tree removals, landscape overhauls. Open-top makes it easy.', size: '15-yard' },
  { icon: <Trash2 className="w-6 h-6" />, t: 'Estate jobs', d: 'Moving an estate is hard enough. We make the part with the dumpster easy.', size: '30-yard' },
]

const residentialFaq = [
  { q: 'Will the dumpster damage my driveway?', a: "Not if it's placed right. Our drivers carry boards (we call them sliders) and we lay them under every wheel and the rear roller. Twelve years, almost zero driveway issues. Concrete and asphalt both." },
  { q: 'How close to my house can it go?', a: "Anywhere on your driveway works. We can also drop on grass with permission, but we'd recommend the driveway — way less mess after rain." },
  { q: 'Can I rent for just a weekend?', a: "Sure. Drop Saturday morning, pickup Monday — same flat rate. Most homeowners take the full 7 days though, projects always run longer than you think." },
  { q: "What's the most popular size for homeowners?", a: "The 20-yard. It handles a whole-room reno, a full garage cleanout, or most yard projects without being so big it dominates the yard. If you're truly unsure, that's the safe pick." },
  { q: 'Do you do same-day drop-off?', a: "Yes — call before noon and we'll usually get there the same afternoon. After noon, next-day. Either way, we text you a 30-minute heads-up." },
  { q: 'What happens if I overfill it?', a: "If it's heaped above the rim we can't haul it safely (or legally) — DOT rules. We'll either bring a second bin to redistribute or leave you a couple hours to take some out. We won't surprise you with a fee for it." },
]

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="A bin for your"
        italic="home project."
        subtitle={`Whether it's a single-room reno or twenty years of stuff in the garage, ${site.name} drops a container that fits your driveway and your timeline. No franchise overhead, no surprise fees.`}
      />

      {/* Hero photo */}
      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-12">
          <div className="rounded-[32px] overflow-hidden aspect-[16/9] sm:aspect-[16/7]">
            <img src="/photo-2.jpg" alt={`${site.name} truck dropping a residential dumpster`} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>What we drop for homeowners</div>
              <h2 className="display text-[clamp(2.25rem,5vw,4rem)]" style={{ color: 'var(--ink)' }}>Four jobs we get<br /><em>called for most.</em></h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                Most {site.city} residential calls fall into one of four buckets. Here's what each looks like and the size we usually recommend.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map(uc => (
              <div key={uc.t} className="p-8 sm:p-10 rounded-[28px] flex flex-col" style={{ background: 'var(--paper)' }}>
                <div className="w-12 h-12 rounded-full inline-flex items-center justify-center mb-6" style={{ background: 'var(--p)', color: '#fff' }}>
                  {uc.icon}
                </div>
                <div className="display text-2xl mb-2" style={{ color: 'var(--ink)' }}>{uc.t}</div>
                <div className="text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{uc.d}</div>
                <Link href={`/sizes/${uc.size}`} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--p)' }}>
                  We'd start with the {uc.size.replace('-yard', '-yd')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-16 max-w-3xl">Three phone calls.<br /><em>That's the whole job.</em></h2>
          <div className="grid md:grid-cols-3 gap-y-12 gap-x-10">
            {[
              { mark: 'circle', n: 'One', t: 'You call.', d: `${site.phone}. We pick up. We ask three questions, give you a flat number, and lock in a drop date. Two minutes.` },
              { mark: 'half', n: 'Two', t: 'We drop.', d: 'Driver texts thirty minutes out. Lays slider boards. Places the bin where you want it. Walks you through what goes in.' },
              { mark: 'triangle', n: 'Three', t: 'We pick up.', d: "Text us when it's full or when the seven days are up. Driver's there usually within twenty-four hours. No-contact, you don't need to be home." },
            ].map(step => (
              <div key={step.n}>
                <Mark kind={step.mark as 'circle' | 'half' | 'triangle'} primary="#2D5A3D" ink="#1A1A18" />
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mt-7 mb-2.5" style={{ color: 'var(--muted)' }}>Step {step.n}</div>
                <div className="display text-2xl mb-2" style={{ color: 'var(--ink)' }}>{step.t}</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes recommendation */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>Pick a size</div>
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-12 max-w-3xl">Sized for the<br /><em>typical home job.</em></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sizes.map(s => (
              <Link key={s.slug} href={`/sizes/${s.slug}`} className="group block">
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-4 relative">
                  <img src={s.photo} alt={`${s.yards}-yard ${s.nickname}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)' }} />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="display text-3xl">{s.yards}<span className="text-base ml-1.5 opacity-80">yd</span></div>
                    <div className="text-xs uppercase tracking-[0.18em] opacity-80 mt-0.5">{s.nickname}</div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="display text-lg" style={{ color: 'var(--p)' }}>${s.priceLow}–${s.priceHigh}</div>
                  <div className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{s.goodFor}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-12">Homeowner<br /><em>questions.</em></h2>
          <FaqList items={residentialFaq} />
        </div>
      </section>

      <CTABanner heading="Ready to get" italic="started?" sub={`Most homeowners are quoted in under sixty seconds. Call ${site.phone} or use the form.`} />
    </>
  )
}
