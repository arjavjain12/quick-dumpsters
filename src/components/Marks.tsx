'use client'

import { motion } from 'framer-motion'
import { ease } from './anim'

export type MarkKind = 'circle' | 'half' | 'triangle' | 'dots'

export function Mark({ kind, primary, ink }: { kind: MarkKind; primary: string; ink: string }) {
  return (
    <motion.svg
      whileHover={{ rotate: 6, scale: 1.06 }}
      transition={{ duration: 0.4, ease }}
      width={76} height={76} viewBox="0 0 76 76" fill="none" aria-hidden="true"
    >
      {kind === 'circle' && (<>
        <circle cx="28" cy="28" r="22" fill={primary} />
        <circle cx="52" cy="50" r="14" fill={ink} opacity="0.9" />
      </>)}
      {kind === 'half' && (<>
        <path d="M8 50 A30 30 0 0 1 68 50 Z" fill={primary} />
        <circle cx="38" cy="22" r="12" fill={ink} opacity="0.9" />
      </>)}
      {kind === 'triangle' && (<>
        <path d="M10 60 L40 12 L70 60 Z" fill={primary} />
        <circle cx="56" cy="50" r="10" fill={ink} opacity="0.9" />
      </>)}
      {kind === 'dots' && (<>
        <circle cx="14" cy="58" r="10" fill={primary} />
        <circle cx="34" cy="42" r="8" fill={primary} opacity="0.85" />
        <circle cx="50" cy="28" r="7" fill={ink} opacity="0.9" />
        <circle cx="64" cy="14" r="5" fill={ink} opacity="0.7" />
      </>)}
    </motion.svg>
  )
}
