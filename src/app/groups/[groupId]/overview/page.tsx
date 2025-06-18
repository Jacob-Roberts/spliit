import GroupOverviewPageClient from '@/app/groups/[groupId]/overview/page.client'
import { env } from '@/lib/env'
import { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Overview',
}

export default async function GroupOverviewPage() {
  return (
    <GroupOverviewPageClient
      enableReceiptExtract={env.NEXT_PUBLIC_ENABLE_RECEIPT_EXTRACT}
    />
  )
}
