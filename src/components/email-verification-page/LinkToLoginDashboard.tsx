import { Link, useLocation } from 'react-router-dom'
import { LogIn, LayoutDashboard, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface LinkToLoginDashboardProps {
  verificationSuccess?: boolean
  className?: string
}

/**
 * Renders primary link to Login or Dashboard (when verification succeeded)
 * and optional secondary link to home.
 */
export function LinkToLoginDashboard({
  verificationSuccess = false,
  className,
}: LinkToLoginDashboardProps) {
  const location = useLocation()
  const fromDashboard = location.state?.from === 'dashboard'

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <Button
        asChild
        className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        size="lg"
      >
        {verificationSuccess ? (
          <Link to={fromDashboard ? '/dashboard/buyer' : '/login'} className="inline-flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" aria-hidden />
            {fromDashboard ? 'Go to dashboard' : 'Go to login'}
          </Link>
        ) : (
          <Link to="/login" className="inline-flex items-center gap-2">
            <LogIn className="h-4 w-4" aria-hidden />
            Go to login
          </Link>
        )}
      </Button>
      <Button asChild variant="ghost" className="w-full" size="sm">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground">
          <Home className="h-4 w-4" aria-hidden />
          Back to home
        </Link>
      </Button>
    </div>
  )
}
