import { useSearchParams } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { VerificationStatusDisplay } from '@/components/email-verification-page/VerificationStatusDisplay'
import { ResendVerificationButton } from '@/components/email-verification-page/ResendVerificationButton'
import { LinkToLoginDashboard } from '@/components/email-verification-page/LinkToLoginDashboard'
import type { VerificationStatus } from '@/types/email-verification'

/**
 * Email verification landing page. Handles verification token result and
 * shows success/failure messages, resend verification, and links to login/dashboard.
 */
export function EmailVerificationPage() {
  const [searchParams] = useSearchParams()
  const statusParam = searchParams.get('status') ?? 'success'
  const email = searchParams.get('email')

  const status: VerificationStatus =
    statusParam === 'success'
      ? 'success'
      : statusParam === 'failure'
        ? 'failure'
        : 'pending'

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 px-4 py-12">
      <Card className="w-full max-w-md animate-in-fade-up text-center">
        <VerificationStatusDisplay status={status} />
        <CardContent className="flex flex-col gap-4">
          <LinkToLoginDashboard verificationSuccess={status === 'success'} />
          {status === 'failure' && (
            <ResendVerificationButton
              email={email}
              className="w-full"
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
