import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { site } from '@/lib/site'
import PageHero from '@/components/PageHero'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Talk to ${site.name} — call ${site.phone}, email ${site.email}, or get a flat-rate quote in 60 seconds.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Pick up the phone."
        italic="Or fill the form."
        subtitle={`Either way you'll talk to a real ${site.city} person in under fifteen minutes during business hours.`}
      />

      <section className="grain">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-24 sm:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <Block icon={<Phone className="w-5 h-5" />} label="Call us">
                <a href={`tel:${site.phoneRaw}`} className="display text-3xl sm:text-4xl block hover:opacity-80 transition-opacity" style={{ color: 'var(--ink)' }}>{site.phone}</a>
                <div className="text-sm mt-1.5" style={{ color: 'var(--muted)' }}>Fastest way. Mostly Bobby. Sometimes Cassie.</div>
              </Block>

              <Block icon={<Mail className="w-5 h-5" />} label="Email">
                <a href={`mailto:${site.email}`} className="text-xl hover:opacity-80 transition-opacity" style={{ color: 'var(--ink)' }}>{site.email}</a>
                <div className="text-sm mt-1.5" style={{ color: 'var(--muted)' }}>We answer within an hour during business hours.</div>
              </Block>

              <Block icon={<MapPin className="w-5 h-5" />} label="Yard">
                <div className="text-xl" style={{ color: 'var(--ink)' }}>{site.address}</div>
                <div className="text-sm mt-1.5" style={{ color: 'var(--muted)' }}>Drop-ins welcome but call ahead — we're often out on the trucks.</div>
              </Block>

              <Block icon={<Clock className="w-5 h-5" />} label="Hours">
                <div className="text-xl" style={{ color: 'var(--ink)' }}>{site.hours}</div>
                <div className="text-sm mt-1.5" style={{ color: 'var(--muted)' }}>Sunday off. Emergency? Leave a voicemail — we check.</div>
              </Block>

              <div className="pt-4">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--muted)' }}>Service area</div>
                <div className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                  {site.city}, {site.nearbyAreas.join(', ')}, and most of the tri-county area. Outside that? Call us anyway — we'll usually figure it out.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm heading="Get a flat-rate quote." sub="Drop your info and we'll call you with a number in under fifteen minutes." />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Block({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 w-12 h-12 rounded-full inline-flex items-center justify-center" style={{ background: 'var(--surface)', color: 'var(--p)' }}>
        {icon}
      </div>
      <div className="flex-1 pt-1">
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--muted)' }}>{label}</div>
        {children}
      </div>
    </div>
  )
}
