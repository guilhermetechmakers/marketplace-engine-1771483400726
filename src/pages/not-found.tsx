import { Link } from 'react-router-dom'
import { Search, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16">
      <p className="text-6xl font-bold text-muted-foreground">404</p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">Page not found</h1>
      <p className="mt-2 max-w-md text-center text-muted-foreground">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Card className="mt-8 w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <Input placeholder="Search..." className="flex-1" />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/search">Discover</Link>
        </Button>
      </div>
    </div>
  )
}
