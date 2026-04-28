import Link from 'next/link'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--paper)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-2">
            <div className="display text-4xl mb-3" style={{ color: 'var(--p)' }}>{site.shortName}</div>
            <div className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--muted)' }}>
              {site.name}<br />Locally owned in {site.city}, {site.state}.<br />Same-day drop-off, flat-rate pricing.
            </div>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--ink)' }}>Sizes</div>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/sizes/10-yard">10 Yard</Link></li>
              <li><Link href="/sizes/15-yard">15 Yard</Link></li>
              <li><Link href="/sizes/20-yard">20 Yard</Link></li>
              <li><Link href="/sizes/30-yard">30 Yard</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--ink)' }}>Company</div>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/residential">Residential</Link></li>
              <li><Link href="/commercial">Commercial</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--ink)' }}>Contact</div>
            <a href={`tel:${site.phoneRaw}`} className="block text-base font-semibold mb-1.5">{site.phone}</a>
            <div className="text-sm space-y-1" style={{ color: 'var(--muted)' }}>
              <div>{site.address.split(',')[0]}</div>
              <div>{site.address.split(',').slice(1).join(',').trim()}</div>
              <div className="pt-2">{site.hours}</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t flex flex-col sm:flex-row gap-2 justify-between text-xs" style={{ borderColor: 'var(--surface)', color: 'var(--muted)' }}>
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Serving {site.city} and the surrounding {site.state} area.</div>
        </div>
      </div>
    </footer>
  )
}
