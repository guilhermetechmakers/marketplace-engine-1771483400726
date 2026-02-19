import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function OrdersPage() {
  const orders: Array<{ id: string; status: string; total: string }> = []

  return (
    <div className="mx-auto max-w-content-wide px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground">Order history</h1>
      <p className="text-muted-foreground">View past and current transactions, start disputes.</p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {orders.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-center">
              <p className="text-muted-foreground">No orders yet.</p>
              <Button asChild className="mt-4">
                <Link to="/search">Discover listings</Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {orders.map((o) => (
                <li key={o.id} className="flex items-center justify-between py-4">
                  <span className="font-medium">#{o.id}</span>
                  <span className="text-muted-foreground">{o.status}</span>
                  <span>{o.total}</span>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/orders/${o.id}`}>View</Link>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
