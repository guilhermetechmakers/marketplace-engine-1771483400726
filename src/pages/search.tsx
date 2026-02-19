import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function SearchPage() {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const isLoading = false
  const results: Array<{ id: string; title: string; price: string; image?: string }> = []

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="border-b border-border bg-card px-4 py-6">
        <div className="mx-auto max-w-content-wide">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Keywords, location, dates..."
                className="pl-9 rounded-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters((v) => !v)} className="sm:w-auto">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button className="bg-accent text-accent-foreground sm:w-auto">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          {showFilters && (
            <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-4 animate-in fade-in">
              <p className="text-sm font-medium text-foreground">Dynamic filters (schema-driven)</p>
              <p className="mt-1 text-sm text-muted-foreground">Filters load from category schema.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-content-wide px-4 py-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {results.length} results
          </p>
          <select className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring">
            <option>Sort: Relevance</option>
            <option>Price: Low to high</option>
            <option>Price: High to low</option>
          </select>
        </div>

        {isLoading ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <Skeleton className="aspect-[4/3] rounded-t-card" />
                <CardContent className="p-4">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : results.length === 0 ? (
          <Card className="mt-8">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <SearchIcon className="h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">No listings yet</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Try different keywords or filters. Listings appear here once sellers publish.
              </p>
              <Button asChild className="mt-4">
                <Link to="/">Browse home</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => (
              <Link key={r.id} to={`/listings/${r.id}`}>
                <Card className="overflow-hidden transition-all hover:scale-[1.02] hover:shadow-card-hover">
                  <div className="aspect-[4/3] bg-secondary" />
                  <CardContent className="p-4">
                    <p className="font-medium text-foreground">{r.title}</p>
                    <p className="text-lg font-semibold text-accent">{r.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
