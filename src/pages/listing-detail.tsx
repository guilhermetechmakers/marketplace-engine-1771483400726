import { useParams, Link } from 'react-router-dom'
import { Star, MessageCircle, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function ListingDetailPage() {
  const { id } = useParams<{ id: string }>()
  const listing = { id: id ?? '', title: 'Sample listing', price: '$99', description: 'Full details from schema-driven attributes.' }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-content-wide px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video w-full rounded-card bg-secondary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">{listing.title}</h1>
              <p className="mt-2 text-2xl font-semibold text-accent">{listing.price}</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-semibold text-foreground">Description</h2>
                <p className="mt-2 text-muted-foreground">{listing.description}</p>
                <p className="mt-4 text-sm text-muted-foreground">Dynamic attributes render from category schema.</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <p className="text-2xl font-bold text-foreground">{listing.price}</p>
                <div className="mt-4 flex flex-col gap-2">
                  <Button className="w-full">Buy now</Button>
                  <Button variant="outline" className="w-full">Request quote</Button>
                </div>
                <Button variant="ghost" className="mt-4 w-full justify-start">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message seller
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Seller</p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                  <Link to="/messages">View profile</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
