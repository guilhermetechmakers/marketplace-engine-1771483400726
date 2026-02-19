import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function ErrorPage() {
  const errorId = typeof window !== 'undefined' ? `ERR-${Date.now()}` : 'ERR'

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16">
      <AlertCircle className="h-16 w-16 text-destructive" aria-hidden />
      <h1 className="mt-4 text-2xl font-bold text-foreground">Something went wrong</h1>
      <p className="mt-2 max-w-md text-center text-muted-foreground">
        We’re sorry. Please try again or contact support if the problem continues.
      </p>
      <Card className="mt-8">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">Error ID: {errorId}</p>
        </CardContent>
      </Card>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => window.location.reload()}>Retry</Button>
        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>
      </div>
    </div>
  )
}
