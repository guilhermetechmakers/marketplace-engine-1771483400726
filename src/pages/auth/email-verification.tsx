import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EmailVerificationPage() {
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status') ?? 'success'
  const success = status === 'success'

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          {success ? (
            <CheckCircle2 className="mx-auto h-16 w-16 text-accent" aria-hidden />
          ) : (
            <XCircle className="mx-auto h-16 w-16 text-destructive" aria-hidden />
          )}
          <CardTitle>
            {success ? 'Email verified' : 'Verification failed'}
          </CardTitle>
          <CardDescription>
            {success
              ? 'Your email has been verified. You can now sign in.'
              : 'The link may have expired or already been used. Request a new verification email below.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button asChild>
            <Link to="/login">Go to login</Link>
          </Button>
          {!success && (
            <Button asChild variant="outline">
              <Link to="/dashboard/buyer">Resend verification email</Link>
            </Button>
          )}
          <Button asChild variant="ghost">
            <Link to="/">Back to home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
