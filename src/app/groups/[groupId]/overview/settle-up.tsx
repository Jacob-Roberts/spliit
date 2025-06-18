import { trpc } from '@/trpc/client'
import { useCurrentGroup } from '../current-group-context'
import { ReimbursementList } from '../reimbursement-list'

export function SettleUp() {
  const { groupId, group } = useCurrentGroup()
  const { data: balancesData, isLoading: balancesAreLoading } =
    trpc.groups.balances.list.useQuery({
      groupId,
    })

  const isLoading = balancesAreLoading || !balancesData || !group

  if (isLoading) {
    return null
  }

  return (
    <div className="px-4 sm:px-6">
      <ReimbursementList
        currency={group.currency}
        reimbursements={balancesData.reimbursements}
        participants={group.participants}
        groupId={groupId}
      />
    </div>
  )
}
