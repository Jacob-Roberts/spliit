'use client'
import { cn, formatCurrency } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'

export function TotalsYouOwe({
  totalParticipantYouOwe = 0,
  currency,
}: {
  totalParticipantYouOwe?: number
  currency: string
}) {
  const locale = useLocale()
  const t = useTranslations('Stats.Totals')

  const balance = totalParticipantYouOwe > 0 ? 'youOwe' : 'youAreOwed'

  return (
    <div>
      <div className="text-muted-foreground">{t(balance)}</div>

      <div
        className={cn(
          'text-lg',
          totalParticipantYouOwe < 0 ? 'text-green-600' : 'text-red-600',
        )}
      >
        {formatCurrency(currency, Math.abs(totalParticipantYouOwe), locale)}
      </div>
    </div>
  )
}
