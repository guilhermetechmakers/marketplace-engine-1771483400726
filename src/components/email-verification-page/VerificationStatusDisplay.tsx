import { CheckCircle2, XCircle, Loader2 } from 'lucide-react'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { VerificationStatus } from '@/types/email-verification'

export interface VerificationStatusDisplayProps {
  status: VerificationStatus
  className?: string
}

const successConfig = {
  icon: CheckCircle2,
  title: 'Email verified',
  description:
    'Your email has been verified. You can now sign in and access your dashboard.',
  iconClassName: 'text-accent',
  ariaLabel: 'Verification successful',
}

const failureConfig = {
  icon: XCircle,
  title: 'Verification failed',
  description:
    'The link may have expired or already been used. Request a new verification email below.',
  iconClassName: 'text-destructive',
  ariaLabel: 'Verification failed',
}

const pendingConfig = {
  icon: Loader2,
  title: 'Verifying your email…',
  description: 'Please wait while we confirm your email address.',
  iconClassName: 'text-muted-foreground animate-spin',
  ariaLabel: 'Verification in progress',
}

export function VerificationStatusDisplay({
  status,
  className,
}: VerificationStatusDisplayProps) {
  const config =
    status === 'success'
      ? successConfig
      : status === 'failure'
        ? failureConfig
        : pendingConfig
  const Icon = config.icon

  return (
    <CardHeader
      className={cn('space-y-3 text-center animate-in-fade-up', className)}
      aria-live="polite"
      aria-atomic="true"
    >
      <Icon
        className={cn('mx-auto h-16 w-16', config.iconClassName)}
        aria-hidden={status !== 'pending'}
        aria-label={config.ariaLabel}
      />
      <CardTitle className="text-2xl">{config.title}</CardTitle>
      <CardDescription className="text-base leading-relaxed">
        {config.description}
      </CardDescription>
    </CardHeader>
  )
}
