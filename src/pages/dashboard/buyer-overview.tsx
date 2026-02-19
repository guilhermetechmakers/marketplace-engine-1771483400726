import { Link } from 'react-router-dom'
import { ShoppingCart, Search, MessageSquare, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function BuyerOverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Buyer Dashboard</h1>
        <p className="text-muted-foreground">Manage orders, saved items, and messages.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <Button asChild variant="link" className="mt-2 p-0">
              <Link to="/dashboard/buyer/orders">View orders</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saved searches</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <Button asChild variant="link" className="mt-2 p-0">
              <Link to="/search">Discover</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <Button asChild variant="link" className="mt-2 p-0">
              <Link to="/dashboard/buyer/messages">Open inbox</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saved items</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <Button asChild variant="link" className="mt-2 p-0">
              <Link to="/dashboard/buyer/saved">View saved</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>Your latest orders and updates.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No recent activity. Start by browsing listings.</p>
          <Button asChild className="mt-4">
            <Link to="/search">Search listings</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
