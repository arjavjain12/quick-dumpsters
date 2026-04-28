import type { Metadata } from 'next'
import { site } from '@/lib/site'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Mark } from '@/components/Marks'

export const metadata: Metadata = {
  title: 'About',
  description: `${site.name} — locally owned dumpster rental in ${site.city}, SC since 2012.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built in"
        italic={`${site.city}.`}
        subtitle={`Twelve years of dropping bins, answering phones, and showing up on time. ${site.name} is what happens when the people who own the trucks also pick up the calls.`}
      />

      <section className="grain">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 space-y-7 text-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
          <p>We started {site.name} in 2012 with one truck and a flip phone. The pitch was simple: pick up when people call, quote a flat number, drop the bin when we said we would. Nothing fancy.</p>
          <p>Twelve years later we're still doing the same thing — just with more trucks. Every {site.city}-area roll-off rolls out of our yard on Meeting Street and goes to someone our team talked to directly. No call centers, no franchise overhead, no surprise fees on pickup.</p>
          <p>Most of our work comes from contractors who've used us for years and homeowners they've sent our way. The reviews on Google aren't an accident — they're what happens when you treat every job like the family magnolia tree is twenty feet from the dumpster.</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 text-center md:text-left">
          {[
            { n: site.yearsInBusiness, l: 'Years in Charleston' },
            { n: site.jobsCompleted.toLocaleString(), l: 'Jobs completed' },
            { n: site.reviewCount, l: 'Google reviews' },
            { n: `${site.rating.toFixed(1)}★`, l: 'Average rating' },
          ].map(s => (
            <div key={s.l}>
              <div className="display text-[clamp(3rem,5vw,4.5rem)]" style={{ color: 'var(--p)' }}>{s.n}</div>
              <div className="text-sm uppercase tracking-[0.18em] mt-1" style={{ color: 'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <h2 className="display text-[clamp(2.5rem,5.5vw,4.75rem)] mb-16 max-w-3xl">Three things we don't<br /><em>compromise on.</em></h2>
          <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { mark: 'circle',   t: 'A real person on the phone',  d: 'You call our number, you get our team. No phone trees, no offshore answering service. Mostly Bobby. Sometimes Cassie. Never a robot.' },
              { mark: 'half',     t: 'A flat-rate quote, in writing', d: 'You hear the number once and that\'s the number. Drop, days, weight, dump fee — all included. No "surprise" charges at pickup.' },
              { mark: 'triangle', t: 'A driveway you can still use',  d: 'We board everything we drop. Tight alleys, narrow drives, shaded oak canopies — we\'ve worked them all. The bin lands where you want it, not where it\'s convenient for us.' },
            ].map(item => (
              <div key={item.t} className="flex flex-col">
                <Mark kind={item.mark as 'circle' | 'half' | 'triangle'} primary="#2D5A3D" ink="#1A1A18" />
                <div className="display text-2xl mt-7 mb-2.5">{item.t}</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to get" italic="started?" sub={`Call ${site.phone} or grab a quote — whatever's faster for you.`} />
    </>
  )
}
