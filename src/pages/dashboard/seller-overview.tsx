import { Link } from 'react-router-dom'
import { Package, TrendingUp, DollarSign, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function SellerOverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Seller Dashboard</h1>
          <p className="text-muted-foreground">Listings, orders, and payouts.</p>
        </div>
        <Button asChild>
          <Link to="/listings/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create listing
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Listings</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <Button asChild variant="link" className="mt-2 p-0">
              <Link to="/dashboard/seller/listings">Manage</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Views (30d)</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Earnings (30d)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0</p>
            <Button asChild variant="link" className="mt-2 p-0">
              <Link to="/dashboard/seller/payouts">Payouts</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0</p>
            <p className="text-xs text-muted-foreground">Next payout: —</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Orders & bookings</CardTitle>
            <CardDescription>Accept and fulfill orders.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No orders yet.</p>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/dashboard/seller/orders">View orders</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Verification & alerts</CardTitle>
            <CardDescription>Complete onboarding and see alerts.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">All set. Add your first listing to get started.</p>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/onboarding/seller">Onboarding</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
