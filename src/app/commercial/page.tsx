import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, HardHat, Wrench, Truck, Phone } from 'lucide-react'
import { site, sizes } from '@/lib/site'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import FaqList from '@/components/FaqList'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental',
  description: `Construction and commercial dumpsters in ${site.city}. Net-30 billing, named driver, same-day swaps. ${site.name} for contractors who can't afford a missed window.`,
}

const trades = [
  { icon: <HardHat className="w-6 h-6" />, t: 'General contractors', d: "Open POs, named driver, recurring swaps. We learn your jobsite gate codes once and you stop having to think about us." },
  { icon: <Building2 className="w-6 h-6" />, t: 'Property management', d: "Multi-property accounts on a single invoice. Tenant turnover, common-area cleanouts, storm damage — one call covers it." },
  { icon: <Wrench className="w-6 h-6" />, t: 'Roofers & remodelers', d: "Same-day drop, same-day swap when the job runs hot. Most roofers run two 30s with us in rotation during peak season." },
  { icon: <Truck className="w-6 h-6" />, t: 'Demo & site work', d: "High-tonnage allowances, heavy debris pricing locked at quote, weight tickets emailed within an hour of pickup." },
]

const commercialFaq = [
  { q: 'Do you offer net-30 billing?', a: "Yes. After your first job we'll set up an account — net-30 with PO references, consolidated monthly invoicing, and tax-exempt handling for resale jobs. No setup fee." },
  { q: 'Can we get a dedicated driver?', a: "For accounts running 4+ jobs a month, yes. Named driver, same truck, learns your sites and your foreman. Cuts coordination time to almost zero." },
  { q: "What's a swap and how fast can you do one?", a: "A swap is when we pull your full bin and drop a fresh empty in the same trip. Standard turn-around is 24 hours; same-day swaps are available if you call before 10am, no extra charge." },
  { q: 'Do you handle heavy debris (concrete, dirt, asphalt)?', a: "Yes — but we use the 10 or 15 yard for dense loads to stay legal on weight. Heavy debris is priced by ton, locked at quote, no surprises. Tell us what's going in and we'll size it right." },
  { q: 'Can we get a weight ticket?', a: "Always. Every load goes across a state-certified scale. Ticket gets emailed to you within an hour of dump, with the gross/tare/net and the disposal facility." },
  { q: 'How do you handle COIs and additional insureds?', a: "We carry $2M general liability and $1M auto. Send us your COI requirements at signup — most jobsite GCs we already have on file. Turnaround on a fresh certificate is one business day." },
]

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Built for the"
        italic="job site."
        subtitle={`Net-30 billing, named drivers, same-day swaps, weight tickets within the hour. ${site.name} runs containers for general contractors, roofers, property managers, and demo crews across the ${site.city} metro.`}
      />

      {/* Hero photo + key stats */}
      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-[32px] overflow-hidden aspect-[16/8] relative">
            <img src="/photo-3.jpg" alt={`${site.name} commercial fleet on a downtown jobsite`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(26,26,24,0.7) 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { n: '24h', l: 'Standard swap turnaround' },
                  { n: 'Net-30', l: 'On approved accounts' },
                  { n: '$2M', l: 'General liability' },
                  { n: '7-day', l: 'Default rental window' },
                ].map(s => (
                  <div key={s.l}>
                    <div className="display text-3xl sm:text-4xl">{s.n}</div>
                    <div className="text-xs uppercase tracking-[0.18em] opacity-80 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>Who we run for</div>
              <h2 className="display text-[clamp(2.25rem,5vw,4rem)]" style={{ color: 'var(--ink)' }}>The crews who<br /><em>have us on speed-dial.</em></h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                Roughly 60% of our weekly volume is recurring commercial. The relationships are old; the operating procedures are written down; the drivers know your gates.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {trades.map(t => (
              <div key={t.t} className="p-8 sm:p-10 rounded-[28px]" style={{ background: 'var(--paper)' }}>
                <div className="w-12 h-12 rounded-full inline-flex items-center justify-center mb-6" style={{ background: 'var(--p)', color: '#fff' }}>
                  {t.icon}
                </div>
                <div className="display text-2xl mb-2.5" style={{ color: 'var(--ink)' }}>{t.t}</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{t.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>The commercial program</div>
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-16 max-w-3xl">What you get when<br /><em>you're an account.</em></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
            {[
              { t: 'Locked pricing', d: 'Job-rate pricing locked for the duration of your project, even if our list rate moves. Heavy debris priced by ton, all-in.' },
              { t: 'Named driver', d: "On accounts running 4+ jobs a month. Same truck, same driver. Learns your foreman, your gates, your weird back lot." },
              { t: 'Same-day swaps', d: 'Call before 10am for a same-day swap. No extra charge. Roofers love this one.' },
              { t: 'Weight tickets', d: 'State-certified scale tickets emailed within an hour of pickup. Gross, tare, net, facility — every time.' },
              { t: 'Net-30 billing', d: 'Approved accounts billed monthly with PO references, broken down by job. No invoice surprises.' },
              { t: 'COI ready', d: '$2M GL, $1M auto. Additional insureds added in one business day. Most local GCs we already have on file.' },
              { t: 'Recurring schedule', d: "Set a Monday and Thursday swap and forget about us. We'll show up. We'll text the foreman. We'll send the ticket." },
              { t: 'Phone-first', d: "No portal logins. Text or call our dispatch line, get a human within minutes. We'll add a portal when our customers ask for one — they haven't." },
              { t: 'Permitting help', d: "Street-use permits with the City of Charleston, when you need one. We pull them, you don't deal with City Hall." },
            ].map(x => (
              <div key={x.t}>
                <div className="display text-xl mb-2" style={{ color: 'var(--ink)' }}>{x.t}</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--muted)' }}>The fleet</div>
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-12 max-w-3xl">Fleet sizes for<br /><em>commercial use.</em></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sizes.map(s => (
              <Link key={s.slug} href={`/sizes/${s.slug}`} className="group block">
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-4 relative">
                  <img src={s.photo} alt={`${s.yards}-yard ${s.nickname}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)' }} />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="display text-3xl">{s.yards}<span className="text-base ml-1.5 opacity-80">yd</span></div>
                    <div className="text-xs uppercase tracking-[0.18em] opacity-80 mt-0.5">{s.weightLimitTons} tons</div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="display text-lg" style={{ color: 'var(--p)' }}>${s.priceLow}–${s.priceHigh}</div>
                  <div className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{s.dimensions}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to set up account */}
      <section>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mb-6 max-w-3xl mx-auto">Set up an<br /><em>account in a phone call.</em></h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Most of our commercial customers were set up in under fifteen minutes — name, business address, COI requirements, billing email. Then we drop the first bin and figure out the rest from there.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <a href={`tel:${site.phoneRaw}`} className="pill-fill">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
            <Link href="/contact" className="pill-out">
              Or send your details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] mb-12">Contractor<br /><em>questions.</em></h2>
          <FaqList items={commercialFaq} />
        </div>
      </section>

      <CTABanner heading="Need a bin on" italic="the jobsite?" sub={`Call ${site.phone} or set up an account in fifteen minutes.`} />
    </>
  )
}
