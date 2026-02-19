import { useState } from 'react'
import { Mail, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { authApi } from '@/api/auth'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export interface ResendVerificationButtonProps {
  email?: string | null
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
  className?: string
  disabled?: boolean
  onSuccess?: () => void
}

export function ResendVerificationButton({
  email,
  variant = 'outline',
  size = 'default',
  className,
  disabled = false,
  onSuccess,
}: ResendVerificationButtonProps) {
  const [isLoading, setLoading] = useState(false)

  const handleResend = async () => {
    const targetEmail = email ?? (typeof window !== 'undefined' ? localStorage.getItem('pending_verification_email') : null)
    if (!targetEmail) {
      toast.error('No email address found. Please sign up again to receive a new verification link.')
      return
    }

    setLoading(true)
    try {
      await authApi.resendVerification(targetEmail)
      toast.success('Verification email sent. Check your inbox.')
      onSuccess?.()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send verification email.'
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn('transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]', className)}
      disabled={disabled || isLoading}
      onClick={handleResend}
      aria-busy={isLoading}
      aria-label={isLoading ? 'Sending verification email…' : 'Resend verification email'}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Sending…
        </>
      ) : (
        <>
          <Mail className="h-4 w-4" aria-hidden />
          Resend verification email
        </>
      )}
    </Button>
  )
}
